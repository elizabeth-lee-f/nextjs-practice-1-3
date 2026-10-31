import AddToCartButton from './add-to-cart-button';

async function getProduct(id: string) {
    const products: Record<string, { name: string; price: number }> = {
        '1': { name: 'Ноутбук Pro', price: 75000 },
        '2': { name: 'Беспроводная мышь', price: 1500 },
        '3': { name: 'Механическая клавиатура', price: 5000 },
    };
    return products[id] || null;
}

export default async function ProductPage({
    params,
}: {
    params: Promise<{ id: string }>;
}) {
    const { id } = await params;
    const product = await getProduct(id);

    if (!product) {
        return (
            <div style={{ padding: '20px', fontFamily: 'sans-serif' }}>
                <h1>Ошибка 404</h1>
                <p>Товар с ID {id} не найден.</p>
            </div>
        );
    }

    return (
        <div style={{ padding: '20px', fontFamily: 'sans-serif', border: '1px solid #ddd', borderRadius: '8px', maxWidth: '400px' }}>
            <h1>{product.name}</h1>
            <p style={{ fontSize: '1.2em', fontWeight: 'bold' }}>Цена: {product.price} ₽</p>
            <p>ID товара: {id}</p>
            <AddToCartButton />
        </div>
    );
}