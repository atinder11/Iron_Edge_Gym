import React from "react";
import tick from "../assets/tick.png";
import { Outlet, Link } from "react-router-dom";
import { useEffect } from 'react';
// importing aos
import AOS from 'aos';
import 'aos/dist/aos.css';


const Plan = () => {
   useEffect(() => {
        AOS.init({
          duration: 1000, 
          once: true, 
        });
      }, []);
  return (
    <div className="container-fluid py-5" style={{backgroundColor:"#37383c"}}>
      <h2 className="text-center mb-5 fw-bold text-white">Choose the Best Plan</h2>
      <div className="row gy-4">
        {/* Monthly Plan */}
        <div className="col-md-4 " data-aos="fade-up" >
          <div className="border rounded-5 p-4 h-100 text-center  " style={{backgroundColor:"#464646"}}>
            <h5 className="fw-bold text-white">Monthly Plan</h5>
            <h1 className="pt-3 text-white">
              ₹1500 <span className="fs-6 text-white">/ Per Month</span>
            </h1>
            <div className="mt-4 text-start text-white">
              <p><img src={tick} alt="" className="me-2" width={20} /> Strength Training</p>
              <p><img src={tick} alt="" className="me-2" width={20} /> CrossFit</p>
              <p><img src={tick} alt="" className="me-2" width={20} /> Body Building</p>
              <p><img src={tick} alt="" className="me-2" width={20} /> Weight Loss</p>
              <p><img src={tick} alt="" className="me-2" width={20} /> Flexible Time</p>
              <p><img src={tick} alt="" className="me-2" width={20} /> Expert Trainer</p>
            </div>
            <Link to='/join'>
             <button className="btn btn-outline-light mt-3 rounded-pill">Choose Plan</button>
            </Link>
           
          </div>
        </div>

        {/* Quarterly Plan */}
        <div className="col-md-4" data-aos="fade-up">
          <div className="border rounded-5 p-4 h-100 text-center  " style={{backgroundColor:"#ffde59"}}>
            <div className="badge bg-warning text-white mb-2">Most Popular</div>
            <h5 className="fw-bold text-white">Quarterly Plan</h5>
            <h1 className="pt-3 text-white">
              ₹1200 <span className="fs-6 text-white">/ Per Month</span>
            </h1>
            <div className="mt-4 text-start text-white">
              <p><img src={tick} alt="" className="me-2" width={20} /> Strength Training</p>
              <p><img src={tick} alt="" className="me-2" width={20} /> CrossFit</p>
              <p><img src={tick} alt="" className="me-2" width={20} /> Body Building</p>
              <p><img src={tick} alt="" className="me-2" width={20} /> Weight Loss</p>
              <p><img src={tick} alt="" className="me-2" width={20} /> Flexible Time</p>
              <p><img src={tick} alt="" className="me-2" width={20} /> Expert Trainer</p>
            </div>
             <Link to='/join'>
            <button className="btn btn-outline-light mt-3 text-white fw-semibold  rounded-pill ">Choose Plan</button>
            </Link>
          </div>
        </div>

        {/* Yearly Plan */}
        <div className="col-md-4" data-aos="fade-up">
          <div className="border rounded-5 p-4 h-100 text-center  " style={{backgroundColor:"#464646"}}>
            <h5 className="fw-bold text-white">Yearly Plan</h5>
            <h1 className="pt-3 text-white">
              ₹1000 <span className="fs-6 text-white">/ Per Month</span>
            </h1>
            <div className="mt-4 text-start text-white">
              <p><img src={tick} alt="" className="me-2" width={20} /> Strength Training</p>
              <p><img src={tick} alt="" className="me-2" width={20} /> CrossFit</p>
              <p><img src={tick} alt="" className="me-2" width={20} /> Body Building</p>
              <p><img src={tick} alt="" className="me-2" width={20} /> Weight Loss</p>
              <p><img src={tick} alt="" className="me-2" width={20} /> Flexible Time</p>
              <p><img src={tick} alt="" className="me-2" width={20} /> Expert Trainer</p>
            </div>
            <Link to='/join'>
             <button className="btn btn-outline-light rounded-pill mt-3">
              Choose Plan
              
              </button> 
            </Link>
           
          </div>
        </div>
      </div>
    </div>
  );
};

export default Plan;
