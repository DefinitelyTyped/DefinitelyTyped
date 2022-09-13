// Type definitions for ecma-proposal-math-extensions 0.0
// Project: https://github.com/rwaldron/proposal-math-extensions#readme
// Definitions by: Konstantin Simon Maria Möllers <https://github.com/ksm2>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.0

interface Math {
  /** This is the number of how many degrees are one radian. */
  readonly DEG_PER_RAD: number;
  /** This is the number of how many radians are one degree. */
  readonly RAD_PER_DEG: number;
  /**
   * Scales a value between `inLow` and `inHigh` to the range of `outLow` to `outHigh`.
   * @param x The numeric value in the input range to scale.
   * @param inLow The lower bound of the input range.
   * @param inHigh The upper bound of the input range.
   * @param outLow The lower bound of the output range.
   * @param outHigh The upper bound of the output range.
   * @return The input value scaled to the output range.
   */
  scale(x: number, inLow: number, inHigh: number, outLow: number, outHigh: number): number;
  /**
   * Scales a floating point value between `inLow` and `inHigh` to the range of `outLow` to `outHigh`.
   * @param x The numeric value in the input range to scale.
   * @param inLow The lower bound of the input range.
   * @param inHigh The upper bound of the input range.
   * @param outLow The lower bound of the output range.
   * @param outHigh The upper bound of the output range.
   * @return The input value scaled to the output range.
   */
  fscale(x: number, inLow: number, inHigh: number, outLow: number, outHigh: number): number;
  /**
   * Clamps an incoming value `x` to a range between `lower` and `upper`.
   * @param x The value to clamp.
   * @param lower The lower bound of the range to clamp `x` to.
   * @param upper The upper bound of the range to clamp `x` to.
   * @return The input value clamped to the given range.
   */
  clamp(x: number, lower: number, upper: number): number;
  /**
   * Converts an angle given in degrees to an angle given in radians.
   * @param degrees The input angle in degrees.
   * @return The output angle in radians.
   */
  radians(degrees: number): number;
  /**
   * Converts an angle given in radians to an angle given in degrees.
   * @param radians The input angle in radians.
   * @return The output angle in degrees.
   */
  degrees(radians: number): number;
}
