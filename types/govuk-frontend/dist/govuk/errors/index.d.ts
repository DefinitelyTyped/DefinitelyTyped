import { type ComponentWithModuleName } from "../common/index.js";

/**
 * GOV.UK Frontend error
 *
 * A base class for `Error`s thrown by GOV.UK Frontend.
 *
 * It is meant to be extended into specific types of errors
 * to be thrown by our code.
 *
 * @example
 * ```js
 * class MissingRootError extends GOVUKFrontendError {
 *   // Setting an explicit name is important as extending the class will not
 *   // set a new `name` on the subclass. The `name` property is important
 *   // to ensure intelligible error names even if the class name gets
 *   // mangled by a minifier
 *   name = "MissingRootError"
 * }
 * ```
 */
export abstract class GOVUKFrontendError extends Error {
}

/**
 * Indicates that GOV.UK Frontend is not supported
 */
export class SupportError extends GOVUKFrontendError {
    /**
     * Checks if GOV.UK Frontend is supported on this page
     *
     * @param {HTMLElement | null} [$scope] - HTML element `<body>` checked for browser support
     */
    constructor($scope?: HTMLElement | null);
}

/**
 * Indicates that a component has received an illegal configuration
 */
export class ConfigError extends GOVUKFrontendError {
}

/**
 * Indicates an issue with an element (possibly `null` or `undefined`)
 */
export class ElementError extends GOVUKFrontendError {
    /**
     * @internal
     * @overload
     * @param {string} message - Element error message
     */
    constructor(message: string);

    /**
     * @internal
     * @overload
     * @param {ElementErrorOptions} options - Element error options
     */
    constructor(options: ElementErrorOptions);
}

/**
 * Indicates that a component is already initialised
 */
export class InitError extends GOVUKFrontendError {
    /**
     * @internal
     * @param {ComponentWithModuleName | string} componentOrMessage - name of the component module
     */
    constructor(componentOrMessage: ComponentWithModuleName | string);
}

/**
 * Element error options
 */
export interface ElementErrorOptions {
    /**
     * - An identifier that'll let the user understand which element has an error. This is whatever makes the most sense
     */
    identifier: string;

    /**
     * - The element in error
     */
    element?: Element | null | undefined;

    /**
     * - The type that was expected for the identifier
     */
    expectedType?: string | undefined;

    /**
     * - Component throwing the error
     */
    component: ComponentWithModuleName;
}
