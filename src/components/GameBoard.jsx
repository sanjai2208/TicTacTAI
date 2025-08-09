import Square from "./Square"


const GameBoard = ({board, handleClick}) => {

  return (
    <div className="grid grid-cols-3 gap-2 w-[300px]">
      {board.map((val, index) => 
      
      
        <Square  values = {val} i={index} key={index} onClick={() => handleClick(index)}/>
    )}
    </div>
  )
}

export default GameBoard
