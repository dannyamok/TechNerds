import React from 'react'
import img1 from '../img/new/software.webp'
import img2 from '../img/new/webdev.png'
import img3 from '../img/new/new 1.jpg'
import img4 from '../img/new/Graphics.png'
import '../Main.css'

function Main() {
  return (
    <div className='main'>
      <div className='intro'>
        <div className='intro_head'>
          <p className='intro_heading'>
            Get the best insight on the current technological trends
            <p className='intro_topic'>
            Welcome to TechNerds Ghana, this a place where consumers can hire,
            meet and interact with experts in various fields of IT, to help them
            solve the challenges and start up businesses.
          </p>
          </p>
        </div>
      </div>

      <div className='about' id='about'>
        <div className='content'>
          <div className='heading'>Who Are We?</div>
          <p className='text2'>
            Welcome to TechNerds Ghana, this a place where consumers can hire,
            meet and interact with experts in various fields of IT, to help them
            solve the challenges and start up businesses. We are a group of
            young vibrant youth wanting to help people with all things IT and
            technology
          </p>
        </div>
      </div>
      <div className='projects'>
        <div className='project_head'>What We Do</div>
        <div className='home_row'>
          <div className='text'>
            <img src={img1} className='text_image' alt='' />
            Robotic & AI
          </div>
          <div className='text'>
            <img src={img3} className='text_image' alt='' />
            Media Management
          </div>
          <div className='text'>
            <img src={img4} className='text_image' alt='' />
            Software develobment
          </div>
          <div className='text'>
            <img src={img2} className='text_image' alt='display' />
            Web development
          </div>
        </div>
      </div>

      <div className='Goals'>
        <div className='Goals_text'>
          <div className='heading'>Looking Ahead</div>
          <p className='text2'>
            Attachment apartments in delightful by motionless it no. And now she
            burst sir learn total.
          </p>
        </div>
      </div>

      <div className='help' id='contact'>
        <div className='heading'>Need Help?</div>
      </div>
    </div>
  )
}

export default Main
