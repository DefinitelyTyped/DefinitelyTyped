declare module goog {
    function require(name: 'goog.vec.mat3f'): typeof goog.vec.mat3f;
}

declare module goog.vec.mat3f {

    /** @typedef {goog.vec.Float32} */
    type Type = goog.vec.Float32;

    /**
     * Creates a mat3f with all elements initialized to zero.
     *
     * @return {!goog.vec.mat3f.Type} The new mat3f.
     */
    function create(): goog.vec.mat3f.Type;

    /**
     * Initializes the matrix from the set of values. Note the values supplied are
     * in column major order.
     *
     * @param {goog.vec.mat3f.Type} mat The matrix to receive the
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
     * @return {!goog.vec.mat3f.Type} return mat so that operations can be
     *     chained together.
     */
    function setFromValues(mat: goog.vec.mat3f.Type, v00: number, v10: number, v20: number, v01: number, v11: number, v21: number, v02: number, v12: number, v22: number): goog.vec.mat3f.Type;

    /**
     * Initializes mat3f mat from mat3f src.
     *
     * @param {goog.vec.mat3f.Type} mat The destination matrix.
     * @param {goog.vec.mat3f.Type} src The source matrix.
     * @return {!goog.vec.mat3f.Type} Return mat so that operations can be
     *     chained together.
     */
    function setFromMat3f(mat: goog.vec.mat3f.Type, src: goog.vec.mat3f.Type): goog.vec.mat3f.Type;

    /**
     * Initializes mat3f mat from mat3d src (typed as a Float64Array to
     * avoid circular goog.requires).
     *
     * @param {goog.vec.mat3f.Type} mat The destination matrix.
     * @param {Float64Array} src The source matrix.
     * @return {!goog.vec.mat3f.Type} Return mat so that operations can be
     *     chained together.
     */
    function setFromMat3d(mat: goog.vec.mat3f.Type, src: Float64Array): goog.vec.mat3f.Type;

    /**
     * Initializes mat3f mat from Array src.
     *
     * @param {goog.vec.mat3f.Type} mat The destination matrix.
     * @param {Array<number>} src The source matrix.
     * @return {!goog.vec.mat3f.Type} Return mat so that operations can be
     *     chained together.
     */
    function setFromArray(mat: goog.vec.mat3f.Type, src: Array<number>): goog.vec.mat3f.Type;

    /**
     * Retrieves the element at the requested row and column.
     *
     * @param {goog.vec.mat3f.Type} mat The matrix containing the value to
     *     retrieve.
     * @param {number} row The row index.
     * @param {number} column The column index.
     * @return {number} The element value at the requested row, column indices.
     */
    function getElement(mat: goog.vec.mat3f.Type, row: number, column: number): number;

    /**
     * Sets the element at the requested row and column.
     *
     * @param {goog.vec.mat3f.Type} mat The matrix containing the value to
     *     retrieve.
     * @param {number} row The row index.
     * @param {number} column The column index.
     * @param {number} value The value to set at the requested row, column.
     * @return {!goog.vec.mat3f.Type} return mat so that operations can be
     *     chained together.
     */
    function setElement(mat: goog.vec.mat3f.Type, row: number, column: number, value: number): goog.vec.mat3f.Type;

    /**
     * Sets the diagonal values of the matrix from the given values.
     *
     * @param {goog.vec.mat3f.Type} mat The matrix to receive the values.
     * @param {number} v00 The values for (0, 0).
     * @param {number} v11 The values for (1, 1).
     * @param {number} v22 The values for (2, 2).
     * @return {!goog.vec.mat3f.Type} return mat so that operations can be
     *     chained together.
     */
    function setDiagonalValues(mat: goog.vec.mat3f.Type, v00: number, v11: number, v22: number): goog.vec.mat3f.Type;

