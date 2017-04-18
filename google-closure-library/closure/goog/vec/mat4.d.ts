declare module goog {
    function require(name: 'goog.vec.Mat4'): typeof goog.vec.Mat4;
}

declare module goog.vec.Mat4 {

    /** @typedef {goog.vec.Float32} */
    type Float32 = goog.vec.Float32;

    /** @typedef {goog.vec.Float64} */
    type Float64 = goog.vec.Float64;

    /** @typedef {goog.vec.Number} */
    type Number = goog.vec.Number;

    /** @typedef {goog.vec.AnyType} */
    type AnyType = goog.vec.AnyType;

    /** @typedef {!Float32Array} */
    type Type = Float32Array;

    /** @typedef {goog.vec.ArrayType} */
    type Mat4Like = goog.vec.ArrayType;

    /**
     * Creates the array representation of a 4x4 matrix of Float32.
     * The use of the array directly instead of a class reduces overhead.
     * The returned matrix is cleared to all zeros.
     *
     * @return {!goog.vec.Mat4.Float32} The new matrix.
     */
    function createFloat32(): goog.vec.Mat4.Float32;

    /**
     * Creates the array representation of a 4x4 matrix of Float64.
     * The returned matrix is cleared to all zeros.
     *
     * @return {!goog.vec.Mat4.Float64} The new matrix.
     */
    function createFloat64(): goog.vec.Mat4.Float64;

    /**
     * Creates the array representation of a 4x4 matrix of Number.
     * The returned matrix is cleared to all zeros.
     *
     * @return {!goog.vec.Mat4.Number} The new matrix.
     */
    function createNumber(): goog.vec.Mat4.Number;

    /**
     * Creates the array representation of a 4x4 matrix of Float32.
     * The returned matrix is cleared to all zeros.
     *
     * @deprecated Use createFloat32.
     * @return {!goog.vec.Mat4.Type} The new matrix.
     */
    function create(): goog.vec.Mat4.Type;

    /**
     * Creates a 4x4 identity matrix of Float32.
     *
     * @return {!goog.vec.Mat4.Float32} The new 16 element array.
     */
    function createFloat32Identity(): goog.vec.Mat4.Float32;

    /**
     * Creates a 4x4 identity matrix of Float64.
     *
     * @return {!goog.vec.Mat4.Float64} The new 16 element array.
     */
    function createFloat64Identity(): goog.vec.Mat4.Float64;

    /**
     * Creates a 4x4 identity matrix of Number.
     * The returned matrix is cleared to all zeros.
     *
     * @return {!goog.vec.Mat4.Number} The new 16 element array.
     */
    function createNumberIdentity(): goog.vec.Mat4.Number;

    /**
     * Creates the array representation of a 4x4 matrix of Float32.
     * The returned matrix is cleared to all zeros.
     *
     * @deprecated Use createFloat32Identity.
     * @return {!goog.vec.Mat4.Type} The new 16 element array.
     */
    function createIdentity(): goog.vec.Mat4.Type;

    /**
     * Creates a 4x4 matrix of Float32 initialized from the given array.
     *
     * @param {goog.vec.Mat4.AnyType} matrix The array containing the
     *     matrix values in column major order.
     * @return {!goog.vec.Mat4.Float32} The new, 16 element array.
     */
    function createFloat32FromArray(matrix: goog.vec.Mat4.AnyType): goog.vec.Mat4.Float32;

    /**
     * Creates a 4x4 matrix of Float32 initialized from the given values.
     *
     * @param {number} v00 The values at (0, 0).
     * @param {number} v10 The values at (1, 0).
     * @param {number} v20 The values at (2, 0).
     * @param {number} v30 The values at (3, 0).
     * @param {number} v01 The values at (0, 1).
     * @param {number} v11 The values at (1, 1).
     * @param {number} v21 The values at (2, 1).
     * @param {number} v31 The values at (3, 1).
     * @param {number} v02 The values at (0, 2).
     * @param {number} v12 The values at (1, 2).
     * @param {number} v22 The values at (2, 2).
     * @param {number} v32 The values at (3, 2).
     * @param {number} v03 The values at (0, 3).
     * @param {number} v13 The values at (1, 3).
     * @param {number} v23 The values at (2, 3).
     * @param {number} v33 The values at (3, 3).
     * @return {!goog.vec.Mat4.Float32} The new, 16 element array.
     */
    function createFloat32FromValues(v00: number, v10: number, v20: number, v30: number, v01: number, v11: number, v21: number, v31: number, v02: number, v12: number, v22: number, v32: number, v03: number, v13: number, v23: number, v33: number): goog.vec.Mat4.Float32;

    /**
     * Creates a clone of a 4x4 matrix of Float32.
     *
     * @param {goog.vec.Mat4.Float32} matrix The source 4x4 matrix.
     * @return {!goog.vec.Mat4.Float32} The new 4x4 element matrix.
     */
    function cloneFloat32(matrix: goog.vec.Mat4.Float32): goog.vec.Mat4.Float32;

    /**
     * Creates a 4x4 matrix of Float64 initialized from the given array.
     *
     * @param {goog.vec.Mat4.AnyType} matrix The array containing the
     *     matrix values in column major order.
     * @return {!goog.vec.Mat4.Float64} The new, nine element array.
     */
    function createFloat64FromArray(matrix: goog.vec.Mat4.AnyType): goog.vec.Mat4.Float64;

