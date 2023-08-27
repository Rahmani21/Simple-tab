import React, { useState } from "react";
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Purchase from "./Tabs/Purchase";

import "./../../src/App.css"

const Home = () => {
  const [active, setActive] = useState(false);
  const handleClick = () => {
    setActive(!active);
    console.log("Clicked");
  };
  return (
    <div className="container my-5 p-2 shadow rounded">
      <Tabs
        defaultActiveKey="purchase"
        transition={false}
        id="noanim-tab-example"
        className="mb-3 rounded"
        style={{backgroundColor:"#e2eae23d"}}
      >
        <Tab eventKey="purchase" title="Home" onClick={handleClick} style={{backgroundColor:active ? "bg-warning":""}}>
          <Purchase />
        </Tab>
        <Tab eventKey="Switch / Renew" className="" title="Switch / Renew">
          Switch / Renew
        </Tab>

      </Tabs>
    </div>
  );
};

export default Home;
