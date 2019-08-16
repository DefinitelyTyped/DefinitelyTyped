// Type definitions for @testing-library/jest-dom 4.0.0
// Project: https://github.com/testing-library/jest-dom
// Definitions by: Damien Senger <https://github.com/hiwelo>
//                 Łukasz Fiszer <https://github.com/lukaszfiszer>
//                 Revath S Kumar <https://github.com/revathskumar>
//                 Ernesto García <https://github.com/gnapse>
//                 Weyert de Boer <https://github.com/weyert>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.0

declare namespace jest {
    interface Matchers<R> {
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
        toHaveAttribute(attr: string, value?: any): R;
        toHaveClass(...classNames: string[]): R;
        toHaveFocus(): R;
        toHaveFormValues(expectedValues: { [name: string]: any }): R;
        toHaveStyle(css: string): R;
        toHaveTextContent(text: string | RegExp, options?: { normalizeWhitespace: boolean }): R;
        toHaveValue(value?: string | string[] | number): R;
    }
}
