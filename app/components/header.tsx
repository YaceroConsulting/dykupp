import { Link } from 'react-router'

export function Header() {
    return (
        <header className="bg-slate-900 dark:bg-slate-950 text-white dark:text-slate-100 font-inter font-bold tracking-tight uppercase docked full-width top-0 border-b-2 border-slate-700 dark:border-slate-800 flat no shadows sticky z-50">
            <div className="flex justify-between items-center w-full px-6 h-16">
                <div className="flex items-center gap-sm">
                    <span className="material-symbols-outlined">scuba_diving</span>
                    <Link to="/" className="text-xl font-black tracking-widest text-white hover:text-white">DYKUPP</Link>
                </div>
                {/* <div className="flex items-center gap-md">
                    <button className="text-slate-400 hover:bg-slate-800 transition-colors p-2 rounded-lg cursor-pointer">
                        <span className="material-symbols-outlined">search</span>
                    </button>
                    <button className="text-white hover:bg-slate-800 transition-colors p-2 rounded-lg cursor-pointer">
                        <span className="material-symbols-outlined">account_circle</span>
                    </button>
                </div> */}
            </div>
        </header>
    )
}
