/**
 * Constrain a value to lie between two further values.
 *
 * @param  min - Lower end of the range into which to constrain v.
 * @param  max - Upper end of the range into which to constrain v.
 * @param  v   - Value to clamp.
 * @return The value to constrain.
 * @see {@link https://www.opengl.org/sdk/docs/man/html/clamp.xhtml}
 */
export function clamp(min: number, max: number, v: number): number;

/**
 * Clamps a value between 0 and 1 and returns value
 *
 * @param  v - Value to clamp
 * @return The clamped value
 */
export function clamp01(v: number): number;

/**
 * Generate a step function by comparing two values.
 *
 * @param  edge - Location of the edge of the step function.
 * @param  v    - Value to be used to generate the step function.
 * @return Step value.
 * @see {@link https://www.opengl.org/sdk/docs/man/html/step.xhtml}
 */
export function step(edge: number, v: number): number;

/**
 * Re-maps a number from one range to another (Also known as scale)
 *
 * @param  value  - The incoming value to be converted
 * @param  start1 - Lower bound of the value's current range
 * @param  stop1  - Upper bound of the value's current range
 * @param  start2 - Lower bound of the value's target range
 * @param  stop2  - Upper bound of the value's target range
 * @return Remapped number
 */
export function map(value: number, start1: number, stop1: number, start2: number, stop2: number): number;

/**
 * Return diagonal of a rectangle.
 *
 * @param  w - Width.
 * @param  h - Height.
 * @return Diagonal length.
 */
export function diagonal(w: number, h: number): number;

/**
 * Returns the euclidian distance between the two given set of coordinates
 *
 * @param  x1 - X coord of the first point.
 * @param  y1 - Y coord of the first point.
 * @param  x2 - X coord of the second point.
 * @param  y2 - Y coord of the second point.
 * @return The computed distance.
 */
export function distance(x1: number, y1: number, x2: number, y2: number): number;

/**
 * Smooth a value.
 *
 * @param  min - Minimum boundary.
 * @param  max - Maximum boundary.
 * @param  v   - Value.
 * @return Smoothed value.
 */
export function smoothStep(min: number, max: number, v: number): number;

/**
 * Normalize a value between two bounds.
 *
 * @param  min - Minimum boundary.
 * @param  max - Maximum boundary.
 * @param  x   - Value to normalize.
 * @return Normalized value.
 */
export function normalize(min: number, max: number, x: number): number;

/**
 * Generate a random float.
 *
 * @param  minValue      - Minimum boundary.
 * @param  maxValue      - Maximum boundary.
 * @param  precision     - Precision. (default: 2)
 * @return Generated float.
 */
export function randomFloat(minValue: number, maxValue: number, precision?: number): number;

/**
 * Generate a random integer
 *
 * @param  min - Minimum boundary.
 * @param  max - Maximum boundary.
 * @return Generated integer.
 */
export function randomInt(min: number, max: number): number;

/**
 * Generate random sign (1 or -1).
 *
 * @return Either 1 or -1.
 */
export function randomSign(): number;

/**
 * Ensures that the value always stays between min and max, by wrapping the value around.
 * If 'max' is not larger than 'min' the result is 0.
 *
 * @param  value - The value to wrap.
 * @param  min   - The minimum the value is allowed to be.
 * @param  max   - The maximum the value is allowed to be, should be larger than 'min'.
 * @return Wrapped value.
 */
export function wrap(value: number, min: number, max: number): number;

/**
 * Calculates a fuzzy floor to the given value.
 *
 * @param  value   - The value to floor.
 * @param  epsilon - The epsilon (a small value used in the calculation).
 * @return floor(value+epsilon).
 */
export function fuzzyFloor(value: number, epsilon?: number): number;

/**
 * Calculates a fuzzy ceil to the given value.
 *
 * @param  value   - The value to ceil.
 * @param  epsilon - The epsilon (a small value used in the calculation).
 * @return ceiling(value+epsilon).
 */
export function fuzzyCeil(value: number, epsilon?: number): number;

