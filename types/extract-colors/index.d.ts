/**
 * @param src String for a path of image, Image or ImageData.
 * @param options Optional parameters.
 */
export function extractColors(src: string | HTMLImageElement | ImageData, options?: Options): Promise<Colors[]>;
export function extractColorsFromSrc(src: string, option?: Options): Colors[];
export function extractColorsFromImageData(imageData: ImageData, option?: Options): Colors[];

export interface Options {
    /**
     * Total pixel number of the resized picture for calculation
     * @default 10000
     */
    pixels?: number;
    /**
     * From 0 to 1 is the color distance to not have near colors (1 distance is between white and black)
     * @default 0.2
     */
    distance?: number;
    /**
     * Power of the saturation weight during the process (0 is not used, 1 is only saturation and not area size)
     * @default 0.2
     */
    saturationImportance?: number;
    /**
     * Approximation power in the first color splitting during process (from 2 to 16)
     * @default 10
     */
    splitPower?: number;
    /**
     * Callback to enable only some colors
     * @param red
     * @param green
     * @param blue
     * @param alpha
     */
    colorValidator?: (red: number, green: number, blue: number, alpha: number) => boolean;
    /**
     * Only for browser, can be 'Anonymous' to avoid CORS
     * @default null
     */
    crossOrigin?: "anonymous" | "use-credentials" | "";
}

interface Colors {
    /**
     * Color in hexadecimal string
     * @example '#62342b'
     */
    hex: string;
    /**
     * Red canal from 0 to 255
     * @example 98
     */
    red: number;
    /**
     * Green canal from 0 to 255
     * @example 52
     */
    green: number;
    /**
     * Blue canal from 0 to 255
     * @example 43
     */
    blue: number;
    /**
     * Area of the color and his neighbouring colors from 0 to 1
     * @example 0.5915
     */
    area: number;
    /**
     * Color saturation from 0 to 1
     * @example 0.2156862
     */
    saturation: number;
}

export {};
