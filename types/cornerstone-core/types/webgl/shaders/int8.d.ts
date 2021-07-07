export namespace int8DataUtilities {
    export { storedPixelDataToImageData };
}
/**
 * Convert stored pixel data to image data.
 *
 * Store data in Uint8Array
 *
 * @param image A Cornerstone Image Object
 * @returns The image data for use by the WebGL shader
 */
declare function storedPixelDataToImageData(image: new (width?: number, height?: number) => HTMLImageElement): Uint8Array;
export namespace int8Shader {
    const frag: string;
}
export {};
