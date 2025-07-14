import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from '../assets/img/Logo-ss.png'

const Header = () => {
  return (
    <>
      <header>
        <div className="header-container">
          <nav className="header-nav-bar">
            <div className="header-nav-logo">
              <Link to="/">
                <img
                  src={logo}
                  alt="Hotel Sri Sakthi Deluxe logo"
                />
              </Link>
            </div>
            <ul className="header-nav-lists">
              <li className="header-nav-list">
                <NavLink 
                  to="/" 
                  className={({ isActive }) => 
                    "header-nav-link" + (isActive ? " header-active" : "")
                  }
                >
                  Home
                </NavLink>
              </li>
              <li className="header-nav-list">
                <NavLink 
                  to="/rooms-and-suites" 
                  className={({ isActive }) => 
                    "header-nav-link" + (isActive ? " header-active" : "")
                  }
                >
                  Rooms and Suites
                </NavLink>
              </li>
              {/* <li className="header-nav-list">
                <NavLink 
                  to="/facilities" 
                  className={({ isActive }) => 
                    "header-nav-link" + (isActive ? " header-active" : "")
                  }
                >
                  Facilities
                </NavLink>
              </li> */}
              <li className="header-nav-list">
                <NavLink 
                  to="/contact-page" 
                  className={({ isActive }) => 
                    "header-nav-link" + (isActive ? " header-active" : "")
                  }
                >
                  Contact Us
                </NavLink>
              </li>
              <li className="header-nav-list">
                {/* External link stays an anchor tag */}
                <a
                  className="header-btn header-btn-custom"
                  href="https://timbu.com/search?query=hotel"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  BOOK NOW
                </a>
              </li>
            </ul>
            <div className="header-hamburger-icon">
              <div className="header-hamburger-line-1"></div>
              <div className="header-hamburger-line-2"></div>
              <div className="header-hamburger-line-3"></div>
            </div>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Header;
