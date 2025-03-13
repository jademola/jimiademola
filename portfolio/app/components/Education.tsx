import React from 'react'
import { assets } from '@/assets/assets'
import Image from 'next/image'

const Education = () => {
  return (
    <div id='education' className='w-full px-[12%] py-10 scroll-mt-20'>
        <h2 className='text-center text-5xl font-Ovo'>Education</h2>

        <div className='flex w-full flex-col lg:flex-row items-center gap-10 my-20 justify-center '>
            <div className='border-[0.5px] border-gray-400 rounded-xl p-6 cursor-pointer 
                        hover:bg-lightHover hover:-translate-y-1 duration-500 hover:shadow-black'>
                <Image src={assets.ubc_logo} alt='UBC icon' className='w-[10%] inline'/>
                <p className='mb-10 max-w-2xl font-Outfit font-semibold text-gray-700 inline'>The University of British Columbia</p>
                <p className='mb-10 max-w-2xl font-Outfit text-gray-600'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
            </div>
            <div className='border-[0.5px] border-gray-400 rounded-xl p-6 cursor-pointer 
                        hover:bg-lightHover hover:-translate-y-1 duration-500 hover:shadow-black'>
                <Image src={assets.ubc_logo} alt='UBC icon' className='w-[10%]'/>
            </div>
            <div className='border-[0.5px] border-gray-400 rounded-xl p-6 cursor-pointer 
                        hover:bg-lightHover hover:-translate-y-1 duration-500 hover:shadow-black'>
                <Image src={assets.ubc_logo} alt='UBC icon' className='w-[10%]'/>
            </div>
            
        </div>
    </div>
  )
}

export default Education