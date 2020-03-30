import React from "react";
import { render, wait, waitForElement } from "@testing-library/react";
import AboutOverlay from "./AboutOverlay";
import { shallow, configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

configure({ adapter: new Adapter() });

test("should render AboutOverlay", () => {
  const { getByTestId } = render(<AboutOverlay />);
  const aboutOverlay = getByTestId("about-overlay");
  expect(aboutOverlay).toBeInTheDocument();
});

test("should hide AboutOverlay, then redisplay", async () => {
  const aboutOverlay = shallow(<AboutOverlay />);
  aboutOverlay.find("[data-testid='hide-overlay']").simulate("click");

  expect(aboutOverlay.contains('[data-testid="about-overlay"]')).toBeFalsy;
  expect(aboutOverlay.contains('[data-testid="show-overlay"]')).toBeFalsy;

  const showOverlay = aboutOverlay.find('[data-testid="show-overlay"]');
  showOverlay.simulate("click");

  expect(aboutOverlay.contains('[data-testid="show-overlay"]')).toBeFalsy();
});
