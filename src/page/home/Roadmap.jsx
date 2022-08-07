import React from "react";
// Assets
import bg from "../../assets/images/roadmap.jpg";
import pointer from "../../assets/images/skull.png";
// React Reveal Animation
import Fade from "react-reveal/Fade";
import Bounce from "react-reveal/Bounce";
import Jump from "react-reveal/Jump";

function Roadmap() {
  return (
    <div id="roadmap" className="roadmap">
      <Bounce duration={900} delay={910}>
        <h1 className="yellow_text">Roadmap</h1>
      </Bounce>
      <div className="roadmap-image">
        <img className="roadmap-bg" src={bg} alt="..." />
        <div className="pointer-div pointer-div1">
          <div className="left-pointer">
            <h2>01</h2>
            <Jump duration={1200} delay={1200}>
              <img src={pointer} alt="..." className="pointer-img" />
            </Jump>
          </div>
          <div className="right-pointer">
            <Fade top duration={900} delay={910}>
              <h4>THE PARTY BEGINS</h4>
            </Fade>
            <Fade duration={1050} delay={1050}>
              <p>Community building with giveaways, contests, and merch!</p>
            </Fade>
          </div>
        </div>
        <div className="pointer-div pointer-div2">
          <div className="left-pointer">
            <h2>02</h2>
            <Jump duration={1400} delay={1400}>
              <img src={pointer} alt="..." className="pointer-img" />
            </Jump>
          </div>
          <div className="right-pointer">
            <Fade top duration={900} delay={910}>
              <h4>The party CONTINUES</h4>
            </Fade>
            <Fade duration={1150} delay={1150}>
              <p>Presale for $STINK begins</p>
            </Fade>
            <Fade duration={1150} delay={1150}>
              <p>
                NFT sales go live, and the skunks bring the party to the Binance
                SmartChain
              </p>
            </Fade>
          </div>
        </div>
        <div className="pointer-div pointer-div3">
          <div className="left-pointer">
            <h2>03</h2>
            <Jump duration={1600} delay={1600}>
              <img src={pointer} alt="..." className="pointer-img" />
            </Jump>
          </div>
          <div className="right-pointer">
            <Fade top duration={1100} delay={1100}>
              <h4>The party gets WILD</h4>
            </Fade>
            <Fade duration={1250} delay={1250}>
              <p>
                The Toxic Beer gets released and allows you to mutate your Drunk
                Skunk NFT into something...DIFFERENT!
              </p>
            </Fade>
          </div>
        </div>
        <div className="pointer-div pointer-div4">
          <div className="left-pointer">
            <h2>04</h2>
            <Jump duration={1800} delay={1800}>
              <img src={pointer} alt="..." className="pointer-img" />
            </Jump>
          </div>
          <div className="right-pointer">
            <Fade top duration={1300} delay={1300}>
              <h4>The party gets EPIC</h4>
            </Fade>
            <Fade duration={1350} delay={1350}>
              <p>$STINK Protocol Release (Token)</p>
            </Fade>
          </div>
        </div>
        <div className="pointer-div pointer-div5">
          <div className="left-pointer">
            <h2>05</h2>
            <Jump duration={1800} delay={1800}>
              <img src={pointer} alt="..." className="pointer-img" />
            </Jump>
          </div>
          <div className="right-pointer">
            <Fade top duration={1300} delay={1300}>
              <h4>The EXECUTIVE party</h4>
            </Fade>
            <Fade duration={1350} delay={1350}>
              <p>
                Social get-togethers for NFT holders and exclusive parties...be
                a drunk skunk together with us in real life!
              </p>
            </Fade>
          </div>
        </div>
        <div className="pointer-div pointer-div6">
          <div className="left-pointer">
            <h2 className="ms-2">06</h2>
            <Jump duration={1400} delay={1400}>
              <img src={pointer} alt="..." className="pointer-img" />
            </Jump>
          </div>
          <div className="ms-5 right-pointer">
            <Fade top duration={900} delay={910}>
              <h4>THE PARTY GOES NATIONWIDE</h4>
            </Fade>
            <Fade duration={1150} delay={1150}>
              <p>Brewery Partnership.</p>
              <p>
                Launch Drunk Skunks Lager and Pale Ale! Begin retail sales of
                Drunk Skunks.
              </p>
            </Fade>
          </div>
        </div>
        <div className="pointer-div pointer-div7">
          <div className="left-pointer">
            <h2>07</h2>
            <Jump duration={1900} delay={1900}>
              <img src={pointer} alt="..." className="pointer-img" />
            </Jump>
          </div>
          <div className="right-pointer">
            <Fade top duration={1300} delay={1300}>
              <h4>THE PARTY RAGES ON</h4>
            </Fade>
            <Fade duration={1350} delay={1350}>
              <p>Open four brick and mortar Drunk Skunks Drinking Club Bars</p>
            </Fade>
            <Fade duration={1350} delay={1350}>
              <p>Locations planned for Ohio, Texas, Florida, and California</p>
            </Fade>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Roadmap;
