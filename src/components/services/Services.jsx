import React from 'react'
import  './services.css'
import {FaCheck} from 'react-icons/fa'

const Services = () => {
  return (
    <section id = 'service'>
        <h5>What I Offer</h5>
        <h2>Services</h2>
        <div className="container services_container">
            <article className="services">
                <div className="service_head">
                    <h3>UI/UX Design</h3>
                </div>
                <ul className="service_list">
                    <li>< FaCheck className="service_list-icon"/>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    </li>
                    <li>< FaCheck className="service_list-icon"/>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    </li>
                    <li>< FaCheck className="service_list-icon"/>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    </li>
                    <li>< FaCheck className="service_list-icon"/>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    </li>
                    <li>< FaCheck className="service_list-icon"/>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    </li>
                </ul>
            </article>

            {/* END OF UI/UF */}

            <article className="services">
                <div className="service_head">
                    <h3>Web Developement</h3>
                </div>
                <ul className="service_list">
                    <li>< FaCheck className="service_list-icon"/>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    </li>
                    <li>< FaCheck className="service_list-icon"/>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    </li>
                    <li>< FaCheck className="service_list-icon"/>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    </li>
                    <li>< FaCheck className="service_list-icon"/>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    </li>
                    <li>< FaCheck className="service_list-icon"/>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    </li>
                </ul>
            </article>

            {/* END OF Web Developement */}

            <article className="services">
                <div className="service_head">
                    <h3>Content Creation</h3>
                </div>
                <ul className="service_list">
                    <li>< FaCheck className="service_list-icon"/>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    </li>
                    <li>< FaCheck className="service_list-icon"/>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    </li>
                    <li>< FaCheck className="service_list-icon"/>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    </li>
                    <li>< FaCheck className="service_list-icon"/>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    </li>
                    <li>< FaCheck className="service_list-icon"/>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    </li>
                </ul>
            </article>
            {/* Content Creation */}

        </div>

    </section>
    )
}

export default Services
