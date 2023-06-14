'use client';
import { ReactNode } from 'react';

interface ContentCentererProps {
    children: ReactNode;
}

export default function ContentCenterer(props: ContentCentererProps) {
    return (
        <div className="grid place-items-center h-screen">{props.children}</div>
    );
}