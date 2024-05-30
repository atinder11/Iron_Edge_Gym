import logo from "../assets/image_crop.png";
import bars from "../assets/menus.png"
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light  Nav_main">
        <div className="container nav_small">
          <a className="logo" href="#">
            <img src={logo} alt="logo not found" className="img-fluid" />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <img src={bars} alt="" />
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item " data-aos="fade-down"
     data-aos-easing="ease-in-out"
     data-aos-duration="800">
                <a className="nav-link" href="./">
                  Home{" "}
                </a>
              </li>
              <li className="nav-item" data-aos="fade-down"
     data-aos-easing="ease-in-out"
     data-aos-duration="900">
                <a className="nav-link" href="/AboutUs">
                  About Us
                </a>
              </li>
              <li className="nav-item" data-aos="fade-down"
     data-aos-easing="ease-in-out"
     data-aos-duration="1000">
                <a className="nav-link" href="/BestOffer">
                  Program
                </a>
              </li>
              <li className="nav-item" data-aos="fade-down"
     data-aos-easing="ease-in-out"
     data-aos-duration="1100">
                <a className="nav-link" href="/BestPlan">
                  Membership
                </a>
              </li>
              <li className="nav-item" data-aos="fade-down"
     data-aos-easing="ease-in-out"
     data-aos-duration="1200">
                <a className="nav-link" href="/Footer">
                  Contact Us
                </a>
              </li>
            </ul>
            <form className="d-flex ms-md-4">
            
            
             {/***  <button class="btn1 " type="submit"
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"
              data-aos="fade-left"
     data-aos-easing="ease-in-out"
     data-aos-duration="1300"
     onclick="location.href='/Detail"
              
              >
              
                Join Now
                
              </button> 

              */}
              <li className="nav-item" data-aos="fade-down"
     data-aos-easing="ease-in-out"
     data-aos-duration="1200">
                <a className="btn1 " href="/Detail">
                  Join Now
                </a>
              </li>
             
            </form>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
