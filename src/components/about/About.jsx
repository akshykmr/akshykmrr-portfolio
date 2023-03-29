import React from 'react'
import './about.css'
import me from '../../assest/img11.jpg'
import {FaAward} from 'react-icons/fa'
import {BsFillPeopleFill} from 'react-icons/bs'
import {AiOutlineProject} from 'react-icons/ai'

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
            <BsFillPeopleFill className='about_card_icon'/>
            <h5>Clients</h5>
            <small>3+</small>
          </article>
          <article className="about_card">
            <AiOutlineProject className='about_card_icon'/>
            <h5>Projects</h5>
            <small>6+</small>
          </article>
        </div>
        <p>
        I'm an ambitious full stack developer with a passion for problem solving and a strong focus on practicality. My experience includes working on a variety of projects, both individually and as part of a team, as well as completing projects during my college years.

As a fast learner, I believe in diving right into new challenges and developing solutions through hands-on experience. When learning new technologies or techniques, I prefer to start by creating a project and then work on developing my skills from there.

I take great pride in my work, and always strive for personal satisfaction in the projects I work on. I view each project as an opportunity to learn and grow, and take on every challenge with a positive and determined mindset.

I'm excited to continue my career as a full stack developer and am always on the lookout for new opportunities to expand my skillset and contribute to the industry.
        </p>
        <a href="#contact" className="btn btn_primary">Let't Talk</a>
      </div>
    </div>
  </section>
  )
}

export default about