    /**
     * Creates a 4x4 matrix of Float64 initialized from the given values.
     *
     * @param {number} v00 The values at (0, 0).
     * @param {number} v10 The values at (1, 0).
     * @param {number} v20 The values at (2, 0).
     * @param {number} v30 The values at (3, 0).
     * @param {number} v01 The values at (0, 1).
     * @param {number} v11 The values at (1, 1).
     * @param {number} v21 The values at (2, 1).
     * @param {number} v31 The values at (3, 1).
     * @param {number} v02 The values at (0, 2).
     * @param {number} v12 The values at (1, 2).
     * @param {number} v22 The values at (2, 2).
     * @param {number} v32 The values at (3, 2).
     * @param {number} v03 The values at (0, 3).
     * @param {number} v13 The values at (1, 3).
     * @param {number} v23 The values at (2, 3).
     * @param {number} v33 The values at (3, 3).
     * @return {!goog.vec.Mat4.Float64} The new, 16 element array.
     */
    function createFloat64FromValues(v00: number, v10: number, v20: number, v30: number, v01: number, v11: number, v21: number, v31: number, v02: number, v12: number, v22: number, v32: number, v03: number, v13: number, v23: number, v33: number): goog.vec.Mat4.Float64;

    /**
     * Creates a clone of a 4x4 matrix of Float64.
     *
     * @param {goog.vec.Mat4.Float64} matrix The source 4x4 matrix.
     * @return {!goog.vec.Mat4.Float64} The new 4x4 element matrix.
     */
    function cloneFloat64(matrix: goog.vec.Mat4.Float64): goog.vec.Mat4.Float64;

    /**
     * Creates a 4x4 matrix of Float32 initialized from the given array.
     *
     * @deprecated Use createFloat32FromArray.
     * @param {goog.vec.Mat4.Mat4Like} matrix The array containing the
     *     matrix values in column major order.
     * @return {!goog.vec.Mat4.Type} The new, nine element array.
     */
    function createFromArray(matrix: goog.vec.Mat4.Mat4Like): goog.vec.Mat4.Type;

    /**
     * Creates a 4x4 matrix of Float32 initialized from the given values.
     *
     * @deprecated Use createFloat32FromValues.
     * @param {number} v00 The values at (0, 0).
     * @param {number} v10 The values at (1, 0).
     * @param {number} v20 The values at (2, 0).
     * @param {number} v30 The values at (3, 0).
     * @param {number} v01 The values at (0, 1).
     * @param {number} v11 The values at (1, 1).
     * @param {number} v21 The values at (2, 1).
     * @param {number} v31 The values at (3, 1).
     * @param {number} v02 The values at (0, 2).
     * @param {number} v12 The values at (1, 2).
     * @param {number} v22 The values at (2, 2).
     * @param {number} v32 The values at (3, 2).
     * @param {number} v03 The values at (0, 3).
     * @param {number} v13 The values at (1, 3).
     * @param {number} v23 The values at (2, 3).
     * @param {number} v33 The values at (3, 3).
     * @return {!goog.vec.Mat4.Type} The new, 16 element array.
     */
    function createFromValues(v00: number, v10: number, v20: number, v30: number, v01: number, v11: number, v21: number, v31: number, v02: number, v12: number, v22: number, v32: number, v03: number, v13: number, v23: number, v33: number): goog.vec.Mat4.Type;

    /**
     * Creates a clone of a 4x4 matrix of Float32.
     *
     * @deprecated Use cloneFloat32.
     * @param {goog.vec.Mat4.Mat4Like} matrix The source 4x4 matrix.
     * @return {!goog.vec.Mat4.Type} The new 4x4 element matrix.
     */
    function clone(matrix: goog.vec.Mat4.Mat4Like): goog.vec.Mat4.Type;

    /**
     * Retrieves the element at the requested row and column.
     *
     * @param {goog.vec.Mat4.AnyType} mat The matrix containing the
     *     value to retrieve.
     * @param {number} row The row index.
     * @param {number} column The column index.
     * @return {number} The element value at the requested row, column indices.
     */
    function getElement(mat: goog.vec.Mat4.AnyType, row: number, column: number): number;

    /**
     * Sets the element at the requested row and column.
     *
     * @param {goog.vec.Mat4.AnyType} mat The matrix to set the value on.
     * @param {number} row The row index.
     * @param {number} column The column index.
     * @param {number} value The value to set at the requested row, column.
     * @return {goog.vec.Mat4.AnyType} return mat so that operations can be
     *     chained together.
     */
    function setElement(mat: goog.vec.Mat4.AnyType, row: number, column: number, value: number): goog.vec.Mat4.AnyType;

    /**
     * Initializes the matrix from the set of values. Note the values supplied are
     * in column major order.
     *
     * @param {goog.vec.Mat4.AnyType} mat The matrix to receive the
     *     values.
     * @param {number} v00 The values at (0, 0).
     * @param {number} v10 The values at (1, 0).
     * @param {number} v20 The values at (2, 0).
     * @param {number} v30 The values at (3, 0).
     * @param {number} v01 The values at (0, 1).
     * @param {number} v11 The values at (1, 1).
     * @param {number} v21 The values at (2, 1).
     * @param {number} v31 The values at (3, 1).
     * @param {number} v02 The values at (0, 2).
     * @param {number} v12 The values at (1, 2).
     * @param {number} v22 The values at (2, 2).
     * @param {number} v32 The values at (3, 2).
     * @param {number} v03 The values at (0, 3).
     * @param {number} v13 The values at (1, 3).
     * @param {number} v23 The values at (2, 3).
     * @param {number} v33 The values at (3, 3).
     * @return {goog.vec.Mat4.AnyType} return mat so that operations can be
     *     chained together.
     */
    function setFromValues(mat: goog.vec.Mat4.AnyType, v00: number, v10: number, v20: number, v30: number, v01: number, v11: number, v21: number, v31: number, v02: number, v12: number, v22: number, v32: number, v03: number, v13: number, v23: number, v33: number): goog.vec.Mat4.AnyType;

