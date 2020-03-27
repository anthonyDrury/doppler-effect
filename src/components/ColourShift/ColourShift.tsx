import React, { CSSProperties } from "react";
import "./ColourShift.css";
import { velocityState } from "../../common/types";

function ColourShift(props: velocityState) {
  const maskStyle: CSSProperties = {
    WebkitMaskImage: "url('star-small.png')",
    WebkitMaskRepeat: "no-repeat",
    maskImage: "url('star-small.png')",
    maskRepeat: "no-repeat",
    position: "absolute",
    backgroundColor:
      props.velocity > 0
        ? `rgba(255, 0, 0, ${props.velocity / 100})`
        : `rgba(0,0,255,${Math.abs(props.velocity) / 100})`
  };
  return (
    <div data-testid="colourShift" className="colourShift">
      <div style={maskStyle}>
        <img
          className="colourShift__maskImage"
          src="star-small.png"
          alt=""
        ></img>
      </div>
      <img src="star-small.png" alt="star"></img>
    </div>
  );
}

export default ColourShift;
