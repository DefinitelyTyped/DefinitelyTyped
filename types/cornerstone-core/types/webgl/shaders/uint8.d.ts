export namespace uint8DataUtilities {
    export { storedPixelDataToImageData };
}
/**
 * Convert stored pixel data to image data. Here we will store
 * all data in the alpha channel.
 *
 * @param image A Cornerstone Image Object
 * @returns The image data for use by the WebGL shader
 */
declare function storedPixelDataToImageData(image: new (width?: number, height?: number) => HTMLImageElement): Uint8Array;
export namespace uint8Shader {
    const frag: string;
}
export {};
