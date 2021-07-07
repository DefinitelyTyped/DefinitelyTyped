/**
 * Creates a LUT used while rendering to convert stored pixel values to
 * display pixels
 *
 * @param image A Cornerstone Image Object
 * @param windowWidth The Window Width
 * @param windowCenter The Window Center
 * @param invert A boolean describing whether or not the image has been inverted
 * @param [voiLUT] A Volume of Interest Lookup Table
 *
 * @returns A lookup table to apply to the image
 */
export default function _default(image: new (width?: number, height?: number) => HTMLImageElement, windowWidth: number, windowCenter: number, invert: boolean, voiLUT?: any[]): Uint8ClampedArray;
