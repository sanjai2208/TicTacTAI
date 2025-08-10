import Square from "./Square";

const GameBoard = ({ board, handleClick }) => {
  return (
    <div className="grid grid-cols-3 gap-3 w-[320px] sm:w-[360px] p-3 rounded-2xl bg-[#0F172A] border border-[#334155] shadow-lg">
      {board.map((val, index) => (
        <Square
          values={val}
          i={index}
          key={index}
          onClick={() => handleClick(index)}
        />
      ))}
    </div>
  );
};

export default GameBoard;
