/**
 * A class containing utility functions for images.
 * @see {@link https://threejs.org/docs/index.html#api/en/extras/ImageUtils | Official Documentation}
 * @see {@link https://github.com/mrdoob/three.js/blob/master/src/extras/ImageUtils.js | Source}
 */
declare class ImageUtils {
    /**
     * Returns a data URI containing a representation of the given image.
     * @param image The image object.
     */
    static getDataURL(
        image: HTMLImageElement | HTMLCanvasElement | CanvasImageSource | ImageBitmap | ImageData,
    ): string;

    /**
     * Converts the given sRGB image data to linear color space.
     * @param image
     */
    static sRGBToLinear(image: HTMLImageElement | HTMLCanvasElement | ImageBitmap): HTMLCanvasElement;

    /**
     * Converts the given sRGB image data to linear color space.
     * @param image
     */
    static sRGBToLinear(image: ImageData): {
        data: ImageData["data"];
        width: ImageData["width"];
        height: ImageData["height"];
    };
}

export { ImageUtils };
