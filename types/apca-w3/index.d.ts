/**
 * @param txtY
 * The linear Y (luminance) of the text color. Must be between 0.0-1.1.
 *
 * @param bgY
 * The linear Y (luminance) of the background color. Must be between 0.0-1.1.
 *
 * @param [places]
 * Number of places to round the value to. Defaults to -1, returning a signed
 * float. When set to 0 or more, rounds the result to that many decimal places.
 *
 * @returns Lc (lightness contrast) as a numeric value within ± 127
 */
export function APCAcontrast(txtY: number, bgY: number, places?: number): number | string;

/**
 * @param [rgb]
 * A tuple of numbers representing the red, green, and blue components (0-255)
 * of a color
 *
 * @returns
 * The linear Y (luminance) of the given rgba color (+0.0-1.1)
 */
export function sRGBtoY(rgb: [r: number, g: number, b: number]): number;

/**
 * @param [rgb]
 * A tuple of numbers representing the red, green, and blue components (0.0-1.0)
 * of a color in the p3 display color space
 *
 * @returns
 * The linear Y (luminance) of the given rgba color (+0.0-1.1)
 */
export function displayP3toY(rgb: [r: number, g: number, b: number]): number;

/**
 * @param [rgb]
 * A tuple of numbers representing the red, green, and blue components (0-255)
 * of a color
 *
 * @returns
 * The linear Y (luminance) of the given rgba color (+0.0-1.1)
 */
export function adobeRGBtoY(rgb?: [r: number, g: number, b: number]): number;

/**
 * @param [rgbaFG]
 * The foreground color expressed as a tuple of red, green, blue, and alpha
 * components. r, g, and b are expressed as 0-255, a is expressed as 0.0-1.0.
 * Defaults to `[0, 0, 0, 1.0]`.
 *
 * @param [rgbBG]
 * The background color expressed as a tuple of red, green, and blue components
 * (0-255).
 * Defaults to `[0, 0, 0]`.
 *
 * @param [isInt]
 * When true, alpha colors are parsed as a value between 0-255.
 * When false, alpha colors are parsed as a value between 0.0-1.0.
 * Defaults to `true`.
 */
export function alphaBlend(
    rgbaFG?: [r: number, g: number, b: number, a: number],
    rgbBG?: [r: number, g: number, b: number],
    isInt?: boolean,
): [r: number, g: number, b: number];

/**
 * Calculate the APCA contrast for named or hex colors.
 * Requires the `colorparsley` module.
 *
 * @param textColor
 * The text color as a string, hexadecimal integer, or array of rgb(a)
 * components.
 *
 * @param bgColor
 * The background color as a string, hexadecimal integer, or array of rgb
 * components.
 *
 * @param [places]
 * Number of places to round the value to. Defaults to -1, returning a signed
 * float. When set to 0 or more, rounds the result to that many decimal places.
 *
 * @param [isInt]
 * When true, alpha colors are parsed as a value between 0-255.
 * When false, alpha colors are parsed as a value between 0.0-1.0.
 * Defaults to `true`.
 *
 * @returns Lc (lightness contrast) as a numeric value within ± 127
 */
export function calcAPCA(
    textColor: number | string | [r: number, g: number, b: number, a?: number],
    bgColor: number | string | [r: number, g: number, b: number],
    places?: number,
    isInt?: boolean,
): number | string;

/**
 * Computes the inverse APCA contrast based on a known luminance.
 *
 * @param [contrast=0]
 * The target contrast value.
 *
 * @param [knownY=1.0]
 * The known luminance of either the text or the background.
 *
 * @param [knownType='bg']
 * Specifies whether the known luminance is for the text ('txt' or 'text')
 * or the background ('bg' or 'background').
 *
 * @param [returnAs='hex']
 * The format in which the result will be returned. Options include:
 * - 'hex' for a hexadecimal color value
 * - 'color' for a color array
 * - 'Y' or 'y' for luminance value
 *
 * @returns
 * The calculated inverse APCA contrast in the format specified by the `returnAs` parameter.
 * Returns `false` if an error is encountered or if the calculations exceed valid bounds.
 *
 * @deprecated
 * This method will be deprecated soon.
 */
export declare function reverseAPCA(
    contrast?: number,
    knownY?: number,
    knownType?: 'bg' | 'background' | 'txt' | 'text',
    returnAs?: 'hex' | 'color' | 'Y' | 'y'
): string | number | [number, number, number, number, string] | false;

/**
 * Lookup function for APCA contrast font values based on the specified contrast value.
 *
 * @param contrast
 * The APCA contrast value to be looked up.
 *
 * @param [places=2]
 * Number of decimal places to round the contrast to.
 *
 * @returns
 * An array where the first element is the rounded contrast value
 * and the subsequent elements represent interpolated font values based on the
 * provided contrast.
 */
export function fontLookupAPCA(contrast: number, places?: number): number[]
