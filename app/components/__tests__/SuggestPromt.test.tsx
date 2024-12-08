import { render, screen, act } from "@testing-library/react";
import { afterEach, describe, expect, it, vi } from "vitest";
import PromptSuggestionRow from "../SuggestedPromt";
import { fireEvent } from "@testing-library/dom";

describe("suggestionPromts", () => {
  afterEach(() => {
    vi.clearAllMocks();
  });

  const mockedFunc = vi.fn();
  it("should render the component", () => {
    render(<PromptSuggestionRow onPromptClick={mockedFunc} />);

    expect(screen.getByText("Hund")).toBeInTheDocument();
    expect(screen.getByText("Wohnung")).toBeInTheDocument();
    expect(screen.getByText("Essen")).toBeInTheDocument();
    expect(screen.getByText("Brille")).toBeInTheDocument();
  });

  it("should call prop function after clicking button", async () => {
    render(<PromptSuggestionRow onPromptClick={mockedFunc} />);

    const buttons = screen.getAllByRole("button");

    for (const button of buttons) {
      await act(async () => {
        fireEvent.click(button);
      });
      expect(mockedFunc).toHaveBeenCalledWith(button.innerHTML);
    }
  });
});
