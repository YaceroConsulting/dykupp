import {
    Links,
    Meta,
    Outlet,
    Scripts,
    ScrollRestoration,
} from "@remix-run/react";
import type {LinksFunction} from "@remix-run/node";
import stylesheet from "~/tailwind.css?url";
import {Header} from "~/components/header";
import {Footer} from "~/components/footer";

export const links: LinksFunction = () => [
    {rel: "stylesheet", href: stylesheet},
];

export function Layout({children}: { children: React.ReactNode }) {
    return (
        <html lang="sv" className="h-full">
        <head>
            <meta charSet="utf-8"/>
            <meta name="viewport" content="width=device-width, initial-scale=1"/>
            <meta name="theme-color" content="#ffffff"/>
            <link rel="stylesheet" href="https://rsms.me/inter/inter.css"/>
            <link rel="apple-touch-icon" sizes="180x180" href="/dykning-med-direktuppstigning/apple-touch-icon.png"/>
            <link rel="icon" type="image/png" sizes="32x32" href="/dykning-med-direktuppstigning/favicon-32x32.png"/>
            <link rel="icon" type="image/png" sizes="16x16" href="/dykning-med-direktuppstigning/favicon-16x16.png"/>
            <link rel="manifest" href="/dykning-med-direktuppstigning/site.webmanifest"/>
            <Meta/>
            <Links/>
        </head>
        <body className="h-full">
            <Header />
            {children}
            <Footer />
            <ScrollRestoration/>
            <Scripts/>
        </body>
        </html>
    );
}

export default function App() {
    return <Outlet/>;
}

export function HydrateFallback() {
    return <p>Loading...</p>;
}
