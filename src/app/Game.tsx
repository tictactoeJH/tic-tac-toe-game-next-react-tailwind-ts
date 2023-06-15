'use client';
import { useState } from 'react';
import Board from './Board';
import ContentCenterer from './ContentCenterer';

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
            <button className="inline-flex items-center font-medium text-center text-white text-base bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 
            focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 px-4 py-1" 
            onClick={() => jumpTo(move)}>{description}</button>
        </li>
        );
    });

    return (
        <div><ContentCenterer><div>
            <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} /><div className="pt-4"><ol className="flex justify-center">{moves}</ol></div>
        </div></ContentCenterer></div>
    );
}