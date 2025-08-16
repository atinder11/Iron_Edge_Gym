import React from "react";
import img1 from "../assets/main-image1.png";
import img2 from "../assets/main-image3.png";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";

const Hero = () => {
  return (
    <Swiper
      spaceBetween={30}
      pagination={{ clickable: true }}
      autoplay={{ delay: 3500, disableOnInteraction: false }}
      modules={[Autoplay, Pagination]}
      className="mySwiper"
    >
      {/* Slide 1 */}
      <SwiperSlide>
        <div className="d-flex align-items-center justify-content-center text-white" style={{ minHeight: "90vh", background: "linear-gradient(135deg, #1e1e1e, #2c2c2c)" }}>
          <div className="container text-center text-md-start row align-items-center">
            <div className="col-md-6">
              <h1 className="fw-bold" style={{ fontSize: "3.5rem" }}>
                Get <span style={{ color: "#ffcf3a" }}>Healthy</span> Body With the{" "}
                <span style={{ color: "#ffcf3a" }}>Perfect</span> Exercises
              </h1>
              <p className="mt-3 text-light" style={{ fontSize: "1.2rem", opacity: 0.9 }}>
                Discover optimal well-being through tailored exercises and expert guidance.
              </p>
              <Link to="/join">
              <br/>
                <button className="btn mt-3 px-4 py-2 fw-bold text-white" style={{ backgroundColor: "#9a8840", borderRadius: "12px", transition: "0.3s",fontSize:"1.2rem" }}>
                  Get Started
                </button>
              </Link>
            </div>
            <div className="col-md-6 text-center mt-4 mt-md-0">
              <img src={img1} alt="Exercise" className="img-fluid rounded " />
            </div>
          </div>
        </div>
      </SwiperSlide>

      {/* Slide 2 */}
      <SwiperSlide>
        <div className="d-flex align-items-center justify-content-center text-white" style={{ minHeight: "100vh", background: "linear-gradient(135deg, #2a2a2a, #3a3a3a)" }}>
          <div className="container text-center text-md-start row align-items-center">
            <div className="col-md-6">
              <h1 className="fw-bold" style={{ fontSize: "3.5rem" }}>
                Build Your Body <span style={{ color: "#ffcf3a" }}>Transform</span> Your Life
              </h1>
              <p className="mt-3 text-light" style={{ fontSize: "1.2rem", opacity: 0.9 }}>
                Empower your journey to peak fitness with expert guidance.
              </p>
              <Link to="/join">
                <button className="btn mt-3 px-4 py-2 fw-bold text-white" style={{ backgroundColor: "#9a8840", borderRadius: "12px", transition: "0.3s",fontSize:"1.2rem" }}>
                  Get Started
                </button>
              </Link>
            </div>
            <div className="col-md-6 text-center mt-4 mt-md-0">
              <img src={img2} alt="Build" className="img-fluid rounded " />
            </div>
          </div>
        </div>
      </SwiperSlide>

      {/* Slide 3 */}
      <SwiperSlide>
        <div className="d-flex align-items-center justify-content-center text-white" style={{ minHeight: "100vh", background: "linear-gradient(135deg, #343a40, #212529)" }}>
          <div className="container text-center text-md-start row align-items-center">
            <div className="col-md-6 order-md-2">
              <h1 className="fw-bold" style={{ fontSize: "3.5rem" }}>
                Achieve <span style={{ color: "#ffcf3a" }}>Your</span> Fitness{" "}
                <span style={{ color: "#ffcf3a" }}>Dreams</span> With{" "}
                <span style={{ color: "#ffcf3a" }}>Us</span>
              </h1>
              <p className="mt-3 text-light" style={{ fontSize: "1.2rem", opacity: 0.9 }}>
                Unlock your full potential through our expert-led programs and community support.
              </p>
              <Link to="/join">
                <button className="btn mt-3 px-4 py-2 fw-bold text-white" style={{ backgroundColor: "#9a8840",  borderRadius: "12px", transition: "0.3s", fontSize:"1.2rem" }}>
                  Get Started
                </button>
              </Link>
            </div>
            <div className="col-md-6 order-md-1 text-center mt-4 mt-md-0">
              <img src={img1} alt="Dreams" className="img-fluid rounded " />
            </div>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default Hero;
