import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";
import { rootState } from "../../model/model";

interface Props {
  square: string;
  squareIdx: number;
}

const Square: React.FC<Props> = ({ square, squareIdx }) => {
  const correctWord = useSelector(
    (state: rootState) => state.board.correctWord
  );
  const reduxRow = useSelector((state: rootState) => state.board.row);
  const posKey = useSelector((state: rootState) => state.board.posKey);

  const [correct, setCorrect] = useState<boolean>(false);
  const [almost, setAlmost] = useState<boolean>(false);
  const [wrong, setWrong] = useState<boolean>(false);
  square = square.toLowerCase();
  console.log(correctWord);
  
  
  useEffect(() => {
    console.log("Correct word: ", correctWord[(posKey - 1) % 5]);
    console.log("Square: ", square);
    
    if (correctWord[(posKey - 1) % 5] === square) {
      setCorrect(true);
    } else if (!correct && square !== "" && correctWord.includes(square)) {
      setAlmost(true);
    } else if (!correct && square !== "" && !correctWord.includes(square)) {
      setWrong(true);
    }
    //Cleanup UseEffect
    return () => {
      setCorrect(false);
      setAlmost(false);
      setWrong(false);
    };
  }, [square]);

  const variants = {
    filled: () => ({
      scale: [1.1, 1],
      trantition: {
        duration: 0.2,
      },
    }),
    unfilled: () => ({
      scale: [1.1, 1],
      trantition: {
        duration: 0.2,
      },
    }),
  };

  //Change color for Square
  const status: any =
    squareIdx / 5 < reduxRow &&
    (correct ? "correct" : almost ? "almost" : wrong ? "wrong" : "");

  return (
    <motion.div
      className={`text-[32px] h-[48px] w-[48px] text-center bg-none cursor-pointer place-items-center mx-[2px] uppercase ${status}` }
      style={{ border: "2px solid #6EB9E3" }}
      animate={square ? "filled" : "unfilled"}
      variants={variants}
    >
      {square}
    </motion.div>
  );
};

export default Square;
