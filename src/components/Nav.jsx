import React, { useState } from 'react'
import { link } from '../data'
import hero from '../images/hero.png'
import { FaLinkedinIn,FaTwitter } from "react-icons/fa";
import { RiMenu3Fill } from "react-icons/ri";
import { RxCross2 } from "react-icons/rx";
import leftStroke from '../images/leftStroke.png'
import rightStroke from '../images/rightStroke.png'


const Nav = () => 
{
  const [show,setShow] = useState(false)
  
  return(

  <nav className='px-10 py-4 flex justify-between items-center fixed z-40 top-0 w-full text-white'>
    <h1 className='text-xl  font-bold'>Crypto</h1>
    <div className='block md:hidden text-2xl z-50' onClick={()=> setShow(!show)}>
      {show ?<RxCross2 className='text-black'/>:<RiMenu3Fill />}
    </div>
    <ul className={` text-black font-bold flex w-[200px] h-[400px] md:hidden justify-between flex-col absolute ${show ? "right-0":"right-[-100%]"} duration-500 ease-in-out  top-0 py-10 px-8 rounded-bl-xl bg-[rgba(255,255,255,0.80)]`}>
      {link.map((data,index)=>(
          <a key={index}>{data.name}</a>
        ))}
    </ul>
    <ul className='hidden w-[550px] md:flex justify-between items-center'>
      {link.map((data,index)=>(
          <a key={index}>{data.name}</a>
        ))}
    </ul>
    <div className='hidden w-[200px] lg:flex justify-between items-center'>
      <div className='h-[30px] w-[30px] rounded-md bg-square border-[0.5px] border-[#14427A] flex justify-center items-center'>
        <FaLinkedinIn/>
      </div>
      <div className='h-[30px] w-[30px] rounded-md bg-square border-[0.5px] border-[#14427A] flex justify-center items-center'>
        <FaTwitter/>
      </div>
      <button className='bg-button px-5 py-3 flex justify-center items-center rounded-md'>Launch App</button>
    </div>
  </nav>
)}

export default Nav



