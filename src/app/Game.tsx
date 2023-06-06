'use client';
import { useState } from 'react';
import Board from './Board';

type HistoryType = Array<Array<string | null>>;

export default function Game() {

    const [history, setHistory] = useState<HistoryType>([Array(9).fill(null)]);
    const [currentMove, setCurrentMove] = useState<number>(0);
    const xIsNext = currentMove % 2 === 0;
    const currentSquares = history[currentMove];

    function handlePlay(nextSquares: Array<string | null>): void {
        const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
        setHistory(nextHistory);
        setCurrentMove(nextHistory.length - 1);
    }

    function jumpTo(nextMove: number): void {
        setCurrentMove(nextMove);
    }

    const moves = history.map((squares, move) => {
        let description: string;
        if (move > 0) {
            description = 'Go to move #' + move;
        } else {
            description = 'Go to game start';
        }
        return (
            <li key={move}>
                <button onClick={() => jumpTo(move)}>{description}</button>
            </li>
        );
    });

    return (
        <div>
            <div>
                <Board xIsNext={xIsNext} squares={currentSquares}
                onPlay={handlePlay} />
            </div>
            <div><ol>{moves}</ol></div>
        </div>
    );
}