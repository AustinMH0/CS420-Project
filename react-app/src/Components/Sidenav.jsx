import React, {useState} from 'react'
import {AiOutlineMenu, AiOutlineHome, AiOutlineMail} from 'react-icons/ai'
import { FaQuestion } from "react-icons/fa";
import { GiPowerGenerator } from "react-icons/gi";

const Sidenav = () => {
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div>
      <AiOutlineMenu onClick={handleNav} className='absolute top-4 right-4 z-[99] md:hidden'/>
      {
        // If nav state true, show small screen nav bar
        nav ? (
            <div className='fixed w-full h-screen bg-white/90 flex flex-col justify-center items-center z-20'>
              <a 
                href='#main' 
                className='w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200'
              >
                <AiOutlineHome size={20} />
                <span className='pl-4'>Home</span>
              </a>
              <a 
                href='#palindromizer' 
                className='w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200'
              >
                <GiPowerGenerator size={20} />
                <span className='pl-4'>Palindromizer</span>
              </a>
              <a 
                href='#faq' 
                className='w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200'
              >
                <FaQuestion size={20} />
                <span className='pl-4'>FAQ</span>
              </a>
              <a 
                href='#contact' 
                className='w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200'
              >
                <AiOutlineMail size={20} />
                <span className='pl-4'>Contact Us</span>
              </a>
            </div>
        )
        // else, don't show
        : (
            ''
        )}
        <div className='md:block hidden fixed top-[25%] z-10'>
          <div className='flex flex-col'>
            <a href='#main' className='rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300'>
              <AiOutlineHome size={20} />
            </a>
            <a href='#palindromizer' className='rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300'>
              <GiPowerGenerator size={20} />
            </a>
            <a href='#faq' className='rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300'>
              <FaQuestion size={20} />
            </a>
            <a href='#contact' className='rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300'>
              <AiOutlineMail size={20} />
            </a>
          </div>
        </div>
    </div>
  )
}

export default Sidenav