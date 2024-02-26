import React, { useState } from "react";
import "./App.css";
import TextArea from "./TextArea";

const Formm = () => {
  const [text, setText] = useState();

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const handleUpercase = () => {
    let newtext = text.toUpperCase();
    setText(newtext);
  };

  const lowrUpercase = () => {
    let newtext = text.toLowerCase();
    setText(newtext);
  };
  return (
    <>
      <h1>The textarea element</h1>
      <p>
        <label htmlFor="w3review">Review of W3Schools:</label>
      </p>

      <TextArea
        handleUpercase={handleUpercase}
        lowrUpercase={lowrUpercase}
        text={text}
        handleChange={handleChange}
      />
    </>
  );
};

export default Formm;
