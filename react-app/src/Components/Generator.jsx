import React from 'react'
import Slider from './Slider'
import LengthInput from './LengthInput';
import GeneratedPalindrome from './GeneratedPalindrome';

import { FaRegCopy } from 'react-icons/fa6';
import { GiPowerGenerator } from 'react-icons/gi';
import { LuRefreshCw } from 'react-icons/lu';

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
            <button className='bg-green-400 hover:bg-green-600 text-slate-800 justify-center font-bold py-2 px-4 rounded inline-flex items-center'>
                <GiPowerGenerator size={25} className='pr-2 '/>
                <div>Generate</div>
            </button>
            <button className='bg-green-400 hover:bg-green-600 text-slate-800 justify-center font-bold py-2 px-4 rounded inline-flex items-center'>
                <FaRegCopy size={25} className='pr-2 '/>
                <div>Copy</div>
            </button>
            <button className='bg-green-400 hover:bg-green-600 text-slate-800 justify-center font-bold py-2 px-4 rounded inline-flex items-center'>
                <LuRefreshCw size={25} className='pr-2 '/>
                <div>Refresh</div>
            </button>
        </div>
    </div>
    
  )
}

export default Generator