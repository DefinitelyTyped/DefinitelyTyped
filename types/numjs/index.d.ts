// Type definitions for numjs 0.13
// Project: https://github.com/nicolaspanel/numjs#readme
// Definitions by: taoqf <https://github.com/taoqf>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export as namespace nj;
import * as BaseNdArray from 'ndarray';

export interface NdArray<T = number> extends BaseNdArray<T> {
	ndim: number;
	T: NdArray<T>;
	slice(...args: number[]): NdArray<T>;

	/**
	 * Return a copy of the array collapsed into one dimension using row-major order (C-style)
	 *
	 * @returns {NdArray}
	 */
	flatten<P>(): NdArray<P>;

	/**
	 * Permute the dimensions of the array.
	 *
	 * @param {...number} [axes]
	 * @returns {NdArray}
	 */
	transpose(): NdArray<T>;
	transpose(args: number[]): NdArray<T>;
	transpose(...args: number[]): NdArray<T>;

	/**
	 * Dot product of two arrays.
	 *
	 * @param {(Array|NdArray)} x
	 * @returns {NdArray}
	 */
	dot(x: njArray<T>): NdArray<T>;

	/**
	 * Assign `x` to the array, element-wise.
	 *
	 * @param {(NdArray|Array|number)} x
	 * @param {boolean} [copy=true]
	 * @returns {NdArray}
	 */
	assign(x: njParam<T>, copy?: boolean): NdArray<T>;

	/**
	 * Add `x` to the array, element-wise.
	 *
	 * @param {(NdArray|Array|number)} x
	 * @param {boolean} [copy=true]
	 * @returns {NdArray}
	 */
	add(x: njParam<T>, copy?: boolean): NdArray<T>;

	/**
	 * Subtract `x` to the array, element-wise.
	 *
	 * @param {(NdArray|Array|number)} x
	 * @param {boolean} [copy=true]
	 * @returns {NdArray}
	 */
	subtract(x: njParam<T>, copy?: boolean): NdArray<T>;

	/**
	 * Multiply array by `x`, element-wise.
	 *
	 * @param {(NdArray|Array|number)} x
	 * @param {boolean} [copy=true]
	 * @returns {NdArray}
	 */
	multiply(x: njParam<T>, copy?: boolean): NdArray<T>;

	/**
	 * Divide array by `x`, element-wise.
	 *
	 * @param {(NdArray|Array|number)} x
	 * @param {boolean} [copy=true]
	 * @returns {NdArray}
	 */
	divide(x: njParam<T>, copy?: boolean): NdArray<T>;

	/**
	 * Raise array elements to powers from given array, element-wise.
	 *
	 * @param {(NdArray|Array|number)} x
	 * @param {boolean} [copy=true] - set to false to modify the array rather than create a new one
	 * @returns {NdArray}
	 */
	pow(x: njParam<T>, copy?: boolean): NdArray<T>;

	/**
	 * Calculate the exponential of all elements in the array, element-wise.
	 *
	 * @param {boolean} [copy=true] - set to false to modify the array rather than create a new one
	 * @returns {NdArray}
	 */
	exp(copy?: boolean): NdArray<T>;

	/**
	 * Calculate the positive square-root of all elements in the array, element-wise.
	 *
	 * @param {boolean} [copy=true] - set to false to modify the array rather than create a new one
	 * @returns {NdArray}
	 */
	sqrt(copy?: boolean): NdArray<T>;

	/**
	 * Return the maximum value of the array
	 *
	 * @returns {Number}
	 */
	max(): T;

	/**
	 * Return the minimum value of the array
	 *
	 * @returns {Number}
	 */
	min(): T;

	/**
	 * Sum of array elements.
	 *
	 * @returns {number}
	 */
	sum(): T;

	/**
	 * Returns the standard deviation, a measure of the spread of a distribution, of the array elements.
	 *
	 * @param {object} {ddof:0}
	 * @returns {number}
	 */
	std(): number;

	/**
	 * Return the arithmetic mean of array elements.
	 *
	 * @returns {number}
	 */
	mean(): T;

	/**
	 * Converts {NdArray} to a native JavaScript {Array}
	 *
	 * @returns {Array}
	 */
	tolist(): T[];

