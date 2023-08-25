import React from "react";
import { render, screen } from "@testing-library/react";
import Results from "./index";

describe("Results Component", () => {
    it("should display JSON data when status is 'success'", () => {
        const jsonData = {
            key: "value",
        };

        const props = {
            status: "success",
            data: jsonData,
        };

        render(<Results {...props} />);

        const jsonText = JSON.stringify(jsonData, null, 2);
        const jsonDisplay = screen.queryByText(jsonText);

        // You can add a delay using setTimeout to give time for the content to render
        setTimeout(() => {
            expect(jsonDisplay).toBeInTheDocument();
        }, 1000); // Adjust the delay as needed
    });
});
