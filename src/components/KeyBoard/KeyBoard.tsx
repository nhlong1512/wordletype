import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { rootState } from "../../model/model";
import { setBoard, decreasePos, increaseRow } from "../../redux/boardSlice";
import Key from "../Key/Key";
import wordList from "../../word.json";

const KeyBoard: React.FC = () => {
  const rows: string[] = [
    "q w e r t y u i o p",
    "a s d f g h j k l",
    "z x c v b n m",
  ];

  const dispatch = useDispatch();
  const board = useSelector((state: rootState) => state.board.board);
  const posKey = useSelector((state: rootState) => state.board.posKey);
  const row = useSelector((state: rootState) => state.board.row);
  const correctWord = useSelector((state: rootState) => state.board.correctWord);

  //5 words in row input
  let board5Words: string = `${board[posKey - 5]}${board[posKey - 4]}${
    board[posKey - 3]
  }${board[posKey - 2]}${board[posKey - 1]}`;
  console.log(board5Words);

  const onClickBack = () => {
    if (Math.floor(posKey - 1) / 5 < row) return;
    const newBoard = [...board];
    newBoard[posKey - 1] = "";
    dispatch(decreasePos());
    dispatch(setBoard(newBoard));
  };
  const onClickEnter = () => {
    if (wordList.words.includes(board5Words)) {
      if (posKey % 5 === 0 && posKey !== 0) {
        dispatch(increaseRow());
      }
    }else {
      alert("Invalid words!");
    }
    if(posKey === 30 && wordList.words.includes(board5Words)) {
      alert("The word is: " + correctWord);
    }
  };
  return (
    <div className="flex flex-col justify-center items-center mt-[32px]">
      {rows.map((row, idx) => {
        return (
          <div key={idx} className="flex">
            {idx === 2 && (
              <span
                className="bg-gray-500 text-white font-[700] text-[18px] m-[4px] rounded-[4px] p-[6px] cursor-pointer"
                onClick={onClickEnter}
              >
                Enter
              </span>
            )}
            {row.split(" ").map((letter, idx) => {
              return (
                <div className="flex">
                  <Key letter={letter} key={idx} />
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
