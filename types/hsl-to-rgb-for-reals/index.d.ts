// Type definitions for hsl-to-rgb-for-reals 1.1
// Project: https://github.com/davidmarkclements/hsl_rgb_converter/
// Definitions by: jorenbroekema <https://github.com/DefinitelyTyped>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/**
 * Convert hue, saturation and luminosity to rgb
 *
 * e.g. hslToRgb(223, 0.44, 0.56) to [93, 121, 192]
 */
declare function hslToRgb(hue: number, saturation: number, lightness: number): [red: number, green: number, blue: number];
export = hslToRgb;
