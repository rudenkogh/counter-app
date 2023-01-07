import { useState } from "react";
import './ButtonsPanel.css';
import Step from "./Step";

const ButtonsPanel = () => {

    let initValue = 10;
    const [counter, setCounter] = useState(0);
    const [newSliderValue, setNewSliderValue] = useState(0);

    const sliderValue = (a) => {
        setNewSliderValue(() => a)
    }

    return (
        <div className="buttons-panel">
            <h2>{counter}</h2>
            <button onClick={() => setCounter((prevCount) => prevCount + newSliderValue)} >Add</button>
            <button onClick={() => setCounter(() => initValue)} >Reinit</button>
            <button onClick={() => setCounter(() => 0)} >Reset</button>
            <Step newFunction={sliderValue} counter={newSliderValue} />
        </div>
    );
}

export default ButtonsPanel;