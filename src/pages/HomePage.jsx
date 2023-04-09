import React from 'react'
import StatesContext from '../context/StatesContext'
import { useContext } from 'react'
import Options from '../component/Options'
import { Link } from 'react-router-dom'

const HomePage = () => {

    //destructuring the context

    const {handleFirstChange, handleSecondChange, first, second} = useContext(StatesContext)

    let pointer = first==null || second==null ? 'not-allowed' : 'pointer'

    return ( 
        <div>
            {/* First Question */}

            <div onChange={handleFirstChange}>
                <div className='font-semibold text-xl'>
                What is your most frequently used means of travel from your home to work location?
                </div>
                <Options name={'first'} value={1} option={'Bus'}/>
                <Options name={'first'} value={4} option={'Metro'}/>
                <Options name={'first'} value={9} option={'Own Two-wheeler'}/>
                <Options name={'first'} value={8} option={'Own Car'}/>
                <Options name={'first'} value={2} option={'Walk / Bicycle'}/>
                <Options name={'first'} value={7} option={'Auto'}/>
                <Options name={'first'} value={5} option={'App based ride hailing cab services including Ola / Uber'}/>
            </div>
            <br />
            {/* Second Question */}
            <div onChange={handleSecondChange}>
                <div className='font-semibold text-xl mt-4'>
                What is the total distance between your home and workplace?
                </div>
                <Options name={'second'} value={1} option={<span>&lt; 5 km</span>}/>
                <Options name={'second'} value={2} option={'5- 10 km'}/>
                <Options name={'second'} value={3} option={'10- 15 km'}/>
                <Options name={'second'} value={4} option={'15- 20 km'}/>
                <Options name={'second'} value={5} option={'20- 25 km'}/>
                <Options name={'second'} value={6} option={<span>&gt; 25 km</span>}/>
            </div>
            <br />
            <div>
                <Link to='./mode-choice'>
                    <button className={`bg-[#FFCC66] py-2 px-10 mt-8 text-xl font-bold rounded-md cursor-${pointer}`}
                            disabled={first==null || second==null}
                    >
                        Submit
                    </button>
                </Link>
            </div>
        </div>
    )
    }

export default HomePage

