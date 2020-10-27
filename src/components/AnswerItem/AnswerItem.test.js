import React from "react";
import { fireEvent, getByText, render, screen } from "@testing-library/react";
import {AnswerItem} from "./AnswerItem";
import { BrowserRouter, Link } from "react-router-dom";


describe('AnswerItem', () => {
    it('renders AnswerItem component', () => {
        render ( <
            BrowserRouter >
            <AnswerItem / >
            </BrowserRouter>
        )
        expect(screen.getByRole('listitem')).toBeInTheDocument();
    })

    it('test click', () => {
        const onClick = jest.fn()
        const {getByRole} = render(<li onClick={onClick}></li>)

        fireEvent.click(getByRole('listitem'))
        expect(onClick).toHaveBeenCalled;
    })
})