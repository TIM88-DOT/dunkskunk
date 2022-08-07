import React from "react";
// React Reveal Animation
import Fade from "react-reveal/Fade";
// Assets
import img1 from "../../assets/images/artImg1.png";
import img2 from "../../assets/images/Toxic Beer.png";
import questionMark from "../../assets/images/question_mark.jpg";
const Toxic = () => {
  return (
    <>
      <section id="toxic" className="specs">
        <div className="specs_container">
          <div className="specs_left">
            <Fade top duration={900} delay={1100}>
              <h2>TOXIC BEER</h2>
            </Fade>
            <Fade bottom duration={900} delay={1100}>
              <p>
                Rumor has it there is some kind of legendary Toxic Beer that can
                take you from sober to WASTED in one drop...it even mutates the
                skunks into something....DIFFERENT! Something strange must have
                been in that toxic beer, because these skunks have mutated into
                weird, unique and different looking creatures!
              </p>
            </Fade>
            {/* <Fade bottom duration={900} delay={1100}>
              <p>
                Something strange must have been in that toxic beer, because
                these skunks have mutated into weird, unique and different
                looking creatures!
              </p>
            </Fade> */}
            <Fade bottom duration={900} delay={1100}>
              <p>
                First 500 DSDC minters will receive a Toxic Beer for free. Toxic
                Beer will later be sold for .10 BNB.
              </p>
            </Fade>
          </div>
          <div className="toxic_right specs_right">
            <Fade top duration={900} delay={900}>
              <img src={img1} alt="..." />
            </Fade>
            <Fade duration={1000} delay={1000}>
              <h2>+</h2>
            </Fade>
            <Fade bottom duration={900} delay={900}>
              <img src={img2} alt="..." />
            </Fade>
            <Fade duration={1100} delay={1100}>
              <h2>=</h2>
            </Fade>
            <Fade bottom duration={900} delay={900}>
              <img src={questionMark} alt="..." />
            </Fade>
          </div>
        </div>
      </section>
    </>
  );
};

export default Toxic;
