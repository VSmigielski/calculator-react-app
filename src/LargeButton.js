import React from "react";
import Button from "./Button";
import "./Button.css"

export default function LargeButton(props) {
    return (
        <Button>{props.children}</Button>
    )
}