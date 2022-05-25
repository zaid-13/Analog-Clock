import React from 'react';
import './HourHand.css';
import "../Hand.css";

function HourHand({hours}) {

    return (
        <div hourhand="true" className="hourhand">
            <div style={{
                transform: `rotate(${hours * 30}deg) translateX(-50%)`
            }} className="hand"></div>
        </div>
    )
}

export default HourHand;