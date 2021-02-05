/**
 * Gets an element's bounding rect in pixels relative to the viewport.
 */
declare function getElementRect(
    element: HTMLElement,
): {
    left: number;
    right: number;
    top: number;
    bottom: number;
};

declare namespace getElementRect {}

export = getElementRect;
