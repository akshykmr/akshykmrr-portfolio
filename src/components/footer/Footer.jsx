import React from 'react'
import './footer.css'
import {FaGithub} from 'react-icons/fa'
import {BsLinkedin} from 'react-icons/bs'

const Footer = () => {
  return (
    <footer>
      <a href="/" className="footer_logo">AKSHAY KUMAR</a>
      <ul className="permalinks">
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        {/* <li><a href="#services">Services</a></li> */}
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer_link">
    <a href="https://github.com/akshykmr" ><FaGithub/></a>
    <a href="https://www.linkedin.com/in/akshay-kumar-655a19212/"  ><BsLinkedin/></a>
      </div>

      <div className="footer_copyright">
        <small>&copy; akshykmr-portfolio. All rights reserved.</small>
      </div>
    </footer>
  )
}

export default Footer
