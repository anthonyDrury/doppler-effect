import React from "react";
import { shallow, configure, mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Velocity from "./Velocity";
import { render } from "@testing-library/react";

configure({ adapter: new Adapter() });
test("should render Velocity", () => {
  const { getByTestId } = render(
    <Velocity onVelocityChange={() => {}}></Velocity>
  );
  const velocity = getByTestId("velocity");
  expect(velocity).toBeInTheDocument();
});

test("should update Velocity via numInput", () => {
  let output: number = 0;
  const velocity = shallow(
    <Velocity
      onVelocityChange={(v: number) => {
        output = v;
      }}
    />
  );
  const numInput = velocity.find('[data-testid="numInput"]');
  numInput.simulate("change", { target: { valueAsNumber: 100 } });
  expect(output).toBe(100);
});

test("should update Velocity via slider", () => {
  let output: number = 0;
  const velocity = shallow(
    <Velocity
      onVelocityChange={(v: number) => {
        output = v;
      }}
    />
  );
  const sliderInput = velocity.find('[data-testid="sliderInput"]');
  sliderInput.simulate("change", { target: { valueAsNumber: 382.551 } });
  expect(output).toBe(100);
});
