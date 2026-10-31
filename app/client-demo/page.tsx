'use client';

import { useState } from 'react';

export default function ClientDemo() {
    const [count, setCount] = useState(0);
    

    console.log('Это сообщение появится в консоли браузера');

    return (
        <div style={{ padding: '20px', fontFamily: 'sans-serif' }}>
            <h1>Client Component</h1>
            <p>Нажимайте на кнопку — счётчик увеличивается.</p>
            <button 
                onClick={() => setCount(count + 1)}
                style={{ 
                    padding: '10px 20px', 
                    fontSize: '16px', 
                    cursor: 'pointer',
                    backgroundColor: '#0070f3',
                    color: 'white',
                    border: 'none',
                    borderRadius: '5px'
                }}
            >
                Кликов: {count}
            </button>
        </div>
    );
}