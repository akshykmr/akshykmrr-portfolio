import React from 'react'
import './experience.css'
import {AiOutlineHtml5} from 'react-icons/ai'
import {TiCss3} from 'react-icons/ti'
import {FaReact} from 'react-icons/fa'
import {TbBrandJavascript} from 'react-icons/tb'
import {TbBrandBootstrap} from 'react-icons/tb'
import {SiTailwindcss} from 'react-icons/si'
import {IoLogoNodejs} from 'react-icons/io'
import {SiMongodb} from 'react-icons/si'
import {TbBrandPython} from 'react-icons/tb'
import {FaPhp} from 'react-icons/fa'
import {DiMsqlServer} from 'react-icons/di'



const experience = () => {
  return (
    <section id="experience">
    <h5>Skills I Have</h5>
    <h2>My Experience</h2>
    <div className="container experience_container">

      {/* ================= FRONT END ============== */}

      <div className="experience_frontend">
        <h3>Frontend Development</h3>
        <div className="experience_content">
            <article className="experience_details">
              <AiOutlineHtml5 className="experience_details_icon"/>
              <div>
                <h4>HTML</h4>
              <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience_details">
              <TiCss3 className="experience_details_icon"/>
              <div><h4>CSS</h4>
              <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience_details">
              <TbBrandJavascript className="experience_details_icon"/>
             <div> <h4>Java Script</h4>
              <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="experience_details">
              <TbBrandBootstrap className="experience_details_icon"/>
              <div><h4>Bootstrap</h4>
              <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="experience_details">
              <FaReact className="experience_details_icon"/>
              <div><h4>React</h4>
              <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience_details">
              <SiTailwindcss className="experience_details_icon"/>
              <div><h4>Tailwind CSS</h4>
              <small className="text-light">Intermediate</small>
              </div>
            </article>
        </div>
      </div>
     {/* =========== END OF FRONTEND =========  */}

     {/* =========== BACKEND =========  */}
      <div className="experience_Backend">
        <h3>Backend Development</h3>
        <div className="experience_content">
            <article className="experience_details">
              <IoLogoNodejs className="experience_details_icon"/>
              <div><h4>Node JS</h4>
              <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="experience_details">
              <SiMongodb className="experience_details_icon"/>
              <div>
                <h4>MongoDB</h4>
              <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="experience_details">
              <TbBrandPython className="experience_details_icon"/>
              <div><h4>Python</h4>
              <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="experience_details">
              <DiMsqlServer className="experience_details_icon"/>
             <div> <h4>MySql</h4>
              <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="experience_details">
              <FaPhp className="experience_details_icon"/>
             <div> <h4>PHP</h4>
              <small className="text-light">Intermediate</small>
              </div>
            </article>
        </div>
      </div>
    </div>
    </section>
  )
}

export default experience
