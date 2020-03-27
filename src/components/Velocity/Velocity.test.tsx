import React from "react";
import { render } from "@testing-library/react";
import Velocity from "./Velocity";

test("should render Velocity", () => {
  const { getByTestId } = render(
    <Velocity onVelocityChange={() => {}}></Velocity>
  );
  const velocity = getByTestId("velocity");
  expect(velocity).toBeInTheDocument();
});