    /**
     * Sets the matrix from the array of values stored in column major order.
     *
     * @param {goog.vec.Mat4.AnyType} mat The matrix to receive the values.
     * @param {goog.vec.Mat4.AnyType} values The column major ordered
     *     array of values to store in the matrix.
     * @return {goog.vec.Mat4.AnyType} return mat so that operations can be
     *     chained together.
     */
    function setFromArray(mat: goog.vec.Mat4.AnyType, values: goog.vec.Mat4.AnyType): goog.vec.Mat4.AnyType;

    /**
     * Sets the matrix from the array of values stored in row major order.
     *
     * @param {goog.vec.Mat4.AnyType} mat The matrix to receive the values.
     * @param {goog.vec.Mat4.AnyType} values The row major ordered array of
     *     values to store in the matrix.
     * @return {goog.vec.Mat4.AnyType} return mat so that operations can be
     *     chained together.
     */
    function setFromRowMajorArray(mat: goog.vec.Mat4.AnyType, values: goog.vec.Mat4.AnyType): goog.vec.Mat4.AnyType;

    /**
     * Sets the diagonal values of the matrix from the given values.
     *
     * @param {goog.vec.Mat4.AnyType} mat The matrix to receive the values.
     * @param {number} v00 The values for (0, 0).
     * @param {number} v11 The values for (1, 1).
     * @param {number} v22 The values for (2, 2).
     * @param {number} v33 The values for (3, 3).
     * @return {goog.vec.Mat4.AnyType} return mat so that operations can be
     *     chained together.
     */
    function setDiagonalValues(mat: goog.vec.Mat4.AnyType, v00: number, v11: number, v22: number, v33: number): goog.vec.Mat4.AnyType;

    /**
     * Sets the diagonal values of the matrix from the given vector.
     *
     * @param {goog.vec.Mat4.AnyType} mat The matrix to receive the values.
     * @param {goog.vec.Vec4.AnyType} vec The vector containing the values.
     * @return {goog.vec.Mat4.AnyType} return mat so that operations can be
     *     chained together.
     */
    function setDiagonal(mat: goog.vec.Mat4.AnyType, vec: goog.vec.Vec4.AnyType): goog.vec.Mat4.AnyType;

    /**
     * Gets the diagonal values of the matrix into the given vector.
     *
     * @param {goog.vec.Mat4.AnyType} mat The matrix containing the values.
     * @param {goog.vec.Vec4.AnyType} vec The vector to receive the values.
     * @param {number=} opt_diagonal Which diagonal to get. A value of 0 selects the
     *     main diagonal, a positive number selects a super diagonal and a negative
     *     number selects a sub diagonal.
     * @return {goog.vec.Vec4.AnyType} return vec so that operations can be
     *     chained together.
     */
    function getDiagonal(mat: goog.vec.Mat4.AnyType, vec: goog.vec.Vec4.AnyType, opt_diagonal?: number): goog.vec.Vec4.AnyType;

    /**
     * Sets the specified column with the supplied values.
     *
     * @param {goog.vec.Mat4.AnyType} mat The matrix to recieve the values.
     * @param {number} column The column index to set the values on.
     * @param {number} v0 The value for row 0.
     * @param {number} v1 The value for row 1.
     * @param {number} v2 The value for row 2.
     * @param {number} v3 The value for row 3.
     * @return {goog.vec.Mat4.AnyType} return mat so that operations can be
     *     chained together.
     */
    function setColumnValues(mat: goog.vec.Mat4.AnyType, column: number, v0: number, v1: number, v2: number, v3: number): goog.vec.Mat4.AnyType;

    /**
     * Sets the specified column with the value from the supplied vector.
     *
     * @param {goog.vec.Mat4.AnyType} mat The matrix to receive the values.
     * @param {number} column The column index to set the values on.
     * @param {goog.vec.Vec4.AnyType} vec The vector of elements for the column.
     * @return {goog.vec.Mat4.AnyType} return mat so that operations can be
     *     chained together.
     */
    function setColumn(mat: goog.vec.Mat4.AnyType, column: number, vec: goog.vec.Vec4.AnyType): goog.vec.Mat4.AnyType;

    /**
     * Retrieves the specified column from the matrix into the given vector.
     *
     * @param {goog.vec.Mat4.AnyType} mat The matrix supplying the values.
     * @param {number} column The column to get the values from.
     * @param {goog.vec.Vec4.AnyType} vec The vector of elements to
     *     receive the column.
     * @return {goog.vec.Vec4.AnyType} return vec so that operations can be
     *     chained together.
     */
    function getColumn(mat: goog.vec.Mat4.AnyType, column: number, vec: goog.vec.Vec4.AnyType): goog.vec.Vec4.AnyType;

