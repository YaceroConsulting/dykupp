import { Links, Meta, Outlet, Scripts, ScrollRestoration } from 'react-router'
import type { Route } from './+types/root'
import stylesheet from '~/tailwind.css?url'
import { Header } from '~/components/header'
import { BottomNavBar } from '~/components/bottomNavBar'
import { publicAsset } from '~/components/libs'

export const links: Route.LinksFunction = () => [
    { rel: 'stylesheet', href: stylesheet },
]

export function Layout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="sv" className="h-full w-full overflow-x-hidden">
            <head>
                <meta charSet="utf-8" />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
                <link rel="stylesheet" href="https://rsms.me/inter/inter.css" />
                <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700;900&display=swap" rel="stylesheet" />
                <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet" />
                <link
                    rel="apple-touch-icon"
                    sizes="180x180"
                    href={publicAsset('apple-touch-icon.png')}
                />
                <link
                    rel="icon"
                    type="image/png"
                    sizes="32x32"
                    href={publicAsset('favicon-32x32.png')}
                />
                <link
                    rel="icon"
                    type="image/png"
                    sizes="16x16"
                    href={publicAsset('favicon-16x16.png')}
                />
                <link rel="manifest" href={publicAsset('site.webmanifest')} />
                <Meta />
                <Links />
            </head>
            <body className="h-full w-full overflow-x-hidden bg-background text-on-surface">
                <Header />
                {children}
                <BottomNavBar />
                <ScrollRestoration />
                <Scripts />
            </body>
        </html>
    )
}

export default function App() {
    return <Outlet />
}

export function HydrateFallback() {
    return (
        <div className="py-16 p-10">
            <p className="text-gray-600 italic">Laddar innehåll...</p>
        </div>
    )
}
