import React from "react";
import { render, getByTestId } from "@testing-library/react";
import App from "./App";
import { shallow, configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

configure({ adapter: new Adapter() });
test("should render App", () => {
  const { container } = render(<App></App>);
  const dopplerEffect = getByTestId(container, "doppler-effect");
  const mainHint = getByTestId(container, "main-hint");
  const velocity = getByTestId(container, "velocity");
  const about = getByTestId(container, "about-overlay");

  expect(dopplerEffect).toBeInTheDocument();
  expect(mainHint).toBeInTheDocument();
  expect(velocity).toBeInTheDocument();
  expect(about).toBeInTheDocument();
});

test("hints should be hidden at the start", () => {
  const app = shallow(<App></App>);

  expect(app.contains('[data-testid="red-hint"]')).toBeFalsy();
  expect(app.contains('[data-testid="blue-hint"]')).toBeFalsy();
});

test("red hint should display when positive velocity", () => {
  const { container } = render(<App velocity={100} />);
  const redHint = getByTestId(container, "red-hint");

  expect(redHint).toBeInTheDocument();
});

test("blue hint should display when negative velocity", () => {
  const { container } = render(<App velocity={-100} />);
  const blueHint = getByTestId(container, "blue-hint");

  expect(blueHint).toBeInTheDocument();
});
