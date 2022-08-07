import React from "react";
import Fade from "react-reveal/Fade";

const BuySkull = () => {
  return (
    <>
      <div className="buy_skull">
        <Fade duration={900} delay={910}>
          <div className="bs_container">
            <h2>BUY A SKUNK</h2>
            <h5>
              Initial Price <strong>.25 BNB</strong>
            </h5>
            <button>Mint</button>
          </div>
        </Fade>
      </div>
    </>
  );
};

export default BuySkull;
