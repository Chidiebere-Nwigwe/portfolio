import React from 'react'
import './About.css'
import me from '../../assets/myself.jpg'
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";

const About = () => {
  return (
    <section id='about'>
              <h5>Get to Know Me</h5>
              <h2>About Me</h2>

              <div className="container about__container">
                <div className="about__me">
                  <img src={me} alt=" About Me" />
                </div>
                <div className="about__content">
                  <div className="about__cards">

                    <article className='about__card'>
                      <FaAward  className='about__icon'/>
                      <h5>Experience</h5>
                      <small>3+ Years Working</small>
                    </article>

                    <article className='about__card'>
                      <FiUsers  className='about__icon'/>
                      <h5>Clients</h5>
                      <small>3+ Worldwide</small>
                    </article>

                    <article className='about__card'>
                      <VscFolderLibrary  className='about__icon'/>
                      <h5>Projects</h5>
                      <small>10+ completed projects</small>
                    </article>

                  </div>
                  <p>I'm a software development graduate passionate about building meaningful digital experiences. Eager to learn, grow, and contribute to real-world projects using modern technologies and clean code practices.
                  </p>

                    <a href="#contact" className='btn btn-primary'>let's Talk</a>
                </div>
              </div>
    </section>
  )
}

export default About