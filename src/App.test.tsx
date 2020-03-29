import React from "react";
import { render } from "@testing-library/react";
import App from "./App";
import { shallow, configure, mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

configure({ adapter: new Adapter() });
test("should render App", () => {
  const { getByTestId } = render(<App></App>);
  const dopplerEffect = getByTestId("doppler-effect");
  expect(dopplerEffect).toBeInTheDocument();
});

test("velocity component should update velocity state", async () => {
  const app = mount(<App />);
  const stateSpy = jest.spyOn(app.instance(), "setState");
  app.find("[data-testid='hideOverlay']").simulate("click");
  const numInput = app.find('[data-testid="numInput"]');
  numInput.simulate("change", { target: { valueAsNumber: 100 } });
  expect(stateSpy).toHaveBeenCalled();
});
