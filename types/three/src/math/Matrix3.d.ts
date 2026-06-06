// https://threejs.org/docs/#api/en/math/Matrix3

import { Matrix4 } from "./Matrix4.js";
import { Vector2 } from "./Vector2.js";
import { Vector3 } from "./Vector3.js";

export type Matrix3Tuple = [
    n11: number,
    n12: number,
    n13: number,
    n21: number,
    n22: number,
    n23: number,
    n31: number,
    n32: number,
    n33: number,
];

export class Matrix3 {
    readonly isMatrix3: true;

    /**
     * Array with matrix values.
     * @default [1, 0, 0, 0, 1, 0, 0, 0, 1]
     */
    elements: Matrix3Tuple;

    /**
     * Creates an identity matrix.
     */
    constructor();
    /**
     * Creates a 3x3 matrix with the given arguments in row-major order.
     */
    constructor(
        n11: number,
        n12: number,
        n13: number,
        n21: number,
        n22: number,
        n23: number,
        n31: number,
        n32: number,
        n33: number,
    );

    set(
        n11: number,
        n12: number,
        n13: number,
        n21: number,
        n22: number,
        n23: number,
        n31: number,
        n32: number,
        n33: number,
    ): Matrix3;

    identity(): this;

    copy(m: Matrix3): this;

    extractBasis(xAxis: Vector3, yAxis: Vector3, zAxis: Vector3): this;

    setFromMatrix4(m: Matrix4): Matrix3;

    /**
     * Multiplies this matrix by m.
     */
    multiply(m: Matrix3): this;

    premultiply(m: Matrix3): this;

    /**
     * Sets this matrix to a x b.
     */
    multiplyMatrices(a: Matrix3, b: Matrix3): this;

    multiplyScalar(s: number): this;

    determinant(): number;

    /**
     * Inverts this matrix in place.
     */
    invert(): this;

    /**
     * Transposes this matrix in place.
     */
    transpose(): this;

    getNormalMatrix(matrix4: Matrix4): this;

    /**
     * Transposes this matrix into the supplied array r, and returns itself.
     */
    transposeIntoArray(r: number[]): this;

    setUvTransform(tx: number, ty: number, sx: number, sy: number, rotation: number, cx: number, cy: number): this;

    scale(sx: number, sy: number): this;

    rotate(theta: number): this;

    translate(tx: number, ty: number): this;

    /**
     * Sets this matrix as a 2D translation transform:
     *
     * ```
     * 1, 0, x,
     * 0, 1, y,
     * 0, 0, 1
     * ```
     *
     * @param v the amount to translate.
     */
    makeTranslation(v: Vector2): this;
    /**
     * Sets this matrix as a 2D translation transform:
     *
     * ```
     * 1, 0, x,
     * 0, 1, y,
     * 0, 0, 1
     * ```
     *
     * @param x the amount to translate in the X axis.
     * @param y the amount to translate in the Y axis.
     */
    makeTranslation(x: number, y: number): this;

    /**
     * Sets this matrix as a 2D rotational transformation by theta radians. The resulting matrix will be:
     *
     * ```
     * cos(θ) -sin(θ) 0
     * sin(θ) cos(θ)  0
     * 0      0       1
     * ```
     *
     * @param theta Rotation angle in radians. Positive values rotate counterclockwise.
     */
    makeRotation(theta: number): this;

    /**
     * Sets this matrix as a 2D scale transform:
     *
     * ```
     * x, 0, 0,
     * 0, y, 0,
     * 0, 0, 1
     * ```
     *
     * @param x the amount to scale in the X axis.
     * @param y the amount to scale in the Y axis.
     */
    makeScale(x: number, y: number): this;

    equals(matrix: Matrix3): boolean;

    /**
     * Sets the values of this matrix from the provided array or array-like.
     * @param array the source array or array-like.
     * @param offset (optional) offset into the array-like. Default is 0.
     */
    fromArray(array: ArrayLike<number>, offset?: number): this;

    /**
     * Writes the elements of this matrix to an array in
     * {@link https://en.wikipedia.org/wiki/Row-_and_column-major_order#Column-major_order column-major} format.
     */
    toArray(): Matrix3Tuple;
    /**
     * Writes the elements of this matrix to an array in
     * {@link https://en.wikipedia.org/wiki/Row-_and_column-major_order#Column-major_order column-major} format.
     * @param array array to store the resulting vector in. If not given a new array will be created.
     * @param offset (optional) offset in the array at which to put the result.
     */
    toArray<TArray extends ArrayLike<number>>(array: TArray, offset?: number): TArray;

    clone(): this;
}
