import { MouseEventHandler } from 'react';

interface BoardProps {
    xIsNext: boolean;
    squares: Array<string | null>;
    onPlay: ( squares: Array<string | null>) => void;
}

export default function Board({ xIsNext, squares, onPlay }: BoardProps) {
 function handleClick(i) {
    const X = 'X';
    const O = 'O';
    if (calculateWinner(squares) || squares[i]) {
        return;
    }
    const nextSquares = squares.slice();
    if (xIsNext) {
        nextSquares[i] = X;
    } else {
        nextSquares[i] = O;
    }
    onPlay(nextSquares);
 }   
}