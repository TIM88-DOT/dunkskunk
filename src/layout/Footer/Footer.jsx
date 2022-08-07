import React from "react";
import "./Footer.css";
import logo from "../../assets/images/footer-logo.png";
import binance from "../../assets/images/binance.png";
import telegram from "../../assets/images/telegram.png";
import pinksale from "../../assets/images/pinksale-logo.png";

const Footer = () => {
  return (
    <>
      <div id="footer" className="footer">
        <div className="ft_container">
          <img src={logo} alt="logo" />
          <div className="ft_social">
            <div className={`fi si_1 show_icon`}>
              <a href="https://www.pinksale.finance" target="_blank">
                <img src={pinksale} alt="pinksale" />
              </a>
            </div>
            <div className={`fi si_1 show_icon`}>
              <a href="https://t.me/DrunkSkunksDC" target="_blank">
                <img src={telegram} alt="telegram" />
              </a>
            </div>

            <div className={`fi si_3 show_icon`}>
              <a href="#">
                <img src={binance} alt="binance" />
              </a>
            </div>
            <div className={`fi si_4 show_icon`}>
              <a href="https://twitter.com/DrunkSkunksDC" target="_blank">
                <i className="fab fa-twitter"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