/**
 * Two numbers are fuzzyEqual if their difference is less than epsilon.
 *
 * @param  a       - The first number to compare.
 * @param  b       - The second number to compare.
 * @param  epsilon - The epsilon (a small value used in the calculation).
 * @return True if |a-b|<epsilona otherwise false.
 */
export function fuzzyEqual(a: number, b: number, epsilon?: number): boolean;

/**
 * A is fuzzyGreaterThan B if it is more than B - epsilon.
 *
 * @param  a       - The first number to compare.
 * @param  b       - The second number to compare.
 * @param  epsilon - The epsilon (a small value used in the calculation).
 * @return True if a>b-epsilon.
 */
export function fuzzyGreaterThan(a: number, b: number, epsilon?: number): boolean;

/**
 * A is fuzzyLessThan B if it is less than B + epsilon.
 *
 * @param  a       - The first number to compare.
 * @param  b       - The second number to compare.
 * @param  epsilon - The epsilon (a small value used in the calculation).
 * @return True if a<b+epsilon.
 */
export function fuzzyLessThan(a: number, b: number, epsilon?: number): boolean;

/**
 * Adds the given amount to the value, but never lets the value go over the specified maximum.
 *
 * @param value  - The value to add the amount to.
 * @param amount - The amount to add to the value.
 * @param max    - The maximum the value is allowed to be.
 * @return The new value.
 */
export function maxAdd(value: number, amount: number, max: number): number;

/**
 * Subtracts the given amount from the value, but never lets the value go below the specified minimum.
 *
 * @param value  - The base value.
 * @param amount - The amount to subtract from the base value.
 * @param min    - The minimum the value is allowed to be.
 * @return The new value.
 */
export function minSub(value: number, amount: number, min: number): number;

/**
 * Returns true if the number given is odd.
 *
 * @param  number - The number to check.
 * @return True if the given number is odd. False if the given number is even.
 */
export function isOdd(number: number): boolean;

/**
 * Returns true if the number given is even.
 *
 * @param  number - The number to check.
 * @return True if the given number is even. False if the given number is false.
 */
export function isEven(number: number): boolean;

/**
 * Checks if a number is a power of two.
 *
 * @param   value Number to test.
 * @returns returns true if the value is power of two.
 */
export function isPowerOfTwo(value: number): boolean;

/**
 * Returns the closest power of two value.
 *
 * @param  value - Value.
 * @return The nearest power of 2i.
 */
export function closestPowerOfTwo(value: number): number;

/**
 * Returns the next power of two value.
 *
 * @param  v - Value.
 * @return The next power of two.
 */
export function nextPowerOfTwo(v: number): number;

/**
 * Work out what percentage value `a` is of value `b` using the given base.
 * Clamps returned value between 0-1.
 *
 * @param  a    - The percent to work out.
 * @param  b    - The value you wish to get the percentage of.
 * @param  base - The base value.
 * @return The percentage a is of b, clamped between 0 and 1.
 */
export function percent01(a: number, b: number, base?: number): number;

/**
 * Return the avarage of all values passed to the function.
 *
 * @param  numbers - The numbers to average.
 * @return The average of all given values.
 */
export function average(...numbers: number[]): number;

/**
 * The absolute difference between two values.
 *
 * @param  a - The first value to check.
 * @param  b - The second value to check.
 * @return The absolute difference between the two values.
 */
export function difference(a: number, b: number): number;

/**
 * Checks if two values are within the given tolerance of each other.
 *
 * @param  a         - The first number to check
 * @param  b         - The second number to check
 * @param  tolerance - The tolerance. Anything equal to or less than this is considered within the range.
 * @return True if a is <= tolerance of b.
 */
export function within(a: number, b: number, tolerance: number): boolean;

/**
 * Calculates the shortest difference between two given angles given in radians.
 *
 * @param  a - Current.
 * @param  b - Target.
 * @return The distance.
 * @see {@link https://docs.unity3d.com/ScriptReference/Mathf.DeltaAngle.html}
 */
export function deltaAngleRad(a: number, b: number): number;

