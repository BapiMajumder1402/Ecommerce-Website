import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './pages/home/Home'
import Cart from './pages/cart/Cart'
import Nav from './component/nav/Nav'
import Products from './component/Products/Products'
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from "./component/footer/Footer"
function App() {


  return (
    <div className="App">
      <Nav/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/products' element={<Products />} />
        <Route path='/cart' element={<Cart />} />
      </Routes>
      <Footer/>
    </div>

  )
}

export default App
