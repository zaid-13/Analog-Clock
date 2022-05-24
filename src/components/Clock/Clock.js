import React, {useState, useEffect} from 'react';

import './Clock.css';

import HourHand from '../Hands/HourHand';
import MinuteHand from '../Hands/MinuteHand';
import SecondHand from '../Hands/SecondHand';

function Clock() {

    const [clockInfo, setClockInfo] = useState({});

    const clockData = [];

    let i = 1;
    let deg = 0;
    for(; i <= 12; i++) {
        // clockData.push({num: i, class: `num${i} clock-num`})
        clockData.push({num: i, degrees: deg += 30})
    }

    console.log({clockData})

    function dateObj() {
        const date = new Date();
        const seconds = date.getSeconds();
        const minutes = date.getMinutes();
        const hours = date.getHours();

        return {
            seconds,
            minutes,
            hours
        }
    }

    // console.log(clockInfo);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setClockInfo(dateObj());
            // console.log(clockInfo);     // why does it show an empty object in the setInterval but shows correctly outside the useEffect
        }, 1000);

        return () => clearInterval(intervalId);
    }, [])


    // style={{transform: `rotate(${deg + 30}deg)`}}

    return (
        <div clock="true" className="clock">
            <div className="clock-boundaries">
                <div className="clock-numbers">
                    {
                        
                        clockData.map((item, index) => {
                            
                            return <div key={item.num} style={{
                                                transform: `rotate(${item.degrees}deg)`, 
                                                position: "absolute", height: "100%", 
                                                transformOrigin: "bottom center", 
                                                // border: "2px solid black",
                                                left: "50%",
                                    }}>
                                        <div style={{transform: `rotate(${360 - item.degrees}deg)`}} >{item.num}</div>
                                    </div>
                        })
                    }
                </div>
                <SecondHand seconds={clockInfo.seconds}  />
                <MinuteHand minutes={clockInfo.minutes}  />
                <HourHand hours={clockInfo.hours}  />
            </div>
            <div className="clock-centre"></div>
        </div>
    )
}

export default Clock;