import { ColorSpace } from '../constants';
import { Matrix3 } from './Matrix3';
import { Vector3 } from './Vector3';

import { BufferAttribute } from '../core/BufferAttribute';
import { InterleavedBufferAttribute } from '../core/InterleavedBufferAttribute';

export { SRGBToLinear } from './ColorManagement';

declare const _colorKeywords: {
    aliceblue: 0xf0f8ff;
    antiquewhite: 0xfaebd7;
    aqua: 0x00ffff;
    aquamarine: 0x7fffd4;
    azure: 0xf0ffff;
    beige: 0xf5f5dc;
    bisque: 0xffe4c4;
    black: 0x000000;
    blanchedalmond: 0xffebcd;
    blue: 0x0000ff;
    blueviolet: 0x8a2be2;
    brown: 0xa52a2a;
    burlywood: 0xdeb887;
    cadetblue: 0x5f9ea0;
    chartreuse: 0x7fff00;
    chocolate: 0xd2691e;
    coral: 0xff7f50;
    cornflowerblue: 0x6495ed;
    cornsilk: 0xfff8dc;
    crimson: 0xdc143c;
    cyan: 0x00ffff;
    darkblue: 0x00008b;
    darkcyan: 0x008b8b;
    darkgoldenrod: 0xb8860b;
    darkgray: 0xa9a9a9;
    darkgreen: 0x006400;
    darkgrey: 0xa9a9a9;
    darkkhaki: 0xbdb76b;
    darkmagenta: 0x8b008b;
    darkolivegreen: 0x556b2f;
    darkorange: 0xff8c00;
    darkorchid: 0x9932cc;
    darkred: 0x8b0000;
    darksalmon: 0xe9967a;
    darkseagreen: 0x8fbc8f;
    darkslateblue: 0x483d8b;
    darkslategray: 0x2f4f4f;
    darkslategrey: 0x2f4f4f;
    darkturquoise: 0x00ced1;
    darkviolet: 0x9400d3;
    deeppink: 0xff1493;
    deepskyblue: 0x00bfff;
    dimgray: 0x696969;
    dimgrey: 0x696969;
    dodgerblue: 0x1e90ff;
    firebrick: 0xb22222;
    floralwhite: 0xfffaf0;
    forestgreen: 0x228b22;
    fuchsia: 0xff00ff;
    gainsboro: 0xdcdcdc;
    ghostwhite: 0xf8f8ff;
    gold: 0xffd700;
    goldenrod: 0xdaa520;
    gray: 0x808080;
    green: 0x008000;
    greenyellow: 0xadff2f;
    grey: 0x808080;
    honeydew: 0xf0fff0;
    hotpink: 0xff69b4;
    indianred: 0xcd5c5c;
    indigo: 0x4b0082;
    ivory: 0xfffff0;
    khaki: 0xf0e68c;
    lavender: 0xe6e6fa;
    lavenderblush: 0xfff0f5;
    lawngreen: 0x7cfc00;
    lemonchiffon: 0xfffacd;
    lightblue: 0xadd8e6;
    lightcoral: 0xf08080;
    lightcyan: 0xe0ffff;
    lightgoldenrodyellow: 0xfafad2;
    lightgray: 0xd3d3d3;
    lightgreen: 0x90ee90;
    lightgrey: 0xd3d3d3;
    lightpink: 0xffb6c1;
    lightsalmon: 0xffa07a;
    lightseagreen: 0x20b2aa;
    lightskyblue: 0x87cefa;
    lightslategray: 0x778899;
    lightslategrey: 0x778899;
    lightsteelblue: 0xb0c4de;
    lightyellow: 0xffffe0;
    lime: 0x00ff00;
    limegreen: 0x32cd32;
    linen: 0xfaf0e6;
    magenta: 0xff00ff;
    maroon: 0x800000;
    mediumaquamarine: 0x66cdaa;
    mediumblue: 0x0000cd;
    mediumorchid: 0xba55d3;
    mediumpurple: 0x9370db;
    mediumseagreen: 0x3cb371;
    mediumslateblue: 0x7b68ee;
    mediumspringgreen: 0x00fa9a;
    mediumturquoise: 0x48d1cc;
    mediumvioletred: 0xc71585;
    midnightblue: 0x191970;
    mintcream: 0xf5fffa;
    mistyrose: 0xffe4e1;
    moccasin: 0xffe4b5;
    navajowhite: 0xffdead;
    navy: 0x000080;
    oldlace: 0xfdf5e6;
    olive: 0x808000;
    olivedrab: 0x6b8e23;
    orange: 0xffa500;
    orangered: 0xff4500;
    orchid: 0xda70d6;
    palegoldenrod: 0xeee8aa;
    palegreen: 0x98fb98;
    paleturquoise: 0xafeeee;
    palevioletred: 0xdb7093;
    papayawhip: 0xffefd5;
    peachpuff: 0xffdab9;
    peru: 0xcd853f;
    pink: 0xffc0cb;
    plum: 0xdda0dd;
    powderblue: 0xb0e0e6;
    purple: 0x800080;
    rebeccapurple: 0x663399;
    red: 0xff0000;
    rosybrown: 0xbc8f8f;
    royalblue: 0x4169e1;
    saddlebrown: 0x8b4513;
    salmon: 0xfa8072;
    sandybrown: 0xf4a460;
    seagreen: 0x2e8b57;
    seashell: 0xfff5ee;
    sienna: 0xa0522d;
    silver: 0xc0c0c0;
    skyblue: 0x87ceeb;
    slateblue: 0x6a5acd;
    slategray: 0x708090;
    slategrey: 0x708090;
    snow: 0xfffafa;
    springgreen: 0x00ff7f;
    steelblue: 0x4682b4;
    tan: 0xd2b48c;
    teal: 0x008080;
    thistle: 0xd8bfd8;
    tomato: 0xff6347;
    turquoise: 0x40e0d0;
    violet: 0xee82ee;
    wheat: 0xf5deb3;
    white: 0xffffff;
    whitesmoke: 0xf5f5f5;
    yellow: 0xffff00;
    yellowgreen: 0x9acd32;
};

