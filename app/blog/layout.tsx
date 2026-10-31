import type { ReactNode } from 'react';

export default function BlogLayout({ children }: { children: ReactNode }) {
    return (
        <section className="border-2 border-gray-400 p-4 mt-4 rounded-lg">
            <h2 className="text-xl font-semibold mb-2 text-gray-600">Раздел «Блог» (Layout)</h2>
            <p className="text-sm text-gray-500 mb-4">
                Этот блок отрисовывается один раз и сохраняется при переходах внутри /blog.
            </p>
            {children}
        </section>
    );
}