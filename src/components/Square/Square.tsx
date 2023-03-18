import React from "react";
import { motion } from "framer-motion";

interface Props {
  square: string;
  squareIdx: number;
}

const Square: React.FC<Props> = ({ square, squareIdx }) => {
  const variants = {
    filled: () => ({
      scale:[1.1, 1],
      trantition: {
        duration:0.2,
      }
    }),
    unfilled: () => ({
      scale:[1.1, 1],
      trantition: {
        duration:0.2,
      }
    })
  }
  return (
    <motion.div
      className="text-[32px] h-[48px] w-[48px] text-center bg-none cursor-pointer place-items-center mx-[2px]"
      style={{ border: "2px solid #6EB9E3" }}
      animate={square ? "filled" : "unfilled"}
      variants = {variants}
    >
      {square}
    </motion.div>
  );
};

export default Square;
