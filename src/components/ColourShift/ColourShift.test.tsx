import React from "react";
import { render } from "@testing-library/react";
import ColourShift from "./ColourShift";
import { shallow, configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

configure({ adapter: new Adapter() });

test("should render colourShift", () => {
  const { getByTestId } = render(<ColourShift velocity={0} />);
  const colourShift = getByTestId("colourShift");
  expect(colourShift).toBeInTheDocument();
});

test("maskImage should exist", () => {
  const { getByTestId } = render(<ColourShift velocity={0} />);
  const maskImage = getByTestId("maskImage");
  expect(maskImage).toBeInTheDocument();
});

test("star should exist", () => {
  const { getByTestId } = render(<ColourShift velocity={0} />);
  const star = getByTestId("star");
  expect(star).toBeInTheDocument();
});

test("mask should exist", () => {
  const { getByTestId } = render(<ColourShift velocity={0} />);
  const mask = getByTestId("mask");
  expect(mask).toBeInTheDocument();
});

test("mask opacity should change depending on velocity", () => {
  const randomVelocity: number =
    Math.floor(Math.random() * (100 - -100 + 1)) + -100;
  const colourShift = shallow(<ColourShift velocity={randomVelocity} />);
  expect(colourShift.find("div").get(1).props.style).toHaveProperty(
    "backgroundColor",
    randomVelocity > 0
      ? `rgba(255, 0, 0, ${randomVelocity / 100})`
      : `rgba(0,0,255,${Math.abs(randomVelocity) / 100})`
  );
});
