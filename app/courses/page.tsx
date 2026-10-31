import Link from 'next/link';

export default function CoursesPage() {
    return (
        <div>
            <h1 className="text-3xl font-bold mb-4">Список курсов</h1>
            <ul className="space-y-2">
                <li>
                    <Link href="/courses/nextjs" className="text-blue-600 hover:underline">
                        Next.js для начинающих
                    </Link>
                </li>
                <li>
                    <Link href="/courses/react" className="text-blue-600 hover:underline">
                        Продвинутый React
                    </Link>
                </li>
            </ul>
        </div>
    );
}