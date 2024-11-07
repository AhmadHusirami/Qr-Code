import Link from 'next/link'
import Social from '../Social'

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="w-full">
            <div className="flex w-full flex-col items-center justify-center pb-2 pt-4 text-sm">
                <div className="pb-3">
                    <Social />
                </div>
                <span className="text-coldGrey block text-center">© {currentYear} Ahmad Said Husirami All Rights Reserved.</span>
                <Link className="text-blue-800 underline" href="https://ahmad-husirami.vercel.app/" target="_blank">ahmad-husirami</Link>
            </div>
        </footer>
    )
}
