import React from 'react'
import { FaQuestion } from "react-icons/fa6";
import { FaArrowDown } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa";
import { FaArrowUp } from "react-icons/fa";
import line2 from '../images/Line2.png'

const Section5 = () => {
  return (
    <section className='flex flex-col items-center w-full min-h-screen gap-y-5 bg-[#0C0B12]'>
    <div className='flex flex-col mt-5 text-white font-inter'>
      <h1 className='text-heading font-bold'>
      Frequently Asked Questions
      </h1>
      <p className=' w-[547px] leading-10 text-sm text-center'>
      Questions and Answers, are listed questions and answers, all supposed to be
      commonly asked in some context.
      </p>
    </div>
    <div className='flex flex-col border-2 border-cyan-800 w-[935px] text-white mb-3'>
      <div className='flex justify-between items-center h-[90px] px-6'>
      <div className='flex justify-between items-center w-[250px]'>
      <div  className='w-[42px] h-[42px] bg-smallCircle rounded-full flex justify-center items-center'>
      <FaQuestion/>
      </div>
      <h3 className='font-inter font-bold text-base'>What is crypto capital?</h3>
      </div>
      <div className='flex justify-between items-center'>
      <FaArrowDown/>
      </div>
      </div>
      <img src={line2} alt="line" />
      <div className='flex justify-between items-center h-[120px] bg-cube'>
      <p className='text-white font-inter text-sm w-[740px] ml-6'>
      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the 
      industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
      scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap 
      into electronic typesetting.
      </p>
      </div>
      <img src={line2} alt="line" />
      <div className='flex justify-between items-center h-[90px] px-6'>
      <div className='flex justify-between items-center w-[325px]'>
      <div  className='w-[42px] h-[42px] bg-smallCircle rounded-full flex justify-center items-center'>
      <FaQuestion/>
      </div>
      <h3 className='font-inter font-bold text-base'>Where are the verified contacts?</h3>
      </div>
      <div className='flex justify-between items-center'>
      <FaArrowRight/>
      </div>
      </div>
      <img src={line2} alt="line" />
      <div className='flex justify-between items-center h-[90px] px-6'>
      <div className='flex justify-between items-center w-[325px]'>
      <div  className='w-[42px] h-[42px] bg-smallCircle rounded-full flex justify-center items-center'>
      <FaQuestion/>
      </div>
      <h3 className='font-inter font-bold text-base'>How is daily revenue distributed?</h3>
      </div>
      <div className='flex justify-between items-center'>
      <FaArrowRight/>
      </div>
      </div>
      <img src={line2} alt="line" />
      <div className='flex justify-between items-center h-[90px] px-6'>
      <div className='flex justify-between items-center w-[540px]'>
      <div  className='w-[42px] h-[42px] bg-smallCircle rounded-full flex justify-center items-center'>
      <FaQuestion/>
      </div>
      <h3 className='font-inter font-bold text-base'>Why dose the website occasionally not display certain data?</h3>
      </div>
      <div className='flex justify-between items-center'>
      <FaArrowRight/>
      </div>
      </div>
    </div>
      <div className='flex justify-center items-center relative'>
      <img src={line2} alt="line" />
      <div  className='w-[42px] h-[42px] text-white bg-smallCircle rounded-full flex justify-center items-center absolute right-[450px]'>
      <FaArrowUp />
      </div>
      </div>
    </section>
  )
}

export default Section5