import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import nav from './Nav.module.css'
import {RiShoppingCartFill} from 'react-icons/ri'
function Nav() {
  const data =useSelector(state=>state.cart)
  return (
    <div className={nav.main}>
        <div className={nav.left}>Shopping</div>
        <div className={nav.right}>
            <Link to="/">Home</Link>
            <Link to="/products">Products</Link>
            <Link to="/cart">Cart</Link>
            <span ><Link to="/cart"><RiShoppingCartFill/> </Link> {data.length}</span>
        </div>
      
    </div>
  )
}

export default Nav
