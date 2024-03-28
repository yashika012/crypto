import React from 'react'
import { FaFacebookF } from "react-icons/fa";//<FaFacebookF />
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";//<FaInstagram />
import { FaTwitter } from "react-icons/fa";
import { IoIosSend } from "react-icons/io";

const Footer = () => {
  return (
    <footer className='flex justify-between items-center w-full h-[50vh] bg-footer font-poppins text-white px-32'>
    <div className='flex flex-col justify-between w-[240px] h-[200px]'>
    <h1 className=' bg-logo text-transparent bg-clip-text text-3xl font-bold font-poppins'>
      Crypto
    </h1>
    <p className='text-sm'>
    Block Sec focuses on the security of the 
    whole life cycle of smart contracts,
    specializing in rigorous testing
    </p>
    <div className='flex justify-between items-center'>
    <FaFacebookF className='w-10 h-9 bg-button rounded-md'/> 
    <FaLinkedinIn className='w-10 h-9 bg-square rounded-md' />
    <FaTwitter  className='w-10 h-9 bg-square rounded-md'/>
    <FaInstagram className='w-10 h-9 bg-square rounded-md'/>
    </div>
    </div>
    <div className='flex flex-col justify-between w-[130px] h-[200px] text-sm leading-10'>
      <ul>
        <li className='font-bold'>Useful Links</li>
        <li>Governance</li>
        <li>Security</li>
        <li>Documentation</li>
        <li>FAQ</li>
      </ul>
    </div>
    <div className='flex flex-col justify-between w-[130px] h-[200px] text-sm leading-10'>
      <ul>
        <li className='font-bold'>Community</li>
        <li>Governance</li>
        <li>Security</li>
        <li>Partners</li>
        <li>Suggestion</li>
      </ul>
    </div>
    <div className='flex flex-col justify-between w-[265px] h-[200px] text-sm '>
      <h1 className='font-bold'>
      join Our Community
      </h1>
      <p>
      Joining a community is a wonderful way to 
      connect with like-minded individuals, share 
      common interests.
      </p>
      <div className='flex justify-between items-center w-[288px] h-[48px] text-sm bg-bigbtn rounded-lg px-5'>
        <p className='w-[73px] text-xs'>Enter E-mail</p>
        <div className='w-10 h-9 bg-button rounded-md flex items-center justify-center'>
        <IoIosSend className='text-2xl'/>
        </div>
      </div>
    </div>
    </footer>
  )
}

export default Footer