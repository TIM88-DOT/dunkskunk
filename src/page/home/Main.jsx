import React, { useLayoutEffect } from "react";
// Assets
import logo from "../../assets/images/upper-logo.png";
import down from "../../assets/images/down.png";
import banner from "../../assets/images/banner.jpg";
import Footer from "../../layout/Footer/Footer";

const Main = (props) => {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <div id="main" className="main">
        <img className="main_logo" src={logo} alt="logo" />
        <div className="main_container">
          <img className="main_banner" src={banner} alt="..." />
          <div className="main_text">
            <h1>
              <br />
              The Drunk Skunks
              <br />
              Drinking Club
            </h1>
            <div className="down_arrow">
              <a href="#footer">
                <img src={down} alt="down" />
              </a>
            </div>
            <button onClick={() => props.setShow(true)}>ENTER</button>
            <hr />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Main;
