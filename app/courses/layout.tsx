import type { ReactNode } from 'react';

export default function CoursesLayout({ children }: { children: ReactNode }) {
    return (
        <section className="border-2 border-blue-500 p-4 mt-4 rounded-lg bg-blue-50">
            <h2 className="text-xl font-semibold mb-2 text-blue-700">Раздел «Курсы» (Layout)</h2>
            {children}
        </section>
    );
}