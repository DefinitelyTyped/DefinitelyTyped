// Type definitions for D3JS d3-scale-chromatic module v1.0.2
// Project: https://github.com/d3/d3-scale-chromatic/
// Definitions by: Hugues Stefanski <https://github.com/Ledragon>, Alex Ford <https://github.com/gustavderdrache>, Boris Yankov <https://github.com/borisyankov>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

// -----------------------------------------------------------------------
// Categorical
// -----------------------------------------------------------------------
/**An array of eight categorical colors represented as RGB hexadecimal strings. */
export const schemeAccent: Array<string>;
/**An array of eight categorical colors represented as RGB hexadecimal strings. */
export const schemeDark2: Array<string>;
/**An array of twelve categorical colors represented as RGB hexadecimal strings. */
export const schemePaired: Array<string>;
/**An array of nine categorical colors represented as RGB hexadecimal strings. */
export const schemePastel1: Array<string>;
/**An array of eight categorical colors represented as RGB hexadecimal strings. */
export const schemePastel2: Array<string>;
/**An array of nine categorical colors represented as RGB hexadecimal strings. */
export const schemeSet1: Array<string>;
/**An array of eight categorical colors represented as RGB hexadecimal strings. */
export const schemeSet2: Array<string>;
/**An array of twelve categorical colors represented as RGB hexadecimal strings. */
export const schemeSet3: Array<string>;

// -----------------------------------------------------------------------
// Diverging
// -----------------------------------------------------------------------
/**Given a number value in the range [0,1], returns the corresponding color from the “BrBG” diverging color scheme represented as an RGB string. */
export function interpolateBrBG(value: number): string;
/** Given a number t in the range [0,1], returns the corresponding color from the “PRGn” diverging color scheme represented as an RGB string.*/
export function interpolatePRGn(value: number): string;
/** Given a number t in the range [0,1], returns the corresponding color from the “PiYG” diverging color scheme represented as an RGB string.*/
export function interpolatePiYG(value: number): string;
/** Given a number t in the range [0,1], returns the corresponding color from the “PuOr” diverging color scheme represented as an RGB string.*/
export function interpolatePuOr(value: number): string;
/** Given a number t in the range [0,1], returns the corresponding color from the “RdBu” diverging color scheme represented as an RGB string.*/
export function interpolateRdBu(value: number): string;
/** Given a number t in the range [0,1], returns the corresponding color from the “RdGy” diverging color scheme represented as an RGB string.*/
export function interpolateRdGy(value: number): string;
/** Given a number t in the range [0,1], returns the corresponding color from the “RdYlBu” diverging color scheme represented as an RGB string.*/
export function interpolateRdYlBu(value: number): string;
/** Given a number t in the range [0,1], returns the corresponding color from the “RdYlGn” diverging color scheme represented as an RGB string.*/
export function interpolateRdYlGn(value: number): string;
/** Given a number t in the range [0,1], returns the corresponding color from the “Spectral” diverging color scheme represented as an RGB string.*/
export function interpolateSpectral(value: number): string;

// -----------------------------------------------------------------------
// Sequential
// -----------------------------------------------------------------------
/**Given a number t in the range [0,1], returns the corresponding color from the “Blues” sequential color scheme represented as an RGB string. */
export function interpolateBlues(value: number): string;
/**Given a number t in the range [0,1], returns the corresponding color from the “Greens” sequential color scheme represented as an RGB string. */
export function interpolateGreens(value: number): string;
/**Given a number t in the range [0,1], returns the corresponding color from the “Greys” sequential color scheme represented as an RGB string. */
export function interpolateGreys(value: number): string;
/**Given a number t in the range [0,1], returns the corresponding color from the “Oranges” sequential color scheme represented as an RGB string. */
export function interpolateOranges(value: number): string;
/**Given a number t in the range [0,1], returns the corresponding color from the “Purples” sequential color scheme represented as an RGB string. */
export function interpolatePurples(value: number): string;
/**Given a number t in the range [0,1], returns the corresponding color from the “Reds” sequential color scheme represented as an RGB string. */
export function interpolateReds(value: number): string;

// -----------------------------------------------------------------------
// Sequential(Multi-Hue)
// -----------------------------------------------------------------------

/**Given a number t in the range [0,1], returns the corresponding color from the “BuGn” sequential color scheme represented as an RGB string. */
export function interpolateBuGn(value: number): string;
/**Given a number t in the range [0,1], returns the corresponding color from the “BuPu” sequential color scheme represented as an RGB string. */
export function interpolateBuPu(value: number): string;
/**Given a number t in the range [0,1], returns the corresponding color from the “GnBu” sequential color scheme represented as an RGB string. */
export function interpolateGnBu(value: number): string;
/**Given a number t in the range [0,1], returns the corresponding color from the “OrRd” sequential color scheme represented as an RGB string. */
export function interpolateOrRd(value: number): string;
/**Given a number t in the range [0,1], returns the corresponding color from the “PuBuGn” sequential color scheme represented as an RGB string. */
export function interpolatePuBuGn(value: number): string;
/**Given a number t in the range [0,1], returns the corresponding color from the “PuBu” sequential color scheme represented as an RGB string. */
export function interpolatePuBu(value: number): string;
/**Given a number t in the range [0,1], returns the corresponding color from the “PuRd” sequential color scheme represented as an RGB string. */
export function interpolatePuRd(value: number): string;
/**Given a number t in the range [0,1], returns the corresponding color from the “RdPu” sequential color scheme represented as an RGB string. */
export function interpolateRdPu(value: number): string;
/**Given a number t in the range [0,1], returns the corresponding color from the “YlGnBu” sequential color scheme represented as an RGB string. */
export function interpolateYlGnBu(value: number): string;
/**Given a number t in the range [0,1], returns the corresponding color from the “YlGn” sequential color scheme represented as an RGB string. */
export function interpolateYlGn(value: number): string;
/**Given a number t in the range [0,1], returns the corresponding color from the “YlOrBr” sequential color scheme represented as an RGB string. */
export function interpolateYlOrBr(value: number): string;
/**Given a number t in the range [0,1], returns the corresponding color from the “YlOrRd” sequential color scheme represented as an RGB string. */
export function interpolateYlOrRd(value: number): string;
