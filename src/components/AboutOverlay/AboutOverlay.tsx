import React, { useState } from "react";
import "./AboutOverlay.css";

function AboutOverlay() {
  const [hidden, setHidden] = useState(false);

  return (
    <>
      {!hidden ? (
        <div data-testid="about-overlay" className="aboutOverlay">
          <div className="aboutOverlay__inner">
            <h2>
              How do you think the velocity of a star will effect its colour?
            </h2>
            <div>
              <img
                className="about-overlay__image"
                src="star-small.png"
                alt="star"
              ></img>
            </div>
            <p>
              The Doppler effect is the change in frequency of a wave in
              relation to an observer who is moving relative to the wave source.
            </p>
            <p>
              Press 'Play' to view an interactive simulation on the Doppler
              Effect and its effect on the colour of an object (star).
            </p>
            <button data-testid="hide-overlay" onClick={() => setHidden(true)}>
              Play
            </button>
          </div>
        </div>
      ) : (
        <div className="aboutOverlay__info">
          <button
            data-testid="show-overlay"
            className="aboutOverlay__infoButton"
            onClick={() => setHidden(false)}
          >
            i
          </button>
        </div>
      )}
    </>
  );
}

export default AboutOverlay;
