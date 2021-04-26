import React from "react";
import { render, screen } from "@testing-library/react";
import LineChart from "../lineChart";

it("renders correctly", () => {
  const tree = render(<LineChart />);
  expect(tree).toMatchSnapshot();
});
