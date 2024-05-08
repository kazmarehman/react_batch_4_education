import React from 'react'
import Logo from '../assets/logo.png'

const Header = () => {
  return (
        <div className="page_width">
            <header>
            <div className="logo">
      <img src={Logo} alt="" />
            </div>
    <div className="nav_links">
      <ul>
        <li>
          <a href>Home</a>
        </li>
        <li>
          <a href>About Us</a>
        </li>
        <li>
          <a href>Courses</a>
        </li>
        <li>
          <a href> Our Services</a>
        </li>
        <li>
          <a href>Contact Us</a>
        </li>
        <li className="btn_sign">
          <a href>Sign Up</a>
        </li>
      </ul>
    </div>
            </header>
        </div>
   

  )
}

export default Header
