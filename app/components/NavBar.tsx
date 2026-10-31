'use client';

import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';

export default function NavBar() {
    const pathname = usePathname();
    const router = useRouter();

    const linkClass = (href: string) => {
        return `mr-4 ${pathname === href ? 'font-bold underline text-blue-600' : 'text-gray-700 hover:text-blue-500'}`;
    };

    return (
        <nav className="flex items-center p-4 border-b border-gray-300 bg-white">
            <Link href="/" className={linkClass('/')}>Главная</Link>
            <Link href="/about" className={linkClass('/about')}>О нас</Link>
            <Link href="/blog" className={linkClass('/blog')}>Блог</Link>
            <Link href="/courses" className={linkClass('/courses')}>Курсы</Link>
            <button 
                onClick={() => router.push('/about')}
                className="ml-auto px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            >
                Перейти к «О нас» (router.push)
            </button>
        </nav>
    );
}