/**
 * Returns channels values as they are in the input color string argument.
 * `alpha` is always from 0..1 range.
 * `color` can be a CSS color string,
 * an array with channel values, an object etc.,
 */
declare function rgba(string: ColorValue): [number, number, number, number] | undefined;

type ColorValue = string | RGBTuple | RGBColor | RGBKeyedColor | HSL;

type RGBTuple = [number, number, number];

interface RGBColor {
    r: number;
    g: number;
    b: number;
}

interface RGBKeyedColor {
    red: number;
    green: number;
    blue: number;
}

interface HSL {
    h: number;
    s: number;
    l: number;
}

/**
 * Color string parser
 */
export = rgba;