    /**
     * Sets the columns of the matrix from the given vectors.
     *
     * @param {goog.vec.Mat4.AnyType} mat The matrix to receive the values.
     * @param {goog.vec.Vec4.AnyType} vec0 The values for column 0.
     * @param {goog.vec.Vec4.AnyType} vec1 The values for column 1.
     * @param {goog.vec.Vec4.AnyType} vec2 The values for column 2.
     * @param {goog.vec.Vec4.AnyType} vec3 The values for column 3.
     * @return {goog.vec.Mat4.AnyType} return mat so that operations can be
     *     chained together.
     */
    function setColumns(mat: goog.vec.Mat4.AnyType, vec0: goog.vec.Vec4.AnyType, vec1: goog.vec.Vec4.AnyType, vec2: goog.vec.Vec4.AnyType, vec3: goog.vec.Vec4.AnyType): goog.vec.Mat4.AnyType;

    /**
     * Retrieves the column values from the given matrix into the given vectors.
     *
     * @param {goog.vec.Mat4.AnyType} mat The matrix supplying the columns.
     * @param {goog.vec.Vec4.AnyType} vec0 The vector to receive column 0.
     * @param {goog.vec.Vec4.AnyType} vec1 The vector to receive column 1.
     * @param {goog.vec.Vec4.AnyType} vec2 The vector to receive column 2.
     * @param {goog.vec.Vec4.AnyType} vec3 The vector to receive column 3.
     */
    function getColumns(mat: goog.vec.Mat4.AnyType, vec0: goog.vec.Vec4.AnyType, vec1: goog.vec.Vec4.AnyType, vec2: goog.vec.Vec4.AnyType, vec3: goog.vec.Vec4.AnyType): void;

    /**
     * Sets the row values from the supplied values.
     *
     * @param {goog.vec.Mat4.AnyType} mat The matrix to receive the values.
     * @param {number} row The index of the row to receive the values.
     * @param {number} v0 The value for column 0.
     * @param {number} v1 The value for column 1.
     * @param {number} v2 The value for column 2.
     * @param {number} v3 The value for column 3.
     * @return {goog.vec.Mat4.AnyType} return mat so that operations can be
     *     chained together.
     */
    function setRowValues(mat: goog.vec.Mat4.AnyType, row: number, v0: number, v1: number, v2: number, v3: number): goog.vec.Mat4.AnyType;

    /**
     * Sets the row values from the supplied vector.
     *
     * @param {goog.vec.Mat4.AnyType} mat The matrix to receive the row values.
     * @param {number} row The index of the row.
     * @param {goog.vec.Vec4.AnyType} vec The vector containing the values.
     * @return {goog.vec.Mat4.AnyType} return mat so that operations can be
     *     chained together.
     */
    function setRow(mat: goog.vec.Mat4.AnyType, row: number, vec: goog.vec.Vec4.AnyType): goog.vec.Mat4.AnyType;

    /**
     * Retrieves the row values into the given vector.
     *
     * @param {goog.vec.Mat4.AnyType} mat The matrix supplying the values.
     * @param {number} row The index of the row supplying the values.
     * @param {goog.vec.Vec4.AnyType} vec The vector to receive the row.
     * @return {goog.vec.Vec4.AnyType} return vec so that operations can be
     *     chained together.
     */
    function getRow(mat: goog.vec.Mat4.AnyType, row: number, vec: goog.vec.Vec4.AnyType): goog.vec.Vec4.AnyType;

    /**
     * Sets the rows of the matrix from the supplied vectors.
     *
     * @param {goog.vec.Mat4.AnyType} mat The matrix to receive the values.
     * @param {goog.vec.Vec4.AnyType} vec0 The values for row 0.
     * @param {goog.vec.Vec4.AnyType} vec1 The values for row 1.
     * @param {goog.vec.Vec4.AnyType} vec2 The values for row 2.
     * @param {goog.vec.Vec4.AnyType} vec3 The values for row 3.
     * @return {goog.vec.Mat4.AnyType} return mat so that operations can be
     *     chained together.
     */
    function setRows(mat: goog.vec.Mat4.AnyType, vec0: goog.vec.Vec4.AnyType, vec1: goog.vec.Vec4.AnyType, vec2: goog.vec.Vec4.AnyType, vec3: goog.vec.Vec4.AnyType): goog.vec.Mat4.AnyType;

    /**
     * Retrieves the rows of the matrix into the supplied vectors.
     *
     * @param {goog.vec.Mat4.AnyType} mat The matrix to supply the values.
     * @param {goog.vec.Vec4.AnyType} vec0 The vector to receive row 0.
     * @param {goog.vec.Vec4.AnyType} vec1 The vector to receive row 1.
     * @param {goog.vec.Vec4.AnyType} vec2 The vector to receive row 2.
     * @param {goog.vec.Vec4.AnyType} vec3 The vector to receive row 3.
     */
    function getRows(mat: goog.vec.Mat4.AnyType, vec0: goog.vec.Vec4.AnyType, vec1: goog.vec.Vec4.AnyType, vec2: goog.vec.Vec4.AnyType, vec3: goog.vec.Vec4.AnyType): void;

    /**
     * Makes the given 4x4 matrix the zero matrix.
     *
     * @param {goog.vec.Mat4.AnyType} mat The matrix.
     * @return {!goog.vec.Mat4.AnyType} return mat so operations can be chained.
     */
    function makeZero(mat: goog.vec.Mat4.AnyType): goog.vec.Mat4.AnyType;

    /**
     * Makes the given 4x4 matrix the identity matrix.
     *
     * @param {goog.vec.Mat4.AnyType} mat The matrix.
     * @return {goog.vec.Mat4.AnyType} return mat so operations can be chained.
     */
    function makeIdentity(mat: goog.vec.Mat4.AnyType): goog.vec.Mat4.AnyType;

