import React from 'react'
import './Testimonials.css'
import Anthony from '../../assets/Anthony.JPG'
import Kene from '../../assets/Kenechukwu.JPG'
import Nkem from '../../assets/Nkem.JPG'

// import Swiper core and required modules
import { Pagination } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// ARRAY OF TESTIMONIAL DATA
const data = [
  {
    id: 1,
    image: Anthony,
    name: 'Anthony Odinukwe',
    review: 'Working with Chidi was a great experience. His attention to detail, eagerness to learn, and positive attitude made him an asset to the team'
  },
  {
    id: 2,
    image: Kene,
    name: 'Kenechukwu Ejinkeonye',
    review: 'Chidi consistently brought fresh ideas and a strong work ethic. His front-end work was clean and user-focused. I look forward to collaborating with him again!'
  },
  {
    id: 3,
    image: Nkem,
    name: 'Nkemsinachi Ejinkeonye',
    review: 'Chidi is a fast learner with a great grasp of web development fundamentals. He’s dependable, motivated, and always ready to contribute meaningfully to any project.'
  },

]
const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Review from Clients and Coworkers</h5>
      <h2>Testimonials</h2>

      <Swiper className="container testimonials__container"
            // install Swiper modules
            modules={[ Pagination]}
            spaceBetween={40}
            slidesPerView={1}
            pagination={{ clickable: true }}>
        {
          data.map((testimonial) => (
          <SwiperSlide key={testimonial.id} className='testimonial'>

            <div className="client__avatar">
              <img src={testimonial.image} alt={testimonial.name}/>
            </div>

            <h5 className='client__name'>{testimonial.name}</h5>
              <small className="client__review">{testimonial.review}</small>
          </SwiperSlide>

          ))
        }
      </Swiper>

    </section>
  )
}

export default Testimonials