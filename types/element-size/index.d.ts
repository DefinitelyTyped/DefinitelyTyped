/**
 * Given a DOM element, return an array containing that element's width and height in pixels.
 */
declare function getSize(element: EventTarget | Document | HTMLElement): [number, number];

/**
 * Get the size of an element in pixels, including margins
 */
export = getSize;
