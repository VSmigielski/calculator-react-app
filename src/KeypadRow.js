import React from "react";
import "./KeypadRow.css"

const KeypadRow = (props) => (
    <div className="KeypadRow">
      {props.children}
    </div>
  );
  export default KeypadRow;