export namespace int16DataUtilities {
    export { storedPixelDataToImageData };
}
/**
 * Convert stored pixel data to image data.
 *
 * Pack int16 into three uint8 channels (r, g, b)
 *
 * @param image A Cornerstone Image Object
 * @returns The image data for use by the WebGL shader
 */
declare function storedPixelDataToImageData(image: new (width?: number, height?: number) => HTMLImageElement): Uint8Array;
export namespace int16Shader {
    const frag: string;
}
export {};
