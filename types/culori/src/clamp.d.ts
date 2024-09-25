import { Color, FindColorByMode, GamutMode, Mode } from "./common";

/**
 * Returns whether the color is in the sRGB gamut.
 */
export function displayable(color: Color | string): boolean;

/**
 * Given a color space `mode`, returns a function
 * with which to check whether a color is
 * in that color space's gamut.
 */
export function inGamut(mode?: Mode): (color: Color | string) => boolean;

/*
 * Obtain a color that's in the sRGB gamut
 * by converting it to sRGB and clipping the channel values
 * so that they're within the [0, 1] range.
 *
 * The result is returned in the color's original color space.
 */
export function clampRgb(color: string): Color | undefined;
export function clampRgb<C extends Color>(color: C): C;

/**
 * Given the `mode` color space, returns a function
 * with which to obtain a color that's in gamut for
 * the `mode` color space by clipping the channel values
 * so that they fit in their respective ranges.
 *
 * It's similar to `clampRgb`, but works for any
 * bounded color space (RGB or not) for which
 * any combination of in-range channel values
 * produces an in-gamut color.
 */
export function clampGamut<M extends Mode = "rgb">(mode?: M): (color: Color | string) => FindColorByMode<M> | undefined;

/**
 * Obtain a color that’s in a RGB gamut (by default sRGB)
 * by first converting it to `mode` and then finding
 * the greatest chroma value that fits the gamut.
 *
 * By default, the CIELCh color space is used,
 * but any color that has a chroma component will do.
 *
 * The result is returned in the color's original color space.
 */
export function clampChroma(
    color: string,
    mode?: Mode,
    rgbGamut?: GamutMode,
): Color | undefined;
export function clampChroma<C extends Color>(color: C, mode?: Mode, rgbGamut?: GamutMode): C;

/*
 * Obtain a color that's in the `dest` gamut,
 * by first converting it to the `mode` color space
 * and then finding the largest chroma that's in gamut,
 * similar to `clampChroma`.
 *
 * The color returned is in the `dest` color space.
 *
 * To address the shortcomings of `clampChroma`, which can
 * sometimes produce colors more desaturated than necessary,
 * the test used in the binary search is replaced with
 * "is color is roughly in gamut", by comparing the candidate
 * to the clipped version (obtained with `clampGamut`).
 * The test passes if the colors are not too dissimilar,
 * judged by the `delta` color difference function
 * and an associated `jnd` just-noticeable difference value.
 *
 * The default arguments for this function correspond to the
 * gamut mapping algorithm defined in CSS Color Level 4:
 * https://drafts.csswg.org/css-color/#css-gamut-mapping
 *
 * To disable the “roughly in gamut” part, pass either
 * `null` for the `delta` parameter, or zero for `jnd`.
 */
export function toGamut<M extends Mode>(
    dest: M,
    mode: Mode,
    delta?: number | null,
    jnd?: number,
): (color: string | Color) => FindColorByMode<M>;
