import React from "react";
import "./ResultScreen.css";


export default function ResultScreen(props) {
    return (
        <div className="ResultScreen">
            {props.children}
        </div>
    );
}