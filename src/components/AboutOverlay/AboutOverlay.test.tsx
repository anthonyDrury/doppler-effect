import React from "react";
import { render, wait, waitForElement } from "@testing-library/react";
import AboutOverlay from "./AboutOverlay";
import { shallow, configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

configure({ adapter: new Adapter() });

test("should render AboutOverlay", () => {
  const { getByTestId } = render(<AboutOverlay />);
  const aboutOverlay = getByTestId("aboutOverlay");
  expect(aboutOverlay).toBeInTheDocument();
});

test("should hide AboutOverlay, then redisplay", async () => {
  const aboutOverlay = shallow(<AboutOverlay />);
  aboutOverlay.find("[data-testid='hideOverlay']").simulate("click");

  await new Promise(res =>
    setTimeout(() => {
      expect(aboutOverlay.contains('[data-testid="aboutOverlay"]')).toBeFalsy;
      expect(aboutOverlay.contains('[data-testid="showOverlay"]')).toBeFalsy;

      const showOverlay = aboutOverlay.find('[data-testid="showOverlay"]');
      showOverlay.simulate("click");

      expect(aboutOverlay.contains('[data-testid="showOverlay"]')).toBeFalsy();
      res();
    }, 3000)
  );
});
