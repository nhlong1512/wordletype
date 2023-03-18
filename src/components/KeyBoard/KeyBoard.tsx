import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { rootState } from "../../model/model";
import { setBoard, decreasePos} from "../../redux/boardSlice";
import Key from "../Key/Key";

const KeyBoard: React.FC = () => {
  const rows: string[] = [
    "q w e r t y u i o p",
    "a s d f g h j k l",
    "z x c v b n m",
  ];
  const dispatch = useDispatch();
  const board = useSelector((state: rootState) => state.board.board);
  const posKey = useSelector((state: rootState) => state.board.posKey);

  const onClickBack = () => {
    const newBoard = [...board];
    newBoard[posKey-1] = "";
    dispatch(decreasePos());
    dispatch(setBoard(newBoard));
  };
  return (
    <div className="flex flex-col justify-center items-center mt-[32px]">
      {rows.map((row, idx) => {
        return (
          <div key={idx} className="flex">
            {idx === 2 && (
              <span className="bg-gray-500 text-white font-[700] text-[18px] m-[4px] rounded-[4px] p-[6px] cursor-pointer">
                Enter
              </span>
            )}
            {row.split(" ").map((letter, idx) => {
              return (
                <div className="flex">
                  <Key letter={letter.toUpperCase()} key={idx} />
                  {letter === "m" && (
                    <span
                      className="bg-gray-500 text-white font-[700] text-[18px] m-[4px] rounded-[4px] p-[6px] cursor-pointer"
                      onClick={onClickBack}
                    >
                      Back
                    </span>
                  )}
                </div>
              );
            })}
          </div>
        );
      })}
    </div>
  );
};

export default KeyBoard;
