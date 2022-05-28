import React, {useState, useEffect} from 'react';
import './Clock.css';

import HourHand from './Hands/HourHand/HourHand';
import MinuteHand from './Hands/MinuteHand/MinuteHand';
import SecondHand from './Hands/SecondHand/SecondHand';

function Clock() {

    // const [clockData, setClockData] = useState({
    //     hours: 30 * ((new Date().getHours() % 12 || 12) + (new Date().getMinutes()/60)),
    //     minutes: new Date().getMinutes() * 6,
    //     seconds: new Date().getSeconds() * 6
    // });
    const dataConst = () => {
        const date = new Date();
        return {
            hours: 30 * ((date.getHours() % 12 || 12) + (date.getMinutes()/60)) ,
            minutes: 6 * date.getMinutes(),
            seconds:6 * date.getSeconds()
        }
    }
    const [clockData, setClockData] = useState(dataConst());

    let clockNumbers = [];
    let totalMinutes = [];

    let number = 1;
    for (; number <= 12; number++) {
        clockNumbers.push(number)
    }

    let minute = 0;
    for (; minute <= 59; minute++) {
        totalMinutes.push(minute)
    }
    

    const dataObj = () => {
        const date = new Date();
        
        return {
            // seconds: date.getSeconds(),
            // minutes: date.getMinutes(),
            // hours: date.getHours()
            hours: 30 * ((date.getHours() % 12 || 12) + (date.getMinutes()/60)) ,
            minutes: 6 * date.getMinutes(),
            seconds:6 * date.getSeconds()
        }
    }

    useEffect(() => {
        const intervalId = setInterval(() => {
            setClockData(dataConst())
            // const newDate = new Date();
            // console.log({
            //     hour: 30 * ((newDate.getHours() % 12 || 12) + (newDate.getMinutes()/60)) ,
            //     minutes: 6 * newDate.getMinutes(),
            //     seconds:6 * newDate.getSeconds()
            // })
        }, 1000)

        return () => clearInterval(intervalId);
    }, [])

    return (
        <div clock="true" className="clock">
            <div className="indicators">
                {/* <div className="main-indicator"></div>
                <div className="sub-indicator"></div> */}
                {
                    totalMinutes.map((item) => {
                        if (item % 5 === 0) {
                            return (<div key={item} style={{transform: `rotate(${item * 30}deg)`}} className="indicator-box">
                                        <div className="main-indicator"></div>
                                    </div>)
                        } else {
                            return (<div key={item} style={{transform: `rotate(${item * 6}deg)`}} className="indicator-box">
                                        <div className="sub-indicator"></div>
                                    </div>)
                        }
                    })
                }
            </div>
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