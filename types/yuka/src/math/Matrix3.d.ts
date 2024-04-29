import { Matrix4 } from "./Matrix4";
import { Quaternion } from "./Quaternion";
import { Vector3 } from "./Vector3";

/**
 * Class representing a 3x3 matrix. The elements of the matrix are stored in column-major order.
 */
export class Matrix3 {
    /**
     * The elements of the matrix in column-major order.
     * @default [1, 0, 0, 0, 1, 0, 0, 0, 1]}
     */
    elements: number[];

    /**
     * Constructs a new 3x3 identity matrix.
     */
    constructor();

    /**
     * Sets the given values to this matrix. The arguments are in row-major order.
     *
     * @param n11 - An element of the matrix.
     * @param n12 - An element of the matrix.
     * @param n13 - An element of the matrix.
     * @param n21 - An element of the matrix.
     * @param n22 - An element of the matrix.
     * @param n23 - An element of the matrix.
     * @param n31 - An element of the matrix.
     * @param n32 - An element of the matrix.
     * @param n33 - An element of the matrix.
     */
    // prettier-ignore
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
    ): this;

    /**
     * Copies all values from the given matrix to this matrix.
     *
     * @param m - The matrix to copy.
     */
    copy(m: Matrix3): this;

    /**
     * Creates a new matrix and copies all values from this matrix.
     *
     * @return A new matrix.
     */
    clone(): Matrix3;

    /**
     * Transforms this matrix to an identity matrix.
     */
    identity(): this;

    /**
     * Multiplies this matrix with the given matrix.
     *
     * @param m - The matrix to multiply.
     */
    multiply(m: Matrix3): this;

    /**
     * Multiplies this matrix with the given matrix.
     * So the order of the multiplication is switched compared to {@link Matrix3#multiply}.
     *
     * @param m - The matrix to multiply.
     */
    premultiply(m: Matrix3): this;

    /**
     * Multiplies two given matrices and stores the result in this matrix.
     *
     * @param a - The first matrix of the operation.
     * @param b - The second matrix of the operation.
     */
    multiplyMatrices(a: Matrix3, b: Matrix3): this;

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
     * Creates a rotation matrix that orients an object to face towards a specified target direction.
     *
     * @param localForward - Specifies the forward direction in the local space of the object.
     * @param targetDirection - Specifies the desired world space direction the object should look at.
     * @param localUp - Specifies the up direction in the local space of the object.
     */
    lookAt(localForward: Vector3, targetDirection: Vector3, localUp: Vector3): this;

    /**
     * Transposes this matrix.
     */
    transpose(): this;

    /**
     * Computes the element index according to the given column and row.
     *
     * @param column - Index of the column.
     * @param row - Index of the row.
     * @return The index of the element at the provided row and column.
     */
    getElementIndex(column: number, row: number): number;

    /**
     * Computes the frobenius norm. It's the square root of the sum of all squared matrix elements.
     *
     * @return The frobenius norm.
     */
    frobeniusNorm(): number;

    /**
     * Computes the  "off-diagonal" frobenius norm. Assumes the matrix is symmetric.
     *
     * @return The "off-diagonal" frobenius norm.
     */
    offDiagonalFrobeniusNorm(): number;

    /**
     * Computes the eigenvectors and eigenvalues.
     *
     * Reference: https://github.com/AnalyticalGraphicsInc/cesium/blob/411a1afbd36b72df64d7362de6aa934730447234/Source/Core/Matrix3.js#L1141 (Apache License 2.0)
     *
     * The values along the diagonal of the diagonal matrix are the eigenvalues.
     * The columns of the unitary matrix are the corresponding eigenvectors.
     *
     * @param result - An object with unitary and diagonal properties which are matrices onto which to store the result.
     * @return An object with unitary and diagonal properties which are matrices onto which to store the result.
     */
    eigenDecomposition(result: { unitary: Matrix3; diagonal: Matrix3 }): { unitary: Matrix3; diagonal: Matrix3 };

    /**
     * Finds the largest off-diagonal term and then creates a matrix
     * which can be used to help reduce it.
     *
     * @param result - The result matrix.
     * @return The result matrix.
     */
    shurDecomposition(result: Matrix3): Matrix3;

    /**
     * Creates a rotation matrix from the given quaternion.
     *
     * @param q - A quaternion representing a rotation.
     */
    fromQuaternion(q: Quaternion): this;

    /**
     * Sets the elements of this matrix by extracting the upper-left 3x3 portion
     * from a 4x4 matrix.
     *
     * @param m - A 4x4 matrix.
     */
    fromMatrix4(m: Matrix4): this;

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
    equals(m: Matrix3): boolean;
}
