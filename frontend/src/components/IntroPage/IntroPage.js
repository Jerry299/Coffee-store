import React from "react";
import Home from "../Home-Page/Home";
// import { Link } from "react-router-dom";

const IntroPage = () => {
  return (
    <section className="page-section clearfix">
      <div className="container">
        <div className="intro">
          <img
            className="intro-img img-fluid mb-3 mb-lg-0 rounded"
            src="img/intro.jpg"
            alt=""
          />
          <div className="intro-text left-0 text-center bg-faded p-5 rounded">
            <h2 className="section-heading mb-4">
              <span className="section-heading-upper">Fresh Coffee</span>
              <span className="section-heading-lower">Worth Drinking</span>
            </h2>
            <p className="mb-3">
              Every cup of our quality artisan coffee starts with locally
              sourced, hand picked ingredients. Once you try it, our coffee will
              be a blissful addition to your everyday morning routine - we
              guarantee it!
            </p>
            <div className="intro-button mx-auto">
              {/* <Link className="btn btn-primary btn-xl" to="/home">
                Visit Us Today!
              </Link> */}
              <button
                type="button"
                className="btn btn-primary btn-xl"
                data-toggle="tooltip"
                data-placement="bottom"
                title="1 New Road Iyiowa Odekpe"
              >
                Visit US Today
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntroPage;
