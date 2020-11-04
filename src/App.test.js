import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";
import { BrowserRouter, Link } from "react-router-dom";


describe("App", () => {
    it("renders app component", () => {
        render( <
            BrowserRouter >
            <App / >
            </BrowserRouter>
        );
        expect(screen.getByText(/start/i)).toBeInTheDocument();
        expect(screen.getByRole('button')).toBeInTheDocument();
    });
});