// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import About from './Components/About'
import Contact from './Components/Contact'
import Home from './Components/Home'
import Testimonial from './Components/Testimonial'
import Work from './Components/Work'
import Footer from './Components/Footer'

function App() {

  return (
   
   <div className="App">
      <Home /> 
      <About /> 
      <Work /> 
      <Testimonial /> 
      <Contact /> 
      <Footer /> 
    </div>
  
  )
}

export default App
