import React from 'react'
import './footer.css'
import { NavLink } from 'react-router-dom'

function Footer() {
  return (
    <footer className='footerContainer'>
      <NavLink to="/follow" className="footerTxt" ><p>Follow us</p></NavLink>
      <NavLink to="/contact" className="footerTxt"><p>Contact Us</p></NavLink>
      <NavLink to="/privacy" className="footerTxt"><p>Privacy Policy</p></NavLink>
      <NavLink to="/terms" className="footerTxt"><p>Terms</p></NavLink>
      <NavLink to="/volunteer" className="footerTxt"><p>Volunteer</p></NavLink>
      <NavLink to="/partner" className="footerTxt"><p>Partner</p></NavLink>
      <NavLink to="/api" className="footerTxt"><p>Free API</p></NavLink>
    </footer>
  )
}

export default Footer
