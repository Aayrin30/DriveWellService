// rfc command for this import of function based component
import React from 'react'
import "./Navbar.css"
import {Link} from 'react-router-dom';

export default function Navbar() {
  return (
    <header className='header'>
    <div className="logo" to="/">
        <img src="LOGO.png" alt="logo" />
      </div>
  
    <nav className='navbar background'>
    <div className="navv">
    <Link className="link" to="/">Home</Link>
    <Link className="link"  to="/about">About</Link>
    <Link className="link" to="/services">Services</Link>
    <Link className="link" to="/contactus">Contact Us</Link>
    <Link className="link" to="/appointment">Appointment</Link>
    </div>
    <Link className="link bttn " to="/login" role="button">
    <button>
      Login
    </button>
    </Link>

    </nav>
  </header>
  )
}
