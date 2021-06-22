// Type definitions for element-size 1.1
// Project: https://github.com/hughsk/element-size
// Definitions by: Piotr Błażejewicz <https://github.com/peterblazejewicz>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/**
 * Given a DOM element, return an array containing that element's width and height in pixels.
 */
declare function getSize(element: EventTarget | Document | HTMLElement): [number, number];

/**
 * Get the size of an element in pixels, including margins
 */
export = getSize;
