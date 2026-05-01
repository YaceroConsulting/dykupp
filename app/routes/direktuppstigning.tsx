import { DirektuppstigningQuiz } from '~/components/direktuppstigningQuiz'
import { useEffect, useRef, useState } from 'react'
import type { FormEvent } from 'react'
import { checkDiveGroupAnswer, getDiveGroupQuestions } from '~/practice'
import invariant from 'tiny-invariant'
import type { Route } from './+types/direktuppstigning'

export const meta: Route.MetaFunction = () => {
    return [
        { title: 'Dyk app - Direktuppstigning' },
        {
            name: 'description',
            content:
                'Träna på expositionstid och gruppbeteckning efter dykning med direktuppstigning.',
        },
    ]
}
const checkDirectDiveAnswer = (
    formData: FormData
): {
    correct: boolean
    answer: string
    depth?: number
    time?: number
} => {
    invariant(formData.has('depth'), 'depth is required')
    invariant(formData.has('time'), 'time is required')
    const groupAnswer = formData.get('groupAnswer') as string
    if (groupAnswer) {
        const depth = parseFloat(formData.get('depth') as string)
        const time = parseInt(formData.get('time') as string)
        const correct = checkDiveGroupAnswer(depth, time, groupAnswer)
        if (correct) {
            const newQuestion = getDiveGroupQuestions()
            return { correct: true, answer: groupAnswer, ...newQuestion }
        }
    }
    return { correct: false, answer: groupAnswer }
}

export default function Direktuppstigning() {
    const [question, setQuestion] = useState(getDiveGroupQuestions())
    const [correct, setCorrect] = useState<string>('')
    const [incorrect, setIncorrect] = useState<string[]>([])
    const nextQuestionTimeoutRef = useRef<number | null>(null)

    useEffect(() => {
        return () => {
            if (nextQuestionTimeoutRef.current !== null) {
                window.clearTimeout(nextQuestionTimeoutRef.current)
            }
        }
    }, [])

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()

        const data = checkDirectDiveAnswer(new FormData(event.currentTarget))
        if (data.correct && data.depth && data.time) {
            setCorrect(data.answer)
            if (nextQuestionTimeoutRef.current) {
                window.clearTimeout(nextQuestionTimeoutRef.current)
            }
            nextQuestionTimeoutRef.current = window.setTimeout(() => {
                setIncorrect([])
                setQuestion({
                    depth: Number(data.depth),
                    time: Number(data.time),
                })
                setCorrect('')
            }, 8000)
        }
        if (data && !data.correct) {
            setIncorrect((a) => [...a, data.answer])
            if ('vibrate' in navigator) {
                navigator.vibrate(100)
            }
        }
    }

    return (
        <div className="py-16">
            <main>
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    {question ? (
                        <DirektuppstigningQuiz
                            question={question}
                            correct={correct}
                            incorrect={incorrect}
                            onSubmit={handleSubmit}
                        />
                    ) : null}
                </div>
            </main>
        </div>
    )
}
