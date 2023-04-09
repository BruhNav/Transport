import React from 'react'

const Row = (props) => {
  return (
    <div className='w-100% flex justify-between text-center'>
        <div className='w-[19.9%] h-16 border-2 border-black font-bold text-sm bg-[#F0FFF0]'>
          {props.first}
        </div>
        <div className='w-[19.9%] h-16 border-2 border-black font-bold text-sm bg-[#87CEEB]'>
          {props.second}
        </div>
        <div className='w-[19.9%] h-16 border-2 border-black font-bold text-sm bg-[#F0FFF0]'>
          {props.third}
        </div>
        <div className='w-[19.9%] h-16 border-2 border-black font-bold text-sm bg-[#87CEEB]'>
          {props.fourth}
        </div>
        <div className='w-[19.9%] h-16 border-2 border-black font-bold text-sm bg-[#F0FFF0]'>
          {props.fifth}
        </div>
    </div>
  )
}

export default Row