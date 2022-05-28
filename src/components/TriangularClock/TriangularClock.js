import React from 'react';
import './TriangularClock.css';

function TriangularClock() {
    let clockNumbers = [];

    let number = 1;
    for (; number <= 12; number++) {
        clockNumbers.push(number);
    }

    return (
        <div triangularclock="true" className="triangular-clock">
            <div className="clock-container">
                <div className="clock-numbers">
                    {
                        clockNumbers.map((item) => {
                            return <div className="number">{item}</div>
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default TriangularClock;