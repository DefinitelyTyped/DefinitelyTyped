/**
 * [x, y]
 */
export type DataPoint = [number, number];

export interface Options {
    /**
     * The number of decimal places to round to.
     * This is used to round the calculated fitting coefficients,
     * the output predictions, and the value of r^2.
     */
    precision?: number | undefined;
    /**
     * The number of terms to solve for (and therefore
     * the number of coefficients to calculate). Only
     * relevant for polynomial fitting.
     */
    order?: number | undefined;
}

export interface Result {
    /**
     * A human-readable string representation of the derived
     * formula in the form y = f(x) where f depends on the
     * fitting method used and the coefficients that were
     * calculated.
     */
    string: string;
    /**
     * For each point (x, y) in the input data, a point
     * corresponding to the regression prediction for that
     * value of x.
     * One could use this to directly evaluate the quality
     * of the fit.
     */
    points: ReadonlyArray<DataPoint>;
    /**
     * Function that takes an arbitrary value of x and
     * produces a coordinate representing the y-value of
     * the regression curve at that point.
     * Both the resulting x- and y-values are rounded to
     * a number of decimal places defined in the options
     * (default is 2).
     */
    predict: (x: number) => DataPoint;
    /**
     * The generated coefficients describing the equation
     * of best fit.
     *
     * For a linear fit, the coefficients are `[a, b]` in `y = a * x + b`.
     * For an exponential fit, the coefficients are `[a, b]` in `y = a * e ^ (b * x)`.
     * For a logarithmic fit, the coefficients are `[a, b]` in `y = a + b * ln(x)`.
     * For a power fit, the coefficients are `[a, b]` in `y = a * x^b`.
     * For a polynomial fit, the coefficients are `[a0, a1, a2, ...aN]` in:
     * ```y = a0 * x ^ N + a1 * x ^ (N - 1) + ... + aN```
     * where N is the order (default 2).
     */
    equation: number[];
    /**
     * The value of R squared, a statistical measure of the conformance of the
     * fitted curve to the input data where 1 is an exact fit and 0 is no fit
     * at all.
     *
     * This value is rounded to the number of decimal places defined by
     * the precision option (default 2).
     */
    r2: number;
}

export function _round(number: number, precision: number): number;
export function linear(
    data: ReadonlyArray<DataPoint>,
    options?: Options,
): Result;
export function exponential(
    data: ReadonlyArray<DataPoint>,
    options?: Options,
): Result;
export function logarithmic(
    data: ReadonlyArray<DataPoint>,
    options?: Options,
): Result;
export function power(
    data: ReadonlyArray<DataPoint>,
    options?: Options,
): Result;
export function polynomial(
    data: ReadonlyArray<DataPoint>,
    options?: Options,
): Result;
