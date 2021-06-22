// Type definitions for tti-polyfill 0.2
// Project: https://github.com/GoogleChrome/tti-polyfill#readme
// Definitions by: Patrick Weygand <https://github.com/derduher>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/*~ If this module is a UMD module that exposes a global variable 'myLib' when
 *~ loaded outside a module loader environment, declare that global here.
 *~ Otherwise, delete this declaration.
 */
export as namespace ttiPolyfill;

/**
 * Returns a promise that resolves to the first consistently interactive time
 * (in milliseconds) or null if the browser doesn't support the features
 * required for detection.
 * ```
 * ttiPolyfill.getFirstConsistentlyInteractive(opts).then((tti) => {
 *   // Use `tti` value in some way.
 * });
 * ```
 * @param opts Configuration options for
 * the polyfill
 * @return a promise that resolves to TTI
 */
export function getFirstConsistentlyInteractive(opts?: GetFirstConsistentlyInteractiveOpts): Promise<number|null>;

export interface GetFirstConsistentlyInteractiveOpts {
    /**
     * When true (the default), a mutation observer is used to detect when added
     * DOM elements will create additional network requests. This can be
     * disabled to improve performance in cases where you know no additional
     * request-creating DOM elements will be added.
     */
    useMutationObserver?: boolean;
    /**
     * The lower bound to start forward-searching for the quite window. If no value is set, the default is after the
     * DOMContentLoaded event.
     */
    minValue?: number | null;
}
