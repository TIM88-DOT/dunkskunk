import React, { useState, useEffect } from "react";
import { Range } from 'react-range';
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "../../redux/data/dataActions";
import Fade from "react-reveal/Fade";

const BuySkull = () => {
  const [mintAmount, setMintAmount] = useState([10]);
  const [connected, setConnected] = useState();
  const [claimingNft, setClaimingNft] = useState(false);
  const [CONFIG, SET_CONFIG] = useState({
    CONTRACT_ADDRESS: "",
    SCAN_LINK: "",
    NETWORK: {
      NAME: "",
      SYMBOL: "",
      ID: 0,
    },
    NFT_NAME: "",
    SYMBOL: "",
    MAX_SUPPLY: 1,
    WEI_COST: 0,
    DISPLAY_COST: 0,
    GAS_LIMIT: 0,
    MARKETPLACE: "",
    MARKETPLACE_LINK: "",
    SHOW_BACKGROUND: false,
  });
  const blockchain = useSelector((state) => state.blockchain);
  const data = useSelector((state) => state.data);
  const dispatch = useDispatch();

  const getData = () => {
    if (blockchain.account !== "" && blockchain.smartContract !== null) {
      dispatch(fetchData(blockchain.account));
    }
  };

  const getConfig = async () => {
    const configResponse = await fetch("/config/config.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });
    const config = await configResponse.json();
    console.log("config", config)
    SET_CONFIG(config);
  };

  useEffect(() => {
    getConfig();
  }, []);

  useEffect(() => {
    getData();
    setConnected(blockchain.connected)
    if (blockchain.account) {
      console.log("CurrentAccount:", blockchain.account);
    }
  }, [blockchain.account]);

  const claimNFTs = async () => {
    if (connected) {
      try {
        let cost = data.cost.toString();
        console.log(cost)
        let gasLimit = CONFIG.GAS_LIMIT;
        let totalCostWei = (cost * mintAmount);
        let totalGasLimit = String(gasLimit * mintAmount);
        console.log("Cost: ", totalCostWei);
        console.log("Gas limit: ", totalGasLimit);
        setClaimingNft(true);
        await blockchain.smartContract
          .mint(blockchain.account, mintAmount, {
            gasLimit: String(totalGasLimit),
            value: String(totalCostWei),
          });
        setClaimingNft(false);
      } catch (error) {
        console.log(error);
        setClaimingNft(false);
      }
    }
    else alert("Wallet not connected !")
  };

  const checkAmount = (values) => {
    console.log("value", Number(values.toString()));
    setMintAmount(values);
  }

  return (
    <>
      <div className="buy_skull">
        <Fade duration={900} delay={910}>
          <div className="bs_container">
            <h2>BUY A SKUNK</h2>
            <h5>
              Initial Price(test) <strong>.05 BNB</strong>
            </h5>
            <div style={{ alignItems: "center", textAlign: "center", width: "30%", display: "flex", flexDirection: "column", marginInline: "1.2em" }}>
              <output style={{fontWeight:"bold", fontSize:"18px",  marginBottom: '15px' }} id="output">
                {mintAmount}
              </output>
              <Range
                step={1}
                min={1}
                max={20}
                values={mintAmount}
                onChange={(values) => checkAmount(values)}
                renderTrack={({ props, children }) => (
                  <div
                    {...props}
                    style={{
                      ...props.style,
                      height: '6px',
                      width: '100%',
                      backgroundColor: '#ccc',
                      marginBottom: "1.8em",
                    }}
                  >
                    {children}
                  </div>
                )}
                renderThumb={({ props }) => (
                  <div
                    {...props}
                    style={{
                      ...props.style,
                      height: '1.1em',
                      width: '1.1em',
                      backgroundColor: '#999'
                    }}
                  />
                )}
              />
            </div>
            <button
              disabled={claimingNft ? 1 : 0}
              onClick={(e) => {
                e.preventDefault();
                claimNFTs();
              }}>
              {claimingNft ? "Minting..." : "Mint"}</button>
          </div>
        </Fade>
      </div>
    </>
  );
};

export default BuySkull;
