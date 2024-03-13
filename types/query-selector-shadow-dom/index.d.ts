/**
 * Finds first matching elements on the page that may be in a shadow root using a complex selector of n-depth
 * Don't have to specify all shadow roots to button, tree is travered to find the correct element
 * @param selector Simple selector to filter the elements by. e.g. 'a', 'div.main'
 * @param root The root from which we apply the selector (default: document)
 * @param cachedElements cached elements (default: null)
 * @returns the HTMLElement found or null if not found
 * @example
 * ```ts
 * // find first active download link element
 * const firstActiveDownload = querySelectorDeep('#downloads-list .is-active a[href^="https://"]');
 * ```
 * @license Apache-2.0
 */
export function querySelectorDeep<K extends keyof HTMLElementTagNameMap>(
    selector: K,
    root?: Document | HTMLElement,
    cachedElements?: ReadonlyArray<HTMLElementTagNameMap[K]> | null,
): HTMLElementTagNameMap[K] | null;
export function querySelectorDeep<K extends keyof SVGElementTagNameMap>(
    selector: K,
    root?: Document | HTMLElement,
    cachedElements?: ReadonlyArray<SVGElementTagNameMap[K]> | null,
): SVGElementTagNameMap[K] | null;
export function querySelectorDeep(
    selector: string,
    root?: Document | HTMLElement,
    cachedElements?: readonly HTMLElement[] | null,
): HTMLElement | null;

/**
 * Finds first matching elements on the page that may be in a shadow root using a complex selector of n-depth
 * Don't have to specify all shadow roots to button, tree is travered to find the correct element
 * @param selector Simple selector to filter the elements by. e.g. 'a', 'div.main'
 * @param root The root from which we apply the selector (default: document)
 * @param cachedElements cached elements (default: null)
 * @returns the HTMLElement's found or an empty array if none found
 * @license Apache-2.0
 */
export function querySelectorAllDeep<K extends keyof HTMLElementTagNameMap>(
    selector: K,
    root?: Document | HTMLElement,
    cachedElements?: ReadonlyArray<HTMLElementTagNameMap[K]> | null,
): Array<HTMLElementTagNameMap[K]>;
export function querySelectorAllDeep<K extends keyof SVGElementTagNameMap>(
    selector: K,
    root?: Document | HTMLElement,
    cachedElements?: ReadonlyArray<SVGElementTagNameMap[K]> | null,
): Array<SVGElementTagNameMap[K]>;
export function querySelectorAllDeep(
    selector: string,
    root?: Document | HTMLElement,
    cachedElements?: readonly HTMLElement[] | null,
): HTMLElement[];

/**
 * Finds all elements on the page, inclusive of those within shadow roots
 * @param selector
 * @param root must be document
 * @param cachedElements cached elements (default: null)
 * @returns all elements on the page, inclusive of those within shadow roots.
 * @license Apache-2.0
 */
export function collectAllElementsDeep<K extends keyof HTMLElementTagNameMap>(
    selector: K,
    root?: Document | HTMLElement,
    cachedElements?: ReadonlyArray<HTMLElementTagNameMap[K]> | null,
): Array<HTMLElementTagNameMap[K]>;
export function collectAllElementsDeep<K extends keyof SVGElementTagNameMap>(
    selector: K,
    root?: Document | HTMLElement,
    cachedElements?: ReadonlyArray<SVGElementTagNameMap[K]> | null,
): Array<SVGElementTagNameMap[K]>;
export function collectAllElementsDeep(
    selector: string | null,
    root: Document | HTMLElement,
    cachedElements?: readonly HTMLElement[] | null,
): HTMLElement[];