    /**
     * Sets the diagonal values of the matrix from the given vector.
     *
     * @param {goog.vec.mat3f.Type} mat The matrix to receive the values.
     * @param {goog.vec.vec3f.Type} vec The vector containing the values.
     * @return {!goog.vec.mat3f.Type} return mat so that operations can be
     *     chained together.
     */
    function setDiagonal(mat: goog.vec.mat3f.Type, vec: goog.vec.vec3f.Type): goog.vec.mat3f.Type;

    /**
     * Sets the specified column with the supplied values.
     *
     * @param {goog.vec.mat3f.Type} mat The matrix to recieve the values.
     * @param {number} column The column index to set the values on.
     * @param {number} v0 The value for row 0.
     * @param {number} v1 The value for row 1.
     * @param {number} v2 The value for row 2.
     * @return {!goog.vec.mat3f.Type} return mat so that operations can be
     *     chained together.
     */
    function setColumnValues(mat: goog.vec.mat3f.Type, column: number, v0: number, v1: number, v2: number): goog.vec.mat3f.Type;

    /**
     * Sets the specified column with the value from the supplied array.
     *
     * @param {goog.vec.mat3f.Type} mat The matrix to receive the values.
     * @param {number} column The column index to set the values on.
     * @param {goog.vec.vec3f.Type} vec The vector elements for the column.
     * @return {!goog.vec.mat3f.Type} return mat so that operations can be
     *     chained together.
     */
    function setColumn(mat: goog.vec.mat3f.Type, column: number, vec: goog.vec.vec3f.Type): goog.vec.mat3f.Type;

    /**
     * Retrieves the specified column from the matrix into the given vector
     * array.
     *
     * @param {goog.vec.mat3f.Type} mat The matrix supplying the values.
     * @param {number} column The column to get the values from.
     * @param {goog.vec.vec3f.Type} vec The vector elements to receive the
     *     column.
     * @return {!goog.vec.vec3f.Type} return vec so that operations can be
     *     chained together.
     */
    function getColumn(mat: goog.vec.mat3f.Type, column: number, vec: goog.vec.vec3f.Type): goog.vec.vec3f.Type;

    /**
     * Sets the columns of the matrix from the set of vector elements.
     *
     * @param {goog.vec.mat3f.Type} mat The matrix to receive the values.
     * @param {goog.vec.vec3f.Type} vec0 The values for column 0.
     * @param {goog.vec.vec3f.Type} vec1 The values for column 1.
     * @param {goog.vec.vec3f.Type} vec2 The values for column 2.
     * @return {!goog.vec.mat3f.Type} return mat so that operations can be
     *     chained together.
     */
    function setColumns(mat: goog.vec.mat3f.Type, vec0: goog.vec.vec3f.Type, vec1: goog.vec.vec3f.Type, vec2: goog.vec.vec3f.Type): goog.vec.mat3f.Type;

    /**
     * Retrieves the column values from the given matrix into the given vector
     * elements.
     *
     * @param {goog.vec.mat3f.Type} mat The matrix supplying the columns.
     * @param {goog.vec.vec3f.Type} vec0 The vector to receive column 0.
     * @param {goog.vec.vec3f.Type} vec1 The vector to receive column 1.
     * @param {goog.vec.vec3f.Type} vec2 The vector to receive column 2.
     */
    function getColumns(mat: goog.vec.mat3f.Type, vec0: goog.vec.vec3f.Type, vec1: goog.vec.vec3f.Type, vec2: goog.vec.vec3f.Type): void;

    /**
     * Sets the row values from the supplied values.
     *
     * @param {goog.vec.mat3f.Type} mat The matrix to receive the values.
     * @param {number} row The index of the row to receive the values.
     * @param {number} v0 The value for column 0.
     * @param {number} v1 The value for column 1.
     * @param {number} v2 The value for column 2.
     * @return {!goog.vec.mat3f.Type} return mat so that operations can be
     *     chained together.
     */
    function setRowValues(mat: goog.vec.mat3f.Type, row: number, v0: number, v1: number, v2: number): goog.vec.mat3f.Type;

