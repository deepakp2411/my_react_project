import React from 'react'
import About from './components/about/About'
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
      <About />
      
    </div>
  )
}

export default App