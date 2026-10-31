interface CoursePageProps {
    params: Promise<{ id: string }>;
}

export default async function CoursePage({ params }: CoursePageProps) {
    const { id } = await params;
    
    return (
        <div>
            <h1 className="text-3xl font-bold mb-4">Курс: {id.toUpperCase()}</h1>
            <p className="text-gray-700">
                Подробная информация о курсе с идентификатором `{id}`.
            </p>
        </div>
    );
}