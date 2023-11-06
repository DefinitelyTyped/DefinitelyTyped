/**
 * Constrain a value to lie between two further values.
 *
 * @param  {number} min - Lower end of the range into which to constrain v.
 * @param  {number} max - Upper end of the range into which to constrain v.
 * @param  {number} v   - Value to clamp.
 * @return {number} The value to constrain.
 * @see {@link https://www.opengl.org/sdk/docs/man/html/clamp.xhtml}
 */
declare function clamp(min: number, max: number, v: number): number;

/**
 * Clamps a value between 0 and 1 and returns value
 *
 * @param  {number} v - Value to clamp
 * @return {number} The clamped value
 */
declare function clamp01(v: number): number;

/**
 * Generate a step function by comparing two values.
 *
 * @param  {number} edge - Location of the edge of the step function.
 * @param  {number} v    - Value to be used to generate the step function.
 * @return {number} Step value.
 * @see {@link https://www.opengl.org/sdk/docs/man/html/step.xhtml}
 */
declare function step(edge: number, v: number): number;

/**
 * Re-maps a number from one range to another (Also known as scale)
 *
 * @param  {number} value  - The incoming value to be converted
 * @param  {number} start1 - Lower bound of the value's current range
 * @param  {number} stop1  - Upper bound of the value's current range
 * @param  {number} start2 - Lower bound of the value's target range
 * @param  {number} stop2  - Upper bound of the value's target range
 * @return {number} Remapped number
 */
declare function map(value: number, start1: number, stop1: number, start2: number, stop2: number): number;

/**
 * Return diagonal of a rectangle.
 *
 * @param  {number} w - Width.
 * @param  {number} h - Height.
 * @return {number} Diagonal length.
 */
declare function diagonal(w: number, h: number): number;

/**
 * Returns the euclidian distance between the two given set of coordinates
 *
 * @param  {number} x1 - X coord of the first point.
 * @param  {number} y1 - Y coord of the first point.
 * @param  {number} x2 - X coord of the second point.
 * @param  {number} y2 - Y coord of the second point.
 * @return {number} The computed distance.
 */
declare function distance(x1: number, y1: number, x2: number, y2: number): number;

/**
 * Smooth a value.
 *
 * @param  {number} min - Minimum boundary.
 * @param  {number} max - Maximum boundary.
 * @param  {number} v   - Value.
 * @return {number} Smoothed value.
 */
declare function smoothStep(min: number, max: number, v: number): number;

/**
 * Normalize a value between two bounds.
 *
 * @param  {number} min - Minimum boundary.
 * @param  {number} max - Maximum boundary.
 * @param  {number} x   - Value to normalize.
 * @return {number} Normalized value.
 */
declare function normalize(min: number, max: number, x: number): number;

/**
 * Generate a random float.
 *
 * @param  {number} minValue      - Minimum boundary.
 * @param  {number} maxValue      - Maximum boundary.
 * @param  {number} [precision=2] - Precision.
 * @return {number} Generated float.
 */
declare function randomFloat(minValue: number, maxValue: number, precision?: number): number;

/**
 * Generate a random integer
 *
 * @param  {number} min - Minimum boundary.
 * @param  {number} max - Maximum boundary.
 * @return {number} Generated integer.
 */
declare function randomInt(min: number, max: number): number;

/**
 * Generate random sign (1 or -1).
 *
 * @return {number} Either 1 or -1.
 */
declare function randomSign(): number;

/**
 * Ensures that the value always stays between min and max, by wrapping the value around.
 * If 'max' is not larger than 'min' the result is 0.
 *
 * @param {number} value - The value to wrap.
 * @param {number} min   - The minimum the value is allowed to be.
 * @param {number} max   - The maximum the value is allowed to be, should be larger than 'min'.
 * @return {number} Wrapped value.
 */
declare function wrap(value: number, min: number, max: number): number;

/**
 * Calculates a fuzzy floor to the given value.
 *
 * @param  {number} value - The value to floor.
 * @param  {number} [epsilon=0.0001] - The epsilon (a small value used in the calculation).
 * @return {number} floor(value+epsilon).
 */
declare function fuzzyFloor(value: number, epsilon?: number): number;

/**
 * Calculates a fuzzy ceil to the given value.
 *
 * @param  {number} value - The value to ceil.
 * @param  {number} [epsilon=0.0001] - The epsilon (a small value used in the calculation).
 * @return {number} ceiling(value+epsilon).
 */
declare function fuzzyCeil(value: number, epsilon?: number): number;

