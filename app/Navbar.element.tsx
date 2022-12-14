import Link from "next/link";

export default function NavbarElement({ path, name }: { path: string; name: string }) {
    return (
        <div>
            <Link href={path} className="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
                {name}
            </Link>
        </div>
    )
}