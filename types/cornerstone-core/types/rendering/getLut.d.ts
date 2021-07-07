/**
 * Retrieve or generate a LUT Array for an Image and Viewport
 *
 * @param image An Image Object
 * @param viewport An Viewport Object
 * @param invalidated Whether or not the LUT data has been invalidated
 * (e.g. by a change to the windowWidth, windowCenter, or invert viewport parameters).
 * @return LUT Array
 */
export default function _default(image: new (width?: number, height?: number) => HTMLImageElement, viewport: any, invalidated: boolean): Uint8ClampedArray;
