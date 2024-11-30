import React from 'react'

const Contact = () => {
  return (
    <div id='contact' className='max-w-[1040px] m-auto md:pl-20 p-4 py-16'>
        <h1 className='py-4 text-4xl font-bold text-justify text-[#123524]'>
            Contact
        </h1>
        <form 
        action='https://getform.io/f/bwngwxya' 
        method='POST' 
        encType='multipart/form-data'
        >
            <div className='grid md:grid-cols-2 gap-4 w-full py-2'>
                <div className='flex flex-col'>
                    <label className='uppercase text-sm py-2 text-[#123524]'>Name</label>
                    <div className='rounded-lg bg-gradient-to-r from-[#155148] via-[#46ab7c] to-[#155148] gradient element-to-rotate p-0.5'>
                        <input className='h-full w-full bg-green-100 rounded-lg p-3 flex text-black' type='text' name='name'/>
                    </div>
                </div>
                <div className='flex flex-col'>
                    <label className='uppercase text-sm py-2 text-[#123524]'>Phone</label>
                    <div className='rounded-lg bg-gradient-to-l from-[#155148] via-[#46ab7c] to-[#155148] gradient element-to-rotate p-0.5'>
                        <input className='h-full w-full bg-green-100 rounded-lg p-3 flex text-black' type='text' name='phone'/>
                    </div>
                    
                </div>
            </div>
            <div className='flex flex-col py-2'>
                <label className='uppercase text-sm py-2 text-[#123524]'>Email</label>
                <div className='rounded-lg bg-gradient-to-r from-[#155148] via-[#46ab7c] to-[#155148] gradient element-to-rotate p-0.5'>
                    <input className='h-full w-full bg-green-100 rounded-lg p-3 flex text-black' type='email' name='email'/>
                </div>
            </div>
            <div className='flex flex-col py-2'>
                <label className='uppercase text-sm py-2 text-[#123524]'>Subject</label>
                <div className='rounded-lg bg-gradient-to-r from-[#155148] via-[#46ab7c] to-[#155148] gradient element-to-rotate p-0.5'>
                    <input className='h-full w-full bg-green-100 rounded-lg p-3 flex text-black' type='text' name='subject'/>
                </div>
            </div>
            <div className='flex flex-col py-2'>
                <label className='uppercase text-sm py-2 text-[#123524]'>Message</label>
                <div className='rounded-lg bg-gradient-to-r from-[#155148] via-[#46ab7c] to-[#155148] gradient element-to-rotate p-0.5'>
                    <textarea className='h-full w-full bg-green-100 rounded-lg p-3 flex' rows='10' name='message'></textarea>
                </div>
            </div>
            <button className='bg-[#3aac75] text-[#123524] font-semibold mt-4 w-full p-4 rounded-lg bg-gradient-to-r from-[#155148] via-[#46ab7c] to-[#155148] px-4 py-2 text-xl focus:ring ring-black ring-opacity-10 gradient element-to-rotate'>
                Send Message
            </button>
        </form>
    </div>
  )
}

export default Contact