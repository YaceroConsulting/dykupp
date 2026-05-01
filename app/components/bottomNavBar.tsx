import { NavLink } from 'react-router'

const navItems = [
    { to: '/', label: 'Hem', icon: 'home', end: true },
    { to: '/direktuppstigning', label: 'Uppstigning', icon: 'arrow_upward' },
    { to: '/upprepadedyk', label: 'Upprepade Dyk', icon: 'grid_on' },
    { to: '/om', label: 'Om oss', icon: 'groups' },
]

export function BottomNavBar() {
    return (
        <nav className="fixed bottom-0 left-0 w-full flex justify-around items-stretch h-20 bg-slate-50 dark:bg-slate-900 border-t-2 border-slate-300 dark:border-slate-700 shadow-[0_-4px_0_0_rgba(0,0,0,0.05)] z-50">
            {navItems.map(({ to, label, icon, end }) => (
                <NavLink
                    key={to}
                    className={({ isActive }) =>
                        `flex flex-1 flex-col items-center justify-center py-2 transition-all duration-75 active:scale-95 ${
                            isActive
                                ? 'border-t-4 border-slate-900 text-slate-900 dark:border-white dark:text-white'
                                : 'text-slate-500 hover:bg-slate-200 dark:text-slate-400 dark:hover:bg-slate-800'
                        }`
                    }
                    end={end}
                    to={to}
                >
                    {({ isActive }) => (
                        <>
                            <span
                                className="material-symbols-outlined"
                                style={{
                                    fontVariationSettings: `'FILL' ${isActive ? 1 : 0}`,
                                }}
                            >
                                {icon}
                            </span>
                            <span className="mt-1 font-inter text-[10px] font-bold uppercase tracking-wider">
                                {label}
                            </span>
                        </>
                    )}
                </NavLink>
            ))}
        </nav>
    )
}
