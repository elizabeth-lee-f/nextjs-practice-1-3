'use server';

export async function greet(name: string) {

    await new Promise(resolve => setTimeout(resolve, 500));
    
    const timestamp = new Date().toISOString();
    return `Привет, ${name}! Время на сервере: ${timestamp}`;
}