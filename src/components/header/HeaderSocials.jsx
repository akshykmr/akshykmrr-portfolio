import React from 'react'
import {FaGithub} from 'react-icons/fa'
import {BsLinkedin} from 'react-icons/bs'


const HeaderSocials = () => {
  return (
   <div className="header__socials">
    <a href="https://github.com/akshykmr" target ="blank" ><FaGithub/></a>
    <a href="https://www.linkedin.com/in/akshay-kumar-655a19212/" target ="blank" ><BsLinkedin/></a>

   </div>
  )
}

export default HeaderSocials