/**
 * Two numbers are fuzzyEqual if their difference is less than epsilon.
 *
 * @param  {number} a - The first number to compare.
 * @param  {number} b - The second number to compare.
 * @param  {number} [epsilon=0.0001] - The epsilon (a small value used in the calculation).
 * @return {boolean} True if |a-b|<epsilona otherwise false.
 */
declare function fuzzyEqual(a: number, b: number, epsilon?: number): boolean;

/**
 * A is fuzzyGreaterThan B if it is more than B - epsilon.
 *
 * @param  {number} a - The first number to compare.
 * @param  {number} b - The second number to compare.
 * @param  {number} [epsilon=0.0001] - The epsilon (a small value used in the calculation).
 * @return {boolean} True if a>b-epsilon.
 */
declare function fuzzyGreaterThan(a: number, b: number, epsilon?: number): boolean;

/**
 * A is fuzzyLessThan B if it is less than B + epsilon.
 *
 * @param  {number} a - The first number to compare.
 * @param  {number} b - The second number to compare.
 * @param  {number} [epsilon=0.0001] - The epsilon (a small value used in the calculation).
 * @return {boolean} True if a<b+epsilon.
 */
declare function fuzzyLessThan(a: number, b: number, epsilon?: number): boolean;

/**
 * Adds the given amount to the value, but never lets the value go over the specified maximum.
 *
 * @param {number} value - The value to add the amount to.
 * @param {number} amount - The amount to add to the value.
 * @param {number} max - The maximum the value is allowed to be.
 * @return {number} The new value.
 */
declare function maxAdd(value: number, amount: number, max: number): number;

/**
 * Subtracts the given amount from the value, but never lets the value go below the specified minimum.
 *
 * @param {number} value - The base value.
 * @param {number} amount - The amount to subtract from the base value.
 * @param {number} min - The minimum the value is allowed to be.
 * @return {number} The new value.
 */
declare function minSub(value: number, amount: number, min: number): number;

/**
 * Returns true if the number given is odd.
 *
 * @param  {number} number - The number to check.
 * @return {boolean} True if the given number is odd. False if the given number is even.
 */
declare function isOdd(number: number): boolean;

/**
 * Returns true if the number given is even.
 *
 * @param  {number} number - The number to check.
 * @return {boolean} True if the given number is even. False if the given number is false.
 */
declare function isEven(number: number): boolean;

/**
 * Checks if a number is a power of two.
 *
 * @param   {number}  value Number to test.
 * @returns {boolean} returns true if the value is power of two.
 */
declare function isPowerOfTwo(value: number): boolean;

/**
 * Returns the closest power of two value.
 *
 * @param  {number} value - Value.
 * @return {number} The nearest power of 2i.
 */
declare function closestPowerOfTwo(value: number): number;

/**
 * Returns the next power of two value.
 *
 * @param  {number} v - Value.
 * @return {number} The next power of two.
 */
declare function nextPowerOfTwo(v: number): number;

/**
 * Work out what percentage value `a` is of value `b` using the given base.
 * Clamps returned value between 0-1.
 *
 * @param  {number} a - The percent to work out.
 * @param  {number} b - The value you wish to get the percentage of.
 * @param  {number} [base=0] - The base value.
 * @return {number} The percentage a is of b, clamped between 0 and 1.
 */
declare function percent01(a: number, b: number, base?: number): number;

/**
 * Return the avarage of all values passed to the function.
 *
 * @param  {...number} numbers - The numbers to average.
 * @return {number} The average of all given values.
 */
declare function average(...numbers: number[]): number;

/**
 * The absolute difference between two values.
 *
 * @param {number} a - The first value to check.
 * @param {number} b - The second value to check.
 * @return {number} The absolute difference between the two values.
 */
declare function difference(a: number, b: number): number;

/**
 * Checks if two values are within the given tolerance of each other.
 *
 * @param {number} a - The first number to check
 * @param {number} b - The second number to check
 * @param {number} tolerance - The tolerance. Anything equal to or less than this is considered within the range.
 * @return {boolean} True if a is <= tolerance of b.
 */
declare function within(a: number, b: number, tolerance: number): boolean;

/**
 * Calculates the shortest difference between two given angles given in radians.
 *
 * @param  {number} a - Current.
 * @param  {number} b - Target.
 * @return {number} The distance.
 * @see {@link https://docs.unity3d.com/ScriptReference/Mathf.DeltaAngle.html}
 */
declare function deltaAngleRad(a: number, b: number): number;

/**
 * Compute the fractional part of the argument.
 *
 * @param  {number} v - Specify the value to evaluate.
 * @return {number} Returns the fractional part of x.
 * @see {@link https://www.opengl.org/sdk/docs/man/html/fract.xhtml}
 */
declare function fract(v: number): number;

