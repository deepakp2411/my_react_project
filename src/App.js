import React from 'react'
import Career from './components/careers/Career'
import Home from './components/Home/Home'
import Scooty from './components/Home/Scooty'

import Navbar from './components/Navbar/Navbar'
import Working from './components/working/Working'


const App = () => {
  return (
    <div>
      <Navbar />
      {/* <Home />
      <Scooty /> */}
      {/* <Working /> */}
      <Career />
      
    </div>
  )
}

export default App