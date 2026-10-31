'use client';

import { useState } from 'react';
import { greet } from '../actions';

export default function GreetDemo() {
    const [message, setMessage] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const handleClick = async () => {
        setIsLoading(true);

        const result = await greet('Студент'); 
        setMessage(result);
        setIsLoading(false);
    };

    return (
        <div style={{ padding: '20px', fontFamily: 'sans-serif' }}>
            <h1>Server Action Demo</h1>
            <button 
                onClick={handleClick} 
                disabled={isLoading}
                style={{ 
                    padding: '10px 20px', 
                    fontSize: '16px', 
                    cursor: 'pointer',
                    backgroundColor: isLoading ? '#ccc' : '#0070f3',
                    color: 'white',
                    border: 'none',
                    borderRadius: '5px'
                }}
            >
                {isLoading ? 'Загрузка...' : 'Поздороваться'}
            </button>
            
            <p style={{ marginTop: '20px', fontWeight: 'bold' }}>{message}</p>
        </div>
    );
}