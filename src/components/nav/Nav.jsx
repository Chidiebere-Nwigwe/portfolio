import React from 'react'
import './Nav.css'
import { AiOutlineHome } from "react-icons/ai";
import { AiOutlineUser } from "react-icons/ai";
import { BiBook } from "react-icons/bi";
import { FaRegFileCode } from "react-icons/fa";
import { BiMessageDetail } from "react-icons/bi";
import { useState } from 'react';

const Nav = () => {

  const [activeNav, setActiveNav] = useState('#')
  return (
    <nav>
      <a href="#" onClick={() => setActiveNav('#')} className={ activeNav === '#' ? 'active' : ''}> <AiOutlineHome /> </a>
      <a href="#about" onClick={() => setActiveNav('#about')} className={ activeNav === '#about' ? 'active' : ''} > <AiOutlineUser /> </a>
      <a href="#experience" onClick={() => setActiveNav('#experience')} className={ activeNav === '#experience' ? 'active' : ''} > <BiBook /> </a>
      <a href="#portfolio" onClick={() => setActiveNav('#portfolio')} className={ activeNav === '#portfolio' ? 'active' : ''} > <FaRegFileCode /> </a>
      <a href="#contact" onClick={() => setActiveNav('#contact')} className={ activeNav === '#contact' ? 'active' : ''} > <BiMessageDetail /> </a>

    </nav>
  )
}

export default Nav