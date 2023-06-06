'use client';
import { useState } from 'react';
import Board from './Board';

export default function App() {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);

  const handlePlay = (newSquares: (string | null)[]) => {
    setSquares(newSquares);
    setXIsNext(!xIsNext);
  }
  return (
    <>
      <Board squares={squares} xIsNext={xIsNext} onPlay={handlePlay}/>
    </>
  );
}