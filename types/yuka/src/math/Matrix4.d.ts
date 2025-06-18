import { Matrix3 } from "./Matrix3";
import { Quaternion } from "./Quaternion";
import { Vector3 } from "./Vector3";

/**
 * Class representing a 4x4 matrix. The elements of the matrix are stored in column-major order.
 */
export class Matrix4 {
    /**
     * The elements of the matrix in column-major order.
     * @default [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1]}
     */
    elements: number[];

    /**
     * Constructs a new 4x4 identity matrix.
     */
    constructor();

    /**
     * Sets the given values to this matrix. The arguments are in row-major order.
     *
     * @param n11 - An element of the matrix.
     * @param n12 - An element of the matrix.
     * @param n13 - An element of the matrix.
     * @param n14 - An element of the matrix.
     * @param n21 - An element of the matrix.
     * @param n22 - An element of the matrix.
     * @param n23 - An element of the matrix.
     * @param n24 - An element of the matrix.
     * @param n31 - An element of the matrix.
     * @param n32 - An element of the matrix.
     * @param n33 - An element of the matrix.
     * @param n34 - An element of the matrix.
     * @param n41 - An element of the matrix.
     * @param n42 - An element of the matrix.
     * @param n43 - An element of the matrix.
     * @param n44 - An element of the matrix.
     */
    // prettier-ignore
    set(
        n11: number,
        n12: number,
        n13: number,
        n14: number,
        n21: number,
        n22: number,
        n23: number,
        n24: number,
        n31: number,
        n32: number,
        n33: number,
        n34: number,
        n41: number,
        n42: number,
        n43: number,
        n44: number,
    ): this;

    /**
     * Copies all values from the given matrix to this matrix.
     *
     * @param m - The matrix to copy.
     */
    copy(m: Matrix4): this;

    /**
     * Creates a new matrix and copies all values from this matrix.
     *
     * @return A new matrix.
     */
    clone(): Matrix4;

    /**
     * Transforms this matrix to an identity matrix.
     */
    identity(): this;

    /**
     * Multiplies this matrix with the given matrix.
     *
     * @param m - The matrix to multiply.
     */
    multiply(m: Matrix4): this;

    /**
     * Multiplies this matrix with the given matrix.
     * So the order of the multiplication is switched compared to {@link Matrix4#multiply}.
     *
     * @param m - The matrix to multiply.
     */
    premultiply(m: Matrix4): this;

    /**
     * Multiplies two given matrices and stores the result in this matrix.
     *
     * @param a - The first matrix of the operation.
     * @param b - The second matrix of the operation.
     */
    multiplyMatrices(a: Matrix4, b: Matrix4): this;

    /**
     * Multiplies the given scalar with this matrix.
     *
     * @param s - The scalar to multiply.
     */
    multiplyScalar(s: number): this;

    /**
     * Extracts the basis vectors and stores them to the given vectors.
     *
     * @param xAxis - The first result vector for the x-axis.
     * @param yAxis - The second result vector for the y-axis.
     * @param zAxis - The third result vector for the z-axis.
     */
    extractBasis(xAxis: Vector3, yAxis: Vector3, zAxis: Vector3): this;

    /**
     * Makes a basis from the given vectors.
     *
     * @param xAxis - The first basis vector for the x-axis.
     * @param yAxis - The second basis vector for the y-axis.
     * @param zAxis - The third basis vector for the z-axis.
     */
    makeBasis(xAxis: Vector3, yAxis: Vector3, zAxis: Vector3): this;

    /**
     * Composes a matrix from the given position, quaternion and scale.
     *
     * @param position - A vector representing a position in 3D space.
     * @param rotation - A quaternion representing a rotation.
     * @param scale - A vector representing a 3D scaling.
     * @return A reference to this matrix.
     */
    compose(position: Vector3, rotation: Quaternion, scale: Vector3): this;

    /**
     * Scales this matrix by the given 3D vector.
     *
     * @param v - A 3D vector representing a scaling.
     */
    scale(v: Vector3): this;

    /**
     * Sets the translation part of the 4x4 matrix to the given position vector.
     *
     * @param v - A 3D vector representing a position.
     */
    setPosition(v: Vector3): this;

    /**
     * Transposes this matrix.
     */
    transpose(): this;

    /**
     * Computes the inverse of this matrix and stored the result in the given matrix.
     *
     * You can not invert a matrix with a determinant of zero. If you attempt this, the method returns a zero matrix instead.
     *
     * @param m - The result matrix.
     * @return The result matrix.
     */
    getInverse(m: Matrix4): Matrix4;

    /**
     * Computes the maximum scale value for all three axis.
     *
     * @return The maximum scale value.
     */
    getMaxScale(): number;

    /**
     * Uses the given quaternion to transform the upper left 3x3 part to a rotation matrix.
     * Other parts of the matrix are equal to the identity matrix.
     *
     * @param q - A quaternion representing a rotation.
     */
    fromQuaternion(q: Quaternion): this;

    /**
     * Sets the upper-left 3x3 portion of this matrix by the given 3x3 matrix. Other
     * parts of the matrix are equal to the identiy matrix.
     *
     * @param m - A 3x3 matrix.
     */
    fromMatrix3(m: Matrix3): this;

    /**
     * Sets the elements of this matrix from an array.
     *
     * @param array - An array.
     * @param offset - An optional offset.
     */
    fromArray(array: number[], offset?: number): this;

    /**
     * Copies all elements of this matrix to the given array.
     *
     * @param array - An array.
     * @param offset - An optional offset.
     * @return The array with the elements of the matrix.
     */
    toArray(array: number[], offset?: number): number[];

    /**
     * Returns true if the given matrix is deep equal with this matrix.
     *
     * @param m - The matrix to test.
     * @return The result of the equality test.
     */
    equals(m: Matrix4): boolean;
}
