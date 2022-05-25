import React, {useState, useEffect} from 'react';
import './Clock.css';

import HourHand from './Hands/HourHand/HourHand';
import MinuteHand from './Hands/MinuteHand/MinuteHand';
import SecondHand from './Hands/SecondHand/SecondHand';

function Clock() {

    const [clockData, setClockData] = useState({});

    let clockNumbers = [];

    let number = 1;
    for (; number <= 12; number++) {
        clockNumbers.push(number)
    }

    const dataObj = () => {
        const date = new Date();
        
        return {
            seconds: date.getSeconds(),
            minutes: date.getMinutes(),
            hours: date.getHours()
        }
    }

    useEffect(() => {
        const intervalId = setInterval(() => {
            setClockData(dataObj())
        }, 1000)

        return () => clearInterval(intervalId);
    }, [])

    console.log(dataObj());

    return (
        <div clock="true" className="clock">
            <div className="clock-numbers">
               { 
                clockNumbers.map((item) => {
                        return <div style={{
                            position: "absolute",
                            width: "100%",
                            height: "100%",
                            transform: `rotate(${item * 30}deg)`,
                            padding: "5px",
                            userSelect: "none"
                        }} key={item}>
                                <div style={{transform: `rotate(${360 - (item * 30)}deg)`}}>{item}</div>
                            </div>
                    })
                }
            </div>
            <SecondHand seconds={clockData.seconds} />
            <MinuteHand minutes={clockData.minutes} />
            <HourHand hours={clockData.hours} />
        </div>
    )
}

export default Clock;