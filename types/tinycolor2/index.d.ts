// Type definitions for tinycolor v1.4.1
// Project: https://github.com/bgrins/TinyColor
// Definitions by: Mordechai Zuber <https://github.com/M-Zuber>, Geert Jansen <https://github.com/geertjansen>, Niels van Hoorn <https://github.com/nvh>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare var tinycolor: tinycolor;

interface tinycolor {

    /**
     * Create a tinycolor instance of the color named.
     *
     * @param color - the color as a string to create an instance for.
     */
    (color: string): tinycolorInstance;

    /**
     * Create a tinycolor instance with the given RGB values.
     *
     * @param color - the rgb values to apply to the new instance.
     */
    (color: ColorFormats.RGB): tinycolorInstance;

    /**
     * Create a tinycolor instance with the given RGBA values.
     *
     * @param color - the rgba values to apply to the new instance.
     */
    (color: ColorFormats.RGBA): tinycolorInstance;

    /**
     * Create a tinycolor instance with the given HSL values.
     *
     * @param color - the hsl values to apply to the new instance.
     */
    (color: ColorFormats.HSL): tinycolorInstance;

    /**
     * Create a tinycolor instance with the given HSLA values.
     *
     * @param color - the hsla values to apply to the new instance.
     */
    (color: ColorFormats.HSLA): tinycolorInstance;

    /**
     * Create a tinycolor instance with the given HSV values.
     *
     * @param color - the hsv values to apply to the new instance.
     */
    (color: ColorFormats.HSV): tinycolorInstance;

    /**
     * Create a tinycolor instance with the given HSVA values.
     *
     * @param color - the hsva values to apply to the new instance.
     */
    (color: ColorFormats.HSVA): tinycolorInstance;

    /**
     * Create a tinycolor instance based off the relative values.
     * Works with any color formats
     *
     * @param ratio - the relative color/hue values to apply to the new instance.
     */
    fromRatio(ratio: any): tinycolorInstance; // any of the interfaces defined in the ColorFormats module.

    /**
     * Compares the two colors and returns the difference between their brightness and color/hue
     *
     * @param firstColor - the first color to be used in the comparison.
     * @param secondColor - the second color to be used in the comparison.
     */
    readability(firstColor: ColorInput, secondColor: ColorInput): Readable.Readable;

    /**
     * Ensure that foreground and background color combinations meet WCAG2 guidelines.
     *
     * @param foreColor - the fore color wanted.
     * @param backColor - the back color wanted.
	 * @param wcag2 - The 'level' property states 'AA' or 'AAA' - if missing or invalid, it defaults to 'AA'; the 'size' property states 'large' or 'small' - if missing or invalid, it defaults to 'small'. If the entire object is absent, isReadable defaults to {level:"AA",size:"small"}.
     */
    isReadable(foreColor: ColorInput, backColor: ColorInput, wcag2?: {level?: string, size?: string}): boolean;

    /**
     * Given a base color and a list of possible foreground or background colors for that base,
     *  returns the most readable color. Optionally returns Black or White if the most readable color is unreadable.
     *
     * @param color - the base color.
     * @param colorsToCompare - array of colors to pick the most readable one from.
	 * @param args - and object with extra arguments
     */
    mostReadable(color: ColorInput, colorsToCompare: ColorInput[], args?: {includeFallbackColors?: boolean, level?: string, size?: string}): tinycolorInstance;

    /**/
    mix(color1: ColorInput, color2: ColorInput, amount?: number): tinycolorInstance;

    /**
     * Can be called with any tinycolor input
     */
    equals(color1: ColorInput, color2: ColorInput): boolean;

    /**
     * Returns a random color
     */
    random(): tinycolorInstance;

    /**
     * key: hex value
     * value: string name ex. hexnames["f00"] --> "red"
     */
    hexNames: { [key: string]: string };

    /**
     * key: 'real' color name
     * value: hex value ex. names["red"] --> "f00"
     */
    names: { [key: string]: string };
}

interface tinycolorInstance {

    /**
     * Return an indication whether the color was successfully parsed.
     */
    isValid(): boolean;

    /**
     * Return an indication whether the color's perceived brightness is light.
     */
    isLight(): boolean;

    /**
     * Return an indication whether the color's perceived brightness is dark.
     */
    isDark(): boolean;

    /**
     * Returns the format used to create the tinycolor instance.
     */
    getFormat(): string;

    /**
     * Returns the input passed into the constructer used to create the tinycolor instance.
     */
    getOriginalInput(): any; // any of the interfaces in ColorFormats or a string

    /**
     * Returns the alpha value of the color
     */
    getAlpha(): number;

    /**
     * Returns the perceived brightness of the color, from 0-255.
     */
    getBrightness(): number;

    /**
     * Returns the perceived luminance of a color, from 0-1.
     */
    getLuminance(): number;

    /**
     * Sets the alpha value on the current color.
     *
     * @param alpha - The new alpha value. The accepted range is 0-1.
     */
    setAlpha(alpha: number): tinycolorInstance;

    /**
     * Returns the object as a HSVA object.
     */
    toHsv(): ColorFormats.HSVA;

