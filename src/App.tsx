import React from "react";
import "./App.css";
import Velocity from "./components/Velocity/Velocity";
import { velocityState } from "./common/types";
import ColourShift from "./components/ColourShift/ColourShift";
import AboutOverlay from "./components/AboutOverlay/AboutOverlay";

class App extends React.Component<{}, velocityState> {
  constructor(props: {}) {
    super(props);
    this.state = { velocity: 0 };
  }

  render() {
    return (
      <div data-testid="doppler-effect" className="dopplerEffect">
        <AboutOverlay />
        <ColourShift
          data-testid="colour-shift"
          velocity={this.state.velocity}
        />
        <Velocity
          onVelocityChange={(velocity: number) => {
            this.setState({ velocity });
          }}
        />
        <p>
          Have a play around with adjusting the velocity, hints will appear as
          you give it a go. <br />
          There is more detail observable during the blueshift, hence the
          exponential growth on the slider.
        </p>
        <p hidden={!(this.state.velocity > 0)}>
          As the velocity increases away from the observer, the colour shifts
          towards the red. <br />
          This is called redshift.
        </p>
        <p hidden={!(this.state.velocity < 0)}>
          As the velocity increases towards the observer, the colour shifts to
          the blue scale.
          <br /> This is called blueshift.
        </p>
      </div>
    );
  }
}

export default App;
