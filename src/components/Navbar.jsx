import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import logo from "../assets/logo.webp";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          <img
            src={logo}
            alt="logo"
            style={{ width: "100px", height: "auto" }}
          />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse text-center"
          id="navbarNavDropdown"
        >
          <ul className="navbar-nav mx-auto">
            <li className="nav-item">
              <Link className="nav-link ms-2" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle ms-2"
                href="#"
                id="navbarDropdownMenuLink"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Destinations
              </a>
              <ul
                className="dropdown-menu"
                aria-labelledby="navbarDropdownMenuLink"
              >
                <li>
                  <a className="dropdown-item" href="#">
                    Maasai Mara
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Kerala
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Himachal Pradesh
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Goa
                  </a>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <Link className="nav-link ms-2" to="/about">
                About Us
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link ms-2" to="/contact">
                Contact Us
              </Link>
            </li>
          </ul>
          <div className="d-lg-flex justify-content-lg-end mt-2 mt-lg-0">
            <button type="button" className="btn btn-warning text-white">
              Book Now
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
