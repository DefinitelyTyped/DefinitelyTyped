declare module goog {
    function require(name: 'goog.math'): typeof goog.math;
}

declare module goog.math {

    /**
     * Returns a random integer greater than or equal to 0 and less than {@code a}.
     * @param {number} a  The upper bound for the random integer (exclusive).
     * @return {number} A random integer N such that 0 <= N < a.
     */
    function randomInt(a: number): number;

    /**
     * Returns a random number greater than or equal to {@code a} and less than
     * {@code b}.
     * @param {number} a  The lower bound for the random number (inclusive).
     * @param {number} b  The upper bound for the random number (exclusive).
     * @return {number} A random number N such that a <= N < b.
     */
    function uniformRandom(a: number, b: number): number;

    /**
     * Takes a number and clamps it to within the provided bounds.
     * @param {number} value The input number.
     * @param {number} min The minimum value to return.
     * @param {number} max The maximum value to return.
     * @return {number} The input number if it is within bounds, or the nearest
     *     number within the bounds.
     */
    function clamp(value: number, min: number, max: number): number;

    /**
     * The % operator in JavaScript returns the remainder of a / b, but differs from
     * some other languages in that the result will have the same sign as the
     * dividend. For example, -1 % 8 == -1, whereas in some other languages
     * (such as Python) the result would be 7. This function emulates the more
     * correct modulo behavior, which is useful for certain applications such as
     * calculating an offset index in a circular list.
     *
     * @param {number} a The dividend.
     * @param {number} b The divisor.
     * @return {number} a % b where the result is between 0 and b (either 0 <= x < b
     *     or b < x <= 0, depending on the sign of b).
     */
    function modulo(a: number, b: number): number;

    /**
     * Performs linear interpolation between values a and b. Returns the value
     * between a and b proportional to x (when x is between 0 and 1. When x is
     * outside this range, the return value is a linear extrapolation).
     * @param {number} a A number.
     * @param {number} b A number.
     * @param {number} x The proportion between a and b.
     * @return {number} The interpolated value between a and b.
     */
    function lerp(a: number, b: number, x: number): number;

    /**
     * Tests whether the two values are equal to each other, within a certain
     * tolerance to adjust for floating point errors.
     * @param {number} a A number.
     * @param {number} b A number.
     * @param {number=} opt_tolerance Optional tolerance range. Defaults
     *     to 0.000001. If specified, should be greater than 0.
     * @return {boolean} Whether {@code a} and {@code b} are nearly equal.
     */
    function nearlyEquals(a: number, b: number, opt_tolerance?: number): boolean;

    /**
     * Normalizes an angle to be in range [0-360). Angles outside this range will
     * be normalized to be the equivalent angle with that range.
     * @param {number} angle Angle in degrees.
     * @return {number} Standardized angle.
     */
    function standardAngle(angle: number): number;

    /**
     * Normalizes an angle to be in range [0-2*PI). Angles outside this range will
     * be normalized to be the equivalent angle with that range.
     * @param {number} angle Angle in radians.
     * @return {number} Standardized angle.
     */
    function standardAngleInRadians(angle: number): number;

    /**
     * Converts degrees to radians.
     * @param {number} angleDegrees Angle in degrees.
     * @return {number} Angle in radians.
     */
    function toRadians(angleDegrees: number): number;

    /**
     * Converts radians to degrees.
     * @param {number} angleRadians Angle in radians.
     * @return {number} Angle in degrees.
     */
    function toDegrees(angleRadians: number): number;

    /**
     * For a given angle and radius, finds the X portion of the offset.
     * @param {number} degrees Angle in degrees (zero points in +X direction).
     * @param {number} radius Radius.
     * @return {number} The x-distance for the angle and radius.
     */
    function angleDx(degrees: number, radius: number): number;

    /**
     * For a given angle and radius, finds the Y portion of the offset.
     * @param {number} degrees Angle in degrees (zero points in +X direction).
     * @param {number} radius Radius.
     * @return {number} The y-distance for the angle and radius.
     */
    function angleDy(degrees: number, radius: number): number;

    /**
     * Computes the angle between two points (x1,y1) and (x2,y2).
     * Angle zero points in the +X direction, 90 degrees points in the +Y
     * direction (down) and from there we grow clockwise towards 360 degrees.
     * @param {number} x1 x of first point.
     * @param {number} y1 y of first point.
     * @param {number} x2 x of second point.
     * @param {number} y2 y of second point.
     * @return {number} Standardized angle in degrees of the vector from
     *     x1,y1 to x2,y2.
     */
    function angle(x1: number, y1: number, x2: number, y2: number): number;

    /**
     * Computes the difference between startAngle and endAngle (angles in degrees).
     * @param {number} startAngle  Start angle in degrees.
     * @param {number} endAngle  End angle in degrees.
     * @return {number} The number of degrees that when added to
     *     startAngle will result in endAngle. Positive numbers mean that the
     *     direction is clockwise. Negative numbers indicate a counter-clockwise
     *     direction.
     *     The shortest route (clockwise vs counter-clockwise) between the angles
     *     is used.
     *     When the difference is 180 degrees, the function returns 180 (not -180)
     *     angleDifference(30, 40) is 10, and angleDifference(40, 30) is -10.
     *     angleDifference(350, 10) is 20, and angleDifference(10, 350) is -20.
     */
    function angleDifference(startAngle: number, endAngle: number): number;

