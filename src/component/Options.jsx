import React from 'react'

const Options = (props) => {
  return (
    <div className='flex mt-1'>
        <label className='text-lg p-2 rounded-lg font-semibold pl-2 transition duration-100 hover:bg-[#FFEF00] cursor-pointer'>
        <input className='mr-2' type="radio" name={props.name} value={props.value}/>{props.option}</label>
    </div>
  )
}

export default Options