export type ColorRepresentation = Color | string | number;

export interface HSL {
    h: number;
    s: number;
    l: number;
}

export interface RGB {
    r: number;
    g: number;
    b: number;
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

    /**
     * Sets this color's {@link r}, {@link g} and {@link b} components from the x, y, and z components of the specified
     * {@link Vector3 | vector}.
     */
    setFromVector3(vector: Vector3): this;

    setScalar(scalar: number): Color;
    setHex(hex: number, colorSpace?: ColorSpace): Color;

    /**
     * Sets this color from RGB values.
     * @param r Red channel value between 0 and 1.
     * @param g Green channel value between 0 and 1.
     * @param b Blue channel value between 0 and 1.
     */
    setRGB(r: number, g: number, b: number, colorSpace?: ColorSpace): Color;

    /**
     * Sets this color from HSL values.
     * Based on MochiKit implementation by Bob Ippolito.
     *
     * @param h Hue channel value between 0 and 1.
     * @param s Saturation value channel between 0 and 1.
     * @param l Value channel value between 0 and 1.
     */
    setHSL(h: number, s: number, l: number, colorSpace?: ColorSpace): Color;

    /**
     * Sets this color from a CSS context style string.
     * @param contextStyle Color in CSS context style format.
     */
    setStyle(style: string, colorSpace?: ColorSpace): Color;

    /**
     * Sets this color from a color name.
     * Faster than {@link Color#setStyle .setStyle()} method if you don't need the other CSS-style formats.
     * @param style Color name in X11 format.
     */
    setColorName(style: string, colorSpace?: ColorSpace): Color;

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
    getHex(colorSpace?: ColorSpace): number;

    /**
     * Returns the string formated hexadecimal value of this color.
     */
    getHexString(colorSpace?: ColorSpace): string;

    getHSL(target: HSL, colorSpace?: ColorSpace): HSL;

    getRGB(target: RGB, colorSpace?: ColorSpace): RGB;

    /**
     * Returns the value of this color in CSS context style.
     * Example: rgb(r, g, b)
     */
    getStyle(colorSpace?: ColorSpace): string;

    offsetHSL(h: number, s: number, l: number): this;

    add(color: Color): this;
    addColors(color1: Color, color2: Color): this;
    addScalar(s: number): this;

    /**
     * Applies the transform {@link Matrix3 | m} to this color's RGB components.
     */
    applyMatrix3(m: Matrix3): this;

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

    /**
     * This method defines the serialization result of Color.
     * @return The color as a hexadecimal value.
     */
    toJSON(): number;

    fromBufferAttribute(attribute: BufferAttribute | InterleavedBufferAttribute, index: number): this;

    [Symbol.iterator](): Generator<number, void>;

    /**
     * List of X11 color names.
     */
    static NAMES: typeof _colorKeywords;
}
