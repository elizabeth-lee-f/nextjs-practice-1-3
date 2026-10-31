import type { ReactNode } from 'react';

export default function BlogTemplate({ children }: { children: ReactNode }) {
    console.log(' BlogTemplate смонтирован заново!');
    return <div>{children}</div>;
}