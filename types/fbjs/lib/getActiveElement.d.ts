/**
 * Same as document.activeElement but wraps in a try-catch block. In IE it is
 * not safe to call document.activeElement if there is nothing focused.
 *
 * The activeElement will be null only if the document or document body is not
 * yet defined.
 */
declare function getActiveElement(doc?: Document): HTMLElement | null | undefined;

declare namespace getActiveElement {}

export = getActiveElement;
