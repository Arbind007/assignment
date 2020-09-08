import React from "react";
import { Link } from "react-router-dom";
import Icon from "../resources/photo/icon.png";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-sm fixed-top" id="ram">
      <div className="container my-2">
        <Link to="/" className="navbar-brand font-weight-bold" id="ram2">
          <img
            className="img-fluid rounded-circle w-40"
            src={Icon}
            alt="spotify icon"
            id="ram4"
          />
          <span className="px-2 font-weight-bold">Sangeet</span>
        </Link>

        <button
          className="navbar-toggler"
          data-toggle="collapse"
          data-target="#collapseNav"
        >
          <span className="fas fa-bars text-dark"></span>
        </button>
        <div
          className="collapse navbar-collapse flex-grow-0 six"
          id="collapseNav"
        >
          <div className="navbar-nav">
            <Link to="/contact" className="ml-auto mx-3">
              <button className="btn btn-outline-info ">Contact Us</button>
            </Link>
            <a
              href="/"
              className="nav-item nav-link text-white font-weight h6 mx-1 my-auto"
            >
              Help
            </a>
            <a
              href="/"
              className="nav-item nav-link text-white font-weight h6 mx-1 my-auto"
            >
              Download
            </a>
            <div className="nav-item nav-link text-white font-weight h6 mx-1 my-auto">
              |
            </div>
            <a
              href="/"
              className="nav-item nav-link text-white font-weight h6 mx-1 my-auto"
            >
              Sign up
            </a>
            <Link to="/song" className="ml-auto mx-3">
              <button className="btn btn-outline-info ">Log In</button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
