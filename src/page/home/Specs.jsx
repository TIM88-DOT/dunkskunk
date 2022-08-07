import React from "react";
// React Reveal Animation
import Fade from "react-reveal/Fade";

const Specs = () => {
  return (
    <>
      <section id="specs" className="specs">
        <div className="specs_container">
          <div className="specs_left">
            <Fade top duration={800} delay={800}>
              <div>
                <h2 className="s_text">SPECS</h2>
              </div>
            </Fade>
            <Fade bottom duration={900} delay={910}>
              <p>
                All Drunk Skunks are uniquely created and one of a kind! They
                will have a combination of over 120 different traits, including
                clothing, backgrounds, headwear, facial expressions and more.
                Drunk Skunks will be issued as Bep-20 tokens on the Binance
                Smartchain. Each Skunk will be available for purchase for .25
                BNB.
              </p>
            </Fade>
          </div>
        </div>
      </section>
    </>
  );
};

export default Specs;
