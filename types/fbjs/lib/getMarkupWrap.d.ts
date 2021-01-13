/**
 * Gets the markup wrap configuration for the supplied `nodeName`.
 *
 * NOTE: This lazily detects which wraps are necessary for the current browser.
 *
 * @param {string} nodeName Lowercase `nodeName`.
 * @return {?array} Markup wrap configuration, if applicable.
 */
declare function getMarkupWrap(nodeName): Array<any> | null | undefined;

declare namespace getMarkupWrap {}

export = getMarkupWrap;
