import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
    <div className='footer' id='footer'>
      <div className="footer-content">
        <div className="footer-content-left">
            <img src={assets.footer_logo} alt="" />
            <p>
            We are committed to bringing you delicious meals from your favorite local restaurants straight to your doorstep.
            Whether you're craving comfort food, trying something new, or in need of a quick bite, we've got you covered.

            </p>
            <div className="footer-social-icons">
                <img src={assets.facebook_icon} alt="" />
                <img src={assets.twitter_icon} alt="" />
                <a href='https://www.linkedin.com/in/subham-kumar-a532b420a/' target="_blank">
                <img src={assets.linkedin_icon} alt="" />
                </a>
            </div>
        </div>
        <div className="footer-content-center">
            <h2>COMPANY</h2>
            <ul>
                <li>Home</li>
                <li>About us</li>
                <li>Delivery</li>
                <li>Privacy policy</li>
            </ul>
        </div>
        <div className="footer-content-right">
            <h2>GET IN TOUCH</h2>
            <ul>
                <li>+91 - 123456890</li>
                <li>help@The-krusty-krab.in</li>
            </ul>
        </div>
      </div>
      <hr />
      <p className="footer-copyright">Copyright 2024 © The Krusty Krab.in - All Right Reserved.</p>
    </div>
  )
}

export default Footer
