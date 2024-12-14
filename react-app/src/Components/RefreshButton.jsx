import React from 'react'
import { LuRefreshCw } from 'react-icons/lu';

const RefreshButton = () => {
  return (
    <button className='bg-green-400 hover:bg-green-600 text-slate-800 justify-center font-bold py-2 px-4 rounded inline-flex items-center'>
        <LuRefreshCw size={25} className='pr-2 '/>
        <div>Refresh</div>
    </button>
  )
}

export default RefreshButton