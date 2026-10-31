export async function generateStaticParams() {
    return [
        { slug: 'nextjs-vvedenie' },
        { slug: 'react-osnovy' },
    ];
}


export default async function BlogPost({
    params,
}: {
    params: Promise<{ slug: string }>;
}) {
    const { slug } = await params;

    return (
        <article style={{ padding: '20px', fontFamily: 'sans-serif' }}>
            <h1>Статья: {slug}</h1>
            <p>Это контент для статьи с идентификатором {slug}.</p>
            <p>URL этой страницы: /blog/{slug}</p>
        </article>
    );
}