    /**
     * Performs a per-component addition of the matrix mat0 and mat1, storing
     * the result into resultMat.
     *
     * @param {goog.vec.Mat4.AnyType} mat0 The first addend.
     * @param {goog.vec.Mat4.AnyType} mat1 The second addend.
     * @param {goog.vec.Mat4.AnyType} resultMat The matrix to
     *     receive the results (may be either mat0 or mat1).
     * @return {goog.vec.Mat4.AnyType} return resultMat so that operations can be
     *     chained together.
     */
    function addMat(mat0: goog.vec.Mat4.AnyType, mat1: goog.vec.Mat4.AnyType, resultMat: goog.vec.Mat4.AnyType): goog.vec.Mat4.AnyType;

    /**
     * Performs a per-component subtraction of the matrix mat0 and mat1,
     * storing the result into resultMat.
     *
     * @param {goog.vec.Mat4.AnyType} mat0 The minuend.
     * @param {goog.vec.Mat4.AnyType} mat1 The subtrahend.
     * @param {goog.vec.Mat4.AnyType} resultMat The matrix to receive
     *     the results (may be either mat0 or mat1).
     * @return {goog.vec.Mat4.AnyType} return resultMat so that operations can be
     *     chained together.
     */
    function subMat(mat0: goog.vec.Mat4.AnyType, mat1: goog.vec.Mat4.AnyType, resultMat: goog.vec.Mat4.AnyType): goog.vec.Mat4.AnyType;

    /**
     * Multiplies matrix mat with the given scalar, storing the result
     * into resultMat.
     *
     * @param {goog.vec.Mat4.AnyType} mat The matrix.
     * @param {number} scalar The scalar value to multiply to each element of mat.
     * @param {goog.vec.Mat4.AnyType} resultMat The matrix to receive
     *     the results (may be mat).
     * @return {goog.vec.Mat4.AnyType} return resultMat so that operations can be
     *     chained together.
     */
    function multScalar(mat: goog.vec.Mat4.AnyType, scalar: number, resultMat: goog.vec.Mat4.AnyType): goog.vec.Mat4.AnyType;

    /**
     * Multiplies the two matrices mat0 and mat1 using matrix multiplication,
     * storing the result into resultMat.
     *
     * @param {goog.vec.Mat4.AnyType} mat0 The first (left hand) matrix.
     * @param {goog.vec.Mat4.AnyType} mat1 The second (right hand) matrix.
     * @param {goog.vec.Mat4.AnyType} resultMat The matrix to receive
     *     the results (may be either mat0 or mat1).
     * @return {goog.vec.Mat4.AnyType} return resultMat so that operations can be
     *     chained together.
     */
    function multMat(mat0: goog.vec.Mat4.AnyType, mat1: goog.vec.Mat4.AnyType, resultMat: goog.vec.Mat4.AnyType): goog.vec.Mat4.AnyType;

    /**
     * Transposes the given matrix mat storing the result into resultMat.
     *
     * @param {goog.vec.Mat4.AnyType} mat The matrix to transpose.
     * @param {goog.vec.Mat4.AnyType} resultMat The matrix to receive
     *     the results (may be mat).
     * @return {goog.vec.Mat4.AnyType} return resultMat so that operations can be
     *     chained together.
     */
    function transpose(mat: goog.vec.Mat4.AnyType, resultMat: goog.vec.Mat4.AnyType): goog.vec.Mat4.AnyType;

    /**
     * Computes the determinant of the matrix.
     *
     * @param {goog.vec.Mat4.AnyType} mat The matrix to compute the matrix for.
     * @return {number} The determinant of the matrix.
     */
    function determinant(mat: goog.vec.Mat4.AnyType): number;

    /**
     * Computes the inverse of mat storing the result into resultMat. If the
     * inverse is defined, this function returns true, false otherwise.
     *
     * @param {goog.vec.Mat4.AnyType} mat The matrix to invert.
     * @param {goog.vec.Mat4.AnyType} resultMat The matrix to receive
     *     the result (may be mat).
     * @return {boolean} True if the inverse is defined. If false is returned,
     *     resultMat is not modified.
     */
    function invert(mat: goog.vec.Mat4.AnyType, resultMat: goog.vec.Mat4.AnyType): boolean;

    /**
     * Returns true if the components of mat0 are equal to the components of mat1.
     *
     * @param {goog.vec.Mat4.AnyType} mat0 The first matrix.
     * @param {goog.vec.Mat4.AnyType} mat1 The second matrix.
     * @return {boolean} True if the the two matrices are equivalent.
     */
    function equals(mat0: goog.vec.Mat4.AnyType, mat1: goog.vec.Mat4.AnyType): boolean;

    /**
     * Transforms the given vector with the given matrix storing the resulting,
     * transformed vector into resultVec. The input vector is multiplied against the
     * upper 3x4 matrix omitting the projective component.
     *
     * @param {goog.vec.Mat4.AnyType} mat The matrix supplying the transformation.
     * @param {goog.vec.Vec3.AnyType} vec The 3 element vector to transform.
     * @param {goog.vec.Vec3.AnyType} resultVec The 3 element vector to
     *     receive the results (may be vec).
     * @return {goog.vec.Vec3.AnyType} return resultVec so that operations can be
     *     chained together.
     */
    function multVec3(mat: goog.vec.Mat4.AnyType, vec: goog.vec.Vec3.AnyType, resultVec: goog.vec.Vec3.AnyType): goog.vec.Vec3.AnyType;

