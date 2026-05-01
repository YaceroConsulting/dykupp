import type { Route } from './+types/_index'
import { Link } from 'react-router'

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
        <main className="min-h-screen pb-24">
            {/* Hero Section */}
            <section className="relative h-[530px] flex items-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <img className="w-full h-full object-cover" alt="A professional underwater close-up of a commercial diver's brass helmet submerged in deep, crystal-clear blue oceanic water." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDq4-_WVTFWNpr5rzHNgRyylvlF9v05T0Sj6JPtQk2emNNKnDj1hv6IJreFwyYUkM4O8U9d8qp773nIOD9SZv2IvJZxFgdWPmUjdmmnRpJCPd9oCPPvgdXF4sb58Gfvc8IuS3CJ37uPG50c1vCPOn05yO1Ro0LN7ePJ8Nn3yMZmDIOQLDCZYS17cVXD58ciknHfMmauCE5vFyNCpPvglqq8B7RkBqXYrVIjAoX5P8J3skfLBPNxDfzdCO_cvr93BgM4kh84Zbtaj5U" />
                    <div className="absolute inset-0 hero-gradient"></div>
                </div>
                <div className="relative z-10 container mx-auto px-margin">
                    <div className="max-w-2xl border-l-4 border-secondary pl-lg">
                        <h2 className="font-headline-lg text-headline-lg text-white mb-md uppercase tracking-tighter">Depths beckon, take care</h2>
                        <p className="font-body-md text-body-md text-on-primary-container max-w-lg mb-lg">
                            Respect the ocean&apos;s power. Safe return, life&apos;s gift
                        </p>
                    </div>
                </div>
            </section>

            {/* Training Selection (Bento Style) */}
            <section className="container mx-auto px-margin -mt-16 relative z-20">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-md">
                    {/* Main Training Cards */}
                    <div className="md:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-md">
                        {/* Direktuppstigning Card */}
                        <div className="bg-surface-container-lowest border border-outline-variant p-lg flex flex-col justify-between shadow-xl">
                            <div>
                                <div className="inline-flex items-center justify-center w-12 h-12 bg-primary mb-md">
                                    <span className="material-symbols-outlined text-white" style={{ fontVariationSettings: "'FILL' 1" }}>arrow_upward</span>
                                </div>
                                <h3 className="font-headline-md text-headline-md text-primary mb-sm">Direktuppstigning</h3>
                                <p className="font-body-md text-body-md text-on-surface-variant mb-lg">Beräkna och öva på direkt uppstigning enligt tekniska manualstandarder.</p>
                            </div>
                            <Link to="/direktuppstigning" className="block bg-primary text-white font-label-caps text-label-caps py-md px-lg w-full hover:opacity-90 transition-all active:scale-95 text-center">
                                START TRAINING
                            </Link>
                        </div>

                        {/* Upprepade dyk Card */}
                        <div className="bg-surface-container-lowest border border-outline-variant p-lg flex flex-col justify-between shadow-xl">
                            <div>
                                <div className="inline-flex items-center justify-center w-12 h-12 bg-secondary mb-md">
                                    <span className="material-symbols-outlined text-white">sync</span>
                                </div>
                                <h3 className="font-headline-md text-headline-md text-primary mb-sm">Upprepade dyk</h3>
                                <p className="font-body-md text-body-md text-on-surface-variant mb-lg">Bemästra komplexiteten i upprepade dykprofiler och hantering av ytintervaller.</p>
                            </div>
                            <Link to="/upprepadedyk" className="block bg-secondary text-white font-label-caps text-label-caps py-md px-lg w-full hover:opacity-90 transition-all active:scale-95 text-center">
                                START PROTOCOL
                            </Link>
                        </div>
                    </div>

                    {/* Sidebar Stats / Quick Info */}
                    {/* <div className="md:col-span-4 space-y-md">
                        <div className="bg-primary text-white p-lg border-b-4 border-secondary">
                            <h4 className="font-label-caps text-label-caps text-on-primary-container mb-sm">CURRENT READINESS</h4>
                            <div className="flex items-end gap-sm mb-xs">
                                <span className="text-4xl font-bold">98%</span>
                                <span className="text-secondary font-bold text-sm mb-1 uppercase">Certified</span>
                            </div>
                            <div className="w-full bg-primary-container h-1 mt-md">
                                <div className="bg-secondary h-full w-[98%]"></div>
                            </div>
                        </div>

                        <div className="bg-surface-container-high p-lg border border-outline-variant">
                            <h4 className="font-label-caps text-label-caps text-primary mb-md">LATEST MANUAL UPDATES</h4>
                            <ul className="space-y-md">
                                <li className="flex gap-sm items-start">
                                    <span className="material-symbols-outlined text-primary text-sm mt-1">description</span>
                                    <div>
                                        <p className="font-data-table text-data-table text-primary">Table 5A-2 Revision</p>
                                        <p className="text-xs text-on-surface-variant uppercase">Updated 2 days ago</p>
                                    </div>
                                </li>
                                <li className="flex gap-sm items-start">
                                    <span className="material-symbols-outlined text-primary text-sm mt-1">verified_user</span>
                                    <div>
                                        <p className="font-data-table text-data-table text-primary">Safety Protocol v.2.4</p>
                                        <p className="text-xs text-on-surface-variant uppercase">Mandatory Review</p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div> */}
                </div>
            </section>

            {/* Visual Dashboard Section */}
            {/* <section className="container mx-auto px-margin mt-xl">
                <div className="bg-white border border-outline-variant grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-outline-variant">
                    <div className="p-lg flex items-center gap-md">
                        <div className="text-primary">
                            <span className="material-symbols-outlined text-[40px]">timer</span>
                        </div>
                        <div>
                            <span className="block font-label-caps text-label-caps text-on-surface-variant">TOTAL TRAINING</span>
                            <span className="block font-headline-md text-headline-md">142 HOURS</span>
                        </div>
                    </div>
                    <div className="p-lg flex items-center gap-md">
                        <div className="text-secondary">
                            <span className="material-symbols-outlined text-[40px]">waves</span>
                        </div>
                        <div>
                            <span className="block font-label-caps text-label-caps text-on-surface-variant">LOGGED DIVES</span>
                            <span className="block font-headline-md text-headline-md">847 UNITS</span>
                        </div>
                    </div>
                    <div className="p-lg flex items-center gap-md">
                        <div className="text-error">
                            <span className="material-symbols-outlined text-[40px]">warning</span>
                        </div>
                        <div>
                            <span className="block font-label-caps text-label-caps text-on-surface-variant">SAFETY ALERTS</span>
                            <span className="block font-headline-md text-headline-md">0 PENDING</span>
                        </div>
                    </div>
                </div>
            </section> */}
        </main>
    )
}
