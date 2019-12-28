import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import PageWrapper from "../PageWrapper";
import IntroPage from "../IntroPage/IntroPage";
import Promise from "../Promise/Promise";
import Footer from "../Footer/Footer";

class Home extends Component {
  render() {
    return (
      <PageWrapper>
        <IntroPage />
        <Promise />
        <Footer />
      </PageWrapper>
    );
  }
}

export default Home;
