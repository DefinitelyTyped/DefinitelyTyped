export namespace rgbDataUtilities {
    export { storedPixelDataToImageData };
}
/**
 * Convert stored pixel data to image data.
 *
 * Pack RGB images into a 3-channel RGB texture
 *
 * @param image A Cornerstone Image Object
 * @returns The image data for use by the WebGL shader
 */
declare function storedPixelDataToImageData(image: new (width?: number, height?: number) => HTMLImageElement): Uint8Array;
export namespace rgbShader {
    const frag: string;
}
export {};
