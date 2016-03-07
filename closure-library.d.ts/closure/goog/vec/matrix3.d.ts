declare module goog {
    function require(name: 'goog.vec.Matrix3'): typeof goog.vec.Matrix3;
}

declare module goog.vec.Matrix3 {

    /**
     * @typedef {goog.vec.ArrayType}
     */
    type Type = goog.vec.ArrayType;

    /**
     * Creates the array representation of a 3x3 matrix. The use of the array
     * directly eliminates any overhead associated with the class representation
     * defined above. The returned matrix is cleared to all zeros.
     *
     * @return {goog.vec.Matrix3.Type} The new, nine element array.
     */
    function create(): goog.vec.Matrix3.Type;

    /**
     * Creates the array representation of a 3x3 matrix. The use of the array
     * directly eliminates any overhead associated with the class representation
     * defined above. The returned matrix is initialized with the identity.
     *
     * @return {goog.vec.Matrix3.Type} The new, nine element array.
     */
    function createIdentity(): goog.vec.Matrix3.Type;

    /**
     * Creates a 3x3 matrix initialized from the given array.
     *
     * @param {goog.vec.ArrayType} matrix The array containing the
     *     matrix values in column major order.
     * @return {goog.vec.Matrix3.Type} The new, nine element array.
     */
    function createFromArray(matrix: goog.vec.ArrayType): goog.vec.Matrix3.Type;

    /**
     * Creates a 3x3 matrix initialized from the given values.
     *
     * @param {number} v00 The values at (0, 0).
     * @param {number} v10 The values at (1, 0).
     * @param {number} v20 The values at (2, 0).
     * @param {number} v01 The values at (0, 1).
     * @param {number} v11 The values at (1, 1).
     * @param {number} v21 The values at (2, 1).
     * @param {number} v02 The values at (0, 2).
     * @param {number} v12 The values at (1, 2).
     * @param {number} v22 The values at (2, 2).
     * @return {goog.vec.Matrix3.Type} The new, nine element array.
     */
    function createFromValues(v00: number, v10: number, v20: number, v01: number, v11: number, v21: number, v02: number, v12: number, v22: number): goog.vec.Matrix3.Type;

    /**
     * Creates a clone of a 3x3 matrix.
     *
     * @param {goog.vec.Matrix3.Type} matrix The source 3x3 matrix.
     * @return {goog.vec.Matrix3.Type} The new 3x3 element matrix.
     */
    function clone(matrix: goog.vec.Matrix3.Type): goog.vec.Matrix3.Type;

    /**
     * Retrieves the element at the requested row and column.
     *
     * @param {goog.vec.ArrayType} mat The matrix containing the
     *     value to retrieve.
     * @param {number} row The row index.
     * @param {number} column The column index.
     * @return {number} The element value at the requested row, column indices.
     */
    function getElement(mat: goog.vec.ArrayType, row: number, column: number): number;

    /**
     * Sets the element at the requested row and column.
     *
     * @param {goog.vec.ArrayType} mat The matrix containing the
     *     value to retrieve.
     * @param {number} row The row index.
     * @param {number} column The column index.
     * @param {number} value The value to set at the requested row, column.
     */
    function setElement(mat: goog.vec.ArrayType, row: number, column: number, value: number): void;

    /**
     * Initializes the matrix from the set of values. Note the values supplied are
     * in column major order.
     *
     * @param {goog.vec.ArrayType} mat The matrix to receive the
     *     values.
     * @param {number} v00 The values at (0, 0).
     * @param {number} v10 The values at (1, 0).
     * @param {number} v20 The values at (2, 0).
     * @param {number} v01 The values at (0, 1).
     * @param {number} v11 The values at (1, 1).
     * @param {number} v21 The values at (2, 1).
     * @param {number} v02 The values at (0, 2).
     * @param {number} v12 The values at (1, 2).
     * @param {number} v22 The values at (2, 2).
     */
    function setFromValues(mat: goog.vec.ArrayType, v00: number, v10: number, v20: number, v01: number, v11: number, v21: number, v02: number, v12: number, v22: number): void;

    /**
     * Sets the matrix from the array of values stored in column major order.
     *
     * @param {goog.vec.ArrayType} mat The matrix to receive the
     *     values.
     * @param {goog.vec.ArrayType} values The column major ordered
     *     array of values to store in the matrix.
     */
    function setFromArray(mat: goog.vec.ArrayType, values: goog.vec.ArrayType): void;

