import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { rootState } from "../../model/model";
import { increasePos, setBoard } from "../../redux/boardSlice";

interface Props {
  letter: string;
}

const Key: React.FC<Props> = ({ letter }) => {
  const dispatch = useDispatch();
  const board = useSelector((state: rootState) => state.board.board);
  const posKey = useSelector((state: rootState) => state.board.posKey);

  const chooseLetter = () => {
    const newBoard = [...board];
    newBoard[posKey] = letter;
    if (posKey > 29) {
      return;
    }
    dispatch(setBoard(newBoard));
    dispatch(increasePos());
  };
  return (
    <div
      className="bg-gray-500 text-white font-[700] text-[18px] m-[4px] rounded-[4px] p-[6px] cursor-pointer uppercase"
      onClick={chooseLetter}
    >
      {letter}
    </div>
  );
};

export default Key;
