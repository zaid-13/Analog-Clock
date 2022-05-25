import React from 'react';
import "./SecondHand.css";
import "../Hand.css";

function SecondHand({seconds}) {

    return (
        <div secondhand="true" className="secondhand">
            <div style={{
                transform: `rotate(${seconds * 6}deg)`
            }} className="hand"></div>
        </div>
    )
}

export default SecondHand;