import React, { useEffect, useState } from "react";

// Create a traffic light component with green, yellow, and red lights.
// On clicking a button, the light should change. Initially, it should show green.
// After 2 minutes, it should automatically switch to red for 30 seconds, then yellow for 10 seconds, and repeat this cycle continuously.

const lightSequence = ["green", "Yellow", "red"];
const lightTime = [8, 2, 4].map((e) => e * 1000); // into millseconds
function TrafficLights() {
  const [lightInd, setLightInd] = useState(0);
  const [timer, setTImer] = useState(null);
  const nextInd = (lightInd + 1) % 3;

  useEffect(() => {
    console.log("change", lightTime[lightInd]);
    // starts the timer of the new light, and changes to next light automatically
    const timeout = setTimeout(() => {
      console.log("reached timout");
      setLightInd(nextInd);
    }, lightTime[lightInd]);
    setTImer(timeout);
    return () => {
      clearTimeout(timeout);
    };
  }, [lightInd, nextInd]);

  const manualChange = () => {
    clearTimeout(timer);
    setLightInd(nextInd);
  };

  return (
    <div>
      traffic lights
      <div>{lightSequence[lightInd]}</div>
      <button onClick={manualChange}>change</button>
    </div>
  );
}

export default TrafficLights;
