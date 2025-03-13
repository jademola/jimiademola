import { assets, infoList } from '@/assets/assets';
import Image from 'next/image';
import React from 'react'
import Typewriter from 'typewriter-effect';

const About = () => {
    return (
        <div id='about' className='w-full px-[12%] py-10 scroll-mt-20'>
            <h4 className='text-center mb-2 text-lg font-Ovo'>Introduction</h4>
            <h2 className='text-center text-5xl font-Ovo'>About Me</h2>

            

            <div className='flex w-full flex-col lg:flex-row items-center gap-20 my-20 '>
                <div className='w-64 sm:w-80 rounded-3xl max-w-none'>
                    {/* change this photo */}
                    <Image src={assets.user_image} alt='Jimi Ademola presenting for the Kingsland Children Charity' className='w-full rounded-3xl' />
                </div>
                <div className='flex-1'>
                    <p className='mb-10 max-w-2xl font-Ovo'>
                        I am currently a student at the University of British Columbia looking to gain experience and apply my skills
                        to improve your team or product. Additionally, I do freelance photography work. Excited to grow my career and see
                        where the road takes me.
                    </p>

                    <ul className='grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl'>
                        {infoList.map(({ icon, iconDark, title, description }, index) => (
                            <li className='border-[0.5px] border-gray-400 rounded-xl p-6 cursor-pointer 
                        hover:bg-lightHover hover:-translate-y-1 duration-500 hover:shadow-black'
                                key={index}>
                                <Image src={icon} alt={title} className='w-7 mt-3' />
                                <h3 className='my-4 font-semibold text-gray-700'>{title}</h3>
                                <p className='text-gray-600 text-sm'>{description}</p>
                            </li>
                        ))}
                    </ul>

                </div>
            </div>
        </div>
    )
}

export default About;