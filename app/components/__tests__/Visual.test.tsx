import { render, screen } from "@testing-library/react";
import React from "react";
import Visual from "../Visual";
import { beforeEach, describe, expect, it, vi } from "vitest";
import { afterEach } from "node:test";

describe("Visual component", () => {
  let defaultProps: {
    data: Record<string, string> | null;
    loading: boolean;
    onHandleFetchSuggestedPromt: (str: string) => void;
  };
  beforeEach(() => {
    defaultProps = {
      data: {
        translateInEnglish: "",
        meaningfulSynonym: "",
        meaningfulAntonym: "",
        correctArticle: "",
        exampleOfUsing: "",
      },
      loading: false,
      onHandleFetchSuggestedPromt: vi.fn(),
    };
  });
  afterEach(() => {
    vi.clearAllMocks();
  });

  it("should render loader when it is loading and must not render promts or result", () => {
    const props = { ...defaultProps, loading: true };
    render(<Visual {...props} />);

    expect(screen.getByTestId("loader")).toBeInTheDocument();
    expect(screen.queryByTestId("suggestedPrompts")).not.toBeInTheDocument();
    expect(screen.queryByTestId("result")).not.toBeInTheDocument();
  });

  it("shows by default some suggested prompts", () => {
    const props = { ...defaultProps, data: null };
    render(<Visual {...props} />);

    expect(screen.queryByTestId("loader")).not.toBeInTheDocument();
    expect(screen.getByTestId("suggestedPrompts")).toBeInTheDocument();
    expect(screen.queryByTestId("result")).not.toBeInTheDocument();
  });

  it("should render render results when it has data", () => {
    render(<Visual {...defaultProps} />);

    expect(screen.queryByTestId("loader")).not.toBeInTheDocument();
    expect(screen.queryByTestId("suggestedPrompts")).not.toBeInTheDocument();
    expect(screen.queryByTestId("result")).toBeInTheDocument();
  });
});
