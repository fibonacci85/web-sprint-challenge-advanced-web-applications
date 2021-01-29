import React from "react";
import { render, screen } from "@testing-library/react";
import BubblePage from "./BubblePage";
import { scryRenderedComponentsWithType } from "react-dom/test-utils";

test("Fetches data and renders the bubbles", () => {
  render(<BubblePage />)
});
