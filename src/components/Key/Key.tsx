import React from "react";

interface Props {
  letter: string;
}

const Key: React.FC<Props> = ({ letter }) => {
  return (
    <div className="bg-gray-500 text-white font-[700] text-[18px] m-[4px] rounded-[4px] p-[6px] cursor-pointer uppercase">
      {letter}
    </div>
  );
};

export default Key;
