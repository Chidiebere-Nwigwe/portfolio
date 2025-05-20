import React from 'react'
import './Services.css'
import { BiCheck } from "react-icons/bi";


const Services = () => {
  return (
    <section id='services'>
      <h5>What I offer</h5>
      <h2>Services and Hobbies</h2>
      <div className="container services__container">

        {/* FIRST SERVICE */}
        <article className="service">
          <div className="service__head">
            <h3>UI/UX Design</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Design clean and intuitive interfaces with a user-first approach.</p>
            </li>

            <li>
              <BiCheck className='service__list-icon'/>
              <p>Create wireframes and mockups to plan visual structure.</p>
            </li>

            <li>
              <BiCheck className='service__list-icon'/>
              <p>Focus on consistency, readability, and accessibility in layouts.</p>
            </li>

            <li>
              <BiCheck className='service__list-icon'/>
              <p>Use tools like Figma and Canva for quick design concepts.</p>
            </li>

            <li>
              <BiCheck className='service__list-icon'/>
              <p>Ensure responsive designs that adapt to all screen sizes.</p>
            </li>

          </ul>
        </article>

        {/* SECOND SERVICE */}

       <article className="service">
          <div className="service__head">
            <h3>Web Development</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Build responsive websites using HTML, CSS, and JavaScript.</p>
            </li>

            <li>
              <BiCheck className='service__list-icon'/>
              <p>Create clean, user-friendly interfaces with a focus on accessibility.</p>
            </li>

            <li>
              <BiCheck className='service__list-icon'/>
              <p>Develop dynamic components using React and modern UI libraries.</p>
            </li>

            <li>
              <BiCheck className='service__list-icon'/>
              <p>Connect front-end to back-end using tools like Firebase.</p>
            </li>

            <li>
              <BiCheck className='service__list-icon'/>
              <p>Write organized, maintainable code and follow best practices.</p>
            </li>
          </ul>
        </article>


        {/* THIRD SERVICE */}

        <article className="service">
          <div className="service__head">
            <h3>Photography</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Capture high-quality photos for events, portraits, or creative projects.</p>
            </li>

            <li>
              <BiCheck className='service__list-icon'/>
              <p>Use natural lighting and thoughtful composition to tell visual stories.</p>
            </li>

            <li>
              <BiCheck className='service__list-icon'/>
              <p>Edit photos for clarity, color balance, and aesthetic appeal.</p>
            </li>

            <li>
              <BiCheck className='service__list-icon'/>
              <p>Deliver digital galleries ready for social media, portfolios, or printing.</p>
            </li>

            <li>
              <BiCheck className='service__list-icon'/>
              <p>Work closely with clients to meet their unique photography needs.</p>
            </li>

          </ul>
        </article>
      </div>
    </section>
  )
}

export default Services