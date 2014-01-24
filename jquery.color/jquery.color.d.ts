// Type definitions for jquery.color.js v2.1.2
// Definitions: https://github.com/borisyankov/DefinitelyTyped

interface JQueryColor {
    /**
     * Returns the alpha value of this color.
     */
    alpha(): number;

    /**
     * Returns the hexadecimal representation.
     */
    toHexString(): string;

    /**
     * Returns a CSS string like "rgba(255, 255, 255, 0.4)".
     */
    toRgbaString(): string;

    /**
     * The color distance (0.0 - 1.0) of the way between this color and othercolor.
     */
    transition(othercolor: JQueryColor, distance: number): JQueryColor;

    /**
     * Checks if two colors are equal.
     */
    is(otherColor: JQueryColor): boolean;

    /**
     * Returns the red component of the color (integer from 0 - 255).
     */
    red(): number;

    /**
     * Returns the green component of the color (integer from 0 - 255).
     */
    green(): number;

    /**
     * Returns the blue component of the color (integer from 0 - 255).
     */
    blue(): number;
}

interface HslaColor {
    hue?: number;
    saturation?: number;
    lightness?: number;
    alpha?: number;
}

interface RgbaColor {
    red?: number;
    green?: number;
    blue?: number;
    alpha?: number;
}

interface JQueryStatic {
    Color(color: HslaColor): JQueryColor;
    Color(color: RgbaColor): JQueryColor;
    Color(color: string): JQueryColor;
}
