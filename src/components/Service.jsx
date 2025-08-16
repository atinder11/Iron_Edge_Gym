import React from 'react'
import serviceImg from "../assets/services.png";
import { Outlet, Link } from "react-router-dom";

import { useEffect } from 'react';
// importing aos
import AOS from 'aos';
import 'aos/dist/aos.css';

function Service() {
  useEffect(() => {
            AOS.init({
              duration: 700, 
              once: true, 
            });
          }, []);
  return (
    <>
    <div className='container-fluid text-white p-4' style={{backgroundColor:"#3a3b3f"}}>
        <div className='row'>
            <div className='col-12 col-md-6' data-aos="fade-right">
                <h2 className=' fw-bold'>The best Programs We Offers For You</h2>
                <br/>
                <ul className='pt-4 m-3 '>
                    <li>
                       <h4>Personal Training</h4>
                       <p className='text-justify'> Elevate your fitness with personalized training. Tailored workouts, expert guidance, and dedicated support for a transformative journey to a healthier, fitter you.</p>
                    </li>
                    <li>
                       <h4>Expert Trainer</h4>
                       <p>Empower your fitness journey with an expert trainer. Tailored workouts, personalized guidance, and motivational expertise to achieve your health and wellness goals effectively and efficiently.</p>
                       </li>
                    <li>
                       <h4>Flexile Time</h4>
                       <p>Enjoy flexibility with your schedule through 'Flexile Time,' a versatile approach to managing work and life, allowing for adaptability and balance.</p>
                    </li>
                    
                    </ul>
                     <Link to ='/join' className='text-decoration-none text-white'>
                     <br/>
                    <button className='btn1 ' data-aos="fade-up">
                     
                      Join Now
                      </button></Link>

            </div>
            <div className='col-12 col-md-6' data-aos="fade-left">
                <img src={serviceImg} alt="..img" className='img-fluid h-100 img-center' style={{objectFit:"cover", maxHeight:"50rem", width:"100%" , maxWidth:"25rem"}}/>
            </div>
        </div>
    </div>
    </>
  )
}

export default Service