    /**
     * Sets the row values from the supplied vector.
     *
     * @param {goog.vec.mat3f.Type} mat The matrix to receive the row values.
     * @param {number} row The index of the row.
     * @param {goog.vec.vec3f.Type} vec The vector containing the values.
     * @return {!goog.vec.mat3f.Type} return mat so that operations can be
     *     chained together.
     */
    function setRow(mat: goog.vec.mat3f.Type, row: number, vec: goog.vec.vec3f.Type): goog.vec.mat3f.Type;

    /**
     * Retrieves the row values into the given vector.
     *
     * @param {goog.vec.mat3f.Type} mat The matrix supplying the values.
     * @param {number} row The index of the row supplying the values.
     * @param {goog.vec.vec3f.Type} vec The vector to receive the row.
     * @return {!goog.vec.vec3f.Type} return vec so that operations can be
     *     chained together.
     */
    function getRow(mat: goog.vec.mat3f.Type, row: number, vec: goog.vec.vec3f.Type): goog.vec.vec3f.Type;

    /**
     * Sets the rows of the matrix from the supplied vectors.
     *
     * @param {goog.vec.mat3f.Type} mat The matrix to receive the values.
     * @param {goog.vec.vec3f.Type} vec0 The values for row 0.
     * @param {goog.vec.vec3f.Type} vec1 The values for row 1.
     * @param {goog.vec.vec3f.Type} vec2 The values for row 2.
     * @return {!goog.vec.mat3f.Type} return mat so that operations can be
     *     chained together.
     */
    function setRows(mat: goog.vec.mat3f.Type, vec0: goog.vec.vec3f.Type, vec1: goog.vec.vec3f.Type, vec2: goog.vec.vec3f.Type): goog.vec.mat3f.Type;

    /**
     * Retrieves the rows of the matrix into the supplied vectors.
     *
     * @param {goog.vec.mat3f.Type} mat The matrix to supplying the values.
     * @param {goog.vec.vec3f.Type} vec0 The vector to receive row 0.
     * @param {goog.vec.vec3f.Type} vec1 The vector to receive row 1.
     * @param {goog.vec.vec3f.Type} vec2 The vector to receive row 2.
     */
    function getRows(mat: goog.vec.mat3f.Type, vec0: goog.vec.vec3f.Type, vec1: goog.vec.vec3f.Type, vec2: goog.vec.vec3f.Type): void;

    /**
     * Makes the given 3x3 matrix the zero matrix.
     *
     * @param {goog.vec.mat3f.Type} mat The matrix.
     * @return {!goog.vec.mat3f.Type} return mat so operations can be chained.
     */
    function makeZero(mat: goog.vec.mat3f.Type): goog.vec.mat3f.Type;

    /**
     * Makes the given 3x3 matrix the identity matrix.
     *
     * @param {goog.vec.mat3f.Type} mat The matrix.
     * @return {!goog.vec.mat3f.Type} return mat so operations can be chained.
     */
    function makeIdentity(mat: goog.vec.mat3f.Type): goog.vec.mat3f.Type;

    /**
     * Performs a per-component addition of the matrices mat0 and mat1, storing
     * the result into resultMat.
     *
     * @param {goog.vec.mat3f.Type} mat0 The first addend.
     * @param {goog.vec.mat3f.Type} mat1 The second addend.
     * @param {goog.vec.mat3f.Type} resultMat The matrix to
     *     receive the results (may be either mat0 or mat1).
     * @return {!goog.vec.mat3f.Type} return resultMat so that operations can be
     *     chained together.
     */
    function addMat(mat0: goog.vec.mat3f.Type, mat1: goog.vec.mat3f.Type, resultMat: goog.vec.mat3f.Type): goog.vec.mat3f.Type;

