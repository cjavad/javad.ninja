import Link from "next/link";

export default function NavbarButton({ path, name }: { path: string; name: string }) {
    return (
        <div>
            <Link href={path} className="inline-block text-sm px-4 py-2 leading-none border rounded border-white hover:text-white hover:bg-black mt-4 lg:mt-0">
                {name}
            </Link>
        </div>
    )
}