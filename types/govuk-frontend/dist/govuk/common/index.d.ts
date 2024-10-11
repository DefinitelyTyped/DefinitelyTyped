/**
 * Common helpers which do not require polyfill.
 *
 * IMPORTANT: If a helper require a polyfill, please isolate it in its own module
 * so that the polyfill can be properly tree-shaken and does not burden
 * the components that do not need that helper
 */
/**
 * Config merging function
 *
 * Takes any number of objects and combines them together, with
 * greatest priority on the LAST item passed in.
 *
 * @internal
 * @param {...{ [key: string]: unknown }} configObjects - Config objects to merge
 * @returns {{ [key: string]: unknown }} A merged config object
 */
export function mergeConfigs(
    ...configObjects: Array<{
        [key: string]: unknown;
    }>
): {
    [key: string]: unknown;
};

/**
 * Extracts keys starting with a particular namespace from dataset ('data-*')
 * object, removing the namespace in the process, normalising all values
 *
 * @internal
 * @param {{ schema: Schema }} Component - Component class
 * @param {DOMStringMap} dataset - The object to extract key-value pairs from
 * @param {string} namespace - The namespace to filter keys with
 * @returns {ObjectNested | undefined} Nested object with dot-separated key namespace removed
 */
export function extractConfigByNamespace(
    Component: {
        schema: Schema;
    },
    dataset: DOMStringMap,
    namespace: string,
): ObjectNested | undefined;

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
 * Validate component config by schema
 *
 * Follows limited examples in JSON schema for wider support in future
 *
 * {@link https://ajv.js.org/json-schema.html#compound-keywords}
 * {@link https://ajv.js.org/packages/ajv-errors.html#single-message}
 *
 * @internal
 * @param {Schema} schema - Config schema
 * @param {{ [key: string]: unknown }} config - Component config
 * @returns {string[]} List of validation errors
 */
export function validateConfig(schema: Schema, config: {
    [key: string]: unknown;
}): string[];

/**
 * Format error message
 *
 * @internal
 * @param {ComponentWithModuleName} Component - Component that threw the error
 * @param {string} message - Error message
 * @returns {string} - Formatted error message
 */
export function formatErrorMessage(Component: ComponentWithModuleName, message: string): string;

/**
 * Schema for component config
 */
export interface Schema {
    /**
     * - Schema properties
     */
    properties: {
        [field: string]: SchemaProperty | undefined;
    };

    /**
     * - List of schema conditions
     */
    anyOf?: SchemaCondition[] | undefined;
}

/**
 * Schema property for component config
 */
export interface SchemaProperty {
    /**
     * - Property type
     */
    type: "string" | "boolean" | "number" | "object";
}

/**
 * Schema condition for component config
 */
export interface SchemaCondition {
    /**
     * - List of required config fields
     */
    required: string[];

    /**
     * - Error message when required config fields not provided
     */
    errorMessage: string;
}

export type NestedKey = keyof ObjectNested;

export interface ObjectNested {
    [key: string]: string | boolean | number | ObjectNested | undefined;
}

export interface ComponentWithModuleName {
    /**
     * - Name of the component
     */
    moduleName: string;
}
