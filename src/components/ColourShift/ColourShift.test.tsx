import React from "react";
import { render } from "@testing-library/react";
import ColourShift from "./ColourShift";

test("should render colourShift", () => {
  const { getByTestId } = render(<ColourShift velocity={0} />);
  const colourShift = getByTestId("colourShift");
  expect(colourShift).toBeInTheDocument();
});
