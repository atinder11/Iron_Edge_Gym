import React from "react";
import logo from "../assets/image_crop.png";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { Outlet, Link } from "react-router-dom";
import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { useEffect } from 'react';
// importing aos
import AOS from 'aos';
import 'aos/dist/aos.css';

function Footer() {
  useEffect(() => {
          AOS.init({
            duration: 700, 
            once: true, 
          });
        }, []);
  return (
    <>
      <div className="container-fluid" style={{ backgroundColor: "#3a3b3f" }}>
        <div className="row text-white py-4">
          <div className="col">
            <h4>Company</h4>
            <ul className="list-unstyled">
              <li>
                <Link to="/about" className="text-white text-decoration-none">
                  About Us{" "}
                </Link>
              </li>
              <li>
                {" "}
                <Link to="/program" className="text-white text-decoration-none">
                  {" "}
                  Program{" "}
                </Link>
              </li>
              <li>
                {" "}
                <Link to="/plan" className="text-white text-decoration-none">
                  {" "}
                  Membership{" "}
                </Link>
              </li>
              <li>
                {" "}
                <Link to="/join" className="text-white text-decoration-none">
                  Partnership{" "}
                </Link>
              </li>
            </ul>
          </div>
          <div className="col">
            <h4>Categories</h4>
            <ul className="list-unstyled">
              <li>
                {" "}
                <Link to="/plan" className="text-white text-decoration-none">
                  {" "}
                  Strength Training{" "}
                </Link>
              </li>
              <li>
                {" "}
                <Link to="/plan" className="text-white text-decoration-none">
                  {" "}
                  Body Building{" "}
                </Link>
              </li>
              <li>
                {" "}
                <Link to="/plan" className="text-white text-decoration-none">
                  {" "}
                  Weight Loss{" "}
                </Link>
              </li>
              <li>
                {" "}
                <Link to="/plan" className="text-white text-decoration-none">
                  {" "}
                  Crossfit{" "}
                </Link>
              </li>
            </ul>
          </div>
          <div className="col">
            <h4>Help</h4>
            <ul className="list-unstyled">
              <li>
                {" "}
                <Link to="/" className="text-white text-decoration-none">
                  Account{" "}
                </Link>
              </li>
              <li>
                {" "}
                <Link to="/" className="text-white text-decoration-none">
                  Support Center{" "}
                </Link>
              </li>
              <li>
                {" "}
                <Link to="/" className="text-white text-decoration-none">
                  Privacy Policy{" "}
                </Link>
              </li>
              <li>
                {" "}
                <Link to="/about" className="text-white text-decoration-none">
                  Terms & Conditions{" "}
                </Link>
              </li>
            </ul>
          </div>
          <div className="col">
            <h4>Contact Us</h4>
            <ul className="list-unstyled">
              <li className="text-decoration-none">
                <a
                  href="tel:+918178915007"
                  className="text-white text-decoration-none d-block"
                >
                  <FaPhoneAlt /> Phone: +91 81789 15007
                </a>
                <a
                  href="tel:+919990806798"
                  className="text-white text-decoration-none d-block"
                >
                  +91 99908 06798
                </a>
              </li>
              <li>
                <a
                  href="mailto:pramodyadav8178915007@gmail.com"
                  className="text-white text-decoration-none d-flex align-items-center gap-2"
                  style={{ whiteSpace: "nowrap" }}
                >
                  <IoIosMail className="fs-5" />
                  <span className="fs-6">pramodyadav8178915007@gmail.com</span>
                </a>
              </li>

              <li>
                <a
                  href="https://maps.app.goo.gl/FyRQS4bDs7XYgbA79"
                  target="_blank"
                  className="text-white text-decoration-none "
                >
                  <FaLocationDot /> BS-103, near Pan Oasis Apartment, Sector-70
                  Noida, Gautam Buddh Nagar, Uttar Pradesh, Pincode: 201301
                </a>
              </li>
            </ul>
          </div>
          <div className="col">
            <h4>Location</h4>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3503.1608002076237!2d77.38024477422128!3d28.59495248578855!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cef43d14c8ac5%3A0x3fa446c01f5f2791!2sPro-Fitness%20Gym%20(unisex)!5e0!3m2!1sen!2sin!4v1749751084986!5m2!1sen!2sin"
              style={{
                border: 0,
                borderRadius: "1rem",
                width: "15rem",
                height: "11rem",
              }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Google Map"
            ></iframe>
          </div>
        </div>

        <hr className="border-light" />

        <div className="row align-items-center py-3">
          <div className="col-12 col-md-2 text-center" data-aos="fade-up"> 
            <Link to="/">
              <img
                src={logo}
                className="img-fluid"
                style={{ maxHeight: "6rem" }}
                alt="Logo"
              />
            </Link>
          </div>
          <div className="col-12 col-md-7 text-center text-white">
            <h5>
              &copy; {new Date().getFullYear()} Iron Edge Gym. All Rights
              Reserved.
            </h5>
          </div>
          <div className="col-12 col-md-3 text-center">
            <ul className="d-flex justify-content-center gap-3 list-unstyled">
              <li>
                <a
                  href="https://www.instagram.com/ashokyadav086/"
                  target="_blank"
                  className="text-white fs-4"
                >
                  <FaInstagram />
                </a>
              </li>
              <li>
                <a
                  href="https://www.facebook.com/budhuashok "
                  target="_blank"
                  className="text-white fs-4"
                >
                  <FaFacebook />{" "}
                </a>
              </li>
              <li>
                <a
                  href="mailto:pramodyadav8178915007@gmail.com"
                  className="text-white fs-4 text-decoration-none"
                >
                  <IoIosMail />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
