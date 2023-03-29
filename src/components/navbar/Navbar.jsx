/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import './navbar.css'
import {AiFillHome} from 'react-icons/ai'
import {AiOutlineUser} from 'react-icons/ai'
import {BiBook} from 'react-icons/bi'
import {RiServiceLine} from 'react-icons/ri'
import {MdContactPhone} from 'react-icons/md'
// import {MdMiscellaneousServices} from 'react-icons/md'
import { useState } from 'react'


const Navbar = () => {

  const [activeNav, setActiveNav] = useState("#")
  return (
    <nav>                 
      <a href="#" onClick={() => setActiveNav('#') } className={activeNav === '#' ? 'active' : ''}><AiFillHome/></a>
      <a href="#about"  onClick={()=>setActiveNav('#about') } className={activeNav === '#about' ? 'active' : ''}><AiOutlineUser/></a>
      <a href="#experience" onClick={()=>setActiveNav('#experience') } className={activeNav === '#experience' ? 'active' : ''}><BiBook/></a>
      {/* <a href="#service" onClick={()=>setActiveNav('#service') } className={activeNav === '#service' ? 'active' : ''}><MdMiscellaneousServices/></a> */}
      <a href="#portfolio"  onClick={()=>setActiveNav('#portfolio') } className={activeNav === '#portfolio' ? 'active' : ''}><RiServiceLine/></a>
      <a href="#contact"  onClick={()=>setActiveNav('#contact') } className={activeNav === '#contact' ? 'active' : ''}><MdContactPhone/></a>      
    </nav>
  )
}

export default Navbar
