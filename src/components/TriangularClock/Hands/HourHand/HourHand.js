import React from 'react';
import './HourHand.css';
import "../Hand.css";

function HourHand({hours}) {

    return (
        <div trhourhand="true" className="hourhand">
            <div style={{
                transform: `rotate(${hours}deg) translate(-50%, 0)`
            }} className="hand"></div>
        </div>
    )
}

export default HourHand;