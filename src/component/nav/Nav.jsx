import React from 'react'
import { Link } from 'react-router-dom'
function Nav() {
  return (
    <div>
        <div>SHopping</div>
        <div>
            <Link to="/">Home</Link>
            <Link to="/cart">Cart</Link>
            <span>cart items : 0</span>
        </div>
      
    </div>
  )
}

export default Nav