    /**
     * Transforms the given vector with the given matrix storing the resulting,
     * transformed vector into resultVec. The input vector is multiplied against the
     * upper 3x3 matrix omitting the projective component and translation
     * components.
     *
     * @param {goog.vec.Mat4.AnyType} mat The matrix supplying the transformation.
     * @param {goog.vec.Vec3.AnyType} vec The 3 element vector to transform.
     * @param {goog.vec.Vec3.AnyType} resultVec The 3 element vector to
     *     receive the results (may be vec).
     * @return {goog.vec.Vec3.AnyType} return resultVec so that operations can be
     *     chained together.
     */
    function multVec3NoTranslate(mat: goog.vec.Mat4.AnyType, vec: goog.vec.Vec3.AnyType, resultVec: goog.vec.Vec3.AnyType): goog.vec.Vec3.AnyType;

    /**
     * Transforms the given vector with the given matrix storing the resulting,
     * transformed vector into resultVec. The input vector is multiplied against the
     * full 4x4 matrix with the homogeneous divide applied to reduce the 4 element
     * vector to a 3 element vector.
     *
     * @param {goog.vec.Mat4.AnyType} mat The matrix supplying the transformation.
     * @param {goog.vec.Vec3.AnyType} vec The 3 element vector to transform.
     * @param {goog.vec.Vec3.AnyType} resultVec The 3 element vector
     *     to receive the results (may be vec).
     * @return {goog.vec.Vec3.AnyType} return resultVec so that operations can be
     *     chained together.
     */
    function multVec3Projective(mat: goog.vec.Mat4.AnyType, vec: goog.vec.Vec3.AnyType, resultVec: goog.vec.Vec3.AnyType): goog.vec.Vec3.AnyType;

    /**
     * Transforms the given vector with the given matrix storing the resulting,
     * transformed vector into resultVec.
     *
     * @param {goog.vec.Mat4.AnyType} mat The matrix supplying the transformation.
     * @param {goog.vec.Vec4.AnyType} vec The vector to transform.
     * @param {goog.vec.Vec4.AnyType} resultVec The vector to
     *     receive the results (may be vec).
     * @return {goog.vec.Vec4.AnyType} return resultVec so that operations can be
     *     chained together.
     */
    function multVec4(mat: goog.vec.Mat4.AnyType, vec: goog.vec.Vec4.AnyType, resultVec: goog.vec.Vec4.AnyType): goog.vec.Vec4.AnyType;

    /**
     * Makes the given 4x4 matrix a translation matrix with x, y and z
     * translation factors.
     *
     * @param {goog.vec.Mat4.AnyType} mat The matrix.
     * @param {number} x The translation along the x axis.
     * @param {number} y The translation along the y axis.
     * @param {number} z The translation along the z axis.
     * @return {goog.vec.Mat4.AnyType} return mat so that operations can be
     *     chained.
     */
    function makeTranslate(mat: goog.vec.Mat4.AnyType, x: number, y: number, z: number): goog.vec.Mat4.AnyType;

    /**
     * Makes the given 4x4 matrix as a scale matrix with x, y and z scale factors.
     *
     * @param {goog.vec.Mat4.AnyType} mat The matrix.
     * @param {number} x The scale along the x axis.
     * @param {number} y The scale along the y axis.
     * @param {number} z The scale along the z axis.
     * @return {goog.vec.Mat4.AnyType} return mat so that operations can be
     *     chained.
     */
    function makeScale(mat: goog.vec.Mat4.AnyType, x: number, y: number, z: number): goog.vec.Mat4.AnyType;

    /**
     * Makes the given 4x4 matrix a rotation matrix with the given rotation
     * angle about the axis defined by the vector (ax, ay, az).
     *
     * @param {goog.vec.Mat4.AnyType} mat The matrix.
     * @param {number} angle The rotation angle in radians.
     * @param {number} ax The x component of the rotation axis.
     * @param {number} ay The y component of the rotation axis.
     * @param {number} az The z component of the rotation axis.
     * @return {goog.vec.Mat4.AnyType} return mat so that operations can be
     *     chained.
     */
    function makeRotate(mat: goog.vec.Mat4.AnyType, angle: number, ax: number, ay: number, az: number): goog.vec.Mat4.AnyType;

    /**
     * Makes the given 4x4 matrix a rotation matrix with the given rotation
     * angle about the X axis.
     *
     * @param {goog.vec.Mat4.AnyType} mat The matrix.
     * @param {number} angle The rotation angle in radians.
     * @return {goog.vec.Mat4.AnyType} return mat so that operations can be
     *     chained.
     */
    function makeRotateX(mat: goog.vec.Mat4.AnyType, angle: number): goog.vec.Mat4.AnyType;

    /**
     * Makes the given 4x4 matrix a rotation matrix with the given rotation
     * angle about the Y axis.
     *
     * @param {goog.vec.Mat4.AnyType} mat The matrix.
     * @param {number} angle The rotation angle in radians.
     * @return {goog.vec.Mat4.AnyType} return mat so that operations can be
     *     chained.
     */
    function makeRotateY(mat: goog.vec.Mat4.AnyType, angle: number): goog.vec.Mat4.AnyType;

    /**
     * Makes the given 4x4 matrix a rotation matrix with the given rotation
     * angle about the Z axis.
     *
     * @param {goog.vec.Mat4.AnyType} mat The matrix.
     * @param {number} angle The rotation angle in radians.
     * @return {goog.vec.Mat4.AnyType} return mat so that operations can be
     *     chained.
     */
    function makeRotateZ(mat: goog.vec.Mat4.AnyType, angle: number): goog.vec.Mat4.AnyType;

