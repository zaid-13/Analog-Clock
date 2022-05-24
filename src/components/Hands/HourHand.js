import React, {useState, useEffect} from 'react';
import './Hand.css';

function HourHand({hours}) {
    
    const [rotation, setRotation] = useState(0);

    useEffect(() => {
        setRotation(hours * 30);
    }, [hours]);

    return (
        <div hourhand="true" className="hour-hand">
            <div style={{transform: `rotate(${rotation}deg) translateX(50%)`}} className="hand"></div>
        </div>
    )
}

export default HourHand;