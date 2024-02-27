import React, { useState } from "react";


const TextArea = ({ handleUpercase, lowrUpercase, text, handleChange }) => {
  const [myStyle, setMyStyle] = useState({
    color: "black",
    backgroundColor: "white",
  });

  const [bntText, setTextt] = useState("dark mode");
  const toggle = () => {
    if (myStyle.color == "black") {
      setMyStyle({
        color: "white",
        backgroundColor: "black",
      });

      setTextt("Light mode");
    } else {
      setMyStyle({
        color: "black",
        backgroundColor: "white",
      });

      setTextt("Dark mode");
    }
  };

  return (
    <>
      <div>
        <textarea
          id="textt"
          rows={10}
          cols={70}
          value={text}
          onChange={handleChange}
          style={myStyle}
          className="border-2 border-indigo-600 "
        />
        <br />
        <button type="button" onClick={handleUpercase}>
          Uppercase
        </button>
        <button type="button" onClick={lowrUpercase}>
          Lowercase
        </button>
        <button type="button" onClick={toggle}>
          {bntText}
        </button>   
      </div>

    
    </>
  );
};

export default TextArea;
