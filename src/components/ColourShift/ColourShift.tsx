import React, { CSSProperties } from "react";
import "./ColourShift.css";
import { velocityState } from "../../common/types";

function ColourShift(props: velocityState) {
  const maskStyle: CSSProperties = {
    WebkitMaskImage: "url('star-small.png')",
    WebkitMaskRepeat: "no-repeat",
    WebkitMaskSize: "contain",
    maskSize: "contain",
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
      <div data-testid="mask" style={maskStyle}>
        {/* star image used to ascertain correct size for mask  */}
        <img
          className="colourShift__maskImage"
          src="star-small.png"
          data-testid="maskImage"
          alt=""
        ></img>
      </div>
      <img src="star-small.png" data-testid="star" alt="star"></img>
    </div>
  );
}

export default ColourShift;
