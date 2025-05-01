import React from 'react'
import { assets } from '@/assets/assets'
import Image from 'next/image'

const Education = () => {
  return (
    <div id='education' className='w-full px-[12%] py-10 scroll-mt-20'>
      <h2 className='text-center text-5xl font-Ovo'>Education</h2>
      
      <div className='flex flex-col lg:flex-row gap-6 my-20 justify-center'>
        {/* Left column - Large Bachelor's Degree Box */}
        <div className='lg:w-1/2 border-[0.5px] border-gray-400 rounded-xl p-6 cursor-pointer 
             hover:bg-gray-50 hover:-translate-y-1 duration-500 hover:shadow-lg'>
          <div className='flex items-center mb-4'>
            <Image src={assets.ubc_logo} alt='UBC icon' width={50} height={50} className='w-10 h-10 mr-3'/>
            <p className='font-Outfit font-semibold text-gray-700'>The University of British Columbia</p>
          </div>
          <h3 className='text-xl font-semibold mb-2'>Bachelor of Science</h3>
          <p className='mb-4 font-Outfit text-gray-600'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
          <div className='flex justify-between text-sm text-gray-500'>
            <span>September 2022 - May 2026</span>
            <span>GPA: 3.8</span>
          </div>
        </div>
        
        {/* Right column - Three stacked boxes */}
        <div className='lg:w-1/2 flex flex-col gap-3'>
          {/* First certificate box */}
          <div className='flex-1 border-[0.5px] border-gray-400 rounded-xl p-4 cursor-pointer
               hover:bg-gray-50 hover:-translate-y-1 duration-500 hover:shadow-lg'>
            <div className='flex items-center'>
              <Image src={assets.fortinet_logo} alt='Certificate icon' width={50} height={20} className='w-8 h-8 mr-3'/>
              <div>
                <h3 className='font-semibold'>TCPS Research Ethics</h3>
                <p className='text-sm text-gray-600'>Certificate • 2025</p>
              </div>
            </div>
          </div>
          
          {/* Second certificate box */}
          <div className='flex-1 border-[0.5px] border-gray-400 rounded-xl p-4 cursor-pointer
               hover:bg-gray-50 hover:-translate-y-1 duration-500 hover:shadow-lg'>
            <div className='flex items-center'>
              <Image src={assets.fortinet_logo} alt='Certificate icon' width={40} height={40} className='w-8 h-8 mr-3'/>
              <div>
                <h3 className='font-semibold'>FORTINET Cybersecurity</h3>
                <p className='text-sm text-gray-600'>Certificate • 2024</p>
              </div>
            </div>
          </div>
          
          {/* Third certificate box */}
          <div className='flex-1 border-[0.5px] border-gray-400 rounded-xl p-4 cursor-pointer
               hover:bg-gray-50 hover:-translate-y-1 duration-500 hover:shadow-lg'>
            <div className='flex items-center'>
              <Image src={assets.ubc_logo} alt='Certificate icon' width={40} height={40} className='w-8 h-8 mr-3'/>
              <div>
                <h3 className='font-semibold'>Data Science & Analytics</h3>
                <p className='text-sm text-gray-600'>Certificate • 2021</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Education