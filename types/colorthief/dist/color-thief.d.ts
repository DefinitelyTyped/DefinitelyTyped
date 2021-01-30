// Type definitions for colorthief 2.3
// Project: https://github.com/lokesh/color-thief
// Definitions by: ibrahim <https://github.com/ibrahim-13>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare class ColorThief {
    constructor();
    /**
     * Get dominent color of an image
     * @param image `HTMLImageElement` of the image.
     * @param quality Quality consideration for the image, `1` being the highest quality. Defaults to `10`.
     * @returns Array of RGB data
     */
    getColor(image: HTMLImageElement, quality?: number): number[];

    /**
     * Get dominent color of an image
     * @param image `HTMLImageElement` of the image.
     * @param colorCount Determines the size of the palette; the number of colors returned. Defaults to `10`.
     * @param quality Quality consideration for the image, `1` being the highest quality. `10` is default.
     * @returns Array of RGB data
     */
    getPalette(image: HTMLImageElement, colorCount?: number, quality?: number): number[];

    /**
     * Get dominent color from image URL.
     * @param imageUrl Image URL.
     * @param callback Callback function that will be executed with the dominent color and the image URL as parameters.
     * @param quality Quality consideration for the image, `1` being the highest quality. `10` is default.
     * @description Undocumented API.
     */
    getColorFromUrl(imageUrl: string, callback: (color: number, imageUrl: string) => void, quality?: number): void;

    /**
     * Get Base65 encoded Data URL from an image URL.
     * @param imageUrl Image URL.
     * @param callback Callback function that will be executed with the Base64 encoded Data URL string as the parameter.
     * @description Undocumented API.
     */
    getImageData(imageUrl: string, callback: (imageBase64: string) => void): void;

    /**
     * Get dominent color from image URL
     * @param imageUrl Image URL.
     * @param callback Callback function that will be executed with the dominent color and the image element as parameters.
     * @param quality Quality consideration for the image, `1` being the highest quality. `10` is default.
     * @description Undocumented API.
     */
    getColorAsync(imageUrl: string, callback: (color: number, image: HTMLImageElement) => void, quality?: number): void;
}

export default ColorThief;
