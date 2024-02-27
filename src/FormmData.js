import React, { useState } from "react";

const FormmData = () => {
  const [length, setLength] = useState(8);

  return (
    <>
      <div className="name">
        <h2 className=""> Generate</h2>
        <input
          type="range"
          min={5}
          max={100}
          value={length}
          onChange={(e) => {
            setLength(e.target.value);
          }}
        />
        <label className="ml-2">Lenght: {length}</label>
      </div>
    </>
  );
};

export default FormmData;
