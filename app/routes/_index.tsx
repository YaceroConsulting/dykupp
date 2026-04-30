import type { Route } from './+types/_index'
import { HeroWithOffsetImage } from '~/components/heroWithImage'

export const meta: Route.MetaFunction = () => {
    return [
        { title: 'Dykupp' },
        {
            name: 'description',
            content:
                'Träna på expositionstid och gruppbeteckning efter dykning med direktuppstigning.',
        },
    ]
}

export default function Index() {
    return (
        <main className="isolate">
            <HeroWithOffsetImage />
        </main>
    )
}
