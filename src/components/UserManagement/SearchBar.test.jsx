/**
 * This code was generated by Builder.io.
 */
import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import SearchBar from "./SearchBar";

describe("SearchBar", () => {
  it("renders the search input", () => {
    render(<SearchBar />);
    expect(screen.getByPlaceholderText("Search here...")).toBeInTheDocument();
  });
});
