// Type definitions for @testing-library/jest-dom 5.0
// Project: https://github.com/testing-library/jest-dom
// Definitions by: Ernesto García <https://github.com/gnapse>
//                 John Gozde <https://github.com/jgoz>
//                 Seth Macpherson <https://github.com/smacpherson64>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.0

/// <reference types="jest" />

declare namespace jest {
    interface Matchers<R, T> {
        /**
         * @deprecated
         */
        toBeInTheDOM(container?: HTMLElement | SVGElement): R;
        toBeInTheDocument(): R;
        toBeVisible(): R;
        toBeEmpty(): R;
        toBeDisabled(): R;
        toBeEnabled(): R;
        toBeInvalid(): R;
        toBeRequired(): R;
        toBeValid(): R;
        toContainElement(element: HTMLElement | SVGElement | null): R;
        toContainHTML(htmlText: string): R;
        toHaveAttribute(attr: string, value?: unknown): R;
        toHaveClass(...classNames: string[]): R;
        toHaveFocus(): R;
        toHaveFormValues(expectedValues: Record<string, unknown>): R;
        toHaveStyle(css: string): R;
        toHaveTextContent(text: string | RegExp, options?: { normalizeWhitespace: boolean }): R;
        toHaveValue(value?: string | string[] | number): R;
        toBeChecked(): R;
    }
}
