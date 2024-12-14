import React from 'react'
import { FaRegCopy } from 'react-icons/fa6';

const CopyButton = () => {
  return (
    <button className='bg-green-400 hover:bg-green-600 text-slate-800 justify-center font-bold py-2 px-4 rounded inline-flex items-center'>
        <FaRegCopy size={25} className='pr-2 '/>
        <div>Copy</div>
    </button>
  )
}

export default CopyButton