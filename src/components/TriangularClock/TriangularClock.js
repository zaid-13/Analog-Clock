import React, {useState, useEffect} from 'react';
import "./TriangularClock.css";

import HourHand from './Hands/HourHand/HourHand';
import MinuteHand from './Hands/MinuteHand/MinuteHand';
import SecondHand from './Hands/SecondHand/SecondHand';

function TriangularClock() {
    
    const dataConst = () => {
        const date = new Date();
        return {
            hours: 30 * ((date.getHours() % 12 || 12) + (date.getMinutes()/60)) ,
            minutes: 6 * date.getMinutes(),
            seconds:6 * date.getSeconds()
        }
    }
    const [clockData, setClockData] = useState(dataConst());

    const clockNumbers = [
        {num: 12, x: 0, y: 0, bottom: "-4px", left: "50%"},
        {num: 3, x: -35, y: 70, top: "36%", right: "162px", transform: "translateY(-50%)"},
        {num: 6, x: 0, y: 50, top: "-12px", left: "50%"},
        {num: 9, x: 35, y: 70, top: "36%", left: "162px", transform: "translateY(-50%)"}
    ];

    const clockIndicator = [
        {deg: 30, x: 0, y: -10, height: "25"},
        {deg: 60, x: 0, y: -22, height: "58"},
        {deg: 120, x: 0, y: 41, height: "20"},
        {deg: 150, x: 0, y: 26, height: "20"},
        {deg: 210, x: 0, y: 26, height: "20"},
        {deg: 240, x: 0, y: 41, height: "20"},
        {deg: 300, x: 0, y: -22, height: "58"},
        {deg: 330, x: 0, y: -10, height: "25"}
    ]

    useEffect(() => {
        const intervalId = setInterval(() => {
            setClockData(dataConst());
        }, 1000)

        return () => clearInterval(intervalId);
    }, [])

    return (
        <div triangularclock="true" className="triangular-clock">
            <div className="tr-clock-container-parent">
            <div className="tr-clock-container-border"></div>
                    <div className="tr-clock-container">
                        <div className="corner-triangle"></div>
                        
                            <div className="indicators">
                                {
                                    clockIndicator.map((item) => {
                                        return (
                                            <div key={item.deg} style={{
                                                transform: `rotate(${item.deg}deg) translate(${item.x}px, ${item.y}px)`
                                            }} className="indicator-box">
                                                <div style={{
                                                        borderLeft: `2px solid transparent`,
                                                        borderRight: `2px solid transparent`,
                                                        borderTop: `${item.height}px solid #000`
                                                }} className="main-indicator"></div>
                                            </div>
                                        )
                                    })
                                    
                                }
                            </div>
                            <div className="clock-numbers">
                                {
                                    clockNumbers.map((item) => {
                                        return (
                                            <div key={item.num} style={{
                                                position: "absolute",
                                                width: "100%",
                                                height: "100%",
                                                transform: `rotate(${item.num * 30}deg)`,
                                            }}>
                                                <div className="clock-digits"
                                                    style={{
                                                    transform: `translate(${item.x}px, ${item.y}px) rotate(${(item.num * 30) * -1}deg)`
                                                }}>
                                                    {item.num}
                                                    <div style={{
                                                        position: "absolute",
                                                        top: `${item.top}`,
                                                        right: `${item.right}`,
                                                        bottom: `${item.bottom}`, 
                                                        left: `${item.left}`,
                                                        transform: `${item.transform}`,
                                                        fontSize: "14px"
                                                        }}>.</div>
                                                </div>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                            <SecondHand seconds={clockData.seconds} />
                            <MinuteHand minutes={clockData.minutes} />
                            <HourHand hours={clockData.hours} />
                    
                    </div>
                
            </div>
        </div>
    )
}

export default TriangularClock;