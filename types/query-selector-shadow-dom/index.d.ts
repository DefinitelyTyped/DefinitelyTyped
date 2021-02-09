// Type definitions for query-selector-shadow-dom 1.0
// Project: https://github.com/Georgegriff/query-selector-shadow-dom#readme
// Definitions by: David Alvarez Restrepo <https://github.com/davidalvarezr>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/**
 * Finds first matching elements on the page that may be in a shadow root using a complex selector of n-depth
 * Don't have to specify all shadow roots to button, tree is travered to find the correct element
 * @param selector Simple selector to filter the elements by. e.g. 'a', 'div.main'
 * @param root The root from which we apply the selector (default: document)
 * @returns the HTMLElement found or null if not found
 * @example
 * ```ts
 * // find first active download link element
 * querySelectorDeep('#downloads-list .is-active a[href^="https://"]');
 * ```
 * @license Apache-2.0
 */
export function querySelectorDeep(selector: string, root?: HTMLElement): HTMLElement | null;

/**
 * Finds first matching elements on the page that may be in a shadow root using a complex selector of n-depth
 * Don't have to specify all shadow roots to button, tree is travered to find the correct element
 * @param selector Simple selector to filter the elements by. e.g. 'a', 'div.main'
 * @param root The root from which we apply the selector (default: document)
 * @returns the HTMLElement's found or an empty array if none found
 * @license Apache-2.0
 */
export function querySelectorAllDeep(selector: string, root?: HTMLElement): HTMLElement[];

/**
 * Finds all elements on the page, inclusive of those within shadow roots
 * @param selector must be null
 * @param root must be document
 * @returns all elements on the page, inclusive of those within shadow roots.
 * @license Apache-2.0
 */
export function collectAllElementsDeep(selector: null, root: Document): HTMLHtmlElement;
