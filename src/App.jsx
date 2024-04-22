import { useState } from 'react'
import './App.css'
import HomePage from "./homepage/HomePage"
import About from './about/About'
import Accesories from './accessories/Accessories'
import Audio from './audio/Audio'
import Wearables from './wearables/Wearables'
import { BrowserRouter, Routes, Route } from 'react-router-dom'


function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* <Switch> */}
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<About />} />
          <Route path="/accessories" element={<Accesories />} />
          <Route path="/audio" element={<Audio />} />
          <Route path="/wearables" element={<Wearables />} /> 
          {/* Render NotFound for unknown routes */}
          {/* <Route component={NotFound} />  */}
          {/* </Switch> */}
        </Routes>


      </BrowserRouter>

    </>
  )
}

export default App
