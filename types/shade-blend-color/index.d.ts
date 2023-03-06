// Type definitions for shade-blend-color 1.0
// Project: https://github.com/darieldejesus/shade-blend-color#readme
// Definitions by: BendingBender <https://github.com/BendingBender>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/**
 * This will take a HEX or RGB web color. Shade-Blend-Color can shade it darker or lighter,
 * or blend it with a second color, and can also pass it right thru but convert
 * from Hex to RGB (Hex2RGB) or RGB to Hex (RGB2Hex).
 * All without you even knowing what color format you are using.
 *
 * @param percentage Percentage, float from -1 to 1.
 * @param from Color to blend from.
 * @param to Color to blend to or `'c'` to convert color into RGB or Hex format.
 * @returns Either Hex or RGB color. `null` if invalid color or percentage number.
 *
 * @example
 * import shadeBlend from 'shade-blend-color';
 *
 * const color1 = "rgb(20,60,200)";
 * const color2 = "rgba(20,60,200,0.67423)";
 * const color3 = "#67DAF0";
 * const color4 = "#5567DAF0";
 * const color5 = "#F3A";
 * const color6 = "#F3A9";
 * const color7 = "rgb(200,60,20)";
 * const color8 = "rgba(200,60,20,0.98631)";
 *
 * shadeBlend(0.42, color1); // rgb(20,60,200) + [42% Lighter] => rgb(119,142,223)
 * shadeBlend(-0.4, color5); // #F3A + [40% Darker] => #991f66
 * shadeBlend(0.42, color8); // rgba(200,60,20,0.98631) + [42% Lighter] => rgba(223,142,119,0.98631)
 *
 * // Shade with Conversion (use "c" as your "to" color)
 * shadeBlend(0.42, color2, "c"); // rgba(20,60,200,0.67423) + [42% Lighter] + [Convert] => #778edfac
 *
 * // RGB2Hex & Hex2RGB Conversion Only (set percentage to zero)
 * shadeBlend(0, color6, "c"); // #F3A9 + [Convert] => rgba(255,51,170,0.6)
 *
 * // Blending
 * shadeBlend(-0.5, color2, color8); // rgba(20,60,200,0.67423) + rgba(200,60,20,0.98631) + [50% Blend] => rgba(110,60,110,0.8303)
 * shadeBlend(0.7, color2, color7); // rgba(20,60,200,0.67423) + rgb(200,60,20) + [70% Blend] => rgba(146,60,74,0.67423)
 * shadeBlend(0.25, color3, color7); // #67DAF0 + rgb(200,60,20) + [25% Blend] => rgb(127,179,185)
 * shadeBlend(0.75, color7, color3); // rgb(200,60,20) + #67DAF0 + [75% Blend] => #7fb3b9
 *
 * // Error Checking
 * shadeBlend(0.42, "#FFBAA"); // #FFBAA + [42% Lighter] => null (Invalid Input Color)
 * shadeBlend(42, color1, color5); // rgb(20,60,200) + #F3A + [4200% Blend] => null (Invalid Percentage Range)
 * shadeBlend(0.42, "salt"); // salt + [42% Lighter] => null (A Little Salt is No Good...)
 *
 * // Error Check Fails (Some Errors are not Caught)
 * shadeBlend(0.42, "#salt"); // #salt + [42% Lighter] => #6b6b6b00 (...and a Pound of Salt is Jibberish)
 */
export default function shadeBlendColor(percentage: number, from: string, to?: 'c' | string): string | null;
