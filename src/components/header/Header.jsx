import React from 'react'
import CTA from './CTA'
import './header.css'
import Me from '../../assest/img.jpg'

const Header = () => {
  return (
    <header>
      <div className="container header__container"></div>
      <h5>Hello I'm</h5>
      <h1>Akshay Kumar</h1>
      <h5 className="text-light">Fullstack Developer </h5>
      <CTA/>
      <div className="me">
      <img src={Me} alt=""/>
      </div>
    </header>
  )
}

export default Header
