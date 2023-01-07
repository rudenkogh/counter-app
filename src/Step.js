import React, { useRef } from "react";
import './Step.css';

function Step(props) {

    const inputRef = useRef(null);

    return (
        <div className="slider-panel">
            <label htmlFor="choose-step">Choose a step: {props.counter}</label><br />
            <input type="range" id="choose-step" min="0" max="10" defaultValue='0' step="1" onChange={() => props.newFunction(Number(inputRef.current.value))}
                ref={inputRef}
            />
        </div>
    );
}


export default Step;