    /**
     * Returns the sign of a number as per the "sign" or "signum" function.
     * @param {number} x The number to take the sign of.
     * @return {number} -1 when negative, 1 when positive, 0 when 0.
     */
    function sign(x: number): number;

    /**
     * JavaScript implementation of Longest Common Subsequence problem.
     * http://en.wikipedia.org/wiki/Longest_common_subsequence
     *
     * Returns the longest possible array that is subarray of both of given arrays.
     *
     * @param {Array<Object>} array1 First array of objects.
     * @param {Array<Object>} array2 Second array of objects.
     * @param {Function=} opt_compareFn Function that acts as a custom comparator
     *     for the array ojects. Function should return true if objects are equal,
     *     otherwise false.
     * @param {Function=} opt_collectorFn Function used to decide what to return
     *     as a result subsequence. It accepts 2 arguments: index of common element
     *     in the first array and index in the second. The default function returns
     *     element from the first array.
     * @return {!Array<Object>} A list of objects that are common to both arrays
     *     such that there is no common subsequence with size greater than the
     *     length of the list.
     */
    function longestCommonSubsequence(array1: Array<Object>, array2: Array<Object>, opt_compareFn?: Function, opt_collectorFn?: Function): Array<Object>;

    /**
     * Returns the sum of the arguments.
     * @param {...number} var_args Numbers to add.
     * @return {number} The sum of the arguments (0 if no arguments were provided,
     *     {@code NaN} if any of the arguments is not a valid number).
     */
    function sum(...var_args: number[]): number;

    /**
     * Returns the arithmetic mean of the arguments.
     * @param {...number} var_args Numbers to average.
     * @return {number} The average of the arguments ({@code NaN} if no arguments
     *     were provided or any of the arguments is not a valid number).
     */
    function average(...var_args: number[]): number;

    /**
     * Returns the unbiased sample variance of the arguments. For a definition,
     * see e.g. http://en.wikipedia.org/wiki/Variance
     * @param {...number} var_args Number samples to analyze.
     * @return {number} The unbiased sample variance of the arguments (0 if fewer
     *     than two samples were provided, or {@code NaN} if any of the samples is
     *     not a valid number).
     */
    function sampleVariance(...var_args: number[]): number;

    /**
     * Returns the sample standard deviation of the arguments.  For a definition of
     * sample standard deviation, see e.g.
     * http://en.wikipedia.org/wiki/Standard_deviation
     * @param {...number} var_args Number samples to analyze.
     * @return {number} The sample standard deviation of the arguments (0 if fewer
     *     than two samples were provided, or {@code NaN} if any of the samples is
     *     not a valid number).
     */
    function standardDeviation(...var_args: number[]): number;

    /**
     * Returns whether the supplied number represents an integer, i.e. that is has
     * no fractional component.  No range-checking is performed on the number.
     * @param {number} num The number to test.
     * @return {boolean} Whether {@code num} is an integer.
     */
    function isInt(num: number): boolean;

    /**
     * Returns whether the supplied number is finite and not NaN.
     * @param {number} num The number to test.
     * @return {boolean} Whether {@code num} is a finite number.
     */
    function isFiniteNumber(num: number): boolean;

    /**
     * Returns the precise value of floor(log10(num)).
     * Simpler implementations didn't work because of floating point rounding
     * errors. For example
     * <ul>
     * <li>Math.floor(Math.log(num) / Math.LN10) is off by one for num == 1e+3.
     * <li>Math.floor(Math.log(num) * Math.LOG10E) is off by one for num == 1e+15.
     * <li>Math.floor(Math.log10(num)) is off by one for num == 1e+15 - 1.
     * </ul>
     * @param {number} num A floating point number.
     * @return {number} Its logarithm to base 10 rounded down to the nearest
     *     integer if num > 0. -Infinity if num == 0. NaN if num < 0.
     */
    function log10Floor(num: number): number;

    /**
     * A tweaked variant of {@code Math.floor} which tolerates if the passed number
     * is infinitesimally smaller than the closest integer. It often happens with
     * the results of floating point calculations because of the finite precision
     * of the intermediate results. For example {@code Math.floor(Math.log(1000) /
     * Math.LN10) == 2}, not 3 as one would expect.
     * @param {number} num A number.
     * @param {number=} opt_epsilon An infinitesimally small positive number, the
     *     rounding error to tolerate.
     * @return {number} The largest integer less than or equal to {@code num}.
     */
    function safeFloor(num: number, opt_epsilon?: number): number;

    /**
     * A tweaked variant of {@code Math.ceil}. See {@code goog.math.safeFloor} for
     * details.
     * @param {number} num A number.
     * @param {number=} opt_epsilon An infinitesimally small positive number, the
     *     rounding error to tolerate.
     * @return {number} The smallest integer greater than or equal to {@code num}.
     */
    function safeCeil(num: number, opt_epsilon?: number): number;
}
