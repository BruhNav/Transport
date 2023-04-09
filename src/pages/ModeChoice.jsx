import React, { useState } from 'react'
import { useContext } from 'react'
import StatesContext from '../context/StatesContext'
import Row from '../component/Row'
import zeroKm from '../Data/sample_db_0km.json'
import fiveKm from '../Data/sample_db_5km.json'
import tenKm from '../Data/sample_db_10km.json'
import fifteenKm from '../Data/sample_db_15km.json'
import twentyKm from '../Data/sample_db_20km.json'
import twentyFiveKm from '../Data/sample_db_25km.json'
import { MdOutlineBusAlert, MdOutlineDirectionsBusFilled, MdDirectionsWalk, MdAirlineSeatReclineNormal, MdAirlineSeatReclineExtra } from 'react-icons/md'
import { BsFillTrainFrontFill, BsCarFrontFill, BsFillTaxiFrontFill, BsSnow } from 'react-icons/bs'
import { RiMotorbikeFill }  from 'react-icons/ri'
import { FaUber } from 'react-icons/fa'



const ModeChoice = () => {

    const {first, second} = useContext(StatesContext)

    //random number 0 or 1 for determining the mode of transport
    const random = Math.round(Math.random())  

    let data


    //selecting json data for the selected distance in page 1

    if(second==1) data = zeroKm
    else if(second==2) data = fiveKm
    else if(second==3) data = tenKm
    else if(second==4) data = fifteenKm
    else if(second==5) data = twentyKm
    else if(second==6) data = twentyFiveKm


    const four = first != 9 && first !=8? 8+random : first
    const five = first != 7 && first !=5? 5+(2*random) : first


  return (
    <div>
        <div className='text-xl font-semibold mb-8'>
            Choose the mode of transportation:
        </div>

       <Row
            first={<label className='text-lg cursor-pointer'><input name='mode' className='mr-2' type="radio" />Bus Route 1 </label>}
            second={<label className='text-lg cursor-pointer'><input name='mode' className='mr-2' type="radio" />Bus Route 2 </label>}
            third={<label className='text-lg cursor-pointer'><input name='mode' className='mr-2' type="radio" />{data?.Data[0].mode_4}</label>}
            fourth={<label className='text-lg cursor-pointer'><input name='mode' className='mr-2' type="radio" />{data?.Data[0][`mode_${four}`]}</label>}
            fifth={<label className='text-lg cursor-pointer'><input name='mode' className='mr-2' type="radio" />{data?.Data[0][`mode_${five}`]}</label>}
       />

        <div className="bg-black flex justify-center items-center w-100% h-max text-white py-1 border border-white">
            Total travel time spent while inside the vehicle(s)
        </div>

        <Row
            first={<div className='flex flex-col items-center '>
                    {data?.Data[0]['mode_1.trans']} Tranfer
                    {data?.Data[0]['mode_1.trans'] ? 
                    <div className='flex'><MdOutlineBusAlert size={20}/>&gt;<MdOutlineDirectionsBusFilled size={20}/></div>
                    : <MdOutlineDirectionsBusFilled size={20}/>} 
                    {data?.Data[0]['mode_1.ivtt']} mins
                </div>
                }
            second={<div className='flex flex-col items-center '>
                    {data?.Data[0]['mode_2.trans']} Transfer
                    {data?.Data[0]['mode_2.trans'] ? 
                    <div className='flex'><MdOutlineBusAlert size={20}/>&gt;<MdOutlineDirectionsBusFilled size={20}/></div>
                    : <MdOutlineDirectionsBusFilled size={20}/>} 
                    {data?.Data[0]['mode_2.ivtt']} mins
                </div>
                }
            third={
                <div className='flex flex-col items-center  mt-4'>
                    {second == 1? 
                    <MdDirectionsWalk size={25}/> 
                    :<BsFillTrainFrontFill size={20}/>}
                    {data?.Data[0]['mode_4.ivtt']} mins
                </div>
                }
            fourth={
                <div className='flex flex-col items-center  mt-4'>
                    {data?.Data[0][`mode_${four}`] == "Own Car" ? <BsCarFrontFill size={22}/>: <RiMotorbikeFill size={22}/>}
                    {data?.Data[0][`mode_${four}.ivtt`]} mins
                </div>
                }
            fifth={
                <div className='flex flex-col items-center  mt-4'>
                    {data?.Data[0][`mode_${five}`] == "Ride-hailing Car" ? <FaUber size={22}/>: <BsFillTaxiFrontFill size={22}/>}
                    {data?.Data[0][`mode_${five}.ivtt`]} mins
                </div>}
                    
        />

        <div className="bg-black flex justify-center items-center w-100% h-max text-white py-1 border border-white">
            Total travel time spent outside the vehicle(s)
        </div>

        <Row
            first={
                <div className='flex flex-col items-center  mt-4'>
                    {data?.Data[0]['mode_1.waittime']+data?.Data[0]['mode_1.walktime']} mins
                </div>}
            second={
                <div className='flex flex-col items-center  mt-4'>
                    {data?.Data[0]['mode_2.waittime']+data?.Data[0]['mode_2.walktime']} mins
                </div>}
            third={
                <div className='flex flex-col items-center  mt-4'>
                    {data?.Data[0]['mode_4.waittime']+data?.Data[0]['mode_4.walktime']} mins
                </div>}
            fourth={
                <div className='flex flex-col items-center  mt-4'>
                    {data?.Data[0][`mode_${four}.waittime`]+data?.Data[0][`mode_${four}.walktime`]} mins
                </div>}
            fifth={
                <div className='flex flex-col items-center  mt-4'>
                    {data?.Data[0][`mode_${five}.waittime`]+data?.Data[0][`mode_${five}.walktime`]} mins
                </div>}
        />

        <div className="bg-black flex justify-center items-center w-100% h-max text-white py-1 border border-white">
            Possible delay due to traffic congestion or other uncertainties
        </div>

        <Row
            first={
                <div className='flex flex-col items-center  mt-4'>
                    ... up to {data?.Data[0]['mode_1.tvariab']} mins more
                </div>}
            second={
                <div className='flex flex-col items-center  mt-4'>
                    ... up to {data?.Data[0]['mode_2.tvariab']} mins more
                </div>}
            third={
                <div className='flex flex-col items-center  mt-4'>
                    ... up to {data?.Data[0]['mode_4.tvariab']} mins more
                </div>}
            fourth={
                <div className='flex flex-col items-center  mt-4'>
                    ... up to {data?.Data[0][`mode_${four}.tvariab`]} mins more
                </div>}
            fifth={
                <div className='flex flex-col items-center  mt-4'>
                    ... up to {data?.Data[0][`mode_${five}.tvariab`]} mins more
                </div>}
        />

        <div className="bg-black flex justify-center items-center w-100% h-max text-white py-1 border border-white">
            Total one-way cost of travel
        </div>

        <Row
            first={
                <div className='flex flex-col items-center  mt-4'>
                    Rs.{data?.Data[0]['mode_1.tcost']}
                </div>}
            second={
                <div className='flex flex-col items-center  mt-4'>
                    Rs.{data?.Data[0]['mode_2.tcost']}
                </div>}
            third={
                <div className='flex flex-col items-center  mt-4'>
                    Rs.{data?.Data[0]['mode_4.tcost']}
                </div>}
            fourth={
                <div className='flex flex-col items-center  mt-4'>
                    Rs.{data?.Data[0][`mode_${four}.tcost`]}
                </div>}
            fifth={
                <div className='flex flex-col items-center  mt-4'>
                    Rs.{data?.Data[0][`mode_${five}.tcost`]}
                </div>}
        />

        <div className="bg-black flex justify-center items-center w-100% h-max text-white py-1 border border-white">
            Extent of crowd in the vehicle
        </div>

        <Row
            first={
                <div className='flex flex-col items-center  mt-4'>
                    {data?.Data[0]['mode_1.crowd']==1 && "Many seats available"}
                    {data?.Data[0]['mode_1.crowd']==2 && "Some seats available"}
                    {data?.Data[0]['mode_1.crowd']==3 && "All seats occupied;standing space available"}
                    {data?.Data[0]['mode_1.crowd']==4 && "Fully crowded or packed"}
                </div>
            }
            second={
                <div className='flex flex-col items-center  mt-4'>
                    {data?.Data[0]['mode_2.crowd']==1 && "Many seats available"}
                    {data?.Data[0]['mode_2.crowd']==2 && "Some seats available"}
                    {data?.Data[0]['mode_2.crowd']==3 && "All seats occupied;standing space available"}
                    {data?.Data[0]['mode_2.crowd']==4 && "Fully crowded or packed"}
                </div>
            }
            third={
                <div className='flex flex-col items-center  mt-4'>
                    {data?.Data[0]['mode_4.crowd']==1 && "Many seats available"}
                    {data?.Data[0]['mode_4.crowd']==2 && "Some seats available"}
                    {data?.Data[0]['mode_4.crowd']==3 && "All seats occupied;standing space available"}
                    {data?.Data[0]['mode_4.crowd']==4 && "Fully crowded or packed"}
                </div>
            }
        />

        <div className="bg-black flex justify-center items-center w-100% h-max text-white py-1 border border-white">
            Service type
        </div>

        <Row
            first={
                <div className='flex flex-col items-center  mt-4'>
                    {data?.Data[0]['mode_1.serv']==1 && <div className='flex flex-col items-center'><MdAirlineSeatReclineNormal size={20}/>Ordinary</div> }
                    {data?.Data[0]['mode_1.serv']==2 && <div className='flex flex-col items-center'><MdAirlineSeatReclineExtra size={20}/>Express Non-AC</div> }
                    {data?.Data[0]['mode_1.serv']==3 && <div className='flex flex-col items-center'><BsSnow size={20}/>Express AC</div> }
                </div>
            }
            second={
                <div className='flex flex-col items-center  mt-4'>
                    {data?.Data[0]['mode_2.serv']==1 && <div className='flex flex-col items-center'><MdAirlineSeatReclineNormal size={20}/>Ordinary</div> }
                    {data?.Data[0]['mode_2.serv']==2 && <div className='flex flex-col items-center'><MdAirlineSeatReclineExtra size={20}/>Express Non-AC</div> }
                    {data?.Data[0]['mode_2.serv']==3 && <div className='flex flex-col items-center'><BsSnow size={20}/>Express AC</div> }
                </div>
            }
        />


    </div>
    
  )
}

export default ModeChoice