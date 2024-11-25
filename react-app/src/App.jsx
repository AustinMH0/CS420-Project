import { React, useState } from 'react'
import Sidenav from './Components/Sidenav'
import Main from './Components/Main'
import FaqDescription from './Components/FaqDescription'

function App() {
  return (
    <div>
     <Sidenav />
     <Main />
     <div className='w-full h-full bg-no-repeat bg-cover bg-center bg-fixed bg-[url("./assets/green_radial_gradient_bg.jpg")]'>
      <FaqDescription />
     </div>
    </div>
  )
}

export default App
