import React from "react";
import './Counter.css';
import ButtonsPanel from "./ButtonsPanel";

const Counter = () => {

    return (
        <div className="counter">
            <div>My counter:</div>
            <ButtonsPanel />
        </div>
    )
}

export default Counter;