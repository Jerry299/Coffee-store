import React from "react";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark py-lg-5 " id="mainNav">
      <div className="container">
        <NavLink
          className="navbar-brand text-uppercase text-expanded font-weight-bold d-lg-none"
          to="/home"
        >
          J.BLENDZ
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarResponsive"
          aria-controls="navbarResponsive"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarResponsive">
          <ul className="navbar-nav mx-auto">
            <li className="nav-item px-lg-4">
              <NavLink
                className="nav-link text-uppercase text-expanded"
                to="/home"
                activeStyle={{
                  background: "red",
                  color: "white"
                }}
              >
                Home
                <span className="sr-only">(current)</span>
              </NavLink>
            </li>
            <li className="nav-item px-lg-4">
              <NavLink
                className="nav-link text-uppercase text-expanded"
                to="/about"
                activeStyle={{
                  background: "red",
                  color: "white"
                }}
              >
                About
              </NavLink>
            </li>
            <li className="nav-item px-lg-4">
              <NavLink
                className="nav-link text-uppercase text-expanded"
                to="/products"
                activeStyle={{
                  background: "red",
                  color: "white"
                }}
              >
                Products
              </NavLink>
            </li>
            <li className="nav-item px-lg-4">
              <NavLink
                className="nav-link text-uppercase text-expanded"
                to="/store"
                activeStyle={{
                  background: "red",
                  color: "white"
                }}
              >
                Store
              </NavLink>
            </li>
            <li className="nav-item px-lg-4">
              <NavLink
                className="nav-link text-uppercase text-expanded"
                to="/contact"
                activeStyle={{
                  background: "red",
                  color: "white"
                }}
              >
                Contact Us
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
