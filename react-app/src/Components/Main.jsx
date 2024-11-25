import React from 'react'
import {TypeAnimation} from 'react-type-animation'

const Main = () => {
  return (
    <div id='main' className='bg-[#124524]'>
        <img 
        className='w-full h-screen object-cover object-left rounded-b-lg shadow-xl shadow-[#15241d]' 
        src='https://images.unsplash.com/photo-1710003364549-de37d4ed3413?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' 
        alt='/' 
        />
        <div className='w-full h-screen absolute top-0 left-0 bg-white/50'>
        <div className='max-w-[700px] m-auto h-full w-full flex flex-col justify-center lg:items-start items-center'>
            <h1 className='sm:text-5xl text-4xl font-bold text-gray-800'>Welcome to Palindromizer</h1>
            <h2 className='flex sm:text-3xl text-2xl pt-4 text-gray-800'>Feeling stuck creatively? Let us help</h2>
            <h3 className='flex sm:text-2xl text-xl pt-4 text-gray-800'>Need a unique name for a 
            <TypeAnimation
                sequence={[
                    'Person?',
                    3000,
                    'Place?',
                    3000,
                    'Thing?',
                    3000,
                ]}
                wrapper="span"
                speed={50}
                style={{ fontSize: '1em', paddingLeft: '5px' }}
                repeat={Infinity}
            />
            </h3>
            <div>

            </div>
        </div>
        </div>
    </div>
  )
}

export default Main