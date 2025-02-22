import { assets } from '@/assets/assets'
import Image from 'next/image'
import React, {useRef} from 'react'

const Navbar = () => {
    const sideMenuReference = useRef<HTMLUListElement>(null);
    const openMenu = ()=>{
        if (sideMenuReference.current) {
            sideMenuReference.current.style.transform = 'translateX(-16rem)'
        }
    }
    const closeMenu = ()=>{
        if (sideMenuReference.current) {
            sideMenuReference.current.style.transform = 'translateX(16rem)'
        }
    }
  
    return (
    <div>
        <div className='fixed top-0 right-0 w-11/12 -z-10 translate-y-[-80%]'>
            <Image src={assets.header_bg_color} alt='' className='w-full'/>
        </div>
        <nav className='w-full fixed px-5 lg:px-8 xl:py-4 flex items-center justify-between z-50'>
            <a href="#top">
                <Image src={assets.logo} className='w-28 cursor-pointer mr-14 ' alt=''/>
            </a>

            <ul className='hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3 bg-white shadow-sm bg-opacity-50'>
                <li><a className='font-Ovo' href="#top">Home</a></li>
                <li><a className='font-Ovo' href="#about">About Me</a></li>
                <li><a className='font-Ovo' href="#experiences">Experiences</a></li>
                <li><a className='font-Ovo' href="#work">My Work</a></li>
                <li><a className='font-Ovo' href="#stack">Tech Stack</a></li>
            </ul>

            <div className='flex items-center gap-4'>
                <button>
                    <Image src={assets.moon_icon} alt='' className='w-6' />
                </button>
                <a href="#contact" className='hidden lg:flex items-center gap-3 px-10 border border-gray-500 rounded-full ml-4 font-Ovo'>Contact <Image src={assets.arrow_icon} className='w-3' alt='' /></a>

                <button className='block md:hidden ml-3'>
                    <Image src={assets.menu_black} alt='' className='w-6' onClick={openMenu} />
                </button>
            </div>

            {/* menu for mobile devices */}

            <ul ref={sideMenuReference} className='flex md:hidden flex-col gap-4 py-20 px-10 fixed -right-64 top-0 bottom-0 w-64 z-50 h-screen bg-rose-50 transition duration-500'>
               <div className='absolute right-6 top-6' onClick={closeMenu}>
                <Image src={assets.close_black} alt='' className='w-5 cursor-pointer' />
               </div>
               
                <li><a className='font-Ovo' onClick={closeMenu} href="#top">Home</a></li>
                <li><a className='font-Ovo' onClick={closeMenu} href="#about">About Me</a></li>
                <li><a className='font-Ovo' onClick={closeMenu} href="#experiences">Experiences</a></li>
                <li><a className='font-Ovo' onClick={closeMenu} href="#work">My Work</a></li>
                <li><a className='font-Ovo' onClick={closeMenu} href="#stack">Tech Stack</a></li>
            </ul>

        </nav>
    </div>
  )
}

export default Navbar;