	valueOf(): T[];

	/**
	 * Stringify the array to make it readable in the console, by a human.
	 *
	 * @returns {string}
	 */
	inspect(): string;

	/**
	 * Stringify object to JSON
	 * @returns {*}
	 */
	toJSON(): any;

	/**
	 * Create a full copy of the array
	 *
	 * @returns {NdArray}
	 */
	clone(): NdArray<T>;

	/**
	 * Return true if two arrays have the same shape and elements, false otherwise.
	 * @param {(Array|NdArray)} array
	 * @returns {boolean}
	 */
	equal<U>(array: njArray<U>): boolean;

	/**
	 * Round array to the to the nearest integer.
	 *
	 * @param {boolean} [copy=true]
	 * @returns {NdArray}
	 */
	round(copy?: boolean): NdArray<T>;

	/**
	 * Return the inverse of the array, element-wise.
	 *
	 * @returns {NdArray}
	 */
	negative(): NdArray<T>;

	diag(): NdArray<T>;

	iteraxis(axis: number, cb: (x: NdArray<T>, i: number) => any): void;

	/**
	 * Returns the discrete, linear convolution of the array using the given filter.
	 *
	 * @note: Arrays must have the same dimensions and `filter` must be smaller than the array.
	 * @note: The convolution product is only given for points where the signals overlap completely. Values outside the signal boundary have no effect. This behaviour is known as the 'valid' mode.
	 * @note: Use optimized code for 3x3, 3x3x1, 5x5, 5x5x1 filters, FFT otherwise.
	 *
	 * @param {Array|NdArray} filter
	 */
	convolve(filter: njArray<T>): NdArray<T>;

	fftconvolve(filter: njArray<T>): NdArray<T>;
}

export type ndArrayData<T> = BaseNdArray.Data<T>;
export type njArray<T> = ndArrayData<T> | NdArray<T>;
export type njParam<T> = njArray<T> | number;

/**
 * Return absolute value of the input array, element-wise.
 *
 * @param {Param} x
 * @returns {NdArray}
 */
export function abs<T = number>(x: njParam<T>): NdArray<T>;

/**
 * Add arguments, element-wise.
 *
 * @param {Param} a
 * @param {Param} b
 * @returns {NdArray}
 */
export function add<T = number>(a: njParam<T>, b: njParam<T>): NdArray<T>;

/**
 * Return evenly spaced values within a given interval.
 *
 * @param {number} [start = 0] Start of interval. The interval includes this value.
 * @param {number} stop End of interval. The interval does not include this value.
 * @param {number} [step = 1] Spacing between values. The default step size is 1. If step is specified, start must also be given.
 * @param {(NdArray.ndType)} [dtype = Array] The type of the output array.
 * @returns {NdArray} Array of evenly spaced values.
 */
export function arange<T = number>(stop: number): NdArray<T>;
export function arange<T = number>(start: number, stop: number): NdArray<T>;
export function arange<T = number>(stop: number, dtype: BaseNdArray.ndType<T>): NdArray<T>;
export function arange<T = number>(start: number, stop: number, dtype: BaseNdArray.ndType<T>): NdArray<T>;
export function arange<T = number>(start: number, stop: number, step: number): NdArray<T>;
export function arange<T = number>(start: number, stop: number, step: number, dtype: BaseNdArray.ndType<T>): NdArray<T>;

/**
 * Return trigonometric inverse cosine of the input array, element-wise.
 *
 * @param {Param} x
 * @returns {NdArray}
 */
export function arccos<T = number>(x: njParam<T>): NdArray<T>;

/**
 * Return trigonometric inverse sine of the input array, element-wise.
 *
 * @param {Param} x
 * @returns {NdArray}
 */
export function arcsin<T = number>(x: njParam<T>): NdArray<T>;

/**
 * Return trigonometric inverse tangent of the input array, element-wise.
 *
 * @param {Param} x
 * @returns {NdArray}
 */
export function arctan<T = number>(x: njParam<T>): NdArray<T>;

/**
 * Clip (limit) the values in an array between min and max, element-wise.
 *
 * @param {Param} x
 * @param {number} [min = 0]
 * @param {number} [max = 1]
 * @returns {NdArray}
 */
