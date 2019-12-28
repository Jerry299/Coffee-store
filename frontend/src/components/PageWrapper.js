import React from "react";
import Header from "./Header/Header";
import Navigation from "./Navigation/Navigation";

const PageWrapper = props => {
  console.log(props.children);
  return (
    <div>
      <Header />
      <Navigation />
      {props.children}
    </div>
  );
};

export default PageWrapper;
