import React from "react";
import { motion } from "framer-motion";

const Square = ({ values, i, onClick }) => {
  return (
    <motion.button
      className={`w-[90px] h-[90px] sm:w-[100px] sm:h-[100px] rounded-xl 
                  flex items-center justify-center font-bold text-4xl shadow-md 
                  border border-[#334155] transition-all duration-200
                  ${values === "X" ? "text-[#38BDF8]" : values === "O" ? "text-[#F87171]" : "text-white"} 
                  hover:shadow-[#38BDF8]/20 hover:scale-105`}
      whileTap={{ scale: 0.9 }}
      onClick={onClick}
    >
      {values}
    </motion.button>
  );
};

export default Square;
