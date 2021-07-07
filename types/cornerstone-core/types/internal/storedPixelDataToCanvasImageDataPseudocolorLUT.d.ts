import { Image } from '../Objects';

export default storedPixelDataToCanvasImageDataPseudocolorLUT;
/**
 *
 * @param image A Cornerstone Image Object
 * @param grayscaleLut Lookup table array
 * @param colorLut Lookup table array
 * @param canvasImageDataData canvasImageData.data buffer filled with white pixels
 *
 */
declare function storedPixelDataToCanvasImageDataPseudocolorLUT(image: Image, grayscaleLut: any[], colorLut: any, canvasImageDataData: Uint8ClampedArray): void;
