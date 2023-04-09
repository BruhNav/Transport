import React from 'react'
import images from '../assets/images'
import { Link } from 'react-router-dom'
import StatesContext from '../context/StatesContext'
import { useContext } from 'react'

const { logo } = images

const Header = () => {

  //getting the resetInputs function from the context

  const { resetInputs } = useContext(StatesContext)

  return (
    <div className='mb-10 flex font-bold text-2xl items-end'>

        <img src={logo} alt="" height={80} width={60}/>

        {/*on click the input is reset since the user wants to go back and change the response */}

        <button className='ml-12' onClick={resetInputs}>
          <Link to='./'>Home</Link>
        </button>

        <button className='ml-10'>
          <a target='_blank' href="https://drive.google.com/file/d/1-tcDFCNE0qgX7zlvBA39luqRZDpKzgPf/view?usp=sharing">Documentation</a> 
        </button>

        <button className='ml-10'>
          <a target='_blank' href="https://github.com/BruhNav/Transport">Github</a>
        </button>
    </div>
  )
}

export default Header