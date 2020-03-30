import React, { useState } from "react";
import "./App.css";
import Velocity from "./components/Velocity/Velocity";
import { velocityState } from "./common/types";
import ColourShift from "./components/ColourShift/ColourShift";
import AboutOverlay from "./components/AboutOverlay/AboutOverlay";

interface testProps {
  velocity?: number;
}
function App(props: testProps) {
  const [velocity, setVelocity] = useState(props.velocity ? props.velocity : 0);

  return (
    <div data-testid="doppler-effect" className="dopplerEffect">
      <AboutOverlay data-testid="about-overlay" />
      <ColourShift data-testid="colour-shift" velocity={velocity} />
      <Velocity
        data-testid="velocity"
        onVelocityChange={(newVelocity: number) => {
          setVelocity(newVelocity);
        }}
      />
      <p data-testid="main-hint">
        Have a play around with adjusting the velocity, hints will appear as you
        give it a go. <br />
        There is more detail observable during the blueshift, hence the
        exponential growth on the slider.
      </p>
      {velocity > 0 ? (
        <p data-testid="red-hint">
          As the velocity increases away from the observer, the colour shifts
          towards the red. <br />
          This is called redshift.
        </p>
      ) : velocity < 0 ? (
        <p data-testid="blue-hint">
          As the velocity increases towards the observer, the colour shifts to
          the blue scale.
          <br /> This is called blueshift.
        </p>
      ) : (
        undefined
      )}
    </div>
  );
}

export default App;
