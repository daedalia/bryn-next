import Link from "next/link";

export function Header() {
    return (
        <header>
            <h2>
                <Link href="/">Home</Link>
            </h2>
            <h2> | </h2>
            <h2>
                <Link href="/about">About</Link>
            </h2>
        </header>)
}