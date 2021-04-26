import React from "react";
import { render, screen } from "@testing-library/react";
import InputDateCol from "../inputDateCol";

it("renders correctly", () => {
  const tree = render(<InputDateCol />);
  expect(tree).toMatchSnapshot();
});
