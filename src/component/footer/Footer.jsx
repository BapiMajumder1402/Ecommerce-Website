import React from 'react';
import styles from './Footer.module.css';
import { FaFacebookF, FaTwitter, FaInstagram, FaPinterest } from 'react-icons/fa';

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles['footer-top']}>
        <div className={styles.container}>
          <div className={styles['footer-links']}>
            <div className={styles['footer-links-column']}>
              <h3>Categories</h3>
              <ul>
                <li><a href="#">Clothing</a></li>
                <li><a href="#">Shoes</a></li>
                <li><a href="#">Accessories</a></li>
                <li><a href="#">Electronics</a></li>
              </ul>
            </div>
            <div className={styles['footer-links-column']}>
              <h3>Customer Service</h3>
              <ul>
                <li><a href="#">Contact Us</a></li>
                <li><a href="#">Shipping Information</a></li>
                <li><a href="#">Returns & Exchanges</a></li>
                <li><a href="#">FAQs</a></li>
              </ul>
            </div>
            <div className={styles['footer-links-column']}>
              <h3>About Us</h3>
              <ul>
                <li><a href="#">Our Story</a></li>
                <li><a href="#">Careers</a></li>
                <li><a href="#">Privacy Policy</a></li>
                <li><a href="#">Terms & Conditions</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className={styles['footer-bottom']}>
        <div className={styles.container}>
          <div className={styles['footer-social-media']}>
            <a href="#"><FaFacebookF /></a>
            <a href="#"><FaTwitter /></a>
            <a href="#"><FaInstagram /></a>
            <a href="#"><FaPinterest /></a>
          </div>
          <p>&copy; 2023 Your Ecommerce Website. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
