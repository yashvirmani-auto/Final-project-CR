"use client";

import React from 'react'
import { SubmitButtonProps } from '@/types/index';

const SubmitButton = ({containerStyles,handleClick}:SubmitButtonProps) => {
  return (
    <button
    className={`custom-btn ${containerStyles}`}
    onClick={handleClick}
    >
        <span className='flex-1'>
            Welcome
        </span>
    </button>
  )
}

export default SubmitButton