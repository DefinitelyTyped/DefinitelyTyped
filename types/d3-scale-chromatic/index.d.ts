// Type definitions for D3JS d3-scale-chromatic module 1.0
// Project: https://github.com/d3/d3-scale-chromatic/
// Definitions by: Hugues Stefanski <https://github.com/Ledragon>,
//                 Alex Ford <https://github.com/gustavderdrache>,
//                 Boris Yankov <https://github.com/borisyankov>,
//                 Henrique Machado <https://github.com/henriquefm>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

// Last module patch version validated against: 1.0.2

// -----------------------------------------------------------------------
// Categorical
// -----------------------------------------------------------------------
/**
 * An array of eight categorical colors represented as RGB hexadecimal strings.
 */
export const schemeAccent: string[];
/**
 * An array of eight categorical colors represented as RGB hexadecimal strings.
 */
export const schemeDark2: string[];
/**
 * An array of twelve categorical colors represented as RGB hexadecimal strings.
 */
export const schemePaired: string[];
/**
 * An array of nine categorical colors represented as RGB hexadecimal strings.
 */
export const schemePastel1: string[];
/**
 * An array of eight categorical colors represented as RGB hexadecimal strings.
 */
export const schemePastel2: string[];
/**
 * An array of nine categorical colors represented as RGB hexadecimal strings.
 */
export const schemeSet1: string[];
/**
 * An array of eight categorical colors represented as RGB hexadecimal strings.
 */
export const schemeSet2: string[];
/**
 * An array of twelve categorical colors represented as RGB hexadecimal strings.
 */
export const schemeSet3: string[];

// -----------------------------------------------------------------------
// Diverging
// -----------------------------------------------------------------------
/**
 * Diverging color schemes are available as continuous interpolators (often used with d3.scaleSequential) and as discrete schemes
 *  (often used with d3.scaleOrdinal). Each discrete scheme, such as d3.schemeBrBG, is represented as an array of arrays of hexadecimal
 *  color strings. The kth element of this array contains the color scheme of size k; for example, d3.schemeBrBG[9] contains an array
 *  of nine strings representing the nine colors of the brown-blue-green diverging color scheme. Diverging color schemes support
 *  a size k ranging from 3 to 11.
 *
 * Given a number value in the range [0,1], returns the corresponding color from the “BrBG” diverging color scheme represented as an RGB string.
 *
 * @param value Number in the range [0, 1].
 */
export function interpolateBrBG(value: number): string;

export const schemeBrBG: string[][];

/**
 * Given a number t in the range [0,1], returns the corresponding color from the “PRGn” diverging color scheme represented as an RGB string.
 *
 * @param value Number in the range [0, 1].
 */
export function interpolatePRGn(value: number): string;

export const schemePRGn: string[][];

/**
 * Given a number t in the range [0,1], returns the corresponding color from the “PiYG” diverging color scheme represented as an RGB string.
 *
 * @param value Number in the range [0, 1].
 */
export function interpolatePiYG(value: number): string;

export const schemePiYG: string[][];

/**
 * Given a number t in the range [0,1], returns the corresponding color from the “PuOr” diverging color scheme represented as an RGB string.
 *
 * @param value Number in the range [0, 1].
 */
export function interpolatePuOr(value: number): string;

export const schemePuOr: string[][];

/**
 * Given a number t in the range [0,1], returns the corresponding color from the “RdBu” diverging color scheme represented as an RGB string.
 *
 * @param value Number in the range [0, 1].
 */
export function interpolateRdBu(value: number): string;

export const schemeRdBu: string[][];

/**
 * Given a number t in the range [0,1], returns the corresponding color from the “RdGy” diverging color scheme represented as an RGB string.
 *
 * @param value Number in the range [0, 1].
 */
export function interpolateRdGy(value: number): string;

export const schemeRdGy: string[][];

/**
 * Given a number t in the range [0,1], returns the corresponding color from the “RdYlBu” diverging color scheme represented as an RGB string.
 *
 * @param value Number in the range [0, 1].
 */
export function interpolateRdYlBu(value: number): string;

export const schemeRdYlBu: string[][];

/**
 * Given a number t in the range [0,1], returns the corresponding color from the “RdYlGn” diverging color scheme represented as an RGB string.
 *
 * @param value Number in the range [0, 1].
 */
export function interpolateRdYlGn(value: number): string;

export const schemeRdYlGn: string[][];

/**
 * Given a number t in the range [0,1], returns the corresponding color from the “Spectral” diverging color scheme represented as an RGB string.
 *
 * @param value Number in the range [0, 1].
 */
export function interpolateSpectral(value: number): string;

export const schemeSpectral: string[][];

// -----------------------------------------------------------------------
// Sequential
// -----------------------------------------------------------------------
/**
 * Sequential, single-hue color schemes are available as continuous interpolators (often used with d3.scaleSequential) and
 *  as discrete schemes (often used with d3.scaleOrdinal). Each discrete scheme, such as d3.schemeBlues, is represented as
 *  an array of arrays of hexadecimal color strings. The kth element of this array contains the color scheme of size k; for example,
 *  d3.schemeBlues[9] contains an array of nine strings representing the nine colors of the blue sequential color scheme.
 *  Sequential, single-hue color schemes support a size k ranging from 3 to 9.
 *
 * Given a number t in the range [0,1], returns the corresponding color from the “Blues” sequential color scheme represented as an RGB string.
 *
 * @param value Number in the range [0, 1].
 */
