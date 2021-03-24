import React from "react";
import ResultScreen from "./ResultScreen";
import ComputationScreen from "./ComputationScreen";
import "./Screen.css";

export default function Screen(props) {
    return (
        <div className="Screen">
            <div className="container mt-5">
            <ResultScreen>{props.result}</ResultScreen> 
            <ComputationScreen>{props.equation}</ComputationScreen>
            </div>
        </div>
    )
}
