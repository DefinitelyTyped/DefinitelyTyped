/**
 * Gets the element with the document scroll properties such as `scrollLeft` and
 * `scrollHeight`. This may differ across different browsers.
 *
 * NOTE: The return value can be null if the DOM is not yet ready.
 */
declare function getDocumentScrollElement(doc?: Document): HTMLElement | null | undefined;

declare namespace getDocumentScrollElement {}

export = getDocumentScrollElement;
