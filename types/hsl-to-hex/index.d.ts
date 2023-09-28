// Type definitions for hsl-to-hex 1.0
// Project: https://github.com/davidmarkclements/hsl-to-hex#readme
// Definitions by: vijexa <https://github.com/vijexa>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/**
 * Convert hue, saturation and luminosity to hex string
 *
 * e.g. hsl(212, 32, 65) to '#89a4c2'
 */
declare function hslToHex(hue: number, saturation: number, luminosity: number): string;
export = hslToHex;
