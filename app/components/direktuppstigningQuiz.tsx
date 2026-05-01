import { AcademicCapIcon } from '@heroicons/react/20/solid'
import { SmallCards } from '~/components/smallCards'
import { Transition } from '@headlessui/react'
import { motion } from 'framer-motion'
import { AnimatedDots } from '~/components/animatedDots'
import type { SubmitEventHandler } from 'react'

type DiveGroupPracticeProps = {
    question: GroupQuestion
    correct: string
    incorrect: string[]
    onSubmit: SubmitEventHandler<HTMLFormElement>
}

type GroupQuestion = {
    depth: number
    time: number
}

const numberFormatter = (number: number) => {
    return Intl.NumberFormat('sv', {
        minimumFractionDigits: 0,
        maximumFractionDigits: 1,
    })
        .format(number)
        .toString()
}

export function DirektuppstigningQuiz({
    question,
    correct,
    incorrect,
    onSubmit,
}: DiveGroupPracticeProps) {
    const showAnswer = correct !== ''

    return (
        <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
            <form onSubmit={onSubmit}>
                <div className="bg-white px-4 py-5 sm:px-6">
                    <h3
                        id="direktuppstigning"
                        className="text-base font-semibold leading-6 text-gray-900"
                    >
                        Direktuppstigning
                    </h3>
                    <p className="mt-6 text-xl leading-8 text-gray-700">
                        Dykning till ett djup av{' '}
                        <strong>{numberFormatter(question.depth)} meter</strong>{' '}
                        och expositionstid{' '}
                        <strong>
                            {numberFormatter(question.time)} minuter
                        </strong>
                        . Vilken gruppbeteckning är det?
                    </p>
                </div>
                <input name="depth" value={question.depth} readOnly hidden />
                <input name="time" value={question.time} readOnly hidden />

                <Transition
                    as="div"
                    show={showAnswer}
                    enter="transition-opacity duration-150"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="transition-opacity duration-400"
                    leaveFrom="opacity-400"
                    leaveTo="opacity-0"
                >
                    <div className="bg-white px-4 sm:px-6 h-full">
                        <p className="text-xl leading-8 text-gray-700">
                            🎉 Korrekt gruppbeteckning är{' '}
                            <strong>{correct}</strong>
                        </p>
                        <div className="pt-16">
                            <AnimatedDots />
                        </div>
                    </div>
                </Transition>
                <Transition
                    as="div"
                    show={!showAnswer}
                    enter="transition-opacity duration-1000"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="transition-opacity duration-1400"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <SmallCards
                        header="Svarsalternativ"
                        readerLabel="Välj en dykgrup"
                        correct={correct}
                        incorrect={incorrect}
                    />
                    <div className="mt-10 flex justify-center mx-2 sm:mx-auto">
                        <motion.button
                            whileTap={{ scale: 0.9 }}
                            type="submit"
                            className="inline-flex items-center gap-x-1.5 rounded-md bg-primary px-lg py-md text-sm font-semibold text-white shadow-xs hover:opacity-90 transition-all active:scale-95 focus-visible:outline-solid focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary whitespace-nowrap w-fit"
                        >
                            <AcademicCapIcon
                                className="-ml-0.5 h-5 w-5"
                                aria-hidden="true"
                            />
                            Kontrollera svar
                        </motion.button>
                    </div>
                </Transition>
            </form>
        </div>
    )
}
