import React from 'react'
import './App.css'
import Header from './component/Header'
import HomePage from './pages/HomePage'
import ModeChoice from './pages/ModeChoice'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {
  return(
    <Router>
      <div className='mx-20 my-10'>
        <Header />
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/mode-choice' element={<ModeChoice />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
