import React from "react";
import Key from "../Key/Key";

const KeyBoard:React.FC = () => {
  const rows: string[] = [
    "q w e r t y u i o p",
    "a s d f g h j k l",
    "z x c v b n m",
  ];
  return (
    <div className="flex flex-col justify-center items-center mt-[32px]">
      {rows.map((row, idx) => {
        return (
          <div key={idx} className="flex">
            {idx === 2 && <span className="bg-gray-500 text-white font-[700] text-[18px] m-[4px] rounded-[4px] p-[6px] cursor-pointer">Enter</span>}  
            {row.split(" ").map((letter, idx) => {
              return (
                <div className="flex">
                  <Key letter={letter.toUpperCase()} key={idx} />
                  {letter === "m" &&  <span className="bg-gray-500 text-white font-[700] text-[18px] m-[4px] rounded-[4px] p-[6px] cursor-pointer">Back</span>}
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
