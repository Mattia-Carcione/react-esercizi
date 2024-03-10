import React from 'react'
import { BsStar, BsStarFill, BsStarHalf } from "react-icons/bs";

const ratingCreator = (number) => {
  return Array.from({length: 5}, (_, index) => {
    if (number >= index + 1) {
        return <BsStarFill key={index} className='star' fill='#fca903' />
    } else if (number >= index + 0.5) {
        return <BsStarHalf key={index} className='star' fill='#fca903' />
    } else {
        return <BsStar key={index} className='star' fill='#fca903' />
    }
  })
}

export default ratingCreator