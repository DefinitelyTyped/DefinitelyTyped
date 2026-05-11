/**
 * Convert hue, saturation and luminosity to rgb
 *
 * e.g. hslToRgb(223, 0.44, 0.56) to [93, 121, 192]
 */
declare function hslToRgb(
    hue: number,
    saturation: number,
    lightness: number,
): [red: number, green: number, blue: number];
export = hslToRgb;