    /**
     * Performs a per-component subtraction of the matrices mat0 and mat1,
     * storing the result into resultMat.
     *
     * @param {goog.vec.mat3f.Type} mat0 The minuend.
     * @param {goog.vec.mat3f.Type} mat1 The subtrahend.
     * @param {goog.vec.mat3f.Type} resultMat The matrix to receive
     *     the results (may be either mat0 or mat1).
     * @return {!goog.vec.mat3f.Type} return resultMat so that operations can be
     *     chained together.
     */
    function subMat(mat0: goog.vec.mat3f.Type, mat1: goog.vec.mat3f.Type, resultMat: goog.vec.mat3f.Type): goog.vec.mat3f.Type;

    /**
     * Multiplies matrix mat0 with the given scalar, storing the result
     * into resultMat.
     *
     * @param {goog.vec.mat3f.Type} mat The matrix.
     * @param {number} scalar The scalar value to multiple to each element of mat.
     * @param {goog.vec.mat3f.Type} resultMat The matrix to receive
     *     the results (may be mat).
     * @return {!goog.vec.mat3f.Type} return resultMat so that operations can be
     *     chained together.
     */
    function multScalar(mat: goog.vec.mat3f.Type, scalar: number, resultMat: goog.vec.mat3f.Type): goog.vec.mat3f.Type;

    /**
     * Multiplies the two matrices mat0 and mat1 using matrix multiplication,
     * storing the result into resultMat.
     *
     * @param {goog.vec.mat3f.Type} mat0 The first (left hand) matrix.
     * @param {goog.vec.mat3f.Type} mat1 The second (right hand) matrix.
     * @param {goog.vec.mat3f.Type} resultMat The matrix to receive
     *     the results (may be either mat0 or mat1).
     * @return {!goog.vec.mat3f.Type} return resultMat so that operations can be
     *     chained together.
     */
    function multMat(mat0: goog.vec.mat3f.Type, mat1: goog.vec.mat3f.Type, resultMat: goog.vec.mat3f.Type): goog.vec.mat3f.Type;

    /**
     * Transposes the given matrix mat storing the result into resultMat.
     *
     * @param {goog.vec.mat3f.Type} mat The matrix to transpose.
     * @param {goog.vec.mat3f.Type} resultMat The matrix to receive
     *     the results (may be mat).
     * @return {!goog.vec.mat3f.Type} return resultMat so that operations can be
     *     chained together.
     */
    function transpose(mat: goog.vec.mat3f.Type, resultMat: goog.vec.mat3f.Type): goog.vec.mat3f.Type;

    /**
     * Computes the inverse of mat0 storing the result into resultMat. If the
     * inverse is defined, this function returns true, false otherwise.
     *
     * @param {goog.vec.mat3f.Type} mat0 The matrix to invert.
     * @param {goog.vec.mat3f.Type} resultMat The matrix to receive
     *     the result (may be mat0).
     * @return {boolean} True if the inverse is defined. If false is returned,
     *     resultMat is not modified.
     */
    function invert(mat0: goog.vec.mat3f.Type, resultMat: goog.vec.mat3f.Type): boolean;

    /**
     * Returns true if the components of mat0 are equal to the components of mat1.
     *
     * @param {goog.vec.mat3f.Type} mat0 The first matrix.
     * @param {goog.vec.mat3f.Type} mat1 The second matrix.
     * @return {boolean} True if the the two matrices are equivalent.
     */
    function equals(mat0: goog.vec.mat3f.Type, mat1: goog.vec.mat3f.Type): boolean;

    /**
     * Transforms the given vector with the given matrix storing the resulting,
     * transformed matrix into resultVec.
     *
     * @param {goog.vec.mat3f.Type} mat The matrix supplying the transformation.
     * @param {goog.vec.vec3f.Type} vec The vector to transform.
     * @param {goog.vec.vec3f.Type} resultVec The vector to
     *     receive the results (may be vec).
     * @return {!goog.vec.vec3f.Type} return resultVec so that operations can be
     *     chained together.
     */
    function multVec3(mat: goog.vec.mat3f.Type, vec: goog.vec.vec3f.Type, resultVec: goog.vec.vec3f.Type): goog.vec.vec3f.Type;

