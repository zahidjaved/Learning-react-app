import React, { useState } from "react";
import "./App.css";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import Formm from "./Formm";
import TabButtons from "./TabButtons";

function App() {
  const [numbers, setNumbers] = useState(" this ");
  const [selectTopic, setSelectTopic] = useState("Random topic");

  const handleSelect = (selectBuuton) => {
    setSelectTopic(selectBuuton);
  };

  return (
    <>
      <div className="container">
        <h2> App.js</h2>
        <Formm />

        {/* tabs buttons */}
        <div className="flex mt-4">
          <TabButtons onSelect={() => handleSelect("components")}>
            components
          </TabButtons>
          <TabButtons onSelect={() => handleSelect("jsx")}>jsx</TabButtons>
          <TabButtons onSelect={() => handleSelect("state")}>state</TabButtons>
        </div>
        <h3 className="mt-3">{selectTopic}</h3>
      </div>
    </>
  );
}

export default App;
