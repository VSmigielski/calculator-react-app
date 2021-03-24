import React from "react";
import "./ComputationScreen.css";

export default function ComputationScreen(props) {
    return (
        <div className="ComputationScreen">
          {props.children}
        </div>
    );
}