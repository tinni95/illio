import React from "react";
import { render, screen } from "@testing-library/react";
import InputCol from "../inputCol";

it("renders correctly", () => {
  const tree = render(<InputCol />);
  expect(tree).toMatchSnapshot();
});
