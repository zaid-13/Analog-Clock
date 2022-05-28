import React from 'react';
import "./App.css";

import Clock from './components/Clock/Clock';
import TriangularClock from './components/TriangularClock/TriangularClock';

function App() {
    return (
        <div className="clock-container">
            <Clock />
            {/* <TriangularClock /> */}
        </div>
    )
}

export default App;