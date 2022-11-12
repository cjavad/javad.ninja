import NavbarButton from "./Navbar.button";
import NavbarElement from "./Navbar.element";

export default function Navbar({ title }: { title: string }) {
    return (
        <nav className="bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-900">
            <div className="container flex flex-wrap justify-between items-center mx-auto">
                <div className="flex items-center flex-shrink-0 mr-6">
                    <span className="font-semibold text-xl tracking-tight">{title}</span>
                </div>
                <div className="hidden w-full md:block md:w-auto">
                    <div className="flex flex-col p-4 mt-4 bg-gray-50 rounded-lg border border-gray-100 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                        <NavbarElement path="/" name="Home" />
                        <NavbarElement path="/about" name="About" />
                        <NavbarElement path="/contact" name="Contact" />
                    </div>
                </div>
                <NavbarButton path="/login" name="Login" />
            </div>
        </nav>
    )
}