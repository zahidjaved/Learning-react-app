import React from "react";

const TabButtons = ({children, onSelect}) => {
  return (
    <>
     
        <li className="list-none">
          <button onClick={onSelect}>{children}</button>
        </li>
     
    </>
  );
};

export default TabButtons;
