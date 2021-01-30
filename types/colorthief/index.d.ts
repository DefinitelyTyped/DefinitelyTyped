// Type definitions for colorthief 2.3.2
// Project: https://github.com/lokesh/color-thief
// Definitions by: ibrahim <https://github.com/ibrahim-13>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

type ColorRGB = [r: number, g: number, b: number];

declare class ColorThief {
    constructor();
    /**
     * @function getColor() Get dominent color of an image
     * @param {HTMLImageElement | string} image `HTMLImageElement` for browser envirnment, path `string` for Node.js environment.
     * @param {number | undefined} quality Quality consideration for the image, `1` being the highest quality. Defaults to `10`.
     * @returns {ColorRGB} Array of RGB data
     */
    getColor(image: string | HTMLImageElement, quality?: number): ColorRGB;

    
    /**
     * @function getPalette() Get dominent color of an image
     * @param {HTMLImageElement | string} image `HTMLImageElement` for browser envirnment, path `string` for Node.js environment.
     * @param {number | undefined} colorCount Determines the size of the palette; the number of colors returned. Defaults to `10`.
     * @param {number | undefined} quality Quality consideration for the image, `1` being the highest quality. `10` is default.
     * @returns {ColorRGB} Array of RGB data
     */
    getPalette(image: HTMLImageElement | string, colorCount?: number, quality?: number): ColorRGB[];

    /**
     * @function getColorFromUrl() Get dominent color from image URL.
     * @param {string} imageUrl Image URL.
     * @param callback Callback function that will be executed with the dominent color and the image URL as parameters.
     * @param {number | undefined} quality Quality consideration for the image, `1` being the highest quality. `10` is default.
     * @returns {void}
     * @description Undocumented API.
     */
    getColorFromUrl(imageUrl: string, callback: (color: ColorRGB, imageUrl: string) => void, quality?: number): void;

    /**
     * @function getImageData() Get Base65 encoded Data URL from an image URL.
     * @param {string} imageUrl Image URL.
     * @param callback Callback function that will be executed with the Base64 encoded Data URL string as the parameter.
     * @returns {void}
     * @description Undocumented API.
     */
    getImageData(imageUrl: string, callback: (imageBase64: string) => void): void;

    /**
     * @function getColorAsync() Get dominent color from image URL
     * @param {string} imageUrl Image URL.
     * @param callback Callback function that will be executed with the dominent color and the image element as parameters.
     * @param {number | undefined} quality Quality consideration for the image, `1` being the highest quality. `10` is default.
     * @returns {void}
     * @description Undocumented API.
     */
    getColorAsync(imageUrl: string, callback: (color: ColorRGB, image: HTMLImageElement) => void, quality?: number): void;
}

export default ColorThief;