    /**
     * Sets the matrix from the array of values stored in row major order.
     *
     * @param {goog.vec.ArrayType} mat The matrix to receive the
     *     values.
     * @param {goog.vec.ArrayType} values The row major ordered array
     *     of values to store in the matrix.
     */
    function setFromRowMajorArray(mat: goog.vec.ArrayType, values: goog.vec.ArrayType): void;

    /**
     * Sets the diagonal values of the matrix from the given values.
     *
     * @param {goog.vec.ArrayType} mat The matrix to receive the
     *     values.
     * @param {number} v00 The values for (0, 0).
     * @param {number} v11 The values for (1, 1).
     * @param {number} v22 The values for (2, 2).
     */
    function setDiagonalValues(mat: goog.vec.ArrayType, v00: number, v11: number, v22: number): void;

    /**
     * Sets the diagonal values of the matrix from the given vector.
     *
     * @param {goog.vec.ArrayType} mat The matrix to receive the
     *     values.
     * @param {goog.vec.ArrayType} vec The vector containing the
     *     values.
     */
    function setDiagonal(mat: goog.vec.ArrayType, vec: goog.vec.ArrayType): void;

    /**
     * Sets the specified column with the supplied values.
     *
     * @param {goog.vec.ArrayType} mat The matrix to recieve the
     *     values.
     * @param {number} column The column index to set the values on.
     * @param {number} v0 The value for row 0.
     * @param {number} v1 The value for row 1.
     * @param {number} v2 The value for row 2.
     */
    function setColumnValues(mat: goog.vec.ArrayType, column: number, v0: number, v1: number, v2: number): void;

    /**
     * Sets the specified column with the value from the supplied array.
     *
     * @param {goog.vec.ArrayType} mat The matrix to receive the
     *     values.
     * @param {number} column The column index to set the values on.
     * @param {goog.vec.ArrayType} vec The vector elements for the
     *     column.
     */
    function setColumn(mat: goog.vec.ArrayType, column: number, vec: goog.vec.ArrayType): void;

    /**
     * Retrieves the specified column from the matrix into the given vector
     * array.
     *
     * @param {goog.vec.ArrayType} mat The matrix supplying the
     *     values.
     * @param {number} column The column to get the values from.
     * @param {goog.vec.ArrayType} vec The vector elements to receive
     *     the column.
     */
    function getColumn(mat: goog.vec.ArrayType, column: number, vec: goog.vec.ArrayType): void;

    /**
     * Sets the columns of the matrix from the set of vector elements.
     *
     * @param {goog.vec.ArrayType} mat The matrix to receive the
     *     values.
     * @param {goog.vec.ArrayType} vec0 The values for column 0.
     * @param {goog.vec.ArrayType} vec1 The values for column 1.
     * @param {goog.vec.ArrayType} vec2 The values for column 2.
     */
    function setColumns(mat: goog.vec.ArrayType, vec0: goog.vec.ArrayType, vec1: goog.vec.ArrayType, vec2: goog.vec.ArrayType): void;

    /**
     * Retrieves the column values from the given matrix into the given vector
     * elements.
     *
     * @param {goog.vec.ArrayType} mat The matrix containing the
     *     columns to retrieve.
     * @param {goog.vec.ArrayType} vec0 The vector elements to receive
     *     column 0.
     * @param {goog.vec.ArrayType} vec1 The vector elements to receive
     *     column 1.
     * @param {goog.vec.ArrayType} vec2 The vector elements to receive
     *     column 2.
     */
    function getColumns(mat: goog.vec.ArrayType, vec0: goog.vec.ArrayType, vec1: goog.vec.ArrayType, vec2: goog.vec.ArrayType): void;

    /**
     * Sets the row values from the supplied values.
     *
     * @param {goog.vec.ArrayType} mat The matrix to receive the
     *     values.
     * @param {number} row The index of the row to receive the values.
     * @param {number} v0 The value for column 0.
     * @param {number} v1 The value for column 1.
     * @param {number} v2 The value for column 2.
     */
    function setRowValues(mat: goog.vec.ArrayType, row: number, v0: number, v1: number, v2: number): void;

