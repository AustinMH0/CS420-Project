import { React, useState, useEffect } from 'react'
import Slider from './Slider'
import LengthInput from './LengthInput';
import GeneratedPalindrome from './GeneratedPalindrome';
import GenerateButton from './GenerateButton';
import CopyButton from './CopyButton';
import RefreshButton from './RefreshButton';

const Generator = () => {

  return (
    // <hr className='bg-transparent h-px my-4 border-1 rounded-xl'></hr>
    <div id='generator' className='max-w-[1040px] m-auto md:pl-20 p-4 py-16 rounded-xl bg-green-100'>
        <h3 className='text-gray-700 font-bold'>Palindrome Length</h3>
        <div className='flex items-center gap-8'>
            <LengthInput className='w-16' />
            <Slider className='flex-1 ' />
        </div>  
        <div className='flex items-center justify-center pt-12'>
            <GeneratedPalindrome />
        </div>

        <div className='container grid gap-4 grid-cols-3 pt-12 px-60 min-w-full justify-center items-center'>
            <GenerateButton />
            <CopyButton />
            <RefreshButton />
        </div>
    </div>
    
  )
}

export default Generator