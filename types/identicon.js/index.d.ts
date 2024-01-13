export type Color = [number, number, number, number];

export interface IdenticonOptions {
    background?: Color | undefined;
    foreground?: Color | undefined;
    margin?: number | undefined;
    size?: number | undefined;
    format?: "svg" | "png" | undefined;
}

export interface PNGlib {
    width: number;
    height: number;
    depth: number;

    /**
     * Returns the index of a given pixel in the image data array.
     * @param x The given x coordinate of the pixel.
     * @param y The given y coordinate of the pixel.
     */
    index(x: number, y: number): number;

    /**
     * Returns the image as a base64 encoded string.
     */
    getBase64(): string;

    /**
     * Returns the png as a string.
     */
    getDump(): string;
}

export interface Svg {
    size: number;
    foreground: Color;
    background: Color;
    rectangles: [
        {
            x: number;
            y: number;
            width: number;
            height: number;
            color: Color;
        },
    ];

    /**
     * Returns a string with the structure 'rgb(r, g, b, a)'.
     * @param red
     * @param green
     * @param blue
     * @param alpha
     */
    color(red: number, green: number, blue: number, alpha: number): string;

    /**
     * Returns the Svg as string.
     */
    getDump(): string;

    /**
     * Returns the Svg as a base64 encoded string.
     */
    getBase64(): string;
}

export default class Identicon {
    hash: string;
    foreground: Color;
    background: Color;
    size: number;
    format: "svg" | "png";
    margin: number;

    constructor(hash: string, size?: number);
    constructor(hash: string, options: IdenticonOptions);

    /**
     * Returns a new blank image as Svg or PNGlib.
     */
    image(): Svg | PNGlib;

    /**
     * Returns a new image as Svg or PNGlib with the identicon applied.
     */
    render(): Svg | PNGlib;

    /**
     * Places a rectangle at the given position with the given width, height and color in the image.
     * @param x The x coordinate.
     * @param y The y coordinate
     * @param w The width.
     * @param h The height.
     * @param color The color.
     * @param image The image.
     */
    rectangle(
        x: number,
        y: number,
        w: number,
        h: number,
        color: Color,
        image: Svg | PNGlib,
    ): void;

    /**
     * Converts from hsl to rgb.
     * @param h hue
     * @param s saturation
     * @param b brightness
     */
    hsl2rgb(h: number, s: number, b: number): [number, number, number];

    /**
     * Returns the image data as a string.
     */
    toString(): string;

    /**
     * Returns true if the identicon is a Svg.
     */
    isSvg(): boolean;
}
