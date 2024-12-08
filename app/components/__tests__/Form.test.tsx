import { fireEvent, render, screen } from "@testing-library/react";
import React from "react";
import Form from "../Form";
import { expect, it, vi } from "vitest";

it("calls the onSubmit prop when the button is clicked", () => {
  const mockFunc = vi.fn();
  render(<Form onSubmit={mockFunc} loading={false} />);

  const button = screen.getByRole("button");

  fireEvent.click(button);

  expect(mockFunc).toHaveBeenCalled();
});
