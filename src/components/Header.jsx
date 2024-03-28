import React from 'react'
import header from '../images/header.png'
import parallelogram from '../images/parallelogram.png'
import lupline from '../images/lupline.png'
import ldnline from '../images/ldnline.png'
import rupline from '../images/rupline.png'
import strtline from '../images/strtline.png'

// const i = [
//   {
//     heading:'Total Market Size',
//     price:'$605.04M'
//   }
// ]

const Header = () => {
  return (
    <header className='stats flex justify-between item-center w-full h-[70vh] bg-header'>/
      <div className='flex justify-between items-center text-white absolute right-[320px] gap-x-56'>
        <div>
          <h1 className='font-plusJatakaSans text-sm text-center leading-10'>Total Market Size</h1>
          <p className='font-poppins text-3xl'>$605.04M</p>
        </div>
        <div>
          <h1 className='font-plusJatakaSans text-sm text-center leading-10'>Total Market Size</h1>
          <p className='font-poppins text-3xl'>$605.04M</p>
        </div>
        <div>
          <h1 className='font-plusJatakaSans text-sm text-center leading-10'>Total Market Size</h1>
          <p className='font-poppins text-3xl'>$605.04M</p>
        </div>
      </div>
    </header>
  )
}

export default Header