/**
 * Fast Gaussian Blur in pure JavaScript, via IIR filer.
 * Speed does not depend on blur radius
 * Can be useful to calculate unsharp mask via brightness/lightness channel
 * @param src - typed array with image grayscale data (will be updated with blurred image)
 * @param width - image width
 * @param height - image height
 * @param radius - blur radius
 */
declare function blurMono16(src: Uint16Array, width: number, height: number, radius: number): void;

/**
 * Fast gaussian blur in pure JavaScript via IIR filer.
 * Input data is grayscale Uint16Array
 */
export = blurMono16;
