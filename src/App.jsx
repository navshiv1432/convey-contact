import React from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Banner from './components/Banner'
import ContactInfo from './components/ContactInfo'
import InputFields from './components/InputFields'
import Footer from './components/Footer'

export const App = () => {
  return (
    <div className='app-conatiner'>
      <Navbar/>
      <Banner/>
      <div className='section-body'>
        <ContactInfo/>
        <InputFields/>
      </div>
      <Footer/>
    </div>
  )
}

export default App