    /**
     * Makes the given 4x4 matrix a perspective projection matrix.
     *
     * @param {goog.vec.Mat4.AnyType} mat The matrix.
     * @param {number} left The coordinate of the left clipping plane.
     * @param {number} right The coordinate of the right clipping plane.
     * @param {number} bottom The coordinate of the bottom clipping plane.
     * @param {number} top The coordinate of the top clipping plane.
     * @param {number} near The distance to the near clipping plane.
     * @param {number} far The distance to the far clipping plane.
     * @return {goog.vec.Mat4.AnyType} return mat so that operations can be
     *     chained.
     */
    function makeFrustum(mat: goog.vec.Mat4.AnyType, left: number, right: number, bottom: number, top: number, near: number, far: number): goog.vec.Mat4.AnyType;

    /**
     * Makse the given 4x4 matrix  perspective projection matrix given a
     * field of view and aspect ratio.
     *
     * @param {goog.vec.Mat4.AnyType} mat The matrix.
     * @param {number} fovy The field of view along the y (vertical) axis in
     *     radians.
     * @param {number} aspect The x (width) to y (height) aspect ratio.
     * @param {number} near The distance to the near clipping plane.
     * @param {number} far The distance to the far clipping plane.
     * @return {goog.vec.Mat4.AnyType} return mat so that operations can be
     *     chained.
     */
    function makePerspective(mat: goog.vec.Mat4.AnyType, fovy: number, aspect: number, near: number, far: number): goog.vec.Mat4.AnyType;

    /**
     * Makes the given 4x4 matrix an orthographic projection matrix.
     *
     * @param {goog.vec.Mat4.AnyType} mat The matrix.
     * @param {number} left The coordinate of the left clipping plane.
     * @param {number} right The coordinate of the right clipping plane.
     * @param {number} bottom The coordinate of the bottom clipping plane.
     * @param {number} top The coordinate of the top clipping plane.
     * @param {number} near The distance to the near clipping plane.
     * @param {number} far The distance to the far clipping plane.
     * @return {goog.vec.Mat4.AnyType} return mat so that operations can be
     *     chained.
     */
    function makeOrtho(mat: goog.vec.Mat4.AnyType, left: number, right: number, bottom: number, top: number, near: number, far: number): goog.vec.Mat4.AnyType;

    /**
     * Makes the given 4x4 matrix a modelview matrix of a camera so that
     * the camera is 'looking at' the given center point.
     *
     * @param {goog.vec.Mat4.AnyType} mat The matrix.
     * @param {goog.vec.Vec3.AnyType} eyePt The position of the eye point
     *     (camera origin).
     * @param {goog.vec.Vec3.AnyType} centerPt The point to aim the camera at.
     * @param {goog.vec.Vec3.AnyType} worldUpVec The vector that identifies
     *     the up direction for the camera.
     * @return {goog.vec.Mat4.AnyType} return mat so that operations can be
     *     chained.
     */
    function makeLookAt(mat: goog.vec.Mat4.AnyType, eyePt: goog.vec.Vec3.AnyType, centerPt: goog.vec.Vec3.AnyType, worldUpVec: goog.vec.Vec3.AnyType): goog.vec.Mat4.AnyType;

    /**
     * Decomposes a matrix into the lookAt vectors eyePt, fwdVec and worldUpVec.
     * The matrix represents the modelview matrix of a camera. It is the inverse
     * of lookAt except for the output of the fwdVec instead of centerPt.
     * The centerPt itself cannot be recovered from a modelview matrix.
     *
     * @param {goog.vec.Mat4.AnyType} mat The matrix.
     * @param {goog.vec.Vec3.AnyType} eyePt The position of the eye point
     *     (camera origin).
     * @param {goog.vec.Vec3.AnyType} fwdVec The vector describing where
     *     the camera points to.
     * @param {goog.vec.Vec3.AnyType} worldUpVec The vector that
     *     identifies the up direction for the camera.
     * @return {boolean} True if the method succeeds, false otherwise.
     *     The method can only fail if the inverse of viewMatrix is not defined.
     */
    function toLookAt(mat: goog.vec.Mat4.AnyType, eyePt: goog.vec.Vec3.AnyType, fwdVec: goog.vec.Vec3.AnyType, worldUpVec: goog.vec.Vec3.AnyType): boolean;

    /**
     * Makes the given 4x4 matrix a rotation matrix given Euler angles using
     * the ZXZ convention.
     * Given the euler angles [theta1, theta2, theta3], the rotation is defined as
     * rotation = rotation_z(theta1) * rotation_x(theta2) * rotation_z(theta3),
     * with theta1 in [0, 2 * pi], theta2 in [0, pi] and theta3 in [0, 2 * pi].
     * rotation_x(theta) means rotation around the X axis of theta radians,
     *
     * @param {goog.vec.Mat4.AnyType} mat The matrix.
     * @param {number} theta1 The angle of rotation around the Z axis in radians.
     * @param {number} theta2 The angle of rotation around the X axis in radians.
     * @param {number} theta3 The angle of rotation around the Z axis in radians.
     * @return {goog.vec.Mat4.AnyType} return mat so that operations can be
     *     chained.
     */
    function makeEulerZXZ(mat: goog.vec.Mat4.AnyType, theta1: number, theta2: number, theta3: number): goog.vec.Mat4.AnyType;

