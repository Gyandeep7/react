import React, { useState } from "react";
import StationInfo from "./StationInfo";

const MetroFare = () => {
  const [fromStation, setFromStation] = useState("");
  const [toStation, setToStation] = useState("");
  const [fare, setFare] = useState(0);

  const Fare = () => {
    const from = StationInfo.find((station) => station.name === fromStation);
    const to = StationInfo.find((station) => station.name === toStation);

    if (from && to) {
      const calculatedFare = Math.abs( from.fare);
      setFare(calculatedFare);
    } else {
      setFare(0);
    }
  
  };

  return (
    <div>
      <h2 style={{"color":"red"}}>MetroFare Calculator</h2>
      <div>
        <label htmlFor="fromStation" style={{"color":"green"}}>From Station:</label><br />
        <select
          id="fromStation"
          value={fromStation}
          onChange={(e) => setFromStation(e.target.value)}
        >
            <br />   <br />     
          <option value="">Select a station</option>
          {StationInfo.map((station) => (
            <option key={station.name} value={station.name}>
              {station.name}
            </option>
          ))}
        </select>
      </div>
      
      <div>
        <label htmlFor="toStation" style={{"color":"green"}}>To Station:</label><br />
        <select
          id="toStation"
          value={toStation}
          onChange={(e) => setToStation(e.target.value)}
        >
          <option value="">Select a station</option>
          {StationInfo.map((station) => (
            <option key={station.name} value={station.name}>
              {station.name}
            </option>
          ))}
        </select>
      </div>
      <br />
      <button onClick={Fare}>Calculate Fare</button>
      <div>
        {fare > 0 && <p>Fare: {fare} Rs</p>}
        {fare === 0 && <p>Please select valid stations</p>}
      </div>
    </div>
  );
};

export default MetroFare;
