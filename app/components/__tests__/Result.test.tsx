import { render, screen } from "@testing-library/react";
import React from "react";
import Result from "../Result";
import { describe, expect, it } from "vitest";

describe("Result Component", () => {
  const mockData = {
    translateInEnglish: "House",
    meaningfulSynonym: "Home",
    meaningfulAntonym: "Street",
    correctArticle: "The",
    exampleOfUsing: "This is my house.",
  };

  it("renders the title correctly", () => {
    render(<Result data={mockData} />);
    expect(screen.getByText("Translation Details")).toBeInTheDocument();
  });

  it("renders all the provided data", () => {
    render(<Result data={mockData} />);

    expect(screen.getByText("House")).toBeInTheDocument();
    expect(screen.getByText("Home")).toBeInTheDocument();
    expect(screen.getByText("Street")).toBeInTheDocument();
    expect(screen.getByText("The")).toBeInTheDocument();
    expect(screen.getByText("This is my house.")).toBeInTheDocument();
  });

  it("handles null data gracefully", () => {
    render(<Result data={null} />);

    expect(screen.getByText("Translation Details")).toBeInTheDocument();
    expect(screen.getByText("Meaning")).toBeInTheDocument();
  });
});
