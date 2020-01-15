import React, { Component, useState } from "react";
import Header from "../Header/Header";
import Navigation from "../Navigation/Navigation";
import Footer from "../Footer/Footer";

const ContactForm = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setlastName] = useState("");
  const [email, setEmail] = useState("");
  const [textArea, settextArea] = useState("");

  const onSubmit = e => {
    e.preventDefault();
    console.log(firstName, lastName, email);
  };
  return (
    <>
      <Header />
      <Navigation />
      <div className="container mt-4 mb-4 p-5">
        <div className="row bg-light mt-4 mb-4 p-5">
          <form className="ml-4">
            <div className="form-group">
              <label htmlFor="exampleInputEmail1">Email address</label>
              <input
                type="email"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Enter email"
                required
                onChange={e => setEmail(e.target.value)}
              />
              <small id="emailHelp" className="form-text text-muted">
                We'll never share your email with anyone else.
              </small>
              <div></div>
            </div>
            <div className="form-group">
              <label htmlFor="exampleInputfirstname">First Name</label>
              <input
                type="text"
                className="form-control"
                id="exampleInputfirstname"
                placeholder="Enter First Name"
                required
                onChange={e => setFirstName(e.target.value)}
              />
              <div></div>
            </div>
            <div className="form-group">
              <label htmlFor="exampleInputlastname">Last Name</label>
              <input
                type="text"
                className="form-control"
                id="exampleInput#lastname"
                placeholder="Enter Last Name"
                required
                onChange={e => setlastName(e.target.value)}
              />
              <div></div>
            </div>
            <div className="form-group">
              <label htmlFor="exampleFormControlTextarea1">
                Example textarea
              </label>
              <textarea
                className="form-control"
                id="exampleFormControlTextarea1"
                rows="3"
                required
              ></textarea>
            </div>
            <button onClick={onSubmit} className="btn btn-primary">
              Submit
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ContactForm;
