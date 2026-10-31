export default async function ServerDemo() {
    const time = new Date().toISOString();
    console.log('Это сообщение появится в терминале, а не в браузере');
    
    return (
        <div style={{ padding: '20px', fontFamily: 'sans-serif' }}>
            <h1>Server Component</h1>
            <p>Время на сервере: {time}</p>
            <p><i>Обновите страницу, чтобы увидеть, как меняется время.</i></p>
        </div>
    );
}