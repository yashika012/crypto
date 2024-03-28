import React from 'react'
import icon4 from '../images/icon4.png'
import icon5 from '../images/icon5.png'
import icon6 from '../images/icon6.png'
// import circle from '../images/circle.png'
import rectangle from '../images/rectangle.png'
import leftarrow from '../images/leftarrow.png'
import rightarrow from '../images/rightarrow.png'
import line from '../images/Line.png'

const Section2 = () => {
  return (
    <section className='flex justify-between items-center w-full min-h-screen bg-section2 relative'>
    <div className='w-[400px] h-[87px] bg-leftrect absolute top-44 rotate-139 overflow-hidden'></div>
    <div className='w-[350px] h-[87px] bg-rightrect absolute top-44 right-0 rotate-43 overflow-hidden'></div>
    <div className='flex flex-col text-center pl-[400px] pt-14 w-[1150px]'>
      <h1 className='text-white font-poppins text-4xl pb-5 '>
      Industry Loading Rewards
      </h1>
      <p className='text-white font-plusJakataSans text-xl'>
      Contrary to popular belief, Lorem Ipsum is not simply random text.  45 BC text is
      It has roots in a piece
      </p>
      <div className='flex justify-between items-center pt-28 w-[800px]'>
        <img src={leftarrow} alt="left arrow" />
        <div className='flex flex-col '>
        <div  className='w-[101.569px] h-[104.694px] rounded-full bg-[#0B171F] flex items-center justify-center'>
        <img src={icon4} alt="icon4" className='absolute'/>
        </div>
        <p className='text-white font-plusJakataSans text-xl '>Better Uptime</p>
        </div>
        <img src={line} alt="line" />
        <div className='flex flex-col '>
        <div  className='w-[101.569px] h-[104.694px] rounded-full bg-[#0B171F] flex items-center justify-center'>
        <img src={icon5} alt="icon5"/>
        </div>
        <p className='text-white font-plusJakataSans text-xl '>Blocksec</p>
        </div>
        <img src={line} alt="line" />
        <div className='flex flex-col'>
        <div  className='w-[101.569px] h-[104.694px] rounded-full bg-[#0B171F] flex items-center justify-center'>
        <img src={icon6} alt="icon6"/>
        </div>
        <p className='text-white font-plusJakataSans text-xl'>Better Uptime</p>
        </div>
        <img src={rightarrow} alt="right arrow" />
      </div>
      <div className='relative'>
      <img src={rectangle} alt="rectangle"/>
      <p className='text-white font-plusJakataSans text-lg absolute bottom-5 w-[600px] left-16'>
      Contrary to popular belief, Lorem Ipsum is not simply random text.  45 BC text is
      It has roots in a piece
      </p>
      </div>
    </div>
    </section>
  )
}

export default Section2