/**
 * Gets an element's position in pixels relative to the viewport. The returned
 * object represents the position of the element's top left corner.
 */
declare function getElementPosition(
    element: HTMLElement,
): {
    x: number;
    y: number;
    width: number;
    height: number;
};

declare namespace getElementPosition {}

export = getElementPosition;
