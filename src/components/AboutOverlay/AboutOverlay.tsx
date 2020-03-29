import React from "react";
import "./AboutOverlay.css";

interface AboutState {
  hidden: boolean;
}
class AboutOverlay extends React.Component<{}, AboutState> {
  constructor(props: {}) {
    super(props);
    this.state = { hidden: false };
  }
  render() {
    return (
      <>
        {!this.state.hidden ? (
          <div data-testid="aboutOverlay" className="aboutOverlay">
            <div className="aboutOverlay__inner">
              <h2>
                How do you think the velocity of a star will effect its colour?
              </h2>
              <div>
                <img
                  className="aboutOverlay__image"
                  src="star-small.png"
                  alt="star"
                ></img>
              </div>
              <p>
                The Doppler effect is the change in frequency of a wave in
                relation to an observer who is moving relative to the wave
                source.
              </p>
              <p>
                Press 'Play' to view an interactive simulation on the Doppler
                Effect and its effect on the colour of an object (star).
              </p>
              <button
                data-testid="hideOverlay"
                onClick={() => this.setState({ hidden: true })}
              >
                Play
              </button>
            </div>
          </div>
        ) : (
          <div className="aboutOverlay__info">
            <button
              data-testid="showOverlay"
              className="aboutOverlay__infoButton"
              onClick={() => this.setState({ hidden: false })}
            >
              i
            </button>
          </div>
        )}
      </>
    );
  }
}

export default AboutOverlay;
