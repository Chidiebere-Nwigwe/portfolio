import React from 'react'
import './Portfolio.css'
import RSVPApp from '../../assets/RSVPApp.png'
import QuizApp from '../../assets/QuizApp.png'
import WeatherApp from '../../assets/WeatherApp2.png'
import RoseBow from '../../assets/RoseBow.png'


// Array of portfolio objects
const data = [
  {
    id: 1,
    image: RSVPApp,
    title: 'Full-Stack RSVP Event Manager',
    github: 'https://github.com/Chidiebere-Nwigwe/rsvp-app',
    demo: 'https://chidiebere-nwigwe.github.io/rsvp-app/'
  },
  {
    id: 2,
    image: QuizApp,
    title: 'Quiz Website', 
    github: 'https://github.com/Chidiebere-Nwigwe/QuizAppJS',
    demo: 'https://chidiebere-nwigwe.github.io/QuizAppJS/'
  },
  {
    id: 3,
    image: WeatherApp,
    title: 'Weather Website',
    github: 'https://github.com/Chidiebere-Nwigwe/WeatherWebsite',
    demo: 'https://chidiebere-nwigwe.github.io/WeatherWebsite/'
  },
  {
    id: 4,
    image: RoseBow,
    title: 'RoseBow E-commerce App with Kotlin & Android Studio',
    github: 'https://github.com/Chidiebere-Nwigwe/EcommerceApp',
    demo: 'https://drive.google.com/file/d/1kbmRe6iFj4iPPg6cZSXqid9dJyPA2y7H/view?usp=sharing'
  }
]

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {
          data.map((portfolio) => (
            <article className="portfolio__item" key={portfolio.id}>

              <div className="portfolio__item-image">
                <img src={portfolio.image} alt={portfolio.title} />
              </div>

              <h3>{portfolio.title}</h3>

              <div className="portfolio__item-cta">
                <a href={portfolio.github} className='btn' target='_blank'>GitHub</a>
                <a href={portfolio.demo}  className='btn btn-primary' target='_blank'>Live Demo</a>
              </div>

          </article>
          ))
        }
      </div>

      {/* <div className="container portfolio__container">
        
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={QuizApp} alt="Quiz Website" />
          </div>
          <h3>Quiz Website</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com/Chidiebere-Nwigwe/QuizAppJS" className='btn'>GitHub</a>
            <a href="https://chidiebere-nwigwe.github.io/QuizAppJS/" className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
        </article>

        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={WeatherApp} alt="Weather Website" />
          </div>
          <h3>Weather Website</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com/Chidiebere-Nwigwe/WeatherWebsite" className='btn'>GitHub</a>
            <a href="https://chidiebere-nwigwe.github.io/WeatherWebsite/" className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
        </article>

        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={RoseBow} alt="RoseBow Logo" />
          </div>
          <h3>RoseBow E-commerce App with Kotlin & Android Studio</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com/Chidiebere-Nwigwe/EcommerceApp" className='btn'>GitHub</a>
            <a href="https://drive.google.com/file/d/1kbmRe6iFj4iPPg6cZSXqid9dJyPA2y7H/view?usp=sharing" className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
        </article>

      </div> */}

    </section>
  )
}

export default Portfolio