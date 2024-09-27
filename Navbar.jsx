import "./Navbar.css";
import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdOutlineRestaurantMenu } from "react-icons/md";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <div className="grub-navbar">
      <div className="grub-navbar-logo">
        <h1>GRUB</h1>
      </div>
      <ul className="grub-navbar-links">
        <li className="p__opensans">
          <a href="#home">Home</a>
        </li>
        <li className="p__opensans">
          <a href="#about">About</a>
        </li>
        <li className="p__opensans">
          <a href="#menu">Menu</a>
        </li>
        <li className="p__opensans">
          <a href="#awards">Awards</a>
        </li>
        <li className="p__opensans">
          <a href="#contact">Contact</a>
        </li>
      </ul>
      <div className="grub-navbar-login">
        <a href="/" className="p__opensans">
          Log In / Registration
        </a>
        <div />
        <a href="/">Book Table</a>
      </div>
      <div className="grub-navbar-smallscreen">
        <GiHamburgerMenu
          color="#fff"
          fontSize={27}
          onClick={() => setToggle(true)}
        />

        {toggle && (
          <div className="grub-navbar-smallscreen-overlay flex__center slide-bottom">
            <MdOutlineRestaurantMenu
              fontSize={27}
              className="overlay-close"
              onClick={() => setToggle(false)}
            />
            <ul className="grub-navbar-smallscreen-links">
              <li className="p__opensans">
                <a href="#home" onClick={() => setToggle(false)}>
                  Home
                </a>
              </li>
              <li className="p__opensans">
                <a href="#about" onClick={() => setToggle(false)}>
                  About
                </a>
              </li>
              <li className="p__opensans">
                <a href="#menu" onClick={() => setToggle(false)}>
                  Menu
                </a>
              </li>
              <li className="p__opensans">
                <a href="#awards" onClick={() => setToggle(false)}>
                  Awards
                </a>
              </li>
              <li className="p__opensans">
                <a href="#contact" onClick={() => setToggle(false)}>
                  Contact
                </a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
