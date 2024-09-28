import React from 'react'
import './footer.css'
import { NavLink } from 'react-router-dom'

function Footer() {
  return (
    <footer className='footer'>
      <NavLink to="/follow"><p>Follow us</p></NavLink>
      <NavLink to="/contact"><p>Contact Us</p></NavLink>
      <NavLink to="/privacy"><p>Privacy Policy</p></NavLink>
      <NavLink to="/terms"><p>Terms</p></NavLink>
      <NavLink to="/volunteer"><p>Volunteer</p></NavLink>
      <NavLink to="/partner"><p>Partner</p></NavLink>
      <NavLink to="/api"><p>Free API</p></NavLink>
    </footer>
  )
}

export default Footer
