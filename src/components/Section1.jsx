import React from 'react'
import leftStroke from '../images/leftStroke.png'
import square from '../images/square.png'
import plus from '../images/plus.png'
import icon1 from '../images/icon1.png'
import icon2 from '../images/icon2.png'
import icon3 from '../images/icon3.png'


const Section1 = () => {
  return (
    <section className='flex justify-between items-center w-full h-[80vh] bg-[#100E17] relative'>
    <div className='bg-circle absolute w-[350px] h-[350px] blur-[100px] left-44'></div>
    <div className='flex flex-col mx-28 gap-7'>
      <h1 className='text-5xl text-white font-poppins leading-normal'>
      0%<superscript className='align-super text-lg text-white font-plusJakataSans'>APR</superscript>
      <br />
      Industry Loading Rewards
      </h1>
      <p className='text-lg text-white font-plusJakataSans w-[670px]'>
      Contrary to popular belief, Lorem Ipsum is not simply random text.  45 BC text is
      It has roots in a piece
      </p>
    <img src={leftStroke} alt="left stroke"  className='absolute left-72 top-24'/>
    </div>
    <div className='mr-32'>
      <img src={square} alt="sqaure" className='absolute right-32 bottom-40' />
      <img src={plus} alt="plus" className='absolute bottom-40 right-32' />
      <div className='flex flex-col justify-between items-center w-[430px] h-[278px]'>
   <div className='flex justify-between items-center w-[400px]'>
   <div className='flex flex-col  text-white'>
        <div className='flex justify-evenly items-center'>
        <img src={icon1} alt="icon1" />
        <h1 className='text-4xl font-poppins'>USDC</h1>
        </div>
        <p className='text-3xl font-plusJakataSans'>0%</p>
      </div>
      <div className=' flex flex-col  text-white'>
        <div className='flex justify-evenly items-center'>
        <h1 className='text-4xl font-poppins'>USDC</h1>
        </div>
        <p className='text-3xl font-plusJakataSans'>0%</p>
      </div>
   </div>
  <div className='flex justify-between items-center w-[400px] pb-7'>
  <div className='flex flex-col  text-white'>
        <div className='flex justify-evenly items-center'>
        <img src={icon2} alt="icon2" />
        <h1 className='text-4xl font-poppins'>ETH</h1>
        </div>
        <p className='text-3xl font-plusJakataSans'>0%</p>
      </div>
      <div className='flex flex-col  text-white'>
        <div className='flex justify-evenly items-center'>
        <img src={icon3} alt="icon3" />
        <h1 className='text-4xl font-poppins'>BNB</h1>
        </div>
        <p className='text-3xl font-plusJakataSans'>0%</p>
      </div>
  </div>
      </div>
    </div>
    </section>
  )
}

export default Section1