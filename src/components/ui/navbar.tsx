import Link from 'next/link'
import { ModeToggle } from '../theme-toggle-button'

const Navbar = () => {
    return (
        <header className="flex items-center justify-between py-4 px-4 sm:px-6 lg:px-8 border-b border-neutral-200 dark:border-neutral-800 mb-5">
            <Link href="/">
                <h1 className="text-2xl font-bold">Tareas</h1>
            </Link>
            <div className="flex items-center gap-4">
                <ModeToggle />
            </div>
        </header>
    )
}

export default Navbar