export function clip<T = number>(x: njParam<T>, min?: number, max?: number): NdArray<T>;
/**
 * Join given arrays along the last axis.
 *
 * @param {(...njArray[])} arrays
 * @returns {NdArray}
 */
export function concatenate<T = number>(...arrays: Array<njArray<T>>): NdArray<T>;

/**
 * Convolve 2 N-dimensionnal arrays
 *
 * @param {njArray} a
 * @param {njArray} b
 * @returns {NdArray}
 */
export function convolve<T = number>(a: njArray<T>, b: njArray<T>): NdArray<T>;

/**
 * Return trigonometric cosine of the input array, element-wise.
 *
 * @param {Param} x
 * @returns {NdArray}
 */
export function cos<T = number>(x: njParam<T>): NdArray<T>;

/**
 * Divide `a` by `b`, element-wise.
 *
 * @param {njArray} a
 * @param {Param} b
 * @returns {NdArray}
 */
export function divide<T = number>(a: njArray<T>, b: njParam<T>): NdArray<T>;

/**
 * Dot product of two arrays. WARNING: supported products are: - matrix dot matrix - vector dot vector - matrix dot vector - vector dot matrix
 *
 * @param {njArray} a
 * @param {njArray} b
 * @returns {NdArray}
 */
export function dot<T = number>(a: njArray<T>, b: njArray<T>): NdArray<T>;

/**
 * Return a new array of given shape and type, filled with `undefined` values.
 *
 * @param {(ndArray | number)} shape	Shape of the new array, e.g., [2, 3] or 2.
 * @param {NdArray.ndType} [dtype]	The type of the output array.
 * @returns {NdArray}	Array of `undefined` values with the given shape and dtype
 */
export function empty<T = number>(shape: ndArrayData<T> | number, dtype?: BaseNdArray.ndType<T>): NdArray<T>;

/**
 * Return true if two arrays have the same shape and elements, false otherwise.
 *
 * @param {njArray} a
 * @param {njArray} b
 * @returns {boolean}
 */
export function equal<T = number>(a: njArray<T>, b: njArray<T>): boolean;

/**
 * Calculate the exponential of all elements in the input array, element-wise.
 *
 * @param {Param} x
 * @returns {NdArray}
 */
export function exp<T = number>(x: njParam<T>): NdArray<T>;

/**
 * Convolve 2 N-dimensionnal arrays using Fast Fourier Transform (FFT)
 *
 * @param {njArray} a
 * @param {njArray} b
 * @returns {NdArray}
 */
export function fftconvolve<T = number>(a: njArray<T>, b: njArray<T>): NdArray<T>;

/**
 * Return a copy of the array collapsed into one dimension using row-major order (C-style)
 *
 * @param {njArray} array
 * @returns {NdArray}
 */
export function flatten<T = number>(array: njArray<T>): NdArray<T>;

export function getRawData<T = number>(array: ndArrayData<T>): Uint8Array;
export function setRawData<T = number>(array: ndArrayData<T>, data: ndArrayData<T>): Uint8Array;

/**
 * Return the maximum value of the array
 *
 * @param {Param} x
 * @returns {number}
 */
export function max<T = number>(x: njParam<T>): T;

/**
 * Return the arithmetic mean of input array elements.
 *
 * @param {Param} x
 * @returns {number}
 */
export function mean<T = number>(x: njParam<T>): T;

/**
 * Return the minimum value of the array
 *
 * @param {Param} x
 * @returns {number}
 */
export function min<T = number>(x: njParam<T>): T;

/**
 * Multiply arguments, element-wise.
 *
 * @param {njArray} a
 * @param {Param} b
 * @returns {NdArray}
 */
export function multiply<T = number>(a: njArray<T>, b: njParam<T>): NdArray<T>;

/**
 * Return the inverse of the input array, element-wise.
 *
 * @param {Param} x
 * @returns {number}
 */
export function negative<T = number>(x: njParam<T>): NdArray<T>;

/**
 * Return a new array of given shape and type, filled with ones.
 *
 * @param {(ndArray | number)} shape Shape of the new array, e.g., [2, 3] or 2.
 * @param {NdArray.dtType} [dtype] The type of the output array.
 * @returns {NdArray}	Array of ones with the given shape and dtype
 */
