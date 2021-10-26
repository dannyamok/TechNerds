import React from 'react'

import img1 from '../img/new/software.webp'
import img2 from '../img/new/webdev.png'
import img3 from '../img/new/new 1.jpg'
import img4 from '../img/new/Graphics.png'
import '../Services.css'

function Services() {
  return (
    <div className='main'>
      <div className='intro2'>
        <div className='intro_head'>
          <p className='intro_heading'>
            What Services Do we Offer?
            <p className='intro_topic'>
              Here at TechNerd Ghana we seek to provide our customer with the
              best and quality service available, based on their needs. Our
              abled team analysis each need of each customer and provide them
              with good statragies to help cater for that need.
            </p>
          </p>
        </div>
      </div>

      <div className='Service' id='Service'>
        <div className='content2'>
          <div className='heading2'>Web Develeopment</div>
        </div>
      </div>
      <div className='Service2' id='Service'>
        <div className='content3'>
          <div className='servtext'>
            We offer the best the best web development services and training at
            reasonable prices
          </div>
        </div>
      </div>

      <div className='Service5' id='Service'>
        <div className='content2'>
          <div className='heading2'>Robotics & AI</div>
        </div>
      </div>
      <div className='Service3' id='Service'>
        <div className='content4'>
          <div className='servtext'>
            We offer the best the best robotics & AI services and training at
            the best prices
          </div>
        </div>
      </div>

      <div className='Service' id='Service'>
        <div className='content2'>
          <div className='heading2'>Software Develeopment</div>
        </div>
      </div>
      <div className='Service2' id='Service'>
        <div className='content5'>
          <div className='servtext'>
            We offer the best the best Software development services and
            training at reasonable prices
          </div>
        </div>
      </div>

      <div className='Service5' id='Service'>
        <div className='content2'>
          <div className='heading2'>Media Management</div>
        </div>
      </div>
      <div className='Service3' id='Service'>
        <div className='content6'>
          <div className='servtext'>
            We offer the best the best graphic design , videography, and
            photography services and training at the best prices
          </div>
        </div>
      </div>
    </div>
  )
}

export default Services
