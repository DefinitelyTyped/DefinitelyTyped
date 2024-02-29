/**
 * Gets the markup wrap configuration for the supplied `nodeName`.
 *
 * NOTE: This lazily detects which wraps are necessary for the current browser.
 */
declare function getMarkupWrap(nodeName: string): any[] | null | undefined;

declare namespace getMarkupWrap {}

export = getMarkupWrap;
