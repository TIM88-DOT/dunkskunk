import React from "react";
import artImg1 from "../../assets/images/artImg1.jpeg";
import artImg2 from "../../assets/images/artImg2.png";
import artImg3 from "../../assets/images/artImg3.jpeg";
import artImg4 from "../../assets/images/artImg4.png";
import Fade from "react-reveal/Fade";

const Welcome = () => {
  return (
    <div id="welcome" className="welcome">
      <div className="wl_text">
        <Fade top duration={900} delay={910}>
          <h1>WELCOME TO DSDC</h1>
        </Fade>
        <Fade bottom duration={900} delay={910}>
          <p>
            DSDC is a collection of 5,555 Drunk Skunk NFT's coming to life on
            the Binance Smartchain. Owning a Drunk Skunk gets you membership to
            the Drunk Skunks Drinking Club- a social club with exclusive members
            only benefits. The Drunk Skunk Drinking Club will include social
            meetups, merch giveaways, contests and givebacks to our exclusive
            holders.
          </p>
        </Fade>
      </div>
      <div className="wl_img">
        <Fade duration={1000} delay={1200}>
          <div>
            <img src={artImg1} alt="..." />
            <img src={artImg2} alt="..." />
          </div>
        </Fade>
        <Fade duration={1000} delay={1200}>
          <div>
            <img src={artImg3} alt="..." />
            <img src={artImg4} alt="..." />
          </div>
        </Fade>
      </div>
    </div>
  );
};

export default Welcome;
