/**
 * Convert an image to a false color image
 *
 * @param image A Cornerstone Image Object
 * @param colormap - it can be a colormap object or a colormap id (string)
 *
 * @returns - Whether or not the image has been converted to a false color image
 */
export function convertImageToFalseColorImage(image: new (width?: number, height?: number) => HTMLImageElement, colormap: unknown): boolean;
/**
 * Convert the image of a element to a false color image
 *
 * @param element The Cornerstone element
 * @param colormap - it can be a colormap object or a colormap id (string)
 *
 */
export function convertToFalseColorImage(element: HTMLElement, colormap: any): void;
/**
 * Restores a false color image to its original version
 *
 * @param image A Cornerstone Image Object
 * @returns True if the image object had a valid restore function, which was run. Otherwise, false.
 */
export function restoreImage(image: new (width?: number, height?: number) => HTMLImageElement): boolean;
