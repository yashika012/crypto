import React from 'react'

const Hero = () => {
  return (
    <section className='w-full min-h-[80vh] hero bg-no-repeat bg-cover bg-center flex items-center justify-center'>
      <div className='text-center flex flex-col justify-center items-center gap-7 text-white w-full'>
         <h1 className='font-poppins text-xl min:text-2xl sm:text-4xl lg:text-5xl w-[300px] min:w-[400px] sm:w-[600px] lg:w-[800px] font-bold leading-normal'>
         Multi-Blockchain DeFi Earn And
          Borrow Across Network
          </h1> 
          <p className='font-plusJakataSans text-xs min:text-sm sm:text-md lg:text-lg  w-[350px] sm:w-[500px] lg:w-[650px]'>
          Contrary to popular belief, Lorem Ipsum is not simply random text.  45 BC text is
          It has roots in a piece of classical Latin literature from 45 BC text is
          </p>
          <button className='bg-button text-md sm:text-lg md:text-xl font-poppins px-4 py-2 sm:px-6 sm:py-3 md:px-8 md:py-5 rounded-sm'>Launch App</button>
    </div>
    </section>
  )
}

export default Hero