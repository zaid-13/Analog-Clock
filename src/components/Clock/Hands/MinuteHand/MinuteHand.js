import React from 'react';
import './MinuteHand.css';
import "../Hand.css";

function MinuteHand({minutes}) {

    return (
        <div minutehand="true" className="minutehand">
            <div style={{
                transform: `rotate(${minutes * 6}deg)`
            }} className="hand"></div>
        </div>
    )
}

export default MinuteHand;