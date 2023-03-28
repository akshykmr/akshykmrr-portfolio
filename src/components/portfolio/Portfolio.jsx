import React from 'react'
import './portfolio.css'
import IMG1 from '../../assest/portfolio1.png'
import IMG2 from '../../assest/portfolio2.png'
import IMG3 from '../../assest/portfolio3.png'
import IMG4 from '../../assest/portfolio4.png'
import IMG5 from '../../assest/portfolio5.png'
import IMG6 from '../../assest/portfolio6.png'

const data = [
  {
    id : 1,
    image : IMG1,
    title : 'Whatsapp Clone - A fullstack Project',
    github : 'https://github.com/akshykmr/Whatsapp-clone' ,
    demo : 'https://github.com/akshykmr/Whatsapp-clone'
  },
  {
    id : 2,
    image : IMG2,
    title : 'Text Analyzer - A fullstack Project',
    github : '#' ,
    demo : '#'
  },
  {
    id : 3,
    image : IMG3,
    title : 'Portfolio Website - A fullstack Project',
    github : '#' ,
    demo : '#'
  },
  {
    id : 4,
    image : IMG4,
    title : 'E-Commerce Website - A Wordpress Project',
    github : '#' ,
    demo : '#'
  },
  {
    id : 5,
    image : IMG5,
    title : 'Business Portfolio Website - A Google Blogger Project',
    github : '#' ,
    demo : '#'
  },
  {
    id : 6,
    image : IMG6,
    title : 'Event Management Website - A Google Blogger Project',
    github : '#' ,
    demo : '#'
  }
]

const Portfolio = () => {
  return (
    <section id="portfolio">
     <h5>My Recent Work</h5>
     <h2>Portfolio</h2>

     <div className="container portfolio_container">
      {
        data.map(({id, image, github, demo, title}) => {
          return (
            <article className="portfolio_item">
              <div className="portfolio_item-img">
                <img src={image} alt=""/>
              </div>
              <h3>{title}</h3>
              <div className="portfolio_item-cta">
                <a href={github} className='btn'>Github</a>
                <a href={demo} className='btn btn-primary'>Live Demo</a>
              </div>
            </article>
          )
        })
      }
     </div>
    </section>
  )
}

export default Portfolio
