export type Matrix2Tuple = [
    n11: number,
    n12: number,
    n21: number,
    n22: number,
];

/**
 * A class representing a 2x2 {@link https://en.wikipedia.org/wiki/Matrix_(mathematics) matrix}.
 *
 * @example
 * const m = new Matrix2();
 */
export class Matrix2 {
    readonly isMatrix2: true;

    /**
     * A {@link https://en.wikipedia.org/wiki/Row-_and_column-major_order column-major} list of matrix values.
     */
    elements: Matrix2Tuple;

    /**
     * Creates a 2x2 {@link https://en.wikipedia.org/wiki/Identity_matrix identity matrix}.
     */
    constructor();

    /**
     * Creates a 2x2 matrix with the given arguments in row-major order.
     */
    constructor(n11: number, n12: number, n21: number, n22: number);

    /**
     * Resets this matrix to the 2x2 identity matrix:
     */
    identity(): this;

    /**
     * Sets the elements of this matrix based on an array in
     * {@link https://en.wikipedia.org/wiki/Row-_and_column-major_order#Column-major_order column-major} format.
     *
     * @param array the array to read the elements from
     * @param offset (optional) index of first element in the array. Default is `0`.
     */
    fromArray(array: ArrayLike<number>, offset?: number): this;

    /**
     * Sets the 2x2 matrix values to the given
     * {@link https://en.wikipedia.org/wiki/Row-_and_column-major_order row-major} sequence of values:
     * [n11, n12,
     *  n21, n22]
     */
    set(n11: number, n12: number, n21: number, n22: number): this;
}
