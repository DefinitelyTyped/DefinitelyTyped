export namespace uint16DataUtilities {
    export { storedPixelDataToImageData };
}
/**
 * Convert stored pixel data to image data.
 *
 * For uint16 pack uint16 into two uint8 channels (r and a).
 *
 * @param image A Cornerstone Image Object
 * @returns The image data for use by the WebGL shader
 */
declare function storedPixelDataToImageData(image: new (width?: number, height?: number) => HTMLImageElement): Uint8Array;
export namespace uint16Shader {
    const frag: string;
}
export {};
