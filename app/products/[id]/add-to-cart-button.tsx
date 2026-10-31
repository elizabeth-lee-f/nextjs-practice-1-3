'use client';

import { useState } from 'react';

export default function AddToCartButton() {
    const [added, setAdded] = useState(false);

    return (
        <button
            onClick={() => setAdded(true)}
            disabled={added}
            style={{
                padding: '10px 20px',
                fontSize: '16px',
                cursor: 'pointer',
                backgroundColor: added ? '#ccc' : '#0070f3',
                color: 'white',
                border: 'none',
                borderRadius: '5px'
            }}
        >
            {added ? 'Добавлено!' : 'В корзину'}
        </button>
    );
}