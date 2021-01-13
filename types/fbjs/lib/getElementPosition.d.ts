/**
 * Gets an element's position in pixels relative to the viewport. The returned
 * object represents the position of the element's top left corner.
 *
 * @param {DOMElement} element
 * @return {object}
 */
declare function getElementPosition(
    element,
): {
    x: number;
    y: number;
    width: number;
    height: number;
};

declare namespace getElementPosition {}

export = getElementPosition;