    /**
     * Returns the hsva values interpolated into a string with the following format:
     * "hsva(xxx, xxx, xxx, xx)".
     */
    toHsvString(): string;

    /**
     * Returns the object as a HSLA object.
     */
    toHsl(): ColorFormats.HSLA;

    /**
     * Returns the hsla values interpolated into a string with the following format:
     * "hsla(xxx, xxx, xxx, xx)".
     */
    toHslString(): string;

    /**
     * Returns the hex value of the color.
     */
    toHex(): string;

    /**
     * Returns the hex value of the color -with a # appened.
     */
    toHexString(): string;

    /**
     * Returns the hex 8 value of the color.
     */
    toHex8(): string;

    /**
     * Returns the hex 8  value of the color -with a # appened.
     */
    toHex8String(): string;

    /**
     * Returns the object as a RGBA object.
     */
    toRgb(): ColorFormats.RGBA;

     /**
     * Returns the RGBA values interpolated into a string with the following format:
     * "RGBA(xxx, xxx, xxx, xx)".
     */
    toRgbString(): string;

    /**
     * Returns the object as a RGBA object.
     */
    toPercentageRgb(): ColorFormats.RGBA;

    /**
     * Returns the RGBA relative values interpolated into a string with the following format:
     * "RGBA(xxx, xxx, xxx, xx)".
     */
    toPercentageRgbString(): string;

    /**
     * The 'real' name of the color -if there is one.
     */
    toName(): string;

    /**
     * Returns the color represented as a Microsoft filter for use in old versions of IE.
     */
    toFilter(): string;

    /**
     * String representation of the color.
     *
     * @param format - The format to be used when displaying the string representation.
     *  The accepted values are: "rgb", "prgb", "hex6", "hex3", "hex8", "name", "hsl", "hsv".
     */
    toString(format?: string): string;

    /**
     * Lighten the color a given amount. Providing 100 will always return white.
     *
     * @param amount - The amount to lighten by. The valid range is 0 to 100.
     *  Default value: 10.
     */
    lighten(amount?: number): tinycolorInstance;

    /**
     * Brighten the color a given amount.
     *
     * @param amount - The amount to brighten by. The valid range is 0 to 100.
     *  Default value: 10.
     */
    brighten(amount?: number): tinycolorInstance;

    /**
     * Darken the color a given amount.
     *  Providing 100 will always return black.
     *
     * @param amount - The amount to darken by. The valid range is 0 to 100.
     *  Default value: 10.
     */
    darken(amount?: number): tinycolorInstance;
    /**
     * Desaturate the color a given amount.
     *  Providing 100 will is the same as calling greyscale.
     *
     * @param amount - The amount to desaturate by. The valid range is 0 to 100.
     *  Default value: 10.
     */
    desaturate(amount?: number): tinycolorInstance;

    /**
     * Saturate the color a given amount.
     *
     * @param amount - The amount to saturate by. The valid range is 0  to 100.
     *  Default value: 10.
     */
    saturate(amount?: number): tinycolorInstance;

    /**
     * Completely desaturates a color into greyscale.
     * Same as calling desaturate(100).
     */
    greyscale(): tinycolorInstance;

    /**
     * Spin the hue a given amount. Calling with 0, 360, or -360 will do nothing.
     *
     * @param amount - The amount to spin by. The valid range is -360 to 360.
     *  Default value: 0.
     */
    spin(amount?: number): tinycolorInstance;

    /**
     * Gets an analogous color scheme based off of the current color.
     *
     * @param results - The amount of results to return.
     *  Default value: 6.
     * @param slices - The amount to slice the input color by.
     *  Default value: 30.
     */
    analogous(results?: number, slices?: number): tinycolorInstance[];

    /**
     * Gets a monochromatic color scheme based off of the current color.
     *
     * @param results - The amount of results to return.
     *  Default value: 6.
     */
    monochromatic(results?: number): tinycolorInstance[];

    /**
     * Gets a split complement color scheme based off of the current color.
     */
    splitcomplement(): tinycolorInstance[];

    /**
     * Gets a triad based off of the current color.
     */
    triad(): tinycolorInstance[];

    /**
     * Gets a tetrad based off of the current color.
     */
    tetrad(): tinycolorInstance[];

    /**
     * Gets the complement of the current color
     */
    complement(): tinycolorInstance;

    /**
     * Gets a new instance with the current color
     */
    clone(): tinycolorInstance;
}

declare namespace Readable {
    interface Readable {
        brightness: number;
        color: number;
    }
}

declare namespace ColorFormats {
    interface RGB {
        r: number;
        g: number;
        b: number;
    }

    interface RGBA extends RGB {
        a: number
    }

    interface HSL {
        h: number;
        s: number;
        l: number;
    }

    interface HSLA extends HSL {
        a: number;
    }

    interface HSV {
        h: number;
        s: number;
        v: number;
    }

    interface HSVA extends HSV {
        a: number;
    }
}

type ColorInput = string | ColorFormats.RGB | ColorFormats.RGBA | ColorFormats.HSL | ColorFormats.HSLA | ColorFormats.HSV | ColorFormats.HSVA | tinycolorInstance

declare module 'tinycolor2' {
    export = tinycolor;
}