import { useState, useEffect } from "react";
import "./header.css";
import logo from "../../assets/images/upper-logo.png";
import { Link } from "react-scroll";
import { useDispatch, useSelector } from "react-redux";
import { connect } from "../../redux/blockchain/blockchainActions";

const Header = (props) => {
  const [activeNav, sectActiveNav] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
  const [connected, setConnected] = useState(false);
  const [account, setAccount] = useState("Connect Wallet");

  const blockchain = useSelector((state) => state.blockchain);
  const dispatch = useDispatch();

  const handleConnection = async (e) => {
    dispatch(connect());
  };
  useEffect(() => {
    let account = blockchain.account;
    console.log("account = , connected", account, blockchain.connected);
    setConnected(blockchain.connected);
    let address = account
      ? account.slice(2, 6) + "..." + account.slice(38, 42)
      : "Connect Wallet";
    if (blockchain.connected) {
      setAccount(address);
    }
    // dispatch(startUp());
  }, [blockchain]);


  return (
    <header className="animate-header">
      <div className="header-container">
        <div className="d-flex align-items-center">
          <div className="logo-part">
            <a href="#" onClick={() => props.setShow()}>
              <img src={logo} alt="..." />
            </a>
          </div>
        </div>
        <div className="d-flex align-items-center">
          <nav className={menuOpen ? "opened-navs nav-sec" : "nav-sec"}>
            <ul>
              <li>
                <Link
                  className={activeNav === 1 ? "active-nav" : ""}
                  onClick={() => {
                    sectActiveNav(1);
                    setMenuOpen(false);
                  }}
                  to="about"
                  offset={-90}
                >
                  ABOUT
                </Link>
              </li>
              <li>
                <Link
                  className={activeNav === 2 ? "active-nav" : ""}
                  onClick={() => {
                    sectActiveNav(2);
                    setMenuOpen(false);
                  }}
                  to="specs"
                  offset={-90}
                >
                  SPECS
                </Link>
              </li>
              <li>
                <Link
                  className={activeNav === 3 ? "active-nav" : ""}
                  onClick={() => {
                    sectActiveNav(3);
                    setMenuOpen(false);
                  }}
                  to="dirty"
                  offset={-90}
                >
                  THE FILTHY FIFTY
                </Link>
              </li>
              <li>
                <Link
                  className={activeNav === 4 ? "active-nav" : ""}
                  onClick={() => {
                    sectActiveNav(4);
                    setMenuOpen(false);
                  }}
                  to="toxic"
                  offset={-90}
                >
                  TOXIC BEER
                </Link>
              </li>
              <li>
                <Link
                  className={activeNav === 5 ? "active-nav" : ""}
                  onClick={() => {
                    sectActiveNav(5);
                    setMenuOpen(false);
                  }}
                  to="roadmap"
                  offset={-80}
                >
                  ROADMAP
                </Link>
              </li>
              <li>
                <Link
                  className={activeNav === 6 ? "active-nav" : ""}
                  onClick={() => {
                    sectActiveNav(6);
                    setMenuOpen(false);
                  }}
                  to="team"
                  offset={-130}
                >
                  THE TEAM
                </Link>
              </li>
              <li>
                <div className="connect_btn mobile2">
                  <button onClick={(e) => {
                    e.preventDefault();
                    handleConnection();
                  }}>{account}</button>
                </div>
              </li>
            </ul>
          </nav>
          <div className="connect_btn ms-3 desktop2">
            <button onClick={(e) => {
              e.preventDefault();
              handleConnection();
            }}>{account}</button>
          </div>
        </div>
        <div className="menu-btn">
          <div
            className={menuOpen ? "ham-burg-opened" : ""}
            id="nav-icon2"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>
      <div
        className={`nav-shadow  ${menuOpen ? "show-shadow" : ""}`}
        onClick={() => setMenuOpen(false)}
      ></div>
    </header>
  );
};

export default Header;
