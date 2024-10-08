/**
 * This code was generated by Builder.io.
 */
import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import UserManagement from "./UserManagement";

describe("UserManagement", () => {
  it("renders the component", () => {
    render(<UserManagement />);
    expect(screen.getByText("Users")).toBeInTheDocument();
    expect(screen.getByText("Manage Users of company")).toBeInTheDocument();
    expect(screen.getByText("Add Users")).toBeInTheDocument();
  });
});
