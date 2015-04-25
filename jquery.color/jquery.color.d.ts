// Type definitions for jquery.color.js v2.1.2
// Project: https://github.com/jquery/jquery-color
// Definitions by: Derek Cicerone <https://github.com/derekcicerone/>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

/// <reference path="../jquery/jquery.d.ts"/>

interface JQueryColor {
    /**
     * Returns the red component of the color (integer from 0 - 255).
     */
    red(): number;

    /**
     * Returns a copy of the color object with the red set to val.
     */
    red(val: number): JQueryColor;

    /**
     * Returns a copy of the color object with the red set to val.
     */
    red(val: string): JQueryColor;

    /**
     * Returns the green component of the color (integer from 0 - 255).
     */
    green(): number;

    /**
     * Returns a copy of the color object with the green set to val.
     */
    green(val: number): JQueryColor;

    /**
     * Returns a copy of the color object with the green set to val.
     */
    green(val: string): JQueryColor;

    /**
     * Returns the blue component of the color (integer from 0 - 255).
     */
    blue(): number;

    /**
     * Returns a copy of the color object with the blue set to val.
     */
    blue(val: number): JQueryColor;
    
    /**
     * Returns a copy of the color object with the blue set to val.
     */
    blue(val: string): JQueryColor;

    /**
     * Returns the alpha value of this color (float from 0.0 - 1.0).
     */
    alpha(): number;

    /**
     * Returns a copy of the color object with the alpha set to val.
     */
    alpha(val: number): JQueryColor;

    /**
     * Returns a copy of the color object with the alpha set to val.
     */
    alpha(val: string): JQueryColor;

    /**
     * Returns the hue component of the color (integer from 0 - 359).
     */
    hue(): number;

    /**
     * Returns a copy of the color object with the hue set to val.
     */
    hue(val: number): JQueryColor;

    /**
     * Returns a copy of the color object with the hue set to val.
     */
    hue(val: string): JQueryColor;

    /**
     * Returns the saturation component of the color (float from 0.0 - 1.0).
     */
    saturation(): number;

    /**
     * Returns a copy of the color object with the saturation set to val.
     */
    saturation(val: number): JQueryColor;

    /**
     * Returns a copy of the color object with the saturation set to val.
     */
    saturation(val: string): JQueryColor;

    /**
     * Returns the lightness component of the color (float from 0.0 - 1.0).
     */
    lightness(): number;

    /**
     * Returns a copy of the color object with the lightness set to val.
     */
    lightness(val: number): JQueryColor;

    /**
     * Returns a copy of the color object with the lightness set to val.
     */
    lightness(val: string): JQueryColor;

    /**
     * Returns a rgba "tuple" [ red, green, blue, alpha ].
     */
    rgba(): number[];

    /**
     * Returns a copy of the color with any defined values set to the new value.
     */
    rgba(red: number, green: number, blue: number, alpha?: number): JQueryColor;

    /**
     * Returns a copy of the color with any defined values set to the new value.
     */
    rgba(val: RgbaColor): JQueryColor;

    /**
     * Returns a copy of the color with any defined values set to the new value.
     */
    rgba(vals: number[]): JQueryColor;

    /**
     * Returns a HSL tuple [ hue, saturation, lightness, alpha ].
     */
    hsla(): number[];

    /**
     * Returns a copy of the color with any defined values set to the new value.
     */
    hsla(hue: number, saturation: number, lightness: number, alpha?: number): JQueryColor;

    /**
     * Returns a copy of the color with any defined values set to the new value.
     */
    hsla(val: HslaColor): JQueryColor;

    /**
     * Returns a copy of the color with any defined values set to the new value.
     */
    hsla(vals: number[]): JQueryColor;

    /**
     * Returns a CSS string "rgba(255, 255, 255, 0.4)".
     */
    toRgbaString(): string;

    /**
     * Returns a css string "hsla(330, 75%, 25%, 0.4)".
     */
    toHslaString(): string;

    /**
     * Returns a css string "#abcdef", with "includeAlpha" uses "#rrggbbaa" (alpha *= 255).
     */
    toHexString(includeAlpha?: boolean): string;

    /**
     * The color distance (0.0 - 1.0) of the way between this color and othercolor.
     */
    transition(othercolor: JQueryColor, distance: number): JQueryColor;

    /**
     * Will apply this color on top of the other color using alpha blending.
     */
    blend(othercolor: JQueryColor): void;

    /**
     * Checks if two colors are equal.
     */
    is(otherColor: JQueryColor): boolean;
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
