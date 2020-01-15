import React from "react";
import Home from "./components/Home-Page/Home";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import "./App.css";
import About from "./components/About";
import Product from "./components/Product";
import Store from "./components/Store";
import ContactForm from "./components/Contact/ContactForm";

function App() {
  return (
    <Router>
      <Route path="/home" exact component={Home} />
      <Route path="/" exact component={Home} />
      <Switch>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/products">
          <Product />
        </Route>
        <Route path="/store">
          <Store />
        </Route>
        <Route path="/contact">
          <ContactForm />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
