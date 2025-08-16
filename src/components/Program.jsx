import React from "react";
import { FaLongArrowAltRight } from "react-icons/fa";

import strength from "../assets/goal1.png";
import crossfit from "../assets/goal2.png";
import bodybuilding from "../assets/goal3.png";
import weightloss from "../assets/goal4.png";
import { Outlet, Link } from "react-router-dom";

import { useEffect } from 'react';
// importing aos
import AOS from 'aos';
import 'aos/dist/aos.css';



function Program() {
  useEffect(() => {
      AOS.init({
        duration: 1000, 
        once: true, 
      });
    }, []);


  return (
    <div className="container-fluid p-3" style={{ backgroundColor: "#37383c" }}>
      <div className="row mb-4 ">
        <br/>
        <div className="col-md-6">
          <h2 className="text-white  fw-bold">The best Programs We Offers For You</h2>
        </div>
        <div className="col-md-6 text-white">
          <p>
            Stop searching, start thriving! We've handpicked programs just for
            you. Unlock your potential, from fitness feats to career climbs.
            Let's make magic happen!
          </p>
        </div>
      </div>

      <div className="row g-3 ">
        <div className="col-12 col-sm-6 col-md-6 col-lg-3 " data-aos="fade-up">
          <div className="card text-white h-100 d-flex flex-column rounded-4" style={{ backgroundColor: "#464646" }}>
            <img src={strength} className="card-img-top p-2" alt="Strength Training" style={{ objectFit: "contain", maxHeight: "5rem" }} />
            <div className="card-body d-flex flex-column">
              <h5 className="card-title">Strength Training</h5>
              <p className="card-text flex-grow-1">
                Unlock your potential with a dynamic strength training program for lasting fitness gains.
              </p>
              <Link to="/join" className="text-decoration-none text mt-auto text-white">
                Learn More <FaLongArrowAltRight />
              </Link>
            </div>
          </div>
        </div>

        <div className="col-12 col-sm-6 col-md-6 col-lg-3 " data-aos="fade-up">
          <div className="card text-white h-100 d-flex flex-column rounded-4" style={{ backgroundColor: "#464646" }}>
            <img src={crossfit} className="card-img-top p-2" alt="CrossFit" style={{ objectFit: "contain", maxHeight: "5rem" }} />
            <div className="card-body d-flex flex-column">
              <h5 className="card-title">CrossFit</h5>
              <p className="card-text flex-grow-1">
                Discover strength and endurance through the foundations of CrossFit.
              </p>
              <Link to='/join' className=" text-decoration-none text mt-auto text-white">
                Learn More <FaLongArrowAltRight />
              </Link>
            </div>
          </div>
        </div>

        <div className="col-12 col-sm-6 col-md-6 col-lg-3 " data-aos="fade-up">
          <div className="card text-white h-100 d-flex flex-column rounded-4" style={{ backgroundColor: "#464646" }}>
            <img src={bodybuilding} className="card-img-top p-2" alt="Body Building" style={{ objectFit: "contain", maxHeight: "5rem" }} />
            <div className="card-body d-flex flex-column">
              <h5 className="card-title">Body Building</h5>
              <p className="card-text flex-grow-1">
                Transform your physique with a comprehensive bodybuilding regimen focused on strength, size, and definition.
              </p>
              <Link to='/join' className="mt-auto text-decoration-none text-white">
                Learn More <FaLongArrowAltRight />
              </Link>
            </div>
          </div>
        </div>

        <div className="col-12 col-sm-6 col-md-6 col-lg-3 " data-aos="fade-up">
          <div className="card text-white h-100 d-flex flex-column rounded-4" style={{ backgroundColor: "#464646" }}>
            <img src={weightloss} className="card-img-top p-2" alt="Weight Loss" style={{ objectFit: "contain", maxHeight: "5rem" }} />
            <div className="card-body d-flex flex-column">
              <h5 className="card-title">Weight Loss</h5>
              <p className="card-text flex-grow-1">
                Achieve sustainable weight loss through a balanced approach, combining nutrition, and mindfulness.
              </p>
              <Link to="/join" className=" mt-auto text-decoration-none text-white" >
                Learn More <FaLongArrowAltRight />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Program;
