import React, { useEffect, Fragment } from "react";
import {BrowserRouter} from 'react-router-dom'
import AOS from "aos";
import $ from "jquery";


import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";

import "aos/dist/aos.css";
import "./assets/styles/main.scss";
import { Form } from "react-bootstrap";

const App = () => {
  useEffect(() => {
    AOS.init({ once: true });

    let navElement = $("nav");

    $(function() {
      $(window).scrollTop() > navElement.innerHeight()
        ? navElement.addClass("sticky")
        : navElement.removeClass("sticky");
    });
    $(window).on("scroll", function() {
      $(window).scrollTop() > navElement.innerHeight()
        ? navElement.addClass("sticky")
        : navElement.removeClass("sticky");
    });
  });

  return (
    <BrowserRouter >
        {/* <Route path='/' component={Home} /> */}
        <Fragment>
      <Header />
      <main>
        <Home />
        <About />
        <Contact />
      </main>
    </Fragment>
    </BrowserRouter>
    
  );
};

export default App;
