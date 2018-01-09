// Type definitions for jasmine_dom_matchers 1.4
// Project: https://github.com/charleshansen/jasmine_dom_matchers
// Definitions by: Yaroslav Admin <https://github.com/devoto13>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

/// <reference types="jasmine" />

declare namespace jasmine {
  interface Matchers<T> {
    /**
     * Checks if element has visibility `hidden` or `height` or `width = 0`.
     *
     * The reverse of {@link toBeVisible}.
     */
    toBeHidden(): boolean;

    /**
     * Checks if element has visibility style not `hidden` and both `height` and `width > 0`.
     *
     * The reverse of {@link toBeHidden}.
     */
    toBeVisible(): boolean;

    /**
     * Checks element attributes.
     * `attributeValue` is optional, if omitted, will check that the attribute exists.
     */
    toHaveAttr(attributeName: string, attributeValue?: string | number | RegExp): boolean;

    /**
     * Checks element properties.
     * `propertyValue` is optional, if omitted, will check that the property exists.
     */
    toHaveProp(propertyName: string, propertyValue?: string | number | RegExp): boolean;

    /**
     * Checks if all styles are present.
     * `styles` is an object, all styles given in that object will be checked.
     */
    toHaveCss(styles: { [ cssProperty: string]: string | number | RegExp }): boolean;

    /**
     * Checks the `value` of eligible elements (like inputs).
     */
    toHaveValue(value: string | number | RegExp): boolean;

    /**
     * Checks if element has a `checked` property, only useful for checkbox inputs.
     */
    toBeChecked(): boolean;

    /**
     * Checks if element is focused.
     */
    toBeFocused(): boolean;

    /**
     * Checks if element has a `selected` property, only useful for options.
     */
    toBeSelected(): boolean;

    /**
     * Checks if element has a disabled property.
     */
    toBeDisabled(): boolean;

    /**
     * Checks for presence of classes on the element.
     * If `className` is an Array, checks for all classes in the array.
     */
    toHaveClass(className: string | string[]): boolean;

    /**
     * Checks for exact match with text, after trimming whitespace.
     */
    toHaveText(text: string | number | RegExp): boolean;

    /**
     * Checks if text substring is contained within element.
     */
    toContainText(text: string | number | RegExp): boolean;

    /**
     * Checks for length number of html elements.
     * Also works for plain Arrays.
     */
    toHaveLength(length: number): boolean;

    /**
     * True if the element exists, does not have to be in the DOM.
     */
    toExist(): boolean;
  }
}
