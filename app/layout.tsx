import '../styles/globals.css';
import Head from './head';
import Navbar from "./Navbar";

export default function RootLayout({ children }: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <Head title="javad.ninja" />
            
            <body>
                <Navbar title="javad.ninja" />
                <section>
                    {children}
                </section>
            </body>
        </html>
    );
}