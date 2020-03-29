import React from "react";
import "./Velocity.css";
import { velocityState } from "../../common/types";

interface velocityProps {
  onVelocityChange: (v: number) => void;
}
class Velocity extends React.Component<velocityProps, velocityState> {
  constructor(props: velocityProps) {
    super(props);
    this.state = { velocity: 0 };
  }

  private onVelocityChange(velocity: number): void {
    this.setState({ velocity }, () => {
      this.props.onVelocityChange(Number(this.state.velocity.toFixed(2)));
    });
  }

  private onSliderChange(value: number): void {
    this.onVelocityChange(Math.pow(2, value / 50) - 101);
  }

  render() {
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
          value={this.state.velocity.toFixed(2)}
          min="-100"
          max="100"
          onChange={e => this.onVelocityChange(e.target.valueAsNumber)}
        />
        <input
          className="velocity__sliderInput"
          data-testid="sliderInput"
          id="velocitySlider"
          type="range"
          min="0"
          max="382.551"
          value={Math.log2(this.state.velocity + 101) * 50}
          onChange={e => this.onSliderChange(e.target.valueAsNumber)}
          step={0.001}
        />
      </div>
    );
  }
}

export default Velocity;
