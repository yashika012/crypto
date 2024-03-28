import React from 'react'
import leftStroke from '../images/leftStroke.png'
import rightStroke from '../images/rightStroke.png'
import icon7 from '../images/icon7.png'
import icon8 from '../images/icon8.png'
import icon9 from '../images/icon9.png'
import line from '../images/Line.png'

const Section3 = () => {
  return (
    <section className='flex justify-between items-center w-full h-[70vh] bg-[#100E17] relative'>
    <div className='w-[251px] h-[254px] bg-[#0F2835] blur-[125px] left-0'></div>
    <div className='w-[251px] h-[254px] bg-[#0F2835] blur-[125px] right-0'></div>
    <img src={leftStroke} alt="leftStroke" className='absolute left-10 top-20'/>
    <img src={rightStroke} alt="rightStroke" className='absolute right-10 top-20'/>
    <div className='flex flex-col justify-center items-center text-white'>
      <h1 className='font-poppins text-5xl font-bold pb-10'>How It Works</h1>
      <div className='flex gap-16 font-poppins text-2xl'>
        <p className='bg-paragraph text-transparent bg-clip-text'>RDNT Lockers</p>
        <p>Lenders & Borrowers</p>
      </div>
      <div className='flex justify-between items-center'>
        <div className='flex flex-col items-center w-[500px] text-white'>
          <img src={icon7} alt="icon7" className='w-[130px]' />
          <h2 className=' font-poppins text-base'>Lock $RDNT liquidity</h2>
          <p className=' font-plusJakataSans text-sm w-[390px] text-center'>Contrary  popular  belief, Lorem  Ipsum is not simply random 
             It has roots in a piece
          </p>
        </div>
        <img src={line} alt="line" />
        <div className='flex flex-col items-center w-[500px]  text-white'>
          <img src={icon8} alt="icon8" className='w-[70px]' />
          <h2 className='font-poppins text-base'>Lock $RDNT liquidity</h2>
          <p className='font-plusJakataSans text-sm w-[390px] text-center'>Contrary  popular  belief, Lorem  Ipsum is not simply random 
             It has roots in a piece
          </p>
        </div>
        <img src={line} alt="line" />
        <div className='flex flex-col items-center w-[500px]  text-white'>
          <img src={icon9} alt="icon9" className='w-[85px]' />
          <h2 className='font-poppins text-base'>Lock $RDNT liquidity</h2>
          <p className='font-plusJakataSans text-sm w-[390px] text-center'>Contrary  popular  belief, Lorem  Ipsum is not simply random 
             It has roots in a piece
          </p>
        </div>

      </div>
    </div>
    </section>
  )
}

export default Section3