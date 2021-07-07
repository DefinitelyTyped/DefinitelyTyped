export default storedPixelDataToCanvasImageDataColorLUT;
/**
 *
 * @param image A Cornerstone Image Object
 * @param colorLut Lookup table array
 * @param canvasImageDataData canvasImageData.data buffer filled with white pixels
 *
 */
declare function storedPixelDataToCanvasImageDataColorLUT(image: new (width?: number, height?: number) => HTMLImageElement, colorLut: any, canvasImageDataData: Uint8ClampedArray): void;