    /**
     * Makes the given 3x3 matrix a translation matrix with x and y
     * translation values.
     *
     * @param {goog.vec.mat3f.Type} mat The matrix.
     * @param {number} x The translation along the x axis.
     * @param {number} y The translation along the y axis.
     * @return {!goog.vec.mat3f.Type} return mat so that operations can be
     *     chained.
     */
    function makeTranslate(mat: goog.vec.mat3f.Type, x: number, y: number): goog.vec.mat3f.Type;

    /**
     * Makes the given 3x3 matrix a scale matrix with x, y, and z scale factors.
     *
     * @param {goog.vec.mat3f.Type} mat The 3x3 (9-element) matrix
     *     array to receive the new scale matrix.
     * @param {number} x The scale along the x axis.
     * @param {number} y The scale along the y axis.
     * @param {number} z The scale along the z axis.
     * @return {!goog.vec.mat3f.Type} return mat so that operations can be
     *     chained.
     */
    function makeScale(mat: goog.vec.mat3f.Type, x: number, y: number, z: number): goog.vec.mat3f.Type;

    /**
     * Makes the given 3x3 matrix a rotation matrix with the given rotation
     * angle about the axis defined by the vector (ax, ay, az).
     *
     * @param {goog.vec.mat3f.Type} mat The matrix.
     * @param {number} angle The rotation angle in radians.
     * @param {number} ax The x component of the rotation axis.
     * @param {number} ay The y component of the rotation axis.
     * @param {number} az The z component of the rotation axis.
     * @return {!goog.vec.mat3f.Type} return mat so that operations can be
     *     chained.
     */
    function makeRotate(mat: goog.vec.mat3f.Type, angle: number, ax: number, ay: number, az: number): goog.vec.mat3f.Type;

    /**
     * Makes the given 3x3 matrix a rotation matrix with the given rotation
     * angle about the X axis.
     *
     * @param {goog.vec.mat3f.Type} mat The matrix.
     * @param {number} angle The rotation angle in radians.
     * @return {!goog.vec.mat3f.Type} return mat so that operations can be
     *     chained.
     */
    function makeRotateX(mat: goog.vec.mat3f.Type, angle: number): goog.vec.mat3f.Type;

    /**
     * Makes the given 3x3 matrix a rotation matrix with the given rotation
     * angle about the Y axis.
     *
     * @param {goog.vec.mat3f.Type} mat The matrix.
     * @param {number} angle The rotation angle in radians.
     * @return {!goog.vec.mat3f.Type} return mat so that operations can be
     *     chained.
     */
    function makeRotateY(mat: goog.vec.mat3f.Type, angle: number): goog.vec.mat3f.Type;

    /**
     * Makes the given 3x3 matrix a rotation matrix with the given rotation
     * angle about the Z axis.
     *
     * @param {goog.vec.mat3f.Type} mat The matrix.
     * @param {number} angle The rotation angle in radians.
     * @return {!goog.vec.mat3f.Type} return mat so that operations can be
     *     chained.
     */
    function makeRotateZ(mat: goog.vec.mat3f.Type, angle: number): goog.vec.mat3f.Type;

    /**
     * Rotate the given matrix by angle about the x,y,z axis.  Equivalent to:
     * goog.vec.mat3f.multMat(
     *     mat,
     *     goog.vec.mat3f.makeRotate(goog.vec.mat3f.create(), angle, x, y, z),
     *     mat);
     *
     * @param {goog.vec.mat3f.Type} mat The matrix.
     * @param {number} angle The angle in radians.
     * @param {number} x The x component of the rotation axis.
     * @param {number} y The y component of the rotation axis.
     * @param {number} z The z component of the rotation axis.
     * @return {!goog.vec.mat3f.Type} return mat so that operations can be
     *     chained.
     */
    function rotate(mat: goog.vec.mat3f.Type, angle: number, x: number, y: number, z: number): goog.vec.mat3f.Type;