    /**
     * Sets the row values from the supplied vector.
     *
     * @param {goog.vec.ArrayType} mat The matrix to receive the
     *     row values.
     * @param {number} row The index of the row.
     * @param {goog.vec.ArrayType} vec The vector containing the values.
     */
    function setRow(mat: goog.vec.ArrayType, row: number, vec: goog.vec.ArrayType): void;

    /**
     * Retrieves the row values into the given vector.
     *
     * @param {goog.vec.ArrayType} mat The matrix supplying the
     *     values.
     * @param {number} row The index of the row supplying the values.
     * @param {goog.vec.ArrayType} vec The vector to receive the row.
     */
    function getRow(mat: goog.vec.ArrayType, row: number, vec: goog.vec.ArrayType): void;

    /**
     * Sets the rows of the matrix from the supplied vectors.
     *
     * @param {goog.vec.ArrayType} mat The matrix to receive the
     *     values.
     * @param {goog.vec.ArrayType} vec0 The values for row 0.
     * @param {goog.vec.ArrayType} vec1 The values for row 1.
     * @param {goog.vec.ArrayType} vec2 The values for row 2.
     */
    function setRows(mat: goog.vec.ArrayType, vec0: goog.vec.ArrayType, vec1: goog.vec.ArrayType, vec2: goog.vec.ArrayType): void;

    /**
     * Retrieves the rows of the matrix into the supplied vectors.
     *
     * @param {goog.vec.ArrayType} mat The matrix to supplying
     *     the values.
     * @param {goog.vec.ArrayType} vec0 The vector to receive row 0.
     * @param {goog.vec.ArrayType} vec1 The vector to receive row 1.
     * @param {goog.vec.ArrayType} vec2 The vector to receive row 2.
     */
    function getRows(mat: goog.vec.ArrayType, vec0: goog.vec.ArrayType, vec1: goog.vec.ArrayType, vec2: goog.vec.ArrayType): void;

    /**
     * Clears the given matrix to zero.
     *
     * @param {goog.vec.ArrayType} mat The matrix to clear.
     */
    function setZero(mat: goog.vec.ArrayType): void;

    /**
     * Sets the given matrix to the identity matrix.
     *
     * @param {goog.vec.ArrayType} mat The matrix to set.
     */
    function setIdentity(mat: goog.vec.ArrayType): void;

    /**
     * Performs a per-component addition of the matrices mat0 and mat1, storing
     * the result into resultMat.
     *
     * @param {goog.vec.ArrayType} mat0 The first addend.
     * @param {goog.vec.ArrayType} mat1 The second addend.
     * @param {goog.vec.ArrayType} resultMat The matrix to
     *     receive the results (may be either mat0 or mat1).
     * @return {goog.vec.ArrayType} return resultMat so that operations can be
     *     chained together.
     */
    function add(mat0: goog.vec.ArrayType, mat1: goog.vec.ArrayType, resultMat: goog.vec.ArrayType): goog.vec.ArrayType;

    /**
     * Performs a per-component subtraction of the matrices mat0 and mat1,
     * storing the result into resultMat.
     *
     * @param {goog.vec.ArrayType} mat0 The minuend.
     * @param {goog.vec.ArrayType} mat1 The subtrahend.
     * @param {goog.vec.ArrayType} resultMat The matrix to receive
     *     the results (may be either mat0 or mat1).
     * @return {goog.vec.ArrayType} return resultMat so that operations can be
     *     chained together.
     */
    function subtract(mat0: goog.vec.ArrayType, mat1: goog.vec.ArrayType, resultMat: goog.vec.ArrayType): goog.vec.ArrayType;

    /**
     * Performs a component-wise multiplication of mat0 with the given scalar
     * storing the result into resultMat.
     *
     * @param {goog.vec.ArrayType} mat0 The matrix to scale.
     * @param {number} scalar The scalar value to multiple to each element of mat0.
     * @param {goog.vec.ArrayType} resultMat The matrix to receive
     *     the results (may be mat0).
     * @return {goog.vec.ArrayType} return resultMat so that operations can be
     *     chained together.
     */
    function scale(mat0: goog.vec.ArrayType, scalar: number, resultMat: goog.vec.ArrayType): goog.vec.ArrayType;

