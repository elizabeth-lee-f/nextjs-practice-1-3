import Link from 'next/link';

interface CommentPageProps {
    params: Promise<{ id: string; commentId: string }>;
}

export default async function CommentPage({ params }: CommentPageProps) {
    const { id, commentId } = await params;
    
    return (
        <div>
            <h1 className="text-3xl font-bold mb-4">Комментарий {commentId}</h1>
            <p className="text-gray-700 mb-4">К посту №{id}</p>
            <Link href="/blog" className="text-blue-600 hover:underline">
                ← Вернуться к блогу
            </Link>
        </div>
    );
}