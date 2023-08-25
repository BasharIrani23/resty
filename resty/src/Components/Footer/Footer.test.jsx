import React from "react";
import { render, screen } from "@testing-library/react";
import { toBeInTheDocument } from "@testing-library/jest-dom/matchers"; // Import the toBeInTheDocument matcher

expect.extend({ toBeInTheDocument }); // Extend the Jest matchers

import Footer from "./index"; // Update the import path as needed

test("renders current year in footer", () => {
    render(<Footer />);

    const footer = screen.getByText(`© ${new Date().getFullYear()}`);

    expect(footer).toBeInTheDocument();
});
