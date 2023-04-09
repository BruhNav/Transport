import React from 'react'

const Options = (props) => {
  return (
    <div className='flex mt-4'>
        <label className='text-lg font-semibold ml-2 transition duration-100 hover:text-[#FFCC66]'>
        <input className='mr-2' type="radio" name={props.name} value={props.value}/>{props.option}</label>
    </div>
  )
}

export default Options