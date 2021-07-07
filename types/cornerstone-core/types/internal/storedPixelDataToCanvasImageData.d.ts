/**
 * This function transforms stored pixel values into a canvas image data buffer
 * by using a LUT.  This is the most performance sensitive code in cornerstone and
 * we use a special trick to make this go as fast as possible.  Specifically we
 * use the alpha channel only to control the luminance rather than the red, green and
 * blue channels which makes it over 3x faster. The canvasImageDataData buffer needs
 * to be previously filled with white pixels.
 *
 * NOTE: Attribution would be appreciated if you use this technique!
 *
 * @param image A Cornerstone Image Object
 * @param lut Lookup table array
 * @param canvasImageDataData canvasImageData.data buffer filled with white pixels
 *
 */
export default function _default(image: new (width?: number, height?: number) => HTMLImageElement, lut: any[], canvasImageDataData: Uint8ClampedArray): void;
