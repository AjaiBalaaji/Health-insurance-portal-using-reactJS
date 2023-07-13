import { useRef, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./main.css";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const navRef = useRef();
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const navigate = useNavigate();

  const toggleNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  const handleLogin = () => {
    navigate("/login");
  };

  const handleSignupPage = () => {
    navigate("/SignUpPage");
  };

  const handleAbout = () => {
    navigate("/About");
  };

  return (
    <div className="hello">
      <header>
        <h3>MEDCARE+</h3>
        <nav ref={navRef}>
          <a href="/#">Home</a>
          <a href="/#">Policy Provider</a>
          <div className={`dropdown ${isDropdownOpen ? "open" : ""}`}>
            <a
              href="#"
              className="dropbtn"
              onClick={toggleDropdown}
            >
              Dropdown
            </a>
            <div className="dropdown-content">
              <a href="#">Link 1</a>
              <a href="#">Link 2</a>
              <a href="#">Link 3</a>
            </div>
          </div>
          <a onClick={handleAbout}>About Us</a>
          <a onClick={handleLogin}>Login</a>
          <a onClick={handleSignupPage}>Sign Up</a>
          <a href="#">Contact Us</a>
          <button
            className="nav-btn nav-close-btn"
            onClick={toggleNavbar}
          >
            <FaTimes />
          </button>
        </nav>
        <button className="nav-btn" onClick={toggleNavbar}>
          <FaBars />
        </button>
      </header>
      <div className="content">
        <h1>Welcome to MedCare+</h1>
      </div>
      <br />
      <div className="wel">
        <h3>
          Hello! At MedCare+, we're dedicated to ensuring your health insurance
          <br />
          experience is as simple as possible. From finding the right plan to
          staying
          <br />
          connected with your insurer, our app provides the tools you need to
          protect
          <br />
          your health and financial security
        </h3>
      </div>
      <Button
        variant="default"
        style={{ color: "white", background: "#002234" }}
      >
        Get started
      </Button>
    </div>
  );
}

export default Navbar;