/**
 * Compute value of one parameter modulo another.
 *
 * @param  {number} a - Value a.
 * @param  {number} n - Value b.
 * @return {number} Returns the value of x modulo n.
 * @see {@link https://www.opengl.org/sdk/docs/man4/html/mod.xhtml}
 */
declare function mod(a: number, n: number): number;

/**
 * Same as Lerp but makes sure the values interpolate correctly when they wrap around 2 radians.
 *
 * @param  {number} a - The start value.
 * @param  {number} b - The end value.
 * @param  {number} t - Value to inerpolate.
 * @return {number} The interpolated value.
 */
declare function lerpAngleRad(a: number, b: number, t: number): number;

/**
 * Converts the given value from gamma (sRGB) to linear color space.
 *
 * @param  {number} v - Gamma value.
 * @return {number} Value in linear color space.
 * @see {@link https://docs.unity3d.com/ScriptReference/Mathf.GammaToLinearSpace.html}
 */
declare function gammaToLinearSpace(v: number): number;

/**
 * Converts the given value from linear to gamma (sRGB) color space.
 *
 * @param  {number} v - Linear color space value.
 * @return {number} Value in gamma.
 * @see {@link https://docs.unity3d.com/ScriptReference/Mathf.LinearToGammaSpace.html}
 */
declare function linearToGammaSpace(v: number): number;

/**
 * Almost Identity.
 *
 * @param  {number} x - Input value.
 * @param  {number} m - Threshold.
 * @param  {number} n - The value to take when x is zero.
 * @return {number} Smoothed value.
 * @see {@link http://www.iquilezles.org/www/articles/functions/functions.htm}
 */
declare function almostIdentity(x: number, m: number, n: number): number;

/**
 * Impulse.
 *
 * @param  {number} k - Stretching of the function. Max is 1.0.
 * @param  {number} x - Input value.
 * @return {number} Impulse.
 * @see {@link http://www.iquilezles.org/www/articles/functions/functions.htm}
 */
declare function impulse(k: number, x: number): number;

/**
 * Cubic Pulse.
 *
 * @param  {number} c - Edge 1.
 * @param  {number} w - Edge 2.
 * @param  {number} x - Source value for interpolation.
 * @return {number} Cubic pulse.
 * @see {@link http://www.iquilezles.org/www/articles/functions/functions.htm}
 */
declare function cubicPulse(c: number, w: number, x: number): number;

/**
 * ExpStep.
 *
 * @param  {number} x - Value to be used to generate the step function.
 * @param  {number} k - Edge of the step.
 * @param  {number} n - n value.
 * @return {number} Exponential step.
 * @see {@link http://www.iquilezles.org/www/articles/functions/functions.htm}
 */
declare function expStep(x: number, k: number, n: number): number;

/**
 * Remap the 0..1 interval into 0..1 parabola, such that the corners are remaped to 0 and the center to 1.
 * In other words, parabola(0) = parabola(1) = 0, and parabola(1/2) = 1.
 *
 * @param  {number} x - Coordinate on X axis.
 * @param  {number} k - Value to map.
 * @return {number} Mapped value.
 * @see {@link http://www.iquilezles.org/www/articles/functions/functions.htm}
 */
declare function parabola(x: number, k: number): number;

/**
 * Power Curve.
 *
 * @param  {number} x - Input value.
 * @param  {number} a - Edge 1.
 * @param  {number} b - Edge 2.
 * @return {number} Value.
 * @see {@link http://www.iquilezles.org/www/articles/functions/functions.htm}
 */
declare function powerCurve(x: number, a: number, b: number): number;

/**
 * Smooth Min.
 *
 * @param  {number} a - First value to compare.
 * @param  {number} b - Second value to compare.
 * @param  {number} k - Radious/distance of the smoothness.
 * @return {number} Smooth min output.
 * @see {@link http://iquilezles.org/www/articles/smin/smin.htm}
 */
declare function smoothMin(a: number, b: number, k: number): number;

/**
 * Smooth Max.
 *
 * @param  {number} a - First value to compare.
 * @param  {number} b - Second value to compare.
 * @param  {number} k - Radious/distance of the smoothness.
 * @return {number} Smooth min output.
 * @see {@link http://iquilezles.org/www/articles/smin/smin.htm}
 */
declare function smoothMax(a: number, b: number, k: number): number;

/**
 * Return delta time
 *
 * @param  {number} oldTime - Time previous frame in milliseconds
 * @param  {number} [newTime=Date.now()] - Time current frame in milliseconds
 * @return {number} Time difference in milliseconds
 */
declare function deltaTime(oldTime: number, newTime?: number): number;

