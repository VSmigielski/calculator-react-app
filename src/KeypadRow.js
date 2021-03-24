import React from "react";
import "./KeypadRow.css"

export default function KeypadRow(props) {
    return (
        <div className="KeypadRow">
            {props.children}
        </div>
    );
}