/**
 * Compute the fractional part of the argument.
 *
 * @param  v - Specify the value to evaluate.
 * @return Returns the fractional part of x.
 * @see {@link https://www.opengl.org/sdk/docs/man/html/fract.xhtml}
 */
export function fract(v: number): number;

/**
 * Compute value of one parameter modulo another.
 *
 * @param  a - Value a.
 * @param  n - Value b.
 * @return Returns the value of x modulo n.
 * @see {@link https://www.opengl.org/sdk/docs/man4/html/mod.xhtml}
 */
export function mod(a: number, n: number): number;

/**
 * Same as Lerp but makes sure the values interpolate correctly when they wrap around 2 radians.
 *
 * @param  a - The start value.
 * @param  b - The end value.
 * @param  t - Value to inerpolate.
 * @return The interpolated value.
 */
export function lerpAngleRad(a: number, b: number, t: number): number;

/**
 * Converts the given value from gamma (sRGB) to linear color space.
 *
 * @param  v - Gamma value.
 * @return Value in linear color space.
 * @see {@link https://docs.unity3d.com/ScriptReference/Mathf.GammaToLinearSpace.html}
 */
export function gammaToLinearSpace(v: number): number;

/**
 * Converts the given value from linear to gamma (sRGB) color space.
 *
 * @param  v - Linear color space value.
 * @return Value in gamma.
 * @see {@link https://docs.unity3d.com/ScriptReference/Mathf.LinearToGammaSpace.html}
 */
export function linearToGammaSpace(v: number): number;

/**
 * Almost Identity.
 *
 * @param  x - Input value.
 * @param  m - Threshold.
 * @param  n - The value to take when x is zero.
 * @return Smoothed value.
 * @see {@link http://www.iquilezles.org/www/articles/functions/functions.htm}
 */
export function almostIdentity(x: number, m: number, n: number): number;

/**
 * Impulse.
 *
 * @param  k - Stretching of the function. Max is 1.0.
 * @param  x - Input value.
 * @return Impulse.
 * @see {@link http://www.iquilezles.org/www/articles/functions/functions.htm}
 */
export function impulse(k: number, x: number): number;

/**
 * Cubic Pulse.
 *
 * @param  c - Edge 1.
 * @param  w - Edge 2.
 * @param  x - Source value for interpolation.
 * @return Cubic pulse.
 * @see {@link http://www.iquilezles.org/www/articles/functions/functions.htm}
 */
export function cubicPulse(c: number, w: number, x: number): number;

/**
 * ExpStep.
 *
 * @param  x - Value to be used to generate the step function.
 * @param  k - Edge of the step.
 * @param  n - n value.
 * @return Exponential step.
 * @see {@link http://www.iquilezles.org/www/articles/functions/functions.htm}
 */
export function expStep(x: number, k: number, n: number): number;

/**
 * Remap the 0..1 interval into 0..1 parabola, such that the corners are remaped to 0 and the center to 1.
 * In other words, parabola(0) = parabola(1) = 0, and parabola(1/2) = 1.
 *
 * @param  x - Coordinate on X axis.
 * @param  k - Value to map.
 * @return Mapped value.
 * @see {@link http://www.iquilezles.org/www/articles/functions/functions.htm}
 */
export function parabola(x: number, k: number): number;

/**
 * Power Curve.
 *
 * @param  x - Input value.
 * @param  a - Edge 1.
 * @param  b - Edge 2.
 * @return Value.
 * @see {@link http://www.iquilezles.org/www/articles/functions/functions.htm}
 */
export function powerCurve(x: number, a: number, b: number): number;

/**
 * Smooth Min.
 *
 * @param  a - First value to compare.
 * @param  b - Second value to compare.
 * @param  k - Radious/distance of the smoothness.
 * @return Smooth min output.
 * @see {@link http://iquilezles.org/www/articles/smin/smin.htm}
 */
export function smoothMin(a: number, b: number, k: number): number;

