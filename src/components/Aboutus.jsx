import React from 'react';
import ownerImg from '../assets/builder1.jpg';
import { Outlet, Link } from "react-router-dom";
import { useEffect } from 'react';
// importing aos
import AOS from 'aos';
import 'aos/dist/aos.css';

function Aboutus() {
   useEffect(() => {
    AOS.init({
      duration: 1000, 
      once: true, 
    });
  }, []);
  return (
    <div className="container-fluid text-white p-3  " style={{ backgroundColor: '#3a3b3f' }}>
      <div className="row align-items-center ">
        <div className="col-md-6" data-aos="fade-right">
          <img
            src={ownerImg}
            className="img-fluid w-100 "
            alt="Owner"
            style={{ objectFit: 'cover', borderRadius: '10px', maxHeight:"50rem",maxWidth:"30rem" }}
          />
        </div>
        <div className="col-md-6 p-3">
          <h2 className="mb-3  fw-bold">About Us</h2>
          <p className="text-start" data-aos="fade-left">
            <strong>Iron Edge Gym</strong> is an ISO-certified unisex gym located in Noida, founded and operated by
            Ashok Yadav and Pramod Yadav for over 6 years. 
            <br /><br />
            Ditch the excuses and grab your motivation! <em>"Get Ready To Reach Your Fitness Goals"</em> isn't just a slogan — it's a commitment. 
            This guide is your personal trainer, cheerleader, and goal-crushing buddy all in one. 
            We'll break down your fitness aspirations into actionable steps.
            <br /><br />
            Get ready to conquer your doubts, push your limits, and achieve a healthier, happier version of yourself!
            <br/>
          </p>
          <Link to='/join'>
          <button className=" btn1  mt-3" data-aos="fade-up"  data-aos-duration="500">
            
            Free Trial Today
          </button>  </Link>
        </div>
      </div>
    </div>
  );
}

export default Aboutus;
