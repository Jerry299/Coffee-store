import React from "react";

const Navigation = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark py-lg-4" id="mainNav">
      <div className="container">
        <a
          className="navbar-brand text-uppercase text-expanded font-weight-bold d-lg-none"
          href="www.g"
        >
          Start Bootstrap
        </a>
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
            <li className="nav-item active px-lg-4">
              <a
                className="nav-link text-uppercase text-expanded"
                href="index.html"
              >
                Home
                <span className="sr-only">(current)</span>
              </a>
            </li>
            <li className="nav-item px-lg-4">
              <a
                className="nav-link text-uppercase text-expanded"
                href="www.about.html"
              >
                About
              </a>
            </li>
            <li className="nav-item px-lg-4">
              <a
                className="nav-link text-uppercase text-expanded"
                href="products.html"
              >
                Products
              </a>
            </li>
            <li className="nav-item px-lg-4">
              <a
                className="nav-link text-uppercase text-expanded"
                href="www.store.html"
              >
                Store
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
