import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

function Nav() {
  const data =useSelector(state=>state.cart)
  return (
    <div>
        <div>SHopping</div>
        <div>
            <Link to="/">Home</Link>
            <Link to="/cart">Cart</Link>
            <span>cart items :{data.length}</span>
        </div>
      
    </div>
  )
}

export default Nav
