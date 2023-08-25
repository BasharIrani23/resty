import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import {
    toBeInTheDocument,
    toHaveClass,
} from "@testing-library/jest-dom/matchers"; // Import the individual matchers

expect.extend({ toBeInTheDocument, toHaveClass }); // Extend the Jest matchers

import Form from "./index"; // Update the import path as needed

test("renders form with input and buttons", () => {
    render(<Form />);

    const urlInput = screen.getByLabelText("URL:");
    const goButton = screen.getByText("GO!");
    const getButton = screen.getByText("GET");
    const postButton = screen.getByText("POST");
    const putButton = screen.getByText("PUT");
    const deleteButton = screen.getByText("DELETE");

    expect(urlInput).toBeInTheDocument();
    expect(goButton).toBeInTheDocument();
    expect(getButton).toBeInTheDocument();
    expect(postButton).toBeInTheDocument();
    expect(putButton).toBeInTheDocument();
    expect(deleteButton).toBeInTheDocument();
});

test("changes method when clicked", () => {
    render(<Form />);

    const getButton = screen.getByText("GET");
    const postButton = screen.getByText("POST");

    fireEvent.click(getButton);
    fireEvent.click(postButton);
});
