import React, {useState, useEffect} from 'react';
import './Hand.css';

function SecondHand({seconds}) {

    const [rotation, setRotation] = useState(0);

    useEffect(() => {
        setRotation(seconds * 6)
    }, [seconds])

    return (
        <div secondhand="true" className="second-hand">
            <div style={{transform: `rotate(${rotation}deg) translateX(50%)`}} className="hand"></div>
        </div>
    )
}

export default SecondHand;