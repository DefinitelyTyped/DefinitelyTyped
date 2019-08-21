// Type definitions for @testing-library/jest-dom 4.0
// Project: https://github.com/testing-library/jest-dom
// Definitions by: Ernesto García <https://github.com/gnapse>
//                 John Gozde <https://github.com/jgoz>
//                 Seth Macpherson <https://github.com/smacpherson64>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.0

/// <reference types="jest" />

// CONTRIBUTOR NOTE: When adding/updating matchers, ensure you handle
// them in both the Global section and the Module section

export type ValidElement = HTMLElement | SVGElement;

// Global types (for `import "@testing-library/jest-dom/extend-expect"`)

declare global {
    namespace jest {
        interface Matchers<R> {
            /**
             * @deprecated
             */
            toBeInTheDOM(container?: ValidElement): R;
            toBeInTheDocument(): R;
            toBeVisible(): R;
            toBeEmpty(): R;
            toBeDisabled(): R;
            toBeEnabled(): R;
            toBeInvalid(): R;
            toBeRequired(): R;
            toBeValid(): R;
            toContainElement(element: ValidElement | null): R;
            toContainHTML(htmlText: string): R;
            toHaveAttribute(attr: string, value?: any): R;
            toHaveClass(...classNames: string[]): R;
            toHaveFocus(): R;
            toHaveFormValues(expectedValues: { [name: string]: any }): R;
            toHaveStyle(css: string): R;
            toHaveTextContent(text: string | RegExp, options?: { normalizeWhitespace: boolean }): R;
            toHaveValue(value?: string | string[] | number): R;
        }
    }
}

// Module types (for `import { toBeEmpty } from "@testing-library/jest-dom"`)

/**
 * @deprecated
 */
export function toBeInTheDOM(element: ValidElement | null, container?: ValidElement): jest.CustomMatcherResult;
export function toBeInTheDocument(element: ValidElement | null): jest.CustomMatcherResult;
export function toBeVisible(element: ValidElement): jest.CustomMatcherResult;
export function toBeEmpty(element: ValidElement): jest.CustomMatcherResult;
export function toBeDisabled(element: ValidElement): jest.CustomMatcherResult;
export function toBeEnabled(element: ValidElement): jest.CustomMatcherResult;
export function toBeInvalid(element: ValidElement): jest.CustomMatcherResult;
export function toBeRequired(element: ValidElement): jest.CustomMatcherResult;
export function toBeValid(element: ValidElement): jest.CustomMatcherResult;
export function toContainElement(container: ValidElement, element: ValidElement | null): jest.CustomMatcherResult;
export function toContainHTML(element: ValidElement, htmlText: string): jest.CustomMatcherResult;
export function toHaveAttribute(element: ValidElement, attr: string, value?: any): jest.CustomMatcherResult;
export function toHaveClass(element: ValidElement, ...classNames: string[]): jest.CustomMatcherResult;
export function toHaveFocus(element: ValidElement): jest.CustomMatcherResult;
export function toHaveFormValues(
    element: ValidElement,
    expectedValues: { [name: string]: any },
): jest.CustomMatcherResult;
export function toHaveStyle(element: ValidElement, css: string): jest.CustomMatcherResult;
export function toHaveTextContent(
    element: ValidElement,
    text: string | RegExp,
    options?: { normalizeWhitespace: boolean },
): jest.CustomMatcherResult;
export function toHaveValue(element: ValidElement, value?: string | string[] | number): jest.CustomMatcherResult;
