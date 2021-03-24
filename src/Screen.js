import React from "react";
import ResultScreen from "./ResultScreen";
import ComputationScreen from "./ComputationScreen";
import "./Screen.css";

const Screen = (props) => (
    <section className="Screen">
      <ResultScreen>{props.result}</ResultScreen>
      <ComputationScreen>{props.equation}</ComputationScreen>
    </section>
  );

  export default Screen;