import { ColorRepresentation } from '../utils';
import { BufferAttribute } from './../core/BufferAttribute';

export interface HSL {
    h: number;
    s: number;
    l: number;
}

/**
 * Represents a color. See also {@link ColorUtils}.
 *
 * see {@link https://github.com/mrdoob/three.js/blob/master/src/math/Color.js|src/math/Color.js}
 *
 * @example
 * const color = new THREE.Color( 0xff0000 );
 */
export class Color {
    constructor(color?: ColorRepresentation);
    constructor(r: number, g: number, b: number);

    readonly isColor: true;

    /**
     * Red channel value between 0 and 1. Default is 1.
     * @default 1
     */
    r: number;

    /**
     * Green channel value between 0 and 1. Default is 1.
     * @default 1
     */
    g: number;

    /**
     * Blue channel value between 0 and 1. Default is 1.
     * @default 1
     */
    b: number;

    set(color: ColorRepresentation): Color;
    setScalar(scalar: number): Color;
    setHex(hex: number): Color;

    /**
     * Sets this color from RGB values.
     * @param r Red channel value between 0 and 1.
     * @param g Green channel value between 0 and 1.
     * @param b Blue channel value between 0 and 1.
     */
    setRGB(r: number, g: number, b: number): Color;

    /**
     * Sets this color from HSL values.
     * Based on MochiKit implementation by Bob Ippolito.
     *
     * @param h Hue channel value between 0 and 1.
     * @param s Saturation value channel between 0 and 1.
     * @param l Value channel value between 0 and 1.
     */
    setHSL(h: number, s: number, l: number): Color;

    /**
     * Sets this color from a CSS context style string.
     * @param contextStyle Color in CSS context style format.
     */
    setStyle(style: string): Color;

    /**
     * Sets this color from a color name.
     * Faster than {@link Color#setStyle .setStyle()} method if you don't need the other CSS-style formats.
     * @param style Color name in X11 format.
     */
    setColorName(style: string): Color;

    /**
     * Clones this color.
     */
    clone(): this;

    /**
     * Copies given color.
     * @param color Color to copy.
     */
    copy(color: Color): this;

    /**
     * Copies given color making conversion from gamma to linear space.
     * @param color Color to copy.
     */
    copyGammaToLinear(color: Color, gammaFactor?: number): Color;

    /**
     * Copies given color making conversion from linear to gamma space.
     * @param color Color to copy.
     */
    copyLinearToGamma(color: Color, gammaFactor?: number): Color;

    /**
     * Converts this color from gamma to linear space.
     */
    convertGammaToLinear(gammaFactor?: number): Color;

    /**
     * Converts this color from linear to gamma space.
     */
    convertLinearToGamma(gammaFactor?: number): Color;

    /**
     * Copies given color making conversion from sRGB to linear space.
     * @param color Color to copy.
     */
    copySRGBToLinear(color: Color): Color;

    /**
     * Copies given color making conversion from linear to sRGB space.
     * @param color Color to copy.
     */
    copyLinearToSRGB(color: Color): Color;

    /**
     * Converts this color from sRGB to linear space.
     */
    convertSRGBToLinear(): Color;

    /**
     * Converts this color from linear to sRGB space.
     */
    convertLinearToSRGB(): Color;

    /**
     * Returns the hexadecimal value of this color.
     */
    getHex(): number;

    /**
     * Returns the string formated hexadecimal value of this color.
     */
    getHexString(): string;

    getHSL(target: HSL): HSL;

    /**
     * Returns the value of this color in CSS context style.
     * Example: rgb(r, g, b)
     */
    getStyle(): string;

    offsetHSL(h: number, s: number, l: number): this;

    add(color: Color): this;
    addColors(color1: Color, color2: Color): this;
    addScalar(s: number): this;
    sub(color: Color): this;
    multiply(color: Color): this;
    multiplyScalar(s: number): this;
    lerp(color: Color, alpha: number): this;
    lerpColors(color1: Color, color2: Color, alpha: number): this;
    lerpHSL(color: Color, alpha: number): this;
    equals(color: Color): boolean;

    /**
     * Sets this color's red, green and blue value from the provided array or array-like.
     * @param array the source array or array-like.
     * @param offset (optional) offset into the array-like. Default is 0.
     */
    fromArray(array: number[] | ArrayLike<number>, offset?: number): this;

    /**
     * Returns an array [red, green, blue], or copies red, green and blue into the provided array.
     * @param array (optional) array to store the color to. If this is not provided, a new array will be created.
     * @param offset (optional) optional offset into the array.
     * @return The created or provided array.
     */
    toArray(array?: number[], offset?: number): number[];

    /**
     * Copies red, green and blue into the provided array-like.
     * @param array array-like to store the color to.
     * @param offset (optional) optional offset into the array-like.
     * @return The provided array-like.
     */
    toArray(xyz: ArrayLike<number>, offset?: number): ArrayLike<number>;

    fromBufferAttribute(attribute: BufferAttribute, index: number): this;

    /**
     * List of X11 color names.
     */
    static NAMES: Record<string, number>;
}