export function interpolateBlues(value: number): string;

export const schemeBlues: string[][];

/**
 * Given a number t in the range [0,1], returns the corresponding color from the “Greens” sequential color scheme represented as an RGB string.
 *
 * @param value Number in the range [0, 1].
 */
export function interpolateGreens(value: number): string;

export const schemeGreens: string[][];

/**
 * Given a number t in the range [0,1], returns the corresponding color from the “Greys” sequential color scheme represented as an RGB string.
 *
 * @param value Number in the range [0, 1].
 */
export function interpolateGreys(value: number): string;

export const schemeGreys: string[][];

/**
 * Given a number t in the range [0,1], returns the corresponding color from the “Oranges” sequential color scheme represented as an RGB string.
 *
 * @param value Number in the range [0, 1].
 */
export function interpolateOranges(value: number): string;

export const schemeOranges: string[][];

/**
 * Given a number t in the range [0,1], returns the corresponding color from the “Purples” sequential color scheme represented as an RGB string.
 *
 * @param value Number in the range [0, 1].
 */
export function interpolatePurples(value: number): string;

export const schemePurples: string[][];

/**
 * Given a number t in the range [0,1], returns the corresponding color from the “Reds” sequential color scheme represented as an RGB string.
 *
 * @param value Number in the range [0, 1].
 */
export function interpolateReds(value: number): string;

export const schemeReds: string[][];

// -----------------------------------------------------------------------
// Sequential(Multi-Hue)
// -----------------------------------------------------------------------

/**
 * Sequential, multi-hue color schemes are available as continuous interpolators (often used with d3.scaleSequential) and
 *  as discrete schemes (often used with d3.scaleOrdinal). Each discrete scheme, such as d3.schemeBuGn, is represented as
 *  an array of arrays of hexadecimal color strings. The kth element of this array contains the color scheme of size k; for example,
 *  d3.schemeBuGn[9] contains an array of nine strings representing the nine colors of the blue-green sequential color scheme.
 *  Sequential, multi-hue color schemes support a size k ranging from 3 to 9.
 *
 * Given a number t in the range [0,1], returns the corresponding color from the “BuGn” sequential color scheme represented as an RGB string.
 *
 * @param value Number in the range [0, 1].
 */
export function interpolateBuGn(value: number): string;

export const schemeBuGn: string[][];

/**
 * Given a number t in the range [0,1], returns the corresponding color from the “BuPu” sequential color scheme represented as an RGB string.
 *
 * @param value Number in the range [0, 1].
 */
export function interpolateBuPu(value: number): string;

export const schemeBuPu: string[][];

/**
 * Given a number t in the range [0,1], returns the corresponding color from the “GnBu” sequential color scheme represented as an RGB string.
 *
 * @param value Number in the range [0, 1].
 */
export function interpolateGnBu(value: number): string;

export const schemeGnBu: string[][];

/**
 * Given a number t in the range [0,1], returns the corresponding color from the “OrRd” sequential color scheme represented as an RGB string.
 *
 * @param value Number in the range [0, 1].
 */
export function interpolateOrRd(value: number): string;

export const schemeOrRd: string[][];

/**
 * Given a number t in the range [0,1], returns the corresponding color from the “PuBuGn” sequential color scheme represented as an RGB string.
 *
 * @param value Number in the range [0, 1].
 */
export function interpolatePuBuGn(value: number): string;

export const schemePuBuGn: string[][];

/**
 * Given a number t in the range [0,1], returns the corresponding color from the “PuBu” sequential color scheme represented as an RGB string.
 *
 * @param value Number in the range [0, 1].
 */
export function interpolatePuBu(value: number): string;

export const schemePuBu: string[][];

/**
 * Given a number t in the range [0,1], returns the corresponding color from the “PuRd” sequential color scheme represented as an RGB string.
 *
 * @param value Number in the range [0, 1].
 */
export function interpolatePuRd(value: number): string;

export const schemePuRd: string[][];

/**
 * Given a number t in the range [0,1], returns the corresponding color from the “RdPu” sequential color scheme represented as an RGB string.
 *
 * @param value Number in the range [0, 1].
 */
export function interpolateRdPu(value: number): string;

export const schemeRdPu: string[][];

/**
 * Given a number t in the range [0,1], returns the corresponding color from the “YlGnBu” sequential color scheme represented as an RGB string.
 *
 * @param value Number in the range [0, 1].
 */
export function interpolateYlGnBu(value: number): string;

export const schemeYlGnBu: string[][];

/**
 * Given a number t in the range [0,1], returns the corresponding color from the “YlGn” sequential color scheme represented as an RGB string.
 *
 * @param value Number in the range [0, 1].
 */
export function interpolateYlGn(value: number): string;

export const schemeYlGn: string[][];

/**
 * Given a number t in the range [0,1], returns the corresponding color from the “YlOrBr” sequential color scheme represented as an RGB string.
 *
 * @param value Number in the range [0, 1].
 */
export function interpolateYlOrBr(value: number): string;

export const schemeYlOrBr: string[][];

/**
 * Given a number t in the range [0,1], returns the corresponding color from the “YlOrRd” sequential color scheme represented as an RGB string.
 *
 * @param value Number in the range [0, 1].
 */
export function interpolateYlOrRd(value: number): string;

export const schemeYlOrRd: string[][];
