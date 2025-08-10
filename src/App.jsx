import React, { useEffect, useState } from "react";
import ScoreBoard from "./components/ScoreBoard";
import GameBoard from "./components/GameBoard";
import { getAiMoveFromOpenRouter } from "./utils/aiOpenRouter";
import { checkWinner } from "./utils/winner";

const App = () => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [isPlayerTurn, setPlayerTurn] = useState(true);
  const [winner, setWinner] = useState(null);
  const [score, setScore] = useState({ X: 0, O: 0 });

  const handleClick = (i) => {
    if (!isPlayerTurn || board[i] || winner) return;
    const newBoard = [...board];
    newBoard[i] = "X";
    setBoard(newBoard);
    setPlayerTurn(false);
  };

  useEffect(() => {
    if (winner) return;

    const result = checkWinner(board);
    if (result) {
      setWinner(result.winner);
      if (result.winner === "X" || result.winner === "O") {
        setScore((prev) => ({
          ...prev,
          [result.winner]: prev[result.winner] + 1,
        }));
      }
    }

    if (!isPlayerTurn && !winner) {
      const aiTurn = async (board) => {
        const move = await getAiMoveFromOpenRouter(board);
        if (move != null && board[move] == null) {
          const newBoard = [...board];
          newBoard[move] = "O";
          setBoard(newBoard);
          setPlayerTurn(true);
        }
      };
      aiTurn(board);
    }
  }, [board, isPlayerTurn, winner]);

  const restartGame = () => {
    setBoard(Array(9).fill(null));
    setPlayerTurn(true);
    setWinner(null);
  };

  return (
    <div className="h-screen bg-[#0F172A] text-white flex flex-col items-center justify-center px-4">
      <h1 className="text-4xl font-extrabold mb-6 tracking-wide text-[#38BDF8] drop-shadow-lg">
        Tic Tac TAI 🤖
      </h1>

      <ScoreBoard score={score} />

      <GameBoard board={board} handleClick={handleClick} />

      {winner && (
        <div className="mt-6 text-xl flex flex-col items-center space-y-4">
          <span className="font-semibold tracking-wide">
            {winner === "Draw" ? "It's a draw 🤝" : `${winner} wins! 🎉`}
          </span>
          <button
            onClick={restartGame}
            className="px-5 py-2 bg-[#38BDF8] text-black rounded-lg font-semibold shadow-md hover:bg-[#0EA5E9] transition-all duration-200"
          >
            🔄 Play Again
          </button>
        </div>
      )}
    </div>
  );
};

export default App;
