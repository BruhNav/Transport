import React from 'react'
import images from '../assets/images'

const { logo } = images

const Header = () => {
  return (
    <div className='mb-10 flex font-bold text-2xl items-end'>
        <img src={logo} alt="" height={80} width={60}/>
        <div className='ml-12'>Home</div>
        <div className='ml-10'>Documentation</div>
        <div className='ml-10'>Github</div>
    </div>
  )
}

export default Header