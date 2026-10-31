import Link from 'next/link';

interface PostPageProps {
    params: Promise<{ id: string }>;
}

export default async function PostPage({ params }: PostPageProps) {
    const { id } = await params;
    
    return (
        <div>
            <h1 className="text-3xl font-bold mb-4">Пост №{id}</h1>
            <p className="text-gray-700 mb-4">Это содержимое поста с идентификатором {id}.</p>
            <Link href={`/blog/${id}/comments/5`} className="text-blue-600 hover:underline">
                Посмотреть комментарий 5
            </Link>
        </div>
    );
}