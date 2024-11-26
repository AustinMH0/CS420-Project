import React from 'react'
import Slider from './Slider'
import LengthInput from './LengthInput';

import { FaRegCopy } from "react-icons/fa6";
import { GiPowerGenerator } from "react-icons/gi";
import { LuRefreshCw } from "react-icons/lu";

const Generator = () => {
  return (
    // <hr className='bg-transparent h-px my-4 border-1 rounded-xl'></hr>
    <div id='generator' className='max-w-[1040px] m-auto md:pl-20 p-4 py-16 rounded-xl bg-green-100'>
        
        {/* <div className='flex flex-row space-x-12 justify-center items-center'> */}
        <div className='grid gap-4 grid-cols-2'>
            <div className='flex flex-col'>
                <LengthInput />
                <Slider className='pr-12'/>
                <form className='pl-4'>
                    <label className="block">
                        <input 
                        type="text" 
                        value="Your Palindrome" 
                        disabled className="mt-1 block w-auto px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
                        focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
                        disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none"
                        />
                    </label>
                </form>
            </div>
        </div>

        <div className="container grid gap-4 grid-cols-3 pt-12 px-60 min-w-full justify-center items-center">
        <button className="bg-green-400 hover:bg-green-600 text-slate-800 justify-center font-bold py-2 px-4 rounded inline-flex items-center">
            <GiPowerGenerator size={25} className='pr-2 '/>
            <span>Generate</span>
        </button>
        <button className="bg-green-400 hover:bg-green-600 text-slate-800 justify-center font-bold py-2 px-4 rounded inline-flex items-center">
            <FaRegCopy size={25} className='pr-2 '/>
            <span>Copy</span>
        </button>
        <button className="bg-green-400 hover:bg-green-600 text-slate-800 justify-center font-bold py-2 px-4 rounded inline-flex items-center">
            <LuRefreshCw size={25} className='pr-2 '/>
            <span>Refresh</span>
        </button>
        </div>
    </div>
    
  )
}

export default Generator