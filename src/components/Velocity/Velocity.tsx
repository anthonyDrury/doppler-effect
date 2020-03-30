import React, { useState } from "react";
import "./Velocity.css";

interface velocityProps {
  onVelocityChange: (v: number) => void;
}
function Velocity(props: velocityProps) {
  const [velocity, setVelocity] = useState(0);

  function onVelocityChange(newVelocity: number): void {
    setVelocity(newVelocity);
    props.onVelocityChange(Number(newVelocity.toFixed(2)));
  }

  function onSliderChange(value: number): void {
    onVelocityChange(Math.pow(2, value / 50) - 101);
  }

  return (
    <div data-testid="velocity" className="velocity">
      <label className="velocity__label" htmlFor="velocityNum">
        Velocity (km/s){" "}
      </label>
      <input
        className="velocity__numberInput"
        id="velocityNum"
        type="number"
        data-testid="numInput"
        value={velocity.toFixed(2)}
        min="-100"
        max="100"
        onChange={e => onVelocityChange(e.target.valueAsNumber)}
      />
      <input
        className="velocity__sliderInput"
        data-testid="sliderInput"
        id="velocitySlider"
        type="range"
        min="0"
        max="382.551"
        value={Math.log2(velocity + 101) * 50}
        onChange={e => onSliderChange(e.target.valueAsNumber)}
        step={0.001}
      />
    </div>
  );
}

export default Velocity;
