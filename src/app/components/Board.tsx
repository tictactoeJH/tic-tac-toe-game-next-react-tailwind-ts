import Square from './Square';
import CalculateWinner from './CalculateWinner';

interface BoardProps {
    xIsNext: boolean;
    squares: Array<string | null>;
    onPlay: ( squares: Array<string | null>) => void;
}

export default function Board({ xIsNext, squares, onPlay }: BoardProps) {

    const X = 'X';
    const O = 'O';

    function handleClick(i: number) {
    if (CalculateWinner(squares) || squares[i]) {
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

 const winner: string | null = CalculateWinner(squares);
 let status: string;
 if (winner) {
    status = 'Winner: ' + winner;
 } else {
    status = 'Next player: ' + (xIsNext ? X : O);
 }

 return (
    <>
        <div>{status}</div>
        <div>
            <Square value={squares[0]} onSquareClick={() => handleClick(0)} />
            <Square value={squares[1]} onSquareClick={() => handleClick(1)} />
            <Square value={squares[2]} onSquareClick={() => handleClick(2)} />
        </div>
        <div>
            <Square value={squares[3]} onSquareClick={() => handleClick(3)} />
            <Square value={squares[4]} onSquareClick={() => handleClick(4)} />
            <Square value={squares[5]} onSquareClick={() => handleClick(5)} />
        </div>
        <div>
            <Square value={squares[6]} onSquareClick={() => handleClick(6)} />
            <Square value={squares[7]} onSquareClick={() => handleClick(7)} />
            <Square value={squares[8]} onSquareClick={() => handleClick(8)} />
        </div>
    </>
 );
}