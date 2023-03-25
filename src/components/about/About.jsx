import React from 'react'
import './about.css'
import me from '../../assest/img11.jpg'
import {FaAward} from 'react-icons/fa'

const about = () => {
  return (
  <section id="about">
    <h5>Get to know </h5>
    <h2> About Me</h2>
    <div className="container about__conatainer">
      <div className="about_me">
        <div className="about_me-img">
          <img src={me} alt="" />
        </div>
      </div>
      <div className="about_content">
        <div className="about_cards">
          <article className="about_card">
            <FaAward className='about_card_icon'/>
            <h5>Experience</h5>
            <small>Fresher</small>
          </article>
          <article className="about_card">
            <FaAward className='about_card_icon'/>
            <h5>Experience</h5>
            <small>Fresher</small>
          </article>
          <article className="about_card">
            <FaAward className='about_card_icon'/>
            <h5>Experience</h5>
            <small>Fresher</small>
          </article>
        </div>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
          Odio tempora velit voluptas, iste, quibusdam repellat quae ipsam quisquam sint 
          quaerat asperiores harum aut molestias suscipit non quas facilis, nobis voluptatibus.
        </p>
        <a href="#contact" className="btn btn_primary">Let't Talk</a>
      </div>
    </div>
  </section>
  )
}

export default about
