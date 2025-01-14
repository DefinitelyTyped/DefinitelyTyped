import { type ObjectNested } from "./configuration.js";

/**
 * Common helpers which do not require polyfill.
 *
 * IMPORTANT: If a helper require a polyfill, please isolate it in its own module
 * so that the polyfill can be properly tree-shaken and does not burden
 * the components that do not need that helper
 */

/**
 * Get hash fragment from URL
 *
 * Extract the hash fragment (everything after the hash) from a URL,
 * but not including the hash symbol
 *
 * @param {string} url - URL
 * @returns {string | undefined} Fragment from URL, without the hash
 */
export function getFragmentFromUrl(url: string): string | undefined;

/**
 * Get GOV.UK Frontend breakpoint value from CSS custom property
 *
 * @param {string} name - Breakpoint name
 * @returns {{ property: string, value?: string }} Breakpoint object
 */
export function getBreakpoint(name: string): {
    property: string;
    value?: string;
};

/**
 * Move focus to element
 *
 * Sets tabindex to -1 to make the element programmatically focusable,
 * but removes it on blur as the element doesn't need to be focused again.
 *
 * @template {HTMLElement} FocusElement
 * @param {FocusElement} $element - HTML element
 * @param {object} [options] - Handler options
 * @param {function(this: FocusElement): void} [options.onBeforeFocus] - Callback before focus
 * @param {function(this: FocusElement): void} [options.onBlur] - Callback on blur
 */
export function setFocus<FocusElement extends HTMLElement>(
    $element: FocusElement,
    options?: {
        onBeforeFocus?: ((this: FocusElement) => void) | undefined;
        onBlur?: ((this: FocusElement) => void) | undefined;
    },
): void;

/**
 * Checks if component is already initialised
 *
 * @internal
 * @param {Element} $root - HTML element to be checked
 * @param {string} moduleName - name of component module
 * @returns {boolean} Whether component is already initialised
 */
export function isInitialised($root: Element, moduleName: string): boolean;

/**
 * Checks if GOV.UK Frontend is supported on this page
 *
 * Some browsers will load and run our JavaScript but GOV.UK Frontend
 * won't be supported.
 *
 * @param {HTMLElement | null} [$scope] - (internal) `<body>` HTML element checked for browser support
 * @returns {boolean} Whether GOV.UK Frontend is supported on this page
 */
export function isSupported($scope?: HTMLElement | null): boolean;

/**
 * Check for an object
 *
 * @internal
 * @template {Partial<Record<keyof ObjectType, unknown>>} [ObjectType=ObjectNested]
 * @param {unknown | ObjectType} option - Option to check
 * @returns {option is ObjectType} Whether the option is an object
 */
export function isObject<
    ObjectType extends Partial<Record<keyof ObjectType, unknown>> = ObjectNested,
>(
    option: unknown,
): option is ObjectType;

/**
 * Format error message
 *
 * @internal
 * @param {ComponentWithModuleName} Component - Component that threw the error
 * @param {string} message - Error message
 * @returns {string} - Formatted error message
 */
export function formatErrorMessage(Component: ComponentWithModuleName, message: string): string;

export interface ComponentWithModuleName {
    /**
     * - Name of the component
     */
    moduleName: string;
}
