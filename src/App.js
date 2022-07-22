import React from 'react'
import Home from './components/Home/Home'
import Scooty from './components/Home/Scooty'

import Navbar from './components/Navbar/Navbar'


const App = () => {
  return (
    <div>
      <Navbar />
      <Home />
      <Scooty />
      
    </div>
  )
}

export default App