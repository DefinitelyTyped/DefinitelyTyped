import { TypedArray } from "../core/BufferAttribute.js";

/**
 * Abstract base class of interpolants over parametric samples.
 *
 * The parameter domain is one dimensional, typically the time or a path
 * along a curve defined by the data.
 *
 * The sample values can have any dimensionality and derived classes may
 * apply special interpretations to the data.
 *
 * This class provides the interval seek in a Template Method, deferring
 * the actual interpolation to derived classes.
 *
 * Time complexity is O(1) for linear access crossing at most two points
 * and O(log N) for random access, where N is the number of positions.
 *
 * References: {@link http://www.oodesign.com/template-method-pattern.html}
 *
 * @abstract
 */
export abstract class Interpolant<TSettings = {}> {
    /**
     * Constructs a new interpolant.
     *
     * @param {TypedArray} parameterPositions - The parameter positions hold the interpolation factors.
     * @param {TypedArray} sampleValues - The sample values.
     * @param {number} sampleSize - The sample size
     * @param {TypedArray} [resultBuffer] - The result buffer.
     */
    constructor(
        parameterPositions: TypedArray,
        sampleValues: TypedArray,
        sampleSize: number,
        resultBuffer?: TypedArray,
    );
    /**
     * The parameter positions.
     *
     * @type {TypedArray}
     */
    parameterPositions: TypedArray;
    /**
     * The result buffer.
     *
     * @type {TypedArray}
     */
    resultBuffer: TypedArray;
    /**
     * The sample values.
     *
     * @type {TypedArray}
     */
    sampleValues: TypedArray;
    /**
     * The value size.
     *
     * @type {TypedArray}
     */
    valueSize: TypedArray;
    /**
     * The interpolation settings.
     *
     * @type {?Object}
     * @default null
     */
    settings: TSettings | null;
    /**
     * The default settings object.
     *
     * @type {Object}
     */
    DefaultSettings_: TSettings;
    /**
     * Evaluate the interpolant at position `t`.
     *
     * @param {number} t - The interpolation factor.
     * @return {TypedArray} The result buffer.
     */
    evaluate(t: number): TypedArray;
    /**
     * Returns the interpolation settings.
     *
     * @return {Object} The interpolation settings.
     */
    getSettings_(): unknown;
    /**
     * Copies a sample value to the result buffer.
     *
     * @param {number} index - An index into the sample value buffer.
     * @return {TypedArray} The result buffer.
     */
    copySampleValue_(index: number): TypedArray;
    /**
     * Copies a sample value to the result buffer.
     *
     * @abstract
     * @param {number} i1 - An index into the sample value buffer.
     * @param {number} t0 - The previous interpolation factor.
     * @param {number} t - The current interpolation factor.
     * @param {number} t1 - The next interpolation factor.
     * @return {TypedArray} The result buffer.
     */
    abstract interpolate_(i1: number, t0: number, t: number, t1: number): TypedArray;
    /**
     * Optional method that is executed when the interval has changed.
     *
     * @param {number} i1 - An index into the sample value buffer.
     * @param {number} t0 - The previous interpolation factor.
     * @param {number} t - The current interpolation factor.
     */
    intervalChanged_(i1: number, t0: number, t: number): void;
}
