import React from 'react';
import logo from '../assets/image_crop.png';
import { Outlet, Link } from "react-router-dom";
import { useEffect } from 'react';
// importing aos
import AOS from 'aos';
import 'aos/dist/aos.css';

function Header() {
  useEffect(() => {
      AOS.init({
        duration: 800, 
        once: true, 
      });
    }, []);
  return (
    <nav className="navbar navbar-expand-lg " style={{backgroundColor:"#37383c"}}>
      <div className="container-fluid">
        <Link className="navbar-brand" to='/'>
           <img src={logo} alt='logo' className='img-fluid ' style={{objectFit:"contain", width:"100%", maxHeight:"5rem",}} /> </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
         <ul className="navbar-nav ms-auto mb-0 mb-lg-0">
  <li className="nav-item" data-aos="fade-down">
    <Link className="nav-link  text-white   fw-bold active" to="/">Home</Link>
  </li>
  <li className="nav-item" data-aos="fade-down">
    <Link className="nav-link text-white fw-bold active" to="/about">About Us</Link>
  </li>
  <li className="nav-item" data-aos="fade-down">
    <Link className="nav-link text-white fw-bold active" to="/program">Program</Link>
  </li>
  <li className="nav-item" data-aos="fade-down">
    <Link className="nav-link text-white fw-bold active" to="/plan">Membership</Link>
  </li>
  <li className="nav-item" data-aos="fade-down">
    <Link className="nav-link text-white fw-bold active" to="/footer">Contact Us</Link>
  </li>
  <li className="nav-item"  data-aos="zoom-in">
    <Link className="nav-link active" to="/join">
      <button className="btn rounded fw-bold text-white" style={{background:"#9a8840"}}>Join Now</button>
    </Link>
  </li>
</ul>

          
        </div>
      </div>
    </nav>
  );
}

export default Header;
