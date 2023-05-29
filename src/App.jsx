import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './pages/home/Home'
import Cart from './pages/cart/Cart'
import Nav from './component/nav/Nav'
function App() {


  return (
    <div className="App">
      <Nav/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/cart' element={<Cart />} />
      </Routes>
    </div>

  )
}

export default App
