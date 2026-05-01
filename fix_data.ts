import fs from 'fs';
import data from './app/expositionstid.json';

const file = fs.readFileSync('./app/practice.ts', 'utf8');

function getDiveGroupObj(depth, time) {
    const depthsCandidates = data.values.filter(v => v.depth >= depth);
    const nearestDepth = depthsCandidates[0];
    if (nearestDepth) {
        const timeCandidates = nearestDepth.combinations.filter(c => c.time_submerged >= time);
        if (timeCandidates.length > 0) return timeCandidates[0];
    }
    return null;
}

function getPenaltyTime(depth, surfaceLetter) {
    const depthsCandidates = data.values.filter(v => v.depth >= depth);
    const nearestDepth = depthsCandidates[0];
    if (nearestDepth) {
        const groupMatch = nearestDepth.combinations.find(c => c.dive_group === surfaceLetter);
        if (groupMatch) return groupMatch.time_submerged;
    }
    return 0;
}

function getMaxExposition(depth) {
    const depthsCandidates = data.values.filter(v => v.depth >= depth);
    const nearestDepth = depthsCandidates[0];
    if (nearestDepth && nearestDepth.combinations.length > 0) {
        return nearestDepth.combinations[nearestDepth.combinations.length - 1].time_submerged;
    }
    return 0;
}

// Find the result array definition in the string
const resultRegex = /const result: Array<TwoDives> = \[([\s\S]*?)\]\n    return result\[index % result\.length\]/m;
const match = file.match(resultRegex);
if (!match) {
    console.error("Could not find result array");
    process.exit(1);
}

// Evaluate it to a JS array
let arrayStr = match[0].replace('const result: Array<TwoDives> = ', 'global.result = ').replace(/\n    return result\[index % result\.length\]/m, '');
// mock startTime
const startTime = new Date('2022-01-01T08:10:00.000Z');
eval(arrayStr);

const result = global.result;

result.forEach((dive, i) => {
    // 1. Fix first dive group
    const fg = getDiveGroupObj(dive.firstDive.depth, dive.firstDive.time);
    if (fg) dive.firstDive.group = fg.dive_group;

    // 2. Fix consumed time
    const consumed = getPenaltyTime(dive.secondDive.depth, dive.surfaceTime.letter);
    if (dive.maxRemaining.consumed !== undefined) {
        dive.maxRemaining.consumed = consumed;
    }

    // 3. Fix max questions and non-max
    if (dive.maxRemaining.diveTimeAtDepth !== undefined) {
        // max question
        const maxExp = getMaxExposition(dive.secondDive.depth);
        dive.maxRemaining.maxExposition = maxExp;
        dive.maxRemaining.diveTimeAtDepth = maxExp - consumed;
        
        const finalGroupObj = getDiveGroupObj(dive.secondDive.depth, maxExp);
        if (finalGroupObj) dive.secondDive.group = finalGroupObj.dive_group;
    } else {
        // non-max question
        if (dive.maxRemaining.maxRemaining !== undefined) {
             const maxExp = getMaxExposition(dive.secondDive.depth);
             dive.maxRemaining.maxRemaining = maxExp - consumed;
        }

        const totalTime = dive.secondDive.time + consumed;
        const finalGroupObj = getDiveGroupObj(dive.secondDive.depth, totalTime);
        if (finalGroupObj) dive.secondDive.group = finalGroupObj.dive_group;
    }
});

// Format it back
import util from 'util';
const formattedArray = util.inspect(result, { depth: null, colors: false, maxArrayLength: null });
let newArrayStr = 'const result: Array<TwoDives> = ' + formattedArray;
newArrayStr = newArrayStr.replace(/2022-01-01T08:10:00\.000Z/g, 'startTime');

// Use single quotes for keys
newArrayStr = newArrayStr.replace(/([a-zA-Z0-9_]+): /g, '$1: ');

const newFile = file.replace(resultRegex, newArrayStr + '\n    return result[index % result.length]');
fs.writeFileSync('./app/practice.ts', newFile);
console.log("Successfully fixed data in practice.ts");
