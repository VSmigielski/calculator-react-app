import React from "react";
import ResultScreen from "./ResultScreen";
import ComputationScreen from "./ComputationScreen";
import "./Screen.css";

const Screen = (props) => (
    <section className="Screen">
        <div className="container">
        <div className="mb-3">
      <ResultScreen>{props.result}</ResultScreen>
      </div>
      <div className="mb-3">
      <ComputationScreen>{props.equation}</ComputationScreen>
      </div>
      </div>
    </section>
  );

  export default Screen;