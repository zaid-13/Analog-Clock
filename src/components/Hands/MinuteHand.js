import React, {useState, useEffect} from 'react';
import './Hand.css';

function MinuteHand({minutes}) {

    const [rotation, setRotation] = useState(0);

    useEffect(() => {
        setRotation(minutes * 6);
    }, [minutes])

    return (
        <div minutehand="true" className="minute-hand">
            <div style={{transform: `rotate(${rotation}deg) translateX(50%)`}} className="hand"></div>
        </div>
    )
}

export default MinuteHand;