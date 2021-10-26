import React from 'react'
import { Link } from 'react-router-dom'
import './Home_Header.css'

function Home_Header() {
  return (
    <div className='navigation'>
      <ul>
        <li>
          <a href='/'>Home</a>
        </li>
        <li>
          <a href='/#about'>About</a>
        </li>
        <li>
          <a href='/services'>Services</a>
        </li>
        <li>
          <a href='#contact'>Contact</a>
        </li>
        <Link className='a' to='/shop'>
          <li>Shop</li>
        </Link>
      </ul>
    </div>
  )
}

export default Home_Header
