import React, { Component } from "react";

import IntroPage from "../IntroPage/IntroPage";
import Promise from "../Promise/Promise";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Navigation from "../Navigation/Navigation";

class Home extends Component {
  render() {
    return (
      <>
        <Header />
        <Navigation />
        <IntroPage />
        <Promise />
        <Footer />
      </>
    );
  }
}

export default Home;
