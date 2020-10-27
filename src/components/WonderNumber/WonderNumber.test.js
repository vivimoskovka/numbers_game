import React from "react";
import { fireEvent, getByRole, queryAllByTestId, queryByTestId, render, screen } from "@testing-library/react";
import { WonderNumber } from "./WonderNumber";
import { BrowserRouter, Link } from "react-router-dom";
import { faItalic } from "@fortawesome/free-solid-svg-icons";
import { AnswerItem } from "../AnswerItem/AnswerItem";



describe('WonderNumber', () => {

    test("redirects to home page", () => {
        const wrapper = render(<
            BrowserRouter >
            <WonderNumber / >
            </BrowserRouter>)

    });

    it('reads and updates coin counter', () => {
        onclick = jest.fn()
        const { getByTestId } = render(<
            BrowserRouter >
            <WonderNumber onClick={onclick}/ >
            </BrowserRouter>)
        expect(localStorage.getItem('scores')).toBeNull()
        expect(getByTestId('counter')).toHaveTextContent(0)


    })
})
