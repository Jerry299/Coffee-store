import React, { Component } from "react";

class Header extends Component {
  render() {
    return (
      <h1 class="site-heading text-center text-white d-none d-lg-block">
        <span class="site-heading-upper text-primary mb-3">
          Welcome To BLENDZ Coffee Store
        </span>
        <span class="site-heading-lower">Coffee at it's Best</span>
      </h1>
    );
  }
}

export default Header;
