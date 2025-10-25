import React from 'react'

const Header = () => {
  return (
    <>
    
    
    <div className='h-50 w- w-full '>
      <h1 className='font-fredoka  font-normal p-14 text-5xl/15 '>Expert Coaching & <br /> facilities build for Success.</h1>
    </div>

    <div className='h-20 w-full pt-[0.5%]'>
<nav className='font-medium text-base flex gap-5 pl-[5%]'>
    <h4 className='bg-black text-pink-400 p-2 pl-10 pr-10 rounded-3xl'>Training </h4>
    <h4 className='bg-white text-gray-500 p-2 pl-5 pr-5 rounded-3xl border-1'>Competition</h4>
    <h4 className='bg-white text-gray-500 p-2 pl-5 pr-5 rounded-3xl border-1'>Friendly Match</h4>
    <h4 className='bg-white text-gray-500 p-2 pl-5 pr-5 rounded-3xl border-1'>Personal Time</h4>
    <h4 className='bg-white text-gray-500 p-2 pl-8 pr-8 rounded-3xl border-1 hover:to-blue-400 cursor-pointer'>Programs</h4>
</nav>

    </div>


    </>
    
  )
}

export default Header
