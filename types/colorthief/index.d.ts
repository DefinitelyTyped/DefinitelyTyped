/// <reference lib="dom" />

export = ColorThief;
export as namespace ColorThief;

declare namespace ColorThief {
    /**
     * RGB color tuple representing a color with red, green, and blue values (0-255)
     */
    type RGBColor = [number, number, number];

    /**
     * Options for color extraction methods
     */
    interface Options {
        /**
         * Number of colors to extract for palette (2-20, default: 10)
         * For getColor(), this is internally set to 5
         */
        colorCount?: number;

        /**
         * Quality/speed trade-off (1 = highest quality, 10 = default)
         * Higher numbers are faster but may miss colors
         */
        quality?: number;
    }

    /**
     * Callback function for asynchronous color extraction
     */
    type ColorCallback = (color: RGBColor, source: HTMLImageElement | string) => void;

    /**
     * Callback function for image data retrieval
     */
    type ImageDataCallback = (dataUrl: string) => void;
}

/**
 * Color Thief - Extract dominant colors from images
 */
declare class ColorThief {
    /**
     * Extract the dominant color from an image
     * @param sourceImage - HTML image element
     * @param quality - Quality/speed trade-off (1 = highest quality, 10 = default)
     * @returns RGB color array [r, g, b] where values are 0-255
     */
    getColor(sourceImage: HTMLImageElement, quality?: number): ColorThief.RGBColor;

    /**
     * Extract a palette of colors from an image
     * @param sourceImage - HTML image element
     * @param colorCount - Number of colors to extract (2-20, default: 10)
     * @param quality - Quality/speed trade-off (1 = highest quality, 10 = default)
     * @returns Array of RGB color arrays [[r, g, b], ...] where values are 0-255
     */
    getPalette(sourceImage: HTMLImageElement, colorCount?: number, quality?: number): ColorThief.RGBColor[];

    /**
     * Extract the dominant color from an image URL (asynchronous)
     * @param imageUrl - URL of the image
     * @param callback - Callback function to receive the color
     * @param quality - Quality/speed trade-off (1 = highest quality, 10 = default)
     */
    getColorFromUrl(imageUrl: string, callback: ColorThief.ColorCallback, quality?: number): void;

    /**
     * Get image data as base64 data URL from a URL
     * @param imageUrl - URL of the image
     * @param callback - Callback function to receive the data URL
     */
    getImageData(imageUrl: string, callback: ColorThief.ImageDataCallback): void;

    /**
     * Extract the dominant color from an image URL asynchronously with base64 conversion
     * @param imageUrl - URL of the image
     * @param callback - Callback function to receive the color
     * @param quality - Quality/speed trade-off (1 = highest quality, 10 = default)
     */
    getColorAsync(imageUrl: string, callback: ColorThief.ColorCallback, quality?: number): void;
}
