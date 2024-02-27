import React, { useState } from "react";
import "./App.css";
import TextArea from "./TextArea";
import FormmData from "./FormmData";

const Formm = () => {
  const [text, setText] = useState();

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const handleUpercase = () => {
    let newtext = typeof text === "string" ? text.toUpperCase() : "";
    setText(newtext);
  };

  const lowrUpercase = () => {
    let newtext = typeof text === "string" ? text.toLowerCase() : "";
    setText(newtext);
  };
  return (
    <>
      <h1>The textarea element</h1>

      <TextArea
        handleUpercase={handleUpercase}
        lowrUpercase={lowrUpercase}
        text={text}
        handleChange={handleChange}
      />

      <FormmData />
    </>
  );
};

export default Formm;