/**
 * Smooth Max.
 *
 * @param  a - First value to compare.
 * @param  b - Second value to compare.
 * @param  k - Radious/distance of the smoothness.
 * @return Smooth min output.
 * @see {@link http://iquilezles.org/www/articles/smin/smin.htm}
 */
export function smoothMax(a: number, b: number, k: number): number;

/**
 * Return delta time
 *
 * @param  oldTime - Time previous frame in milliseconds
 * @param  newTime - Time current frame in milliseconds
 * @return Time difference in milliseconds
 */
export function deltaTime(oldTime: number, newTime?: number): number;

/**
 * Compute the greatest common divisor using Euclid's algorithm.
 *
 * @param  a - Value one.
 * @param  b - Value two.
 * @return Greatest common divisor.
 * @see {@link https://en.wikipedia.org/wiki/Greatest_common_divisor#Using_Euclid.27s_algorithm}
 */
export function gcd(a: number, b: number): number;

/**
 * Compute the dot product of any pair of 2D vectors.
 *
 * @param  x0 - First x start position.
 * @param  y0 - First y start position.
 * @param  x1 - First x end position.
 * @param  y1 - First y end position.
 * @param  x2 - Second x start position.
 * @param  y2 - Second y start position.
 * @param  x3 - Second x end position.
 * @param  y3 - Second y end position.
 * @return Dot product.
 */
export function dotProduct(
    x0: number,
    y0: number,
    x1: number,
    y1: number,
    x2: number,
    y2: number,
    x3: number,
    y3: number,
): number;

/**
 * Linearly interpolate between two values (mix).
 *
 * @param  x - Start of the range in which to interpolate.
 * @param  y - End of the range in which to interpolate.
 * @param  r - Value to use to interpolate between x and y.
 * @return Lerped value
 * @see {@link https://www.opengl.org/sdk/docs/man/html/mix.xhtml}
 */
export function lerp(x: number, y: number, r: number): number;

/**
 * Convert degrees to radians.
 *
 * @param  degrees - Degrees.
 * @return Angel in radians.
 */
export function degToRad(degrees: number): number;

/**
 * Convert radians to degrees.
 *
 * @param  radians - Radians.
 * @return Angel in degrees.
 */
export function radToDeg(radians: number): number;

/**
 * Calculates the linear parameter t that produces the interpolant value within the range [a, b].
 *
 * @param  a - The start value.
 * @param  b - The end value.
 * @param  v - The value.
 * @return The result of the reverse interpolation.
 * @see {@link https://docs.unity3d.com/ScriptReference/Mathf.InverseLerp.html}
 */
export function inverseLerp(a: number, b: number, v: number): number;

/**
 * Linearly interpolates between x and y by a with no limit to a.
 *
 * @param  x - The start value.
 * @param  y - The end value.
 * @param  a - The interpolation between the two floats.
 * @return The float value as a result from the linear interpolation.
 * @see {@link https://docs.unity3d.com/ScriptReference/Mathf.LerpUnclamped.html}
 */
export function lerpUnclamped(x: number, y: number, a: number): number;

/**
 * Calculates the shortest difference between two given angles given in degrees.
 *
 * @param  a - Current.
 * @param  b - Target.
 * @return The distance.
 * @see {@link https://docs.unity3d.com/ScriptReference/Mathf.DeltaAngle.html}
 */
export function deltaAngleDeg(a: number, b: number): number;

/**
 * Same as Lerp but makes sure the values interpolate correctly when they wrap around 360 degrees.
 *
 * @param  a - The start value.
 * @param  b - The end value.
 * @param  t - Value to inerpolate.
 * @return The interpolated value.
 * @see {@link https://docs.unity3d.com/ScriptReference/Mathf.LerpAngle.html}
 */
export function lerpAngleDeg(a: number, b: number, t: number): number;

export {
    degToRad as toRadians,
    deltaAngleDeg as deltaAngle,
    inverseLerp as inverseMix,
    lerp as mix,
    lerpAngleDeg as lerpAngle,
    lerpUnclamped as mixUnclamped,
    radToDeg as toDegrees,
};
