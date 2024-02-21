import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <header className="header">
      <Link className="logo w-[10%]" to="/">
        <img src="LOGO.png" alt="logo"/>
      </Link>

      <nav className="navbar background">
        <div className="navv">
          <Link className="link" to="/">
            Home
          </Link>
          <Link className="link" to="/about">
            About
          </Link>
          <Link className="link" to="/services">
            Services
          </Link>
          <Link className="link" to="/contactus">
            Contact Us
          </Link>
          <Link className="link" to="/appointment">
            Appointment
          </Link>
        </div>
        <Link className="link bttn " to="/login">
          <button>Login</button>
        </Link>
      </nav>
    </header>
  );
}
