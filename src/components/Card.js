import React, { useState } from "react";
import { FaSnowflake } from "react-icons/fa";
import { WiDaySunny } from "react-icons/wi";

const Card = () => {
    const [input, setInput] = useState('');
    const [celsius, setCelsius] = useState(30);

    const styles = {
        color: celsius > 21 ? "red" : "green"
    }

    
    const convert = () => {
        const operation = Math.floor((input - 32) * 5 / 9);
        setCelsius(operation);
        setInput('');
    }
    
return (
    <div className="card-container">
        <div className="card-header flex">
            <h3>Monday</h3>
            <span>12:00pm</span>
        </div>
        <div className="card-display">
            <p><span style={styles}>{celsius}°C</span>
            {celsius > 21 && <WiDaySunny style={styles}/>}
            {celsius < 21 && <FaSnowflake />}
            </p>
        </div>
        <div className="card-input flex">
            <input type="number"
            className="input-card" 
            placeholder="Enter Fahrenheit value to convert to celsius..."
            onChange={(e) => setInput(e.target.value)} 
            value={input}
            />
            <button onClick={convert} className="card-btn">Convert</button>
        </div>
    </div>
)
}

export default Card;