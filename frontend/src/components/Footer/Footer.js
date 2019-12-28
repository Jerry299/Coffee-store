import React from "react";

const Footer = () => {
  return (
    <footer className="footer text-faded text-center py-5">
      <div className="container">
        <p className="m-0 small">
          Copyright &copy; www.blendz.netlify.com {new Date().getFullYear()}
        </p>
        <p className="m-0 small">
          All Rights Reserved, Property of Jeremy Blendz
        </p>
      </div>
    </footer>
  );
};

export default Footer;
