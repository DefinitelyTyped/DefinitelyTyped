// Type definitions for numjs 0.13
// Project: https://github.com/nicolaspanel/numjs#readme
// Definitions by: taoqf <https://github.com/taoqf>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export as namespace nj;
import * as NdArray from 'ndarray';

export type ndArray = NdArray.Data;
export type njArray = ndArray | NdArray;
export type Param = njArray | number;

/**
 * Return absolute value of the input array, element-wise.
 *
 * @param {Param} x
 * @returns {NdArray}
 */
export function abs(x: nj.Param): NdArray;

/**
 * Add arguments, element-wise.
 *
 * @param {Param} a
 * @param {Param} b
 * @returns {NdArray}
 */
export function add(a: nj.Param, b: nj.Param): NdArray;

/**
 * Return evenly spaced values within a given interval.
 *
 * @param {number} [start = 0] Start of interval. The interval includes this value.
 * @param {number} stop End of interval. The interval does not include this value.
 * @param {number} [step = 1] Spacing between values. The default step size is 1. If step is specified, start must also be given.
 * @param {(NdArray.ndType)} [dtype = Array] The type of the output array.
 * @returns {NdArray} Array of evenly spaced values.
 */
export function arange(stop: number): NdArray;
export function arange(start: number, stop: number): NdArray;
export function arange(stop: number, dtype: NdArray.ndType): NdArray;
export function arange(start: number, stop: number, dtype: NdArray.ndType): NdArray;
export function arange(start: number, stop: number, step: number): NdArray;
export function arange(start: number, stop: number, step: number, dtype: NdArray.ndType): NdArray;

/**
 * Return trigonometric inverse cosine of the input array, element-wise.
 *
 * @param {Param} x
 * @returns {NdArray}
 */
export function arccos(x: nj.Param): NdArray;

/**
 * Return trigonometric inverse sine of the input array, element-wise.
 *
 * @param {Param} x
 * @returns {NdArray}
 */
export function arcsin(x: nj.Param): NdArray;

/**
 * Return trigonometric inverse tangent of the input array, element-wise.
 *
 * @param {Param} x
 * @returns {NdArray}
 */
export function arctan(x: nj.Param): NdArray;

/**
 * Clip (limit) the values in an array between min and max, element-wise.
 *
 * @param {Param} x
 * @param {number} [min = 0]
 * @param {number} [max = 1]
 * @returns {NdArray}
 */
export function clip(x: nj.Param, min?: number, max?: number): NdArray;
/**
 * Join given arrays along the last axis.
 *
 * @param {(...njArray[])} arrays
 * @returns {NdArray}
 */
export function concatenate(...arrays: nj.njArray[]): NdArray;

/**
 * Convolve 2 N-dimensionnal arrays
 *
 * @param {njArray} a
 * @param {njArray} b
 * @returns {NdArray}
 */
export function convolve(a: nj.njArray, b: nj.njArray): NdArray;

/**
 * Return trigonometric cosine of the input array, element-wise.
 *
 * @param {Param} x
 * @returns {NdArray}
 */
export function cos(x: nj.Param): NdArray;

/**
 * Divide `a` by `b`, element-wise.
 *
 * @param {njArray} a
 * @param {Param} b
 * @returns {NdArray}
 */
export function divide(a: nj.njArray, b: nj.Param): NdArray;

/**
 * Dot product of two arrays. WARNING: supported products are: - matrix dot matrix - vector dot vector - matrix dot vector - vector dot matrix
 *
 * @param {njArray} a
 * @param {njArray} b
 * @returns {NdArray}
 */
export function dot(a: nj.njArray, b: nj.njArray): NdArray;

/**
 * Return a new array of given shape and type, filled with `undefined` values.
 *
 * @param {(nj.ndArray | number)} shape	Shape of the new array, e.g., [2, 3] or 2.
 * @param {NdArray.ndType} [dtype]	The type of the output array.
 * @returns {NdArray}	Array of `undefined` values with the given shape and dtype
 */
export function empty(shape: nj.ndArray | number, dtype?: NdArray.ndType): NdArray;

/**
 * Return true if two arrays have the same shape and elements, false otherwise.
 *
 * @param {njArray} a
 * @param {njArray} b
 * @returns {boolean}
 */
export function equal(a: nj.njArray, b: nj.njArray): boolean;

/**
 * Calculate the exponential of all elements in the input array, element-wise.
 *
 * @param {Param} x
 * @returns {NdArray}
 */
export function exp(x: nj.Param): NdArray;

/**
 * Convolve 2 N-dimensionnal arrays using Fast Fourier Transform (FFT)
 *
 * @param {njArray} a
 * @param {njArray} b
 * @returns {NdArray}
 */
export function fftconvolve(a: nj.njArray, b: nj.njArray): NdArray;

/**
 * Return a copy of the array collapsed into one dimension using row-major order (C-style)
 *
 * @param {njArray} array
 * @returns {NdArray}
 */
export function flatten(array: nj.njArray): NdArray;

export function getRawData(array: ndArray): Uint8Array;
export function setRawData(array: ndArray, data: nj.ndArray): Uint8Array;

