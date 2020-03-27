import React from "react";
import { render } from "@testing-library/react";
import App from "./App";

test("should render App", () => {
  const { getByTestId } = render(<App></App>);
  const dopplerEffect = getByTestId("doppler-effect");
  expect(dopplerEffect).toBeInTheDocument();
});
