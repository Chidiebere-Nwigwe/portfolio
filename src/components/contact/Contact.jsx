import React, { useRef } from 'react';
import './Contact.css'
import { MdOutlineEmail } from "react-icons/md";
import { RiLinkedinBoxLine } from "react-icons/ri";
import { RiFacebookCircleLine } from "react-icons/ri";

import emailjs from 'emailjs-com';



const Contact = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_1of18ga', 'template_g4ggf68', form.current, '5n498xYSCOePi5uLs')
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );

      e.target.reset()
  };

  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">

            <MdOutlineEmail className='contact__option-icon' />
            <h4>Email</h4>
            <h5>chidonnwigz@gmail.com</h5>
            <a href="mailto:chidonnwigz@gmail.com" target='_blank'>Send an Email</a>
          </article>

          <article className="contact__option">
            <RiLinkedinBoxLine className='contact__option-icon' />
            <h4>LinkedIn</h4>
            <h5>Chidiebere Nwigwe</h5>
            <a href="https://www.linkedin.com/in/nwigwe-chidiebere/" target='_blank'>Connect on LinkedIn</a>
          </article>

          <article className="contact__option">
            <RiFacebookCircleLine className='contact__option-icon' />
            <h4>Facebook</h4>
            <h5>Chidiebere Godwin</h5>
            <a href="https://m.me/chidiebere.godwin" target='_blank'>Connect on Facebook</a>
          </article>

        </div>

        <form ref={form} onSubmit={sendEmail}>
            <input type="text" name='name' placeholder='Your Full Name' required/>
            <input type="email" name="email" placeholder="Your Email" required/>
            <textarea name="message" rows="7" placeholder="Your Message" required></textarea>
            <button className='btn btn-primary' type="submit">Send Message</button>
        </form>

      </div>
    </section>
  )
}

export default Contact