/**
 * Return the maximum value of the array
 *
 * @param {Param} x
 * @returns {number}
 */
export function max(x: nj.Param): number;

/**
 * Return the arithmetic mean of input array elements.
 *
 * @param {Param} x
 * @returns {number}
 */
export function mean(x: nj.Param): number;

/**
 * Return the minimum value of the array
 *
 * @param {Param} x
 * @returns {number}
 */
export function min(x: nj.Param): number;

/**
 * Multiply arguments, element-wise.
 *
 * @param {njArray} a
 * @param {Param} b
 * @returns {NdArray}
 */
export function multiply(a: nj.njArray, b: nj.Param): NdArray;

/**
 * Return the inverse of the input array, element-wise.
 *
 * @param {Param} x
 * @returns {number}
 */
export function negative(x: nj.Param): number;

/**
 * Return a new array of given shape and type, filled with ones.
 *
 * @param {(nj.ndArray | number)} shape Shape of the new array, e.g., [2, 3] or 2.
 * @param {NdArray.dtType} [dtype] The type of the output array.
 * @returns {NdArray}	Array of ones with the given shape and dtype
 */
export function ones(shape: nj.ndArray | number, dtype?: NdArray.dtType): NdArray;

/**
 * Raise first array elements to powers from second array, element-wise.
 *
 * @param {Param} x1
 * @param {Param} x2
 * @returns {NdArray}
 */
export function power(x1: nj.Param, x2: nj.Param): NdArray;

/**
 * Create an array of the given shape and propagate it with random samples from a uniform distribution over [0, 1].
 *
 * @param {(nj.ndArray | number)} [shape]	he dimensions of the returned array, should all be positive integers
 * @returns {NdArray}
 */
export function random(shape?: nj.ndArray | number): NdArray;

/**
 * Gives a new shape to an array without changing its data.
 *
 * @param {njArray} array
 * @param {ndArray} shape The new shape should be compatible with the original shape. If an integer, then the result will be a 1-D array of that length
 * @returns {NdArray}
 */
export function reshape(array: nj.njArray, shape: NdArray): NdArray;

/**
 * Round an array to the to the nearest integer.
 *
 * @param {njArray} x
 * @returns {NdArray}
 */
export function round(x: nj.njArray): NdArray;

/**
 * Return the sigmoid of the input array, element-wise.
 *
 * @param {Param} x
 * @param {number} [t = 1]	stifness parameter
 * @returns {NdArray}
 */
export function sigmoid(x: nj.Param, t?: number): NdArray;

/**
 * Return trigonometric sine of the input array, element-wise.
 *
 * @param {Param} x
 * @returns {NdArray}
 */
export function sin(x: nj.Param): NdArray;

/**
 * Return the softmax, or normalized exponential, of the input array, element-wise.
 *
 * @param {Param} x
 * @returns {NdArray}
 */
export function softmax(x: nj.Param): NdArray;

/**
 * Calculate the positive square-root of all elements in the input array, element-wise.
 *
 * @param {Param} x
 * @returns {NdArray}
 */
export function sqrt(x: nj.Param): NdArray;

/**
 * Returns the standard deviation, a measure of the spread of a distribution, of the input array elements.
 *
 * @param {Param} x
 * @returns {number}
 */
export function std(x: nj.Param): number;

/**
 * Subtract second argument from the first, element-wise.
 *
 * @param {Param} a
 * @param {Param} b
 * @returns {number}
 */
export function subtract(a: nj.Param, b: nj.Param): number;

/**
 * Return the sum of input array elements.
 *
 * @param {Param} x
 * @returns {number}
 */
export function sum(x: nj.Param): number;

/**
 * Return trigonometric tangent of the input array, element-wise.
 *
 * @param {Param} x
 * @returns {NdArray}
 */
export function tan(x: nj.Param): NdArray;

/**
 * Return hyperbolic tangent of the input array, element-wise.
 *
 * @param {Param} x
 * @returns {NdArray}
 */
export function tanh(x: nj.Param): NdArray;

/**
 * Permute the dimensions of the input array according to the given axes.
 *
 * @param {nj.Param} x
 * @param {number} [axes]
 * @returns {numjs}
 * @example
 *
 * arr = nj.arange(6).reshape(1,2,3)
 * // array([[[ 0, 1, 2],
 * //         [ 3, 4, 5]]])
 * arr.T
 * // array([[[ 0],
 * //         [ 3]],
 * //        [[ 1],
 * //         [ 4]],
 * //        [[ 2],
 * //         [ 5]]])
 * arr.transpose(1,0,2)
 * // array([[[ 0, 1, 2]],
 * //        [[ 3, 4, 5]]])
 */
export function transpose(x: nj.Param, axes?: number): NdArray;

/**
 * Return a new array of given shape and type, filled with zeros.
 *
 * @param {nj.ndArray} shape Shape of the new array, e.g., [2, 3] or 2.
 * @param {NdArray.dtType} [dtype = Array] The type of the output array.
 * @returns {numjs} Array of zeros with the given shape and dtype
 */
export function zeros(shape: nj.ndArray | number, dtype?: NdArray.dtType): NdArray;
