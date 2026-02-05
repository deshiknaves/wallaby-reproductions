import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { Calculator } from "./Calculator";

describe("Calculator", () => {
  it("renders the sum of two numbers", () => {
    render(<Calculator a={2} b={3} />);

    expect(screen.getByTestId("calculator")).toBeInTheDocument();
    expect(screen.getByTestId("result")).toHaveTextContent("5");
  });

  it("handles negative numbers", () => {
    render(<Calculator a={-5} b={3} />);

    expect(screen.getByTestId("result")).toHaveTextContent("-2");
  });
});
