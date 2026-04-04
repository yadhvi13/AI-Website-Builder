import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Portfolio from './pages/Portfolio'
import Contact from './pages/Contact'
import Builder from './pages/Builder'
import { ThemeProvider } from './components/ThemeProvider'

export const serverUrl = "http://localhost:5001";

const App = () => {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/portfolio' element={<Portfolio/>}/>
          <Route path='/contact' element={<Contact/>}/>
          <Route path='/builder' element={<Builder/>}/>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
