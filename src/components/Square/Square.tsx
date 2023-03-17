import React from 'react'

interface Props {
    square: string;
    squareIdx: number;
}

const Square:React.FC<Props> = ({square, squareIdx}) => {
  return (
    <div className='text-[32px] h-[48px] w-[48px] text-center bg-none cursor-pointer place-items-center mx-[2px]' style={{border: '2px solid #6EB9E3'}}>{square}</div>
  )
}

export default Square