import React from "react";
import { Link } from "react-router-dom";
import "./index.css";
import logo from "../../img/logo.png";

const Navbar = () => {
  return (
    <nav id="navbar">
      <div>
        <img src={logo} alt="Logo" />
      </div>
      <Link to="/">
        <button>Dashboard</button>
      </Link>
      <Link to="/about">
        <button>About</button>
      </Link>
    </nav>
  );
};

export default Navbar;
