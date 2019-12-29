import React, { Component } from "react";

class Header extends Component {
  render() {
    return (
      <h1 className="site-heading text-center text-white d-none d-lg-block">
        <span className="site-heading-upper text-primary mb-3">
          Welcome To J.BLENDZ Coffee Store
        </span>
        <span className="site-heading-lower">Coffee at it's Best</span>
      </h1>
    );
  }
}

export default Header;
