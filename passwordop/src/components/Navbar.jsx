import React from 'react'

const Navbar = () => {
  return (
    <nav className='bg-slate-800 text-white'>
      <div className="mycontainer flex justify-around items-center px-4 py-5 h-14">

      <div className="logo font-bold text-xl">
        <span className='text-purple-700'>&lt;</span>
        
        Pass<span className='text-purple-700'>OP/&gt;</span>
        </div>
      <button className='text-white bg-purple-500 my-5 rounded-full flex justify-center items-center ring-white ring-2'>
        <img className='invert w-10 p-1' src="/icons/github.svg" alt="github" />
        <span className='font-bold px-2'>GitHub</span>
      </button>
      </div>
    </nav>
  )
}

export default Navbar
