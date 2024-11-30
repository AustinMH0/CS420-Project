import { React, useState } from 'react'
import Sidenav from './Components/Sidenav'
import Main from './Components/Main'
import FaqDescription from './Components/FaqDescription'
import Generator from './Components/Generator'
import Contact from './Components/Contact'

function App() {
  return (
    <div>
     <Sidenav />
     <Main />
     <div className='w-full h-full bg-no-repeat bg-cover bg-center bg-fixed bg-[url("https://images.unsplash.com/photo-1693389107440-afe980ccbb8d?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")]'>
     <h1 className='text-4xl py-8 font-bold text-center text-[#123524]'>Palindromizer</h1>
      <Generator />
      <FaqDescription />
      <Contact />
     </div>
    </div>
  )
}

export default App
