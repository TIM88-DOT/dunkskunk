import React from "react";
// Assets
import Finalgif from "../../assets/images/Finalgif.gif";
// React Reveal Animation
import Fade from "react-reveal/Fade";
import Zoom from "react-reveal/Zoom";

const About = () => {
  return (
    <div id="about" className="welcome">
      <div className="wl_text">
        <Fade top duration={900} delay={910}>
          <h1>ABOUT</h1>
        </Fade>
        <Fade bottom duration={900} delay={910}>
          <p>Life's a party for the Drunk Skunks!</p>
        </Fade>
        <Fade bottom duration={900} delay={910}>
          <p>
            These fun loving skunks are at it again. It all started with a
            little skunk get-together in the neighborhood. Just having a few
            drinks together...More and more skunks joined in on the fun.
          </p>
        </Fade>
        <Fade bottom duration={900} delay={910}>
          <p>
            Before they knew it, the party got WILD and the SKUNKS GOT DRUNK!!!
            SO join the party and get yourself a Drunk Skunk to commemorate this
            epic party.
          </p>
        </Fade>
        <Fade bottom duration={900} delay={910}>
          <p>
            But it's not over. Because the Skunks had so much fun, they started
            their own club: The Drunk Skunks Drinking Club Now they can party
            all the time!
          </p>
        </Fade>
      </div>
      <div className="abt_img">
        <Zoom duration={900} delay={910}>
          <img src={Finalgif} alt="..." />
        </Zoom>
      </div>
    </div>
  );
};

export default About;
