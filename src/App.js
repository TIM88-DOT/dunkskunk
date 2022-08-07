import React, { useState } from "react";

import "./App.css";
import Home from "./page/home";
import Main from "./page/home/Main";
function App() {
  const [setActivePage, showSetActivePage] = useState(false);
  console.warn = () => {};
  return (
    <>
      {setActivePage ? (
        <Home show={setActivePage} setShow={showSetActivePage} />
      ) : (
        <Main show={setActivePage} setShow={showSetActivePage} />
      )}
      <div className="ft_copy"></div>
    </>
  );
}

export default App;
