/**
 * LAB color values represent colors in a way that facilitates
 * visual perception comparison. Colors are described in terms
 * of three values, L*, a*, and b*.
 *
 * - L*: Lightness
 * - a*: Red/Green Value
 * - b*: Blue/Yellow Value
 *
 * Further reading: https://www.xrite.com/blog/lab-color-space
 */
export interface LAB {
    L: number;
    A: number;
    B: number;
}

export type DeltaECalculation = (color1: LAB, color2: LAB) => number;

/**
 * Given two colors, determine the deltaE (ΔE) between the two. This
 * value represents their degree of visual similarity (as a value
 * between 0 - 100), and can be interpreted using this chart:
 *
 *     ---------------------------------------------------------
 *     | Delta E (ΔE) | Perception                             |
 *     ---------------------------------------------------------
 *     | <= 1.0       | Not perceptible by human eyes.         |
 *     | 1 - 2        | Perceptible through close observation. |
 *     | 2 - 10       | Perceptible at a glance.               |
 *     | 11 - 49      | Colors are more similar than opposite. |
 *     | 100          | Colors are exact opposite.             |
 *     ---------------------------------------------------------
 *
 * Further reading: http://zschuessler.github.io/DeltaE/learn/
 */
export const getDeltaE76: DeltaECalculation;

/**
 * Given two colors, determine the deltaE (ΔE) between the two. This
 * value represents their degree of visual similarity (as a value
 * between 0 - 100), and can be interpreted using this chart:
 *
 *     ---------------------------------------------------------
 *     | Delta E (ΔE) | Perception                             |
 *     ---------------------------------------------------------
 *     | <= 1.0       | Not perceptible by human eyes.         |
 *     | 1 - 2        | Perceptible through close observation. |
 *     | 2 - 10       | Perceptible at a glance.               |
 *     | 11 - 49      | Colors are more similar than opposite. |
 *     | 100          | Colors are exact opposite.             |
 *     ---------------------------------------------------------
 *
 * Further reading: http://zschuessler.github.io/DeltaE/learn/
 */
export const getDeltaE94: DeltaECalculation;

/**
 * Given two colors, determine the deltaE (ΔE) between the two. This
 * value represents their degree of visual similarity (as a value
 * between 0 - 100), and can be interpreted using this chart:
 *
 *     ---------------------------------------------------------
 *     | Delta E (ΔE) | Perception                             |
 *     ---------------------------------------------------------
 *     | <= 1.0       | Not perceptible by human eyes.         |
 *     | 1 - 2        | Perceptible through close observation. |
 *     | 2 - 10       | Perceptible at a glance.               |
 *     | 11 - 49      | Colors are more similar than opposite. |
 *     | 100          | Colors are exact opposite.             |
 *     ---------------------------------------------------------
 *
 * Further reading: http://zschuessler.github.io/DeltaE/learn/
 */
export const getDeltaE00: DeltaECalculation;