    /**
     * Rotate the given matrix by angle about the x axis.  Equivalent to:
     * goog.vec.mat3f.multMat(
     *     mat,
     *     goog.vec.mat3f.makeRotateX(goog.vec.mat3f.create(), angle),
     *     mat);
     *
     * @param {goog.vec.mat3f.Type} mat The matrix.
     * @param {number} angle The angle in radians.
     * @return {!goog.vec.mat3f.Type} return mat so that operations can be
     *     chained.
     */
    function rotateX(mat: goog.vec.mat3f.Type, angle: number): goog.vec.mat3f.Type;

    /**
     * Rotate the given matrix by angle about the y axis.  Equivalent to:
     * goog.vec.mat3f.multMat(
     *     mat,
     *     goog.vec.mat3f.makeRotateY(goog.vec.mat3f.create(), angle),
     *     mat);
     *
     * @param {goog.vec.mat3f.Type} mat The matrix.
     * @param {number} angle The angle in radians.
     * @return {!goog.vec.mat3f.Type} return mat so that operations can be
     *     chained.
     */
    function rotateY(mat: goog.vec.mat3f.Type, angle: number): goog.vec.mat3f.Type;

    /**
     * Rotate the given matrix by angle about the z axis.  Equivalent to:
     * goog.vec.mat3f.multMat(
     *     mat,
     *     goog.vec.mat3f.makeRotateZ(goog.vec.mat3f.create(), angle),
     *     mat);
     *
     * @param {goog.vec.mat3f.Type} mat The matrix.
     * @param {number} angle The angle in radians.
     * @return {!goog.vec.mat3f.Type} return mat so that operations can be
     *     chained.
     */
    function rotateZ(mat: goog.vec.mat3f.Type, angle: number): goog.vec.mat3f.Type;

    /**
     * Makes the given 3x3 matrix a rotation matrix given Euler angles using
     * the ZXZ convention.
     * Given the euler angles [theta1, theta2, theta3], the rotation is defined as
     * rotation = rotation_z(theta1) * rotation_x(theta2) * rotation_z(theta3),
     * with theta1 in [0, 2 * pi], theta2 in [0, pi] and theta3 in [0, 2 * pi].
     * rotation_x(theta) means rotation around the X axis of theta radians.
     *
     * @param {goog.vec.mat3f.Type} mat The matrix.
     * @param {number} theta1 The angle of rotation around the Z axis in radians.
     * @param {number} theta2 The angle of rotation around the X axis in radians.
     * @param {number} theta3 The angle of rotation around the Z axis in radians.
     * @return {!goog.vec.mat3f.Type} return mat so that operations can be
     *     chained.
     */
    function makeEulerZXZ(mat: goog.vec.mat3f.Type, theta1: number, theta2: number, theta3: number): goog.vec.mat3f.Type;

    /**
     * Decomposes a rotation matrix into Euler angles using the ZXZ convention so
     * that rotation = rotation_z(theta1) * rotation_x(theta2) * rotation_z(theta3),
     * with theta1 in [0, 2 * pi], theta2 in [0, pi] and theta3 in [0, 2 * pi].
     * rotation_x(theta) means rotation around the X axis of theta radians.
     *
     * @param {goog.vec.mat3f.Type} mat The matrix.
     * @param {goog.vec.vec3f.Type} euler The ZXZ Euler angles in
     *     radians as [theta1, theta2, theta3].
     * @param {boolean=} opt_theta2IsNegative Whether theta2 is in [-pi, 0] instead
     *     of the default [0, pi].
     * @return {!goog.vec.vec3f.Type} return euler so that operations can be
     *     chained together.
     */
    function toEulerZXZ(mat: goog.vec.mat3f.Type, euler: goog.vec.vec3f.Type, opt_theta2IsNegative?: boolean): goog.vec.vec3f.Type;
}
