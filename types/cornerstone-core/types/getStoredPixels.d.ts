/**
 * Retrieves an array of stored pixel values from a rectangular region of an image
 *
 * @param element The DOM element enabled for Cornerstone
 * @param x The x coordinate of the top left corner of the sampling rectangle in image coordinates
 * @param y The y coordinate of the top left corner of the sampling rectangle in image coordinates
 * @param width The width of the of the sampling rectangle in image coordinates
 * @param height The height of the of the sampling rectangle in image coordinates
 * @returns The stored pixel value of the pixels in the sampling rectangle
 */
export default function _default(element: HTMLElement, x: number, y: number, width: number, height: number): number[];
