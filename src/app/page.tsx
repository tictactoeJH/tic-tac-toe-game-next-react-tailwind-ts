import Board from './components/Board';

export default function App() {
  const initialSquares = Array(9).fill(null);
  const handlePlay = (squares: (string | null)[]) => {
    console.log('Play clicked with squares: ', squares);
  };
  return (
    <>
      <Board xIsNext={false} squares={initialSquares} onPlay={handlePlay}/>
    </>
  );
}