/**
 * Compute the greatest common divisor using Euclid's algorithm.
 *
 * @param  {number} a - Value one.
 * @param  {number} b - Value two.
 * @return {number} Greatest common divisor.
 * @see {@link https://en.wikipedia.org/wiki/Greatest_common_divisor#Using_Euclid.27s_algorithm}
 */
declare function gcd(a: number, b: number): number;

/**
 * Compute the dot product of any pair of 2D vectors.
 *
 * @param  {number} x0 - First x start position.
 * @param  {number} y0 - First y start position.
 * @param  {number} x1 - First x end position.
 * @param  {number} y1 - First y end position.
 * @param  {number} x2 - Second x start position.
 * @param  {number} y2 - Second y start position.
 * @param  {number} x3 - Second x end position.
 * @param  {number} y3 - Second y end position.
 * @return {number} Dot product.
 */
declare function dotProduct(
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
 * @param  {number} x - Start of the range in which to interpolate.
 * @param  {number} y - End of the range in which to interpolate.
 * @param  {number} r - Value to use to interpolate between x and y.
 * @return {number} Lerped value
 * @see {@link https://www.opengl.org/sdk/docs/man/html/mix.xhtml}
 */
declare function lerp(x: number, y: number, r: number): number;

/**
 * Convert degrees to radians.
 *
 * @param  {number} degrees - Degrees.
 * @return {number} Angel in radians.
 */
declare function degToRad(degrees: number): number;

/**
 * Convert radians to degrees.
 *
 * @param  {number} radians - Radians.
 * @return {number} Angel in degrees.
 */
declare function radToDeg(radians: number): number;

/**
 * Calculates the linear parameter t that produces the interpolant value within the range [a, b].
 *
 * @param {number} a - The start value.
 * @param {number} b - The end value.
 * @param {number} v - The value.
 * @return {number} The result of the reverse interpolation.
 * @see {@link https://docs.unity3d.com/ScriptReference/Mathf.InverseLerp.html}
 */
declare function inverseLerp(a: number, b: number, v: number): number;

/**
 * Linearly interpolates between x and y by a with no limit to a.
 *
 * @param  {number} x - The start value.
 * @param  {number} y - The end value.
 * @param  {number} a - The interpolation between the two floats.
 * @return {number} The float value as a result from the linear interpolation.
 * @see {@link https://docs.unity3d.com/ScriptReference/Mathf.LerpUnclamped.html}
 */
declare function lerpUnclamped(x: number, y: number, a: number): number;

/**
 * Calculates the shortest difference between two given angles given in degrees.
 *
 * @param  {number} a - Current.
 * @param  {number} b - Target.
 * @return {number} The distance.
 * @see {@link https://docs.unity3d.com/ScriptReference/Mathf.DeltaAngle.html}
 */
declare function deltaAngleDeg(a: number, b: number): number;

/**
 * Same as Lerp but makes sure the values interpolate correctly when they wrap around 360 degrees.
 *
 * @param  {number} a - The start value.
 * @param  {number} b - The end value.
 * @param  {number} t - Value to inerpolate.
 * @return {number} The interpolated value.
 * @see {@link https://docs.unity3d.com/ScriptReference/Mathf.LerpAngle.html}
 */
declare function lerpAngleDeg(a: number, b: number, t: number): number;

export {
    almostIdentity,
    average,
    clamp,
    clamp01,
    closestPowerOfTwo,
    cubicPulse,
    degToRad,
    degToRad as toRadians,
    deltaAngleDeg,
    deltaAngleDeg as deltaAngle,
    deltaAngleRad,
    deltaTime,
    diagonal,
    difference,
    distance,
    dotProduct,
    expStep,
    fract,
    fuzzyCeil,
    fuzzyEqual,
    fuzzyFloor,
    fuzzyGreaterThan,
    fuzzyLessThan,
    gammaToLinearSpace,
    gcd,
    impulse,
    inverseLerp,
    inverseLerp as inverseMix,
    isEven,
    isOdd,
    isPowerOfTwo,
    lerp,
    lerp as mix,
    lerpAngleDeg,
    lerpAngleDeg as lerpAngle,
    lerpAngleRad,
    lerpUnclamped,
    lerpUnclamped as mixUnclamped,
    linearToGammaSpace,
    map,
    maxAdd,
    minSub,
    mod,
    nextPowerOfTwo,
    normalize,
    parabola,
    percent01,
    powerCurve,
    radToDeg,
    radToDeg as toDegrees,
    randomFloat,
    randomInt,
    randomSign,
    smoothMax,
    smoothMin,
    smoothStep,
    step,
    within,
    wrap,
};
