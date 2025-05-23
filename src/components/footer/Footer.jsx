import React from 'react'
import './Footer.css'
import { FaFacebookF } from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";
import { BsYoutube } from "react-icons/bs";


const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'>CHIDI</a>

      <ul className='permalinks'>
        <li> <a href="#">Home</a> </li>
        <li> <a href="#about">About</a> </li>
        <li> <a href="#experience">Experience</a> </li>
        <li> <a href="#services">Services</a> </li>
        <li> <a href="#portfolio">Portfolio</a> </li>
        <li> <a href="#testimonials">Testimonials</a> </li>
        <li> <a href="#contact">Contact</a> </li>
      </ul>

      <div className="footer__socials">
        <a href="https://facebook.com"> <FaFacebookF /> </a>
        <a href="https://instagram.com"> <FiInstagram /> </a>
        <a href="https://www.youtube.com/@chidieberegodwin6275"> <BsYoutube /> </a>
      </div>

      <div className="footer__copyright">
        <small>&copy; Chidiebere Nwigwe. All rights reserved.</small>
      </div>
    </footer>
  )
}

export default Footer