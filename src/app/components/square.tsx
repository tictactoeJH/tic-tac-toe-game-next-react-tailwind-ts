import { ReactNode, MouseEventHandler } from 'react';

interface SquareProps {
    value: ReactNode;
    onSquareClick: MouseEventHandler<HTMLButtonElement>;
}

export default function Square({ value, onSquareClick }: SquareProps) {
    return (
        <button onClick={onSquareClick}>{value}</button>
    );
}