export function ones<T = number>(shape: ndArrayData<T> | number, dtype?: BaseNdArray.dtType): NdArray<T>;

/**
 * Raise first array elements to powers from second array, element-wise.
 *
 * @param {Param} x1
 * @param {Param} x2
 * @returns {NdArray}
 */
export function power<T = number>(x1: njParam<T>, x2: njParam<T>): NdArray<T>;

/**
 * Create an array of the given shape and propagate it with random samples from a uniform distribution over [0, 1].
 *
 * @param {(ndArray | number)} [shape]	he dimensions of the returned array, should all be positive integers
 * @returns {NdArray}
 */
export function random<T = number>(shape?: ndArrayData<T> | number): NdArray<T>;

/**
 * Gives a new shape to an array without changing its data.
 *
 * @param {njArray} array
 * @param {ndArray} shape The new shape should be compatible with the original shape. If an integer, then the result will be a 1-D array of that length
 * @returns {NdArray}
 */
export function reshape<T = number>(array: njArray<T>, shape: NdArray<T>): NdArray<T>;

/**
 * Round an array to the to the nearest integer.
 *
 * @param {njArray} x
 * @returns {NdArray}
 */
export function round<T = number>(x: njArray<T>): NdArray<T>;

/**
 * Return the sigmoid of the input array, element-wise.
 *
 * @param {Param} x
 * @param {number} [t = 1]	stifness parameter
 * @returns {NdArray}
 */
export function sigmoid<T = number>(x: njParam<T>, t?: number): NdArray<T>;

/**
 * Return trigonometric sine of the input array, element-wise.
 *
 * @param {Param} x
 * @returns {NdArray}
 */
export function sin<T = number>(x: njParam<T>): NdArray<T>;

/**
 * Return the softmax, or normalized exponential, of the input array, element-wise.
 *
 * @param {Param} x
 * @returns {NdArray}
 */
export function softmax<T = number>(x: njParam<T>): NdArray<T>;

/**
 * Calculate the positive square-root of all elements in the input array, element-wise.
 *
 * @param {Param} x
 * @returns {NdArray}
 */
export function sqrt<T = number>(x: njParam<T>): NdArray<T>;

/**
 * Returns the standard deviation, a measure of the spread of a distribution, of the input array elements.
 *
 * @param {Param} x
 * @returns {number}
 */
export function std<T = number>(x: njParam<T>): T;

/**
 * Subtract second argument from the first, element-wise.
 *
 * @param {Param} a
 * @param {Param} b
 * @returns {number}
 */
export function subtract<T = number>(a: njParam<T>, b: njParam<T>): T;

/**
 * Return the sum of input array elements.
 *
 * @param {Param} x
 * @returns {number}
 */
export function sum<T = number>(x: njParam<T>): T;

/**
 * Return trigonometric tangent of the input array, element-wise.
 *
 * @param {Param} x
 * @returns {NdArray}
 */
export function tan<T = number>(x: njParam<T>): NdArray<T>;

/**
 * Return hyperbolic tangent of the input array, element-wise.
 *
 * @param {Param} x
 * @returns {NdArray}
 */
export function tanh<T = number>(x: njParam<T>): NdArray<T>;

/**
 * Permute the dimensions of the input array according to the given axes.
 *
 * @param {Param} x
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
export function transpose<T = number>(x: njParam<T>, axes?: number): NdArray<T>;

/**
 * Return a new array of given shape and type, filled with zeros.
 *
 * @param {ndArray} shape Shape of the new array, e.g., [2, 3] or 2.
 * @param {NdArray.dtType} [dtype = Array] The type of the output array.
 * @returns {numjs} Array of zeros with the given shape and dtype
 */
export function zeros<T = number>(shape: ndArrayData<T> | number, dtype?: BaseNdArray.dtType): NdArray<T>;

export namespace errors {
	function ValueError(message?: string): Error;
	function ConfigError(message?: string): Error;
	function NotImplementedError(message?: string): Error;
}

export function broadcast<T, U>(shape1: T[], shape2: U[]): Array<T | U>;

export function fft<T = number>(x: njArray<T>): NdArray<T>;

export function ifft<T = number>(x: njArray<T>): NdArray<T>;

