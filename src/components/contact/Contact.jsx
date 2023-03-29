import React from 'react'
import './contact.css'
import {AiOutlineMail} from 'react-icons/ai'
import {ImWhatsapp} from 'react-icons/im'
import { useRef } from 'react'
import emailjs from 'emailjs-com'


const Contact = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_632poa8', 'template_8hcfgni', form.current, 'MTs4Z2KFRqNwsdSri')
     
    e.target.reset();
  };

  return (
    <section id="contact">
    <h5>Get In Touch</h5>
    <h2>Contact Me</h2>
    <div className="container contact_container">
      <div className="contact_options">
        <article className="contact_option">
          <AiOutlineMail className ="contact_option-icon"/>
          <h4>Email</h4>
          <h6>akshykmr70@gmail.com</h6>
          <a href="mailto:akshykmr70@gmail.com">Send a message</a>
        </article>
        <article className="contact_option">
          <ImWhatsapp className ="contact_option-icon"/>
          <h4>WhatsApp</h4>
          <h6>+91 7053946660</h6>
          <a href="https://api.whatsapp.com/send?phone=+917052946660">Send a message</a>
        </article>
      </div>
      <form ref = {form} onSubmit = {sendEmail}>
        <input type="text" name="name" placeholder='You full name' required />
        <input type="email" name="email" placeholder='Your Email' required/>
        <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
        <button type = 'submit' className="btn btn-primary">Send Message</button>
      </form>
    </div>
  </section>
  )
}

export default Contact
