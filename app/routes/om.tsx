import { Footer } from '~/components/footer'
import { publicAsset } from '~/components/libs'

export default function Om() {
    return (
        <main>
            <TeamSection
                heading="Möt teamet"
                description="Vi som gjorde det här projektet möjligt."
                people={people}
            />

            <div className="bg-white pb-16 px-6 lg:px-8">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="mx-auto max-w-2xl lg:mx-0">
                        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                            Referenser
                        </h2>
                        <p className="mt-6 text-lg leading-8 text-gray-600">
                            Svar på frågor utgår från dykningstabell{' '}
                            <i>US Navy Dive Manuals Rev 6</i>
                        </p>
                        <Flaticon />
                    </div>
                </div>
            </div>

            <div className="bg-white px-6 pb-24 lg:px-8">
                <Footer />
            </div>
        </main>
    )
}

function Flaticon() {
    return (
        <div className="mt-10 text-sm leading-6 text-gray-500">
            <p>
                <a
                    href="https://www.flaticon.com/free-icons/diver"
                    className="hover:text-gray-700 underline underline-offset-4"
                >
                    Diver icons created by Skyclick
                </a>
                {' - '}
                <span className="inline-flex items-center gap-1">
                    Flaticon
                    <img
                        className="h-4 w-auto grayscale opacity-50"
                        src="https://media.flaticon.com/dist/min/img/logos/flaticon-color-negative.svg"
                        alt="Flaticon"
                    />
                </span>
            </p>
        </div>
    )
}

type Person = {
    name: string
    role: string
    gitHubUrl: string
    imageUrl: string
}

const people: Array<Person> = [
    {
        name: 'Alexander Gimerus',
        role: 'Initiativtagare och bollplank till denna applikation',
        gitHubUrl: '',
        imageUrl: publicAsset('alexander-avatar.jpg'),
    },
    {
        name: 'Daria Lykova',
        role: 'Proof-of-concept som en Blazor fullstack applikation',
        gitHubUrl: 'https://github.com/dashlykova',
        imageUrl: 'https://avatars.githubusercontent.com/u/50490216?v=4',
    },
    {
        name: 'Marcus Holmgren',
        role: 'Design och vidareutveckling med upprepade dyk för denna SPA',
        gitHubUrl: 'https://github.com/marcusholmgren',
        imageUrl: 'https://avatars.githubusercontent.com/u/183957?v=4',
    },
]

type TeamSectionProps = {
    heading: string
    description: string
    people: Array<Person>
}

function TeamSection({ heading, description, people }: TeamSectionProps) {
    return (
        <div className="bg-white">
            <div className="mx-auto grid max-w-7xl gap-x-8 gap-y-20 px-6 lg:px-8 xl:grid-cols-3">
                <div className="max-w-2xl">
                    <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                        {heading}
                    </h2>
                    <p className="mt-6 text-lg leading-8 text-gray-600">
                        {description}
                    </p>
                </div>
                <ul className="grid gap-x-8 gap-y-10 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2">
                    {people.map((person) => (
                        <li key={person.name}>
                            <div className="flex items-center gap-x-6">
                                <img
                                    className="h-16 w-16 rounded-full bg-gray-50 object-cover"
                                    src={person.imageUrl}
                                    alt={person.name}
                                />
                                <div>
                                    <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900">
                                        {person.name}
                                    </h3>
                                    <p className="text-sm font-semibold leading-6 text-indigo-600">
                                        {person.gitHubUrl ? (
                                            <a
                                                href={person.gitHubUrl}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="hover:text-indigo-500"
                                            >
                                                {person.role}
                                            </a>
                                        ) : (
                                            <span>{person.role}</span>
                                        )}
                                    </p>
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}
