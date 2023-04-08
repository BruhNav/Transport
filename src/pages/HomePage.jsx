import React from 'react'
import Header from '../component/Header'
import ModeChoice from './ModeChoice'

const HomePage = () => {


    const [first, setFirst] = React.useState(0)

    const [second, setSecond] = React.useState(0)

    const handleFirstChange = (e) => {
        setFirst(e.target.value)
    }
    const handleSecondChange = (e) => {
        setSecond(e.target.value)
    }

  return (
    <div>
        <Header />

        {/* First Question */}

        <div onChange={handleFirstChange}>
            <div className='font-semibold text-xl'>
            What is your most frequently used means of travel from your home to work location?
            </div>
            <div className='flex mt-4'>
                <label className='text-lg font-semibold ml-2 transition duration-500 hover:scale-110'>
                <input className='mr-2' type="radio" name='first' value={1}/>Bus</label>
            </div>
            <div className='flex mt-4'>
                <label className='text-lg font-semibold ml-2 transition duration-500 hover:scale-110'>
                <input className='mr-2' type="radio" name='first' value={2}/>Metro</label>
            </div>
            <div className='flex mt-4'>
                <label className='text-lg font-semibold ml-2 transition duration-500 hover:scale-110'>
                <input className='mr-2' type="radio" name='first' value={3}/>Own Two-wheeler</label>
            </div>
            <div className='flex mt-4'>
                <label className='text-lg font-semibold ml-2 transition duration-500 hover:scale-110'>
                <input className='mr-2' type="radio" name='first' value={4}/>Own Car</label>
            </div>
            <div className='flex mt-4'>
                <label className='text-lg font-semibold ml-2 transition duration-500 hover:scale-110'>
                <input className='mr-2' type="radio" name='first' value={5}/>Walk / Bicycle</label>
            </div>
            <div className='flex mt-4'>
                <label className='text-lg font-semibold ml-2 transition duration-500 hover:scale-110'>
                <input className='mr-2' type="radio" name='first' value={6}/>Auto</label>
            </div>
            <div className='flex mt-4'>
                <label className='text-lg font-semibold ml-2 transition duration-500 hover:scale-105'>
                <input className='mr-2' type="radio" name='first' value={7}/>App based ride hailing cab services including Ola / Uber</label>
            </div>
        </div>
        <br />
        {/* Second Question */}
        <div onChange={handleSecondChange}>
            <div className='font-semibold text-xl mt-4'>
            What is the total distance between your home and workplace?
            </div>
            <div className='flex mt-4'>
                <label className='text-lg font-semibold ml-2 transition duration-500 hover:scale-110'>
                <input className='mr-2' type="radio" name='first' value={1}/>&lt; 5 km</label>
            </div>
            <div className='flex mt-4'>
                <label className='text-lg font-semibold ml-2 transition duration-500 hover:scale-110'>
                <input className='mr-2' type="radio" name='first' value={2}/>5 - 10 km</label>
            </div>
            <div className='flex mt-4'>
                <label className='text-lg font-semibold ml-2 transition duration-500 hover:scale-110'>
                <input className='mr-2' type="radio" name='first' value={3}/>10- 15 km</label>
            </div>
            <div className='flex mt-4'>
                <label className='text-lg font-semibold ml-2 transition duration-500 hover:scale-110'>
                <input className='mr-2' type="radio" name='first' value={4}/>15- 20 km</label>
            </div>
            <div className='flex mt-4'>
                <label className='text-lg font-semibold ml-2 transition duration-500 hover:scale-110'>
                <input className='mr-2' type="radio" name='first' value={5}/>20- 25 km</label>
            </div>
            <div className='flex mt-4'>
                <label className='text-lg font-semibold ml-2 transition duration-500 hover:scale-110'>
                <input className='mr-2' type="radio" name='first' value={6}/>&gt; 25 km</label>
            </div>
        </div>
    </div>
  )
}

export default HomePage


// transition duration-500 hover:scale-110