    /**
     * Decomposes a rotation matrix into Euler angles using the ZXZ convention so
     * that rotation = rotation_z(theta1) * rotation_x(theta2) * rotation_z(theta3),
     * with theta1 in [0, 2 * pi], theta2 in [0, pi] and theta3 in [0, 2 * pi].
     * rotation_x(theta) means rotation around the X axis of theta radians.
     *
     * @param {goog.vec.Mat4.AnyType} mat The matrix.
     * @param {goog.vec.Vec3.AnyType} euler The ZXZ Euler angles in
     *     radians as [theta1, theta2, theta3].
     * @param {boolean=} opt_theta2IsNegative Whether theta2 is in [-pi, 0] instead
     *     of the default [0, pi].
     * @return {goog.vec.Vec4.AnyType} return euler so that operations can be
     *     chained together.
     */
    function toEulerZXZ(mat: goog.vec.Mat4.AnyType, euler: goog.vec.Vec3.AnyType, opt_theta2IsNegative?: boolean): goog.vec.Vec4.AnyType;

    /**
     * Translates the given matrix by x,y,z.  Equvialent to:
     * goog.vec.Mat4.multMat(
     *     mat,
     *     goog.vec.Mat4.makeTranslate(goog.vec.Mat4.create(), x, y, z),
     *     mat);
     *
     * @param {goog.vec.Mat4.AnyType} mat The matrix.
     * @param {number} x The translation along the x axis.
     * @param {number} y The translation along the y axis.
     * @param {number} z The translation along the z axis.
     * @return {goog.vec.Mat4.AnyType} return mat so that operations can be
     *     chained.
     */
    function translate(mat: goog.vec.Mat4.AnyType, x: number, y: number, z: number): goog.vec.Mat4.AnyType;

    /**
     * Scales the given matrix by x,y,z.  Equivalent to:
     * goog.vec.Mat4.multMat(
     *     mat,
     *     goog.vec.Mat4.makeScale(goog.vec.Mat4.create(), x, y, z),
     *     mat);
     *
     * @param {goog.vec.Mat4.AnyType} mat The matrix.
     * @param {number} x The x scale factor.
     * @param {number} y The y scale factor.
     * @param {number} z The z scale factor.
     * @return {goog.vec.Mat4.AnyType} return mat so that operations can be
     *     chained.
     */
    function scale(mat: goog.vec.Mat4.AnyType, x: number, y: number, z: number): goog.vec.Mat4.AnyType;

    /**
     * Rotate the given matrix by angle about the x,y,z axis.  Equivalent to:
     * goog.vec.Mat4.multMat(
     *     mat,
     *     goog.vec.Mat4.makeRotate(goog.vec.Mat4.create(), angle, x, y, z),
     *     mat);
     *
     * @param {goog.vec.Mat4.AnyType} mat The matrix.
     * @param {number} angle The angle in radians.
     * @param {number} x The x component of the rotation axis.
     * @param {number} y The y component of the rotation axis.
     * @param {number} z The z component of the rotation axis.
     * @return {goog.vec.Mat4.AnyType} return mat so that operations can be
     *     chained.
     */
    function rotate(mat: goog.vec.Mat4.AnyType, angle: number, x: number, y: number, z: number): goog.vec.Mat4.AnyType;

    /**
     * Rotate the given matrix by angle about the x axis.  Equivalent to:
     * goog.vec.Mat4.multMat(
     *     mat,
     *     goog.vec.Mat4.makeRotateX(goog.vec.Mat4.create(), angle),
     *     mat);
     *
     * @param {goog.vec.Mat4.AnyType} mat The matrix.
     * @param {number} angle The angle in radians.
     * @return {goog.vec.Mat4.AnyType} return mat so that operations can be
     *     chained.
     */
    function rotateX(mat: goog.vec.Mat4.AnyType, angle: number): goog.vec.Mat4.AnyType;

    /**
     * Rotate the given matrix by angle about the y axis.  Equivalent to:
     * goog.vec.Mat4.multMat(
     *     mat,
     *     goog.vec.Mat4.makeRotateY(goog.vec.Mat4.create(), angle),
     *     mat);
     *
     * @param {goog.vec.Mat4.AnyType} mat The matrix.
     * @param {number} angle The angle in radians.
     * @return {goog.vec.Mat4.AnyType} return mat so that operations can be
     *     chained.
     */
    function rotateY(mat: goog.vec.Mat4.AnyType, angle: number): goog.vec.Mat4.AnyType;

    /**
     * Rotate the given matrix by angle about the z axis.  Equivalent to:
     * goog.vec.Mat4.multMat(
     *     mat,
     *     goog.vec.Mat4.makeRotateZ(goog.vec.Mat4.create(), angle),
     *     mat);
     *
     * @param {goog.vec.Mat4.AnyType} mat The matrix.
     * @param {number} angle The angle in radians.
     * @return {goog.vec.Mat4.AnyType} return mat so that operations can be
     *     chained.
     */
    function rotateZ(mat: goog.vec.Mat4.AnyType, angle: number): goog.vec.Mat4.AnyType;

    /**
     * Retrieves the translation component of the transformation matrix.
     *
     * @param {goog.vec.Mat4.AnyType} mat The transformation matrix.
     * @param {goog.vec.Vec3.AnyType} translation The vector for storing the
     *     result.
     * @return {goog.vec.Mat4.AnyType} return mat so that operations can be
     *     chained.
     */
    function getTranslation(mat: goog.vec.Mat4.AnyType, translation: goog.vec.Vec3.AnyType): goog.vec.Mat4.AnyType;
}
