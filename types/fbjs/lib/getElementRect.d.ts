/**
 * Gets an element's bounding rect in pixels relative to the viewport.
 *
 * @param {DOMElement} elem
 * @return {object}
 */
declare function getElementRect(
    element,
): {
    left: number;
    right: number;
    top: number;
    bottom: number;
};

declare namespace getElementRect {}

export = getElementRect;
