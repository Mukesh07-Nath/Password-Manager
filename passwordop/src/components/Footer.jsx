import React from 'react'

const Footer = () => {
    return (
        <div className='bg-slate-800 flex flex-col justify-center items-center  w-full'>
            <div className="logo font-bold text-xl text-white">
                <span className='text-purple-700'>&lt;</span>

                Pass<span className='text-purple-700'>OP/&gt;</span>
            </div>
            <div className='flex justify-center items-center text-white'>
                Created with <img className='w-5 mx-1' src="icons/heart.png" alt="" /> Code by Mukesh
            </div>
        </div>
    )
}

export default Footer
