import React from "react";
import { fireEvent, getByRole, getByText, render, screen } from "@testing-library/react";
import {Main} from "./Main";
import {Button} from "./Main";
import { BrowserRouter, Link } from "react-router-dom";

describe("Main", () => {
    it("renders Main component", () => {
        render( <
            BrowserRouter >
            <Main / >
            </BrowserRouter>
        );
        screen.debug();
        expect(screen.getByText(/start/i)).toBeInTheDocument();
        expect(screen.getByRole('button')).toBeInTheDocument();
    });
});