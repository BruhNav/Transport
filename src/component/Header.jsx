import React from 'react'
import images from '../assets/images'
import { Link } from 'react-router-dom'
import StatesContext from '../context/StatesContext'
import { useContext } from 'react'

const { logo } = images

const Header = () => {

  const { resetInputs } = useContext(StatesContext)

  return (
    <div className='mb-10 flex font-bold text-2xl items-end'>
        <img src={logo} alt="" height={80} width={60}/>
        <button className='ml-12' onClick={resetInputs}>
          <Link to='./'>Home</Link>
        </button>
        <button className='ml-10'>
          Documentation
        </button>
        <button className='ml-10'>
          <a href="https://github.com/BruhNav/Transport">Github</a>
        </button>
    </div>
  )
}

export default Header