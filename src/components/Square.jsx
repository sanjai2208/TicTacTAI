import React from 'react'
import { motion } from 'framer-motion'
const Square = ({values,i,onClick}) => {

    
  return (
    <motion.button className='w-[90px] h-[90px] bg-[#1E293B] flex items-center justify-center font-bold text-4xl'
    whileTap={{scale:0.9}}
     onClick={onClick}>
      {values}
    </motion.button>
  )
}

export default Square
