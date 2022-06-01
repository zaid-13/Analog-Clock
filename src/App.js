import React, {useState,useEffect} from 'react';
// import { useEffect } from 'react/cjs/react.production.min';
import "./App.css";

import Clock from './components/Clock/Clock';
import TriangularClock from './components/TriangularClock/TriangularClock';

function App() {

    const [isCircular, setIsCircular] = useState(true);

    return (
        <>
        <div className="text-center">
            <span>Circular Clock</span>
            <button className={`toggle-button ${!isCircular && "active"}`} onClick={() => setIsCircular(!isCircular)}></button>
            <span>Triangular Clock</span>
        </div>
        <div className="clock-container">           
            {isCircular ? 
            <Clock /> :
            <TriangularClock />}
        </div>
        </>
    )
}

export default App;