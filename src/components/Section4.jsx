import React from 'react'
import img from '../images/img.png'

const Section4 = () => {
  return (
    <section className='flex flex-col items-center bg-[#100E17] w-full h-[70vh] relative'>
    <div className='w-[251px] h-[254px] bg-[#0F2835] blur-[125px] absolute left-0'></div>
    <div className='w-[251px] h-[254px] bg-[#0F2835] blur-[125px] absolute right-0'></div>
    <div className='flex flex-col items-center text-white'>
    <h1 className='font-poppins text-5xl pb-7'>Our Mission</h1>
    <p className='text-base font-plusJakataSans w-[600px] text-center pb-5'>
    Contrary to popular belief, Lorem Ipsum is not simply random text.45 BC text is
    It has roots in a piece
    </p>
    </div>
    <div className='flex items-center'>
    <div className='flex flex-col text-white text-xl border-2 border-cyan-800 border-r-0'>
    <p className='w-[277px] h-[73px] bg-smallBox pl-4 border-b-2 border-b-cyan-900'>Unify</p>
    <p className='w-[277px] h-[73px] #100E17 pl-4 border-b-2 border-b-cyan-900'>Simplify</p>
    <p className='w-[277px] h-[73px] #100E17 pl-4 border-b-2 border-b-cyan-900'>Innovate</p>
    </div>
    <div className='flex justify-between items-center w-[850px] h-[225px] bg-box rounded-r-lg '>
      <p className='text-white text-sm font-inter w-[333px] h-[60px] ml-20'>
        Lorem Ipsum is simply dummy text of the printing and 
        typesetting industry. Lorem Ipsum has been the industry's 
        standard dummy text ever since the 1500s, when an
        unknown.
     </p>
     <img src={img} alt="image" />
    </div>
    </div>
    </section>
  )
}

export default Section4