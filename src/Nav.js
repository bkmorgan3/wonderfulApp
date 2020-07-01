import React from 'react';
import logo from './assets/logo.svg';

const Nav = () => (
  <nav className="nav-container">
    <div className="left-half">
      <div className="logo">
        <img src={logo} alt="Lexus Logo" />
      </div>
      <div className="nav">
        <ul className="nav-menu">
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </div>
    </div>
    <div className="right-half">
      <span className="name">
        <h4>Bradley Morgan </h4>
      </span>
      <span className="circle">
        <h4>BM</h4>
      </span>
    </div>
  </nav>
);

export default Nav;
