'use client';
import { ReactNode, MouseEventHandler } from 'react';

interface SquareProps {
    value: ReactNode;
    onSquareClick: MouseEventHandler<HTMLButtonElement>;
}

export default function Square({ value, onSquareClick }: SquareProps) {
    return (
        <button onClick={onSquareClick} className="border border-black bg-transparent text-black font-bold w-16 h-16">{value}</button>
    );
}