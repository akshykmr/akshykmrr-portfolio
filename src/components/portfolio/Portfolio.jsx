import React from 'react'
import './portfolio.css'
import IMG1 from '../../assest/portfolio1.png'
import IMG2 from '../../assest/portfolio2.png'
import IMG3 from '../../assest/portfolio3.png'
import IMG4 from '../../assest/portfolio4.png'
import IMG5 from '../../assest/portfolio5.png'
import IMG6 from '../../assest/portfolio6.png'



const Portfolio = () => {
  return (
    <section id="portfolio">
     <h5>My Recent Work</h5>
     <h2>Portfolio</h2>

     <div className="container portfolio_container">
      <article className="portfolio_item">
        <div className="portfolio_item-img">
          <img src={IMG1} alt=""/>
        </div>
        <h3>This is a portfolio item title</h3>
        <div className="portfolio_item-cta"> <a href="https://github.com/akshykmr/Whatsapp-clone" className='btn'>Github</a>
        <a href="https://github.com/akshykmr/Whatsapp-clone" className='btn btn-primary'>Live Demo</a>
        </div>
      </article>
      <article className="portfolio_item">
        <div className="portfolio_item-img">
          <img src={IMG2} alt=""/>
        </div>
        <h3>This is a portfolio item title</h3>
        <div className="portfolio_item-cta"> <a href="https://github.com/akshykmr/Whatsapp-clone" className='btn'>Github</a>
        <a href="https://github.com/akshykmr/Whatsapp-clone" className='btn btn-primary'>Live Demo</a>
        </div>
      </article>
      <article className="portfolio_item">
        <div className="portfolio_item-img">
          <img src={IMG3} alt=""/>
        </div>
        <h3>This is a portfolio item title</h3>
       <div className="portfolio_item-cta">  <a href="https://github.com/akshykmr/Whatsapp-clone" className='btn'>Github</a>
        <a href="https://github.com/akshykmr/Whatsapp-clone" className='btn btn-primary'>Live Demo</a>
        </div>
      </article>
      <article className="portfolio_item">
        <div className="portfolio_item-img">
          <img src={IMG4} alt=""/>
        </div>
        <h3>This is a portfolio item title</h3>
        <div className="portfolio_item-cta"> <a href="https://github.com/akshykmr/Whatsapp-clone" className='btn'>Github</a>
        <a href="https://homecouturecollective.com" className='btn btn-primary'>Live Demo</a>
        </div>
      </article>
      <article className="portfolio_item">
        <div className="portfolio_item-img">
          <img src={IMG5} alt=""/>
        </div>
        <h3>This is a portfolio item title</h3>
        <div className="portfolio_item-cta"> <a href="https://github.com/akshykmr/Whatsapp-clone" className='btn'>Github</a>
        <a href="https://auroradesignn.blogspot.com" className='btn btn-primary'>Live Demo</a>
        </div>
      </article>
      <article className="portfolio_item">
        <div className="portfolio_item-img">
          <img src={IMG6} alt=""/>
        </div>
        <h3>This is a portfolio item title</h3>
        <div className="portfolio_item-cta"> <a href="https://github.com/akshykmr/Whatsapp-clone" className='btn'>Github</a>
        <a href="https://a2zeventsdelhi.blogspot.com" className='btn btn-primary'>Live Demo</a>
        </div>
      </article>
     </div>
    </section>
  )
}

export default Portfolio
