import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import navStyles from './Nav.module.css';
import { useSelector } from 'react-redux'
import { RiMenuFoldFill, RiMenuUnfoldFill, RiCloseFill } from 'react-icons/ri';
import {HiShoppingCart} from 'react-icons/hi'

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const data =useSelector(state=>state.cart)
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className={navStyles.main}>
        <div className={navStyles.left}>
          <Link to="/">Shopping-Cart</Link>
        </div>
        <div className={`${navStyles.right} ${isOpen && navStyles.active}`}>
          <Link to="/" className={navStyles.navLink}>
            Home
          </Link>
          <Link to="/products" className={navStyles.navLink}>
            Products
          </Link>
          <Link to="/cart" className={navStyles.navLink}>
            Cart
          </Link>
          <Link to="/cart" id={navStyles.c} className={navStyles.navLink}>
            <HiShoppingCart/> <span>{data.length}</span>
          </Link>
          
        </div>
        <div className={navStyles.navToggle}>
        <Link to="/cart">
            <HiShoppingCart/> <span>{data.length}</span>
          </Link>
          {!isOpen ? (
            <button className={navStyles.menuButton} onClick={toggleMenu}>
              <RiMenuFoldFill />
            </button>
          ) : (
            <button className={navStyles.menuButton} onClick={toggleMenu}>
              <RiCloseFill />
            </button>
          )}
        
      </div>
    </nav>
  );
}

export default Navbar;