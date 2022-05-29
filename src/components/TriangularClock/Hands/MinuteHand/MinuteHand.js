import React from 'react';
import './MinuteHand.css';
import "../Hand.css";

function MinuteHand({minutes}) {

    return (
        <div trminutehand="true" className="minutehand">
            <div style={{
                transform: `rotate(${minutes}deg) translateX(-50%)`
            }} className="hand"></div>
        </div>
    )
}

export default MinuteHand;