/**
 * Extract a diagonal or construct a diagonal array.
 *
 * @param {Array|NdArray} x
 * @returns {NdArray} a view a of the original array when possible, a new array otherwise
 */
export function diag<T = number>(x: njArray<T>): NdArray<T>;

/**
 * The identity array is a square array with ones on the main diagonal.
 * @param {number} Number of rows (and columns) in n x n output.
 * @param {(String|Object)}  [dtype=Array]  The type of the output array.
 * @return {Array} n x n array with its main diagonal set to one, and all other elements 0
 */
export function identity<T = number>(n: T, dtype?: BaseNdArray.dtType): NdArray<T>;

/**
 * Join a sequence of arrays along a new axis.
 * The axis parameter specifies the index of the new axis in the dimensions of the result.
 * For example, if axis=0 it will be the first dimension and if axis=-1 it will be the last dimension.
 * @param {Array} sequence of array_like
 * @param {number} [axis=0] The axis in the result array along which the input arrays are stacked.
 * @return {Array} The stacked array has one more dimension than the input arrays.
 */
export function stack<T = number>(arrays: Array<NdArray<T>>, axis?: number): NdArray<T>;

export namespace images {
	namespace data {
		/**
		 * @property {NdArray} digit - 28x28 grayscale image with an handwritten digit extracted from MNIST database
		 */
		const digit: NdArray<number>;
		/**
		 * @property {NdArray} five - 28x28 grayscale image with an handwritten digit extracted from MNIST database
		 */
		const five: NdArray<number>;
		/**
		 * @property {NdArray} node - 300x600 COLOR image representing Node.js's logo
		 */
		const node: NdArray<number>;
		/**
		 * @property {NdArray} lena - The standard, yet sometimes controversial
		 * Lena test image was scanned from the November 1972 edition of
		 * Playboy magazine. From an image processing perspective, this image
		 * is useful because it contains smooth, textured, shaded as well as
		 * detail areas.
		 */
		const lena: NdArray<number>;
		/**
		 * @property {NdArray} lenna - The standard, yet sometimes
		 * controversial Lena test image was scanned from the November 1972
		 * edition of Playboy magazine. From an image processing perspective,
		 * this image is useful because it contains smooth, textured, shaded as
		 * well as detail areas.
		 */
		const lenna: NdArray<number>;
		/**
		 * @property {NdArray} moon - This low-contrast image of the surface of
		 * the moon is useful for illustrating histogram equalization and
		 * contrast stretching.
		 */
		const moon: NdArray<number>;
	}
	function read(input: string): NdArray<Uint32Array>;
	function save(img: NdArray<Uint32Array>, dest: string): void;
	function resize(img: NdArray<Uint32Array>, height: number, width: number): NdArray<Uint32Array>;
	function sat(img: NdArray<Uint32Array>): NdArray<Uint32Array>;
	function ssat(img: NdArray<Uint32Array>): NdArray<Uint32Array>;
	function sobel(img: NdArray<Uint32Array>): NdArray<Uint32Array>;
	function scharr(img: NdArray<Uint32Array>): NdArray<Uint32Array>;
	function areaSum(h0: number, w0: number, H: number, W: number, SAT: NdArray<Uint32Array>): number;
	function areaValue(img: NdArray<Uint32Array>): number;
	function rgb2gray(img: NdArray<Uint32Array>): NdArray<Uint32Array>;
	function flip(img: NdArray<Uint32Array>): NdArray<Uint32Array>;
}

export function array<T = number>(arr: njArray<T>, dtype?: BaseNdArray.dtType): NdArray<T>;

export function int8<T = number>(arr: njArray<T>): njArray<Int8Array>;

export function uint8<T = number>(arr: njArray<T>): njArray<Uint8Array>;

export function int16<T = number>(arr: njArray<T>): njArray<Int16Array>;

export function uint16<T = number>(arr: njArray<T>): njArray<Uint16Array>;

export function int32<T = number>(arr: njArray<T>): njArray<Int32Array>;

export function uint32<T = number>(arr: njArray<T>): njArray<Uint32Array>;

export function float32<T = number>(arr: njArray<T>): njArray<Float32Array>;

export function float64<T = number>(arr: njArray<T>): njArray<Float64Array>;
