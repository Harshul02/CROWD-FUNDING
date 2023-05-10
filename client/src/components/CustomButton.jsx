import React from 'react'

const CustomButton = ({ btnType, title, handleClick, styles,disable }) => {
  return (
    <button
      type={btnType}
      className={`font-epilogue font-semibold text-[14px] leading-[26px] text-white min-h-[40px] mx-h-[20px] px-4 rounded-[28px] ${styles}`}
      onClick={handleClick}
      disabled={!disable}
    >
      {title}
    </button>
  )
}

export default CustomButton