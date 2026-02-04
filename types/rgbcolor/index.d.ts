/**
 * RGB color parser that handles various color formats.
 *
 * @example
 * ```javascript
 * var color = new RGBColor('red');
 * if (color.ok) {
 *     console.log(color.toHex()); // '#ff0000'
 * }
 * ```
 */
declare class RGBColor {
    /**
     * Creates a new RGBColor instance by parsing a color string.
     * @param colorString - A color string in various formats:
     *   - Named colors: 'red', 'blue', 'green', etc.
     *   - Hex: '#ff0000', 'ff0000', '#f00', 'f00'
     *   - RGB: 'rgb(255, 0, 0)'
     *   - RGBA: 'rgba(255, 0, 0, 0.5)'
     */
    constructor(colorString: string);

    /** Whether the color was parsed successfully */
    ok: boolean;

    /** Red component (0-255) */
    r: number;

    /** Green component (0-255) */
    g: number;

    /** Blue component (0-255) */
    b: number;

    /** Alpha component (0-1) */
    alpha: number;

    /** Returns the color as an RGB string, e.g. 'rgb(255, 0, 0)' */
    toRGB(): string;

    /** Returns the color as an RGBA string, e.g. 'rgba(255, 0, 0, 0.5)' */
    toRGBA(): string;

    /** Returns the color as a hex string, e.g. '#ff0000' */
    toHex(): string;

    /** Returns an HTML element with color examples (browser only) */
    getHelpXML(): HTMLElement;
}

export = RGBColor;
