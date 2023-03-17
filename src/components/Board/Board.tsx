import React from "react";
import Square from "../Square/Square";

interface Props {
  board: string[];
}

const Board: React.FC<Props> = ({ board }) => {
  return (
    <div className="flex flex-wrap flex-row justify-center w-[300px] h-[300px] text-white bg-[#151924]mt-[40px]">
      {board.map((square, idx) => {
        return (
          <>
            <Square key={idx} square={square} squareIdx={idx} />
          </>
        );
      })}
    </div>
  );
};

export default Board;
