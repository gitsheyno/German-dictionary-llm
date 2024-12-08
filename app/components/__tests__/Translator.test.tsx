import { render, screen, fireEvent } from "@testing-library/react";
import React from "react";
import { describe, expect, it, vi } from "vitest";
import Translator from "../Translator";
import * as aiHook from "../../hooks/useAiFunction";

describe("Translator Component", () => {
  it("should call handleFetch when the form is submitted", () => {
    const mockFetchWordDetails = vi.fn();
    vi.spyOn(aiHook, "useAIFunction").mockReturnValue({
      data: null,
      loading: false,
      error: null,
      fetchWordDetails: mockFetchWordDetails,
    });

    render(<Translator />);

    const input = screen.getByTestId("input");
    const button = screen.getByTestId("button");

    fireEvent.change(input, { target: { value: "hello" } });
    fireEvent.click(button);

    expect(mockFetchWordDetails).toHaveBeenCalledWith("hello");
  });

  it("should call handleFetchSuggestedPromt when a prompt is clicked", () => {
    const mockFetchWordDetails = vi.fn();

    vi.spyOn(aiHook, "useAIFunction").mockReturnValue({
      data: null,
      loading: false,
      error: null,
      fetchWordDetails: mockFetchWordDetails,
    });

    render(<Translator />);

    const buttons = screen.getAllByTestId("proptButton");
    fireEvent.click(buttons[0]);

    expect(mockFetchWordDetails).toHaveBeenCalledWith("Hund");
  });
});
