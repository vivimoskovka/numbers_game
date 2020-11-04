import React from "react";
// import { fireEvent, getByRole, queryAllByTestId, queryByTestId, render, screen } from "@testing-library/react";
// import { WonderNumber } from "./WonderNumber";
// import { BrowserRouter, Link } from "react-router-dom";
// import { AnswerItem } from "../AnswerItem/AnswerItem";
import { WonderNumber } from "./WonderNumber";
import {generateMathProblem, getCoin} from "./WonderNumber"

describe('generateMathProblem', () => {

    const mathPro = generateMathProblem()
    const numberOne = mathPro.numbers[0]
    const numberTwo = mathPro.numbers[1]
    const result = mathPro.results

    it('should be defined and return obj', () => {
        expect(mathPro).toBeDefined()
     }),
     it('shuld return numbers less than 10', () => {
        expect(numberOne).toBeLessThanOrEqual(10)
        expect(numberTwo).toBeLessThanOrEqual(10)
     }),
     it('sum shuld be less than 20', () => {
         expect(numberOne+numberTwo).toBe(result)
         expect(result).toBeLessThanOrEqual(20)
     })
})

describe('getCoin', () => {
    it('updates localstorage', () => {
        const localStorageMock = {
            getItem: jest.fn(),
            setItem: jest.fn(),
            clear: jest.fn()
        };
        global.localStorage = localStorageMock;

        const point = localStorageMock.getItem('scores')
        localStorageMock.setItem('scores', point+1)
        expect(localStorageMock.setItem).toHaveBeenCalledTimes(1);
        expect(localStorageMock.getItem('scores')).toEqual(1)        
    })
    
    it('updates localstorage', () => {
        
            var localStorage = {};
            localStorage.setItem = function (key, val) {
                 this[key] = val + '';
            }
            localStorage.getItem = function (key) {
                return this[key];
            }
            // Object.defineProperty(localStorage, 'length', {
            //     get: function () { return Object.keys(this).length - 2; }
            // });
        
           localStorage.setItem('scores', 1) 
           expect(JSON.parse(localStorage.getItem('scores'))).toBe(1)
        
       

    })
    

})

// Local storage test steps
// 1. store 'scores' value in a variable
// 2. call the function that modifies localstorage
// 3. check 'stores', it should equal saved value + 1