    /**
     * Multiplies the two matrices mat0 and mat1 using matrix multiplication,
     * storing the result into resultMat.
     *
     * @param {goog.vec.ArrayType} mat0 The first (left hand) matrix.
     * @param {goog.vec.ArrayType} mat1 The second (right hand)
     *     matrix.
     * @param {goog.vec.ArrayType} resultMat The matrix to receive
     *     the results (may be either mat0 or mat1).
     * @return {goog.vec.ArrayType} return resultMat so that operations can be
     *     chained together.
     */
    function multMat(mat0: goog.vec.ArrayType, mat1: goog.vec.ArrayType, resultMat: goog.vec.ArrayType): goog.vec.ArrayType;

    /**
     * Transposes the given matrix mat storing the result into resultMat.
     * @param {goog.vec.ArrayType} mat The matrix to transpose.
     * @param {goog.vec.ArrayType} resultMat The matrix to receive
     *     the results (may be mat).
     * @return {goog.vec.ArrayType} return resultMat so that operations can be
     *     chained together.
     */
    function transpose(mat: goog.vec.ArrayType, resultMat: goog.vec.ArrayType): goog.vec.ArrayType;

    /**
     * Computes the inverse of mat0 storing the result into resultMat. If the
     * inverse is defined, this function returns true, false otherwise.
     * @param {goog.vec.ArrayType} mat0 The matrix to invert.
     * @param {goog.vec.ArrayType} resultMat The matrix to receive
     *     the result (may be mat0).
     * @return {boolean} True if the inverse is defined. If false is returned,
     *     resultMat is not modified.
     */
    function invert(mat0: goog.vec.ArrayType, resultMat: goog.vec.ArrayType): boolean;

    /**
     * Returns true if the components of mat0 are equal to the components of mat1.
     *
     * @param {goog.vec.ArrayType} mat0 The first matrix.
     * @param {goog.vec.ArrayType} mat1 The second matrix.
     * @return {boolean} True if the the two matrices are equivalent.
     */
    function equals(mat0: goog.vec.ArrayType, mat1: goog.vec.ArrayType): boolean;

    /**
     * Transforms the given vector with the given matrix storing the resulting,
     * transformed matrix into resultVec.
     *
     * @param {goog.vec.ArrayType} mat The matrix supplying the
     *     transformation.
     * @param {goog.vec.ArrayType} vec The vector to transform.
     * @param {goog.vec.ArrayType} resultVec The vector to
     *     receive the results (may be vec).
     * @return {goog.vec.ArrayType} return resultVec so that operations can be
     *     chained together.
     */
    function multVec3(mat: goog.vec.ArrayType, vec: goog.vec.ArrayType, resultVec: goog.vec.ArrayType): goog.vec.ArrayType;

    /**
     * Initializes the given 3x3 matrix as a translation matrix with x and y
     * translation values.
     *
     * @param {goog.vec.ArrayType} mat The 3x3 (9-element) matrix
     *     array to receive the new translation matrix.
     * @param {number} x The translation along the x axis.
     * @param {number} y The translation along the y axis.
     */
    function makeTranslate(mat: goog.vec.ArrayType, x: number, y: number): void;

    /**
     * Initializes the given 3x3 matrix as a scale matrix with x, y and z scale
     * factors.
     * @param {goog.vec.ArrayType} mat The 3x3 (9-element) matrix
     *     array to receive the new scale matrix.
     * @param {number} x The scale along the x axis.
     * @param {number} y The scale along the y axis.
     * @param {number} z The scale along the z axis.
     */
    function makeScale(mat: goog.vec.ArrayType, x: number, y: number, z: number): void;

    /**
     * Initializes the given 3x3 matrix as a rotation matrix with the given rotation
     * angle about the axis defined by the vector (ax, ay, az).
     * @param {goog.vec.ArrayType} mat The 3x3 (9-element) matrix
     *     array to receive the new scale matrix.
     * @param {number} angle The rotation angle in radians.
     * @param {number} ax The x component of the rotation axis.
     * @param {number} ay The y component of the rotation axis.
     * @param {number} az The z component of the rotation axis.
     */
    function makeAxisAngleRotate(mat: goog.vec.ArrayType, angle: number, ax: number, ay: number, az: number): void;
}
