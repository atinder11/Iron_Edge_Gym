import logo from "../assets/image_crop.png";
import bars from "../assets/menus.png";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light  Nav_main">
        <div className="container nav_small">
          <Link className="logo" to="./">
            <img src={logo} alt="logo not found" className="img-fluid" />
          </Link>
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
              <li
                className="nav-item "
                data-aos="fade-down"
                data-aos-easing="ease-in-out"
                data-aos-duration="800"
              >
                <Link className="nav-link" to="./">
                  Home{" "}
                </Link>
              </li>
              <li
                className="nav-item"
                data-aos="fade-down"
                data-aos-easing="ease-in-out"
                data-aos-duration="900"
              >
                <Link className="nav-link" to="/AboutUs">
                  About Us
                </Link>
              </li>
              <li
                className="nav-item"
                data-aos="fade-down"
                data-aos-easing="ease-in-out"
                data-aos-duration="1000"
              >
                <Link className="nav-link" to="/BestOffer">
                  Program
                </Link>
              </li>
              <li
                className="nav-item"
                data-aos="fade-down"
                data-aos-easing="ease-in-out"
                data-aos-duration="1100"
              >
                <Link className="nav-link" to="/BestPlan">
                  Membership
                </Link>
              </li>
              <li
                className="nav-item"
                data-aos="fade-down"
                data-aos-easing="ease-in-out"
                data-aos-duration="1200"
              >
                <Link className="nav-link" to="/Footer">
                  Contact Us
                </Link>
              </li>
            </ul>
            <form className="d-flex ms-md-4">
              {/***  <button class="btn1 " type="submit"
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"
              data-aos="fade-left"
     data-aos-easing="ease-in-out"
     data-aos-duration="1300"
     onclick="location.to='/Detail"
              
              >
              
                Join Now
                
              </button> 

              */}
              <li
                className="nav-item"
                data-aos="fade-down"
                data-aos-easing="ease-in-out"
                data-aos-duration="1200"
              >
                <Link className="btn1 " to="/Detail">
                  Join Now
                </Link>
              </li>
            </form>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
