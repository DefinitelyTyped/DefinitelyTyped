declare module goog {
    function require(name: 'goog.vec.Vec4'): typeof goog.vec.Vec4;
}

declare module goog.vec.Vec4 {

    /** @typedef {goog.vec.Float32} */
    type Float32 = goog.vec.Float32;

    /** @typedef {goog.vec.Float64} */
    type Float64 = goog.vec.Float64;

    /** @typedef {goog.vec.Number} */
    type Number = goog.vec.Number;

    /** @typedef {goog.vec.AnyType} */
    type AnyType = goog.vec.AnyType;

    /** @typedef {Float32Array} */
    type Type = Float32Array;

    /** @typedef {goog.vec.ArrayType} */
    type Vec4Like = goog.vec.ArrayType;

    /**
     * Creates a 4 element vector of Float32. The array is initialized to zero.
     *
     * @return {!goog.vec.Vec4.Float32} The new 3 element array.
     */
    function createFloat32(): goog.vec.Vec4.Float32;

    /**
     * Creates a 4 element vector of Float64. The array is initialized to zero.
     *
     * @return {!goog.vec.Vec4.Float64} The new 4 element array.
     */
    function createFloat64(): goog.vec.Vec4.Float64;

    /**
     * Creates a 4 element vector of Number. The array is initialized to zero.
     *
     * @return {!goog.vec.Vec4.Number} The new 4 element array.
     */
    function createNumber(): goog.vec.Vec4.Number;

    /**
     * Creates a 4 element vector of Float32Array. The array is initialized to zero.
     *
     * @deprecated Use createFloat32.
     * @return {!goog.vec.Vec4.Type} The new 4 element array.
     */
    function create(): goog.vec.Vec4.Type;

    /**
     * Creates a new 4 element vector initialized with the value from the given
     * array.
     *
     * @deprecated Use createFloat32FromArray.
     * @param {goog.vec.Vec4.Vec4Like} vec The source 4 element array.
     * @return {!goog.vec.Vec4.Type} The new 4 element array.
     */
    function createFromArray(vec: goog.vec.Vec4.Vec4Like): goog.vec.Vec4.Type;

    /**
     * Creates a new 4 element FLoat32 vector initialized with the value from the
     * given array.
     *
     * @param {goog.vec.Vec4.AnyType} vec The source 3 element array.
     * @return {!goog.vec.Vec4.Float32} The new 3 element array.
     */
    function createFloat32FromArray(vec: goog.vec.Vec4.AnyType): goog.vec.Vec4.Float32;

    /**
     * Creates a new 4 element Float32 vector initialized with the supplied values.
     *
     * @param {number} v0 The value for element at index 0.
     * @param {number} v1 The value for element at index 1.
     * @param {number} v2 The value for element at index 2.
     * @param {number} v3 The value for element at index 3.
     * @return {!goog.vec.Vec4.Float32} The new vector.
     */
    function createFloat32FromValues(v0: number, v1: number, v2: number, v3: number): goog.vec.Vec4.Float32;

    /**
     * Creates a clone of the given 4 element Float32 vector.
     *
     * @param {goog.vec.Vec4.Float32} vec The source 3 element vector.
     * @return {!goog.vec.Vec4.Float32} The new cloned vector.
     */
    function cloneFloat32(vec: goog.vec.Vec4.Float32): goog.vec.Vec4.Float32;

    /**
     * Creates a new 4 element Float64 vector initialized with the value from the
     * given array.
     *
     * @param {goog.vec.Vec4.AnyType} vec The source 4 element array.
     * @return {!goog.vec.Vec4.Float64} The new 4 element array.
     */
    function createFloat64FromArray(vec: goog.vec.Vec4.AnyType): goog.vec.Vec4.Float64;

    /**
    * Creates a new 4 element Float64 vector initialized with the supplied values.
    *
    * @param {number} v0 The value for element at index 0.
    * @param {number} v1 The value for element at index 1.
    * @param {number} v2 The value for element at index 2.
    * @param {number} v3 The value for element at index 3.
    * @return {!goog.vec.Vec4.Float64} The new vector.
    */
    function createFloat64FromValues(v0: number, v1: number, v2: number, v3: number): goog.vec.Vec4.Float64;

    /**
     * Creates a clone of the given 4 element vector.
     *
     * @param {goog.vec.Vec4.Float64} vec The source 4 element vector.
     * @return {!goog.vec.Vec4.Float64} The new cloned vector.
     */
    function cloneFloat64(vec: goog.vec.Vec4.Float64): goog.vec.Vec4.Float64;

    /**
     * Creates a new 4 element vector initialized with the supplied values.
     *
     * @deprecated Use createFloat32FromValues.
     * @param {number} v0 The value for element at index 0.
     * @param {number} v1 The value for element at index 1.
     * @param {number} v2 The value for element at index 2.
     * @param {number} v3 The value for element at index 3.
     * @return {!goog.vec.Vec4.Type} The new vector.
     */
    function createFromValues(v0: number, v1: number, v2: number, v3: number): goog.vec.Vec4.Type;

    /**
     * Creates a clone of the given 4 element vector.
     *
     * @deprecated Use cloneFloat32.
     * @param {goog.vec.Vec4.Vec4Like} vec The source 4 element vector.
     * @return {!goog.vec.Vec4.Type} The new cloned vector.
     */
    function clone(vec: goog.vec.Vec4.Vec4Like): goog.vec.Vec4.Type;

    /**
     * Initializes the vector with the given values.
     *
     * @param {goog.vec.Vec4.AnyType} vec The vector to receive the values.
     * @param {number} v0 The value for element at index 0.
     * @param {number} v1 The value for element at index 1.
     * @param {number} v2 The value for element at index 2.
     * @param {number} v3 The value for element at index 3.
     * @return {!goog.vec.Vec4.AnyType} Return vec so that operations can be
     *     chained together.
     */
    function setFromValues(vec: goog.vec.Vec4.AnyType, v0: number, v1: number, v2: number, v3: number): goog.vec.Vec4.AnyType;

    /**
     * Initializes the vector with the given array of values.
     *
     * @param {goog.vec.Vec4.AnyType} vec The vector to receive the
     *     values.
     * @param {goog.vec.Vec4.AnyType} values The array of values.
     * @return {!goog.vec.Vec4.AnyType} Return vec so that operations can be
     *     chained together.
     */
    function setFromArray(vec: goog.vec.Vec4.AnyType, values: goog.vec.Vec4.AnyType): goog.vec.Vec4.AnyType;

    /**
     * Performs a component-wise addition of vec0 and vec1 together storing the
     * result into resultVec.
     *
     * @param {goog.vec.Vec4.AnyType} vec0 The first addend.
     * @param {goog.vec.Vec4.AnyType} vec1 The second addend.
     * @param {goog.vec.Vec4.AnyType} resultVec The vector to
     *     receive the result. May be vec0 or vec1.
     * @return {!goog.vec.Vec4.AnyType} Return resultVec so that operations can be
     *     chained together.
     */
    function add(vec0: goog.vec.Vec4.AnyType, vec1: goog.vec.Vec4.AnyType, resultVec: goog.vec.Vec4.AnyType): goog.vec.Vec4.AnyType;

    /**
     * Performs a component-wise subtraction of vec1 from vec0 storing the
     * result into resultVec.
     *
     * @param {goog.vec.Vec4.AnyType} vec0 The minuend.
     * @param {goog.vec.Vec4.AnyType} vec1 The subtrahend.
     * @param {goog.vec.Vec4.AnyType} resultVec The vector to
     *     receive the result. May be vec0 or vec1.
     * @return {!goog.vec.Vec4.AnyType} Return resultVec so that operations can be
     *     chained together.
     */
    function subtract(vec0: goog.vec.Vec4.AnyType, vec1: goog.vec.Vec4.AnyType, resultVec: goog.vec.Vec4.AnyType): goog.vec.Vec4.AnyType;

    /**
     * Negates vec0, storing the result into resultVec.
     *
     * @param {goog.vec.Vec4.AnyType} vec0 The vector to negate.
     * @param {goog.vec.Vec4.AnyType} resultVec The vector to
     *     receive the result. May be vec0.
     * @return {!goog.vec.Vec4.AnyType} Return resultVec so that operations can be
     *     chained together.
     */
    function negate(vec0: goog.vec.Vec4.AnyType, resultVec: goog.vec.Vec4.AnyType): goog.vec.Vec4.AnyType;

    /**
     * Takes the absolute value of each component of vec0 storing the result in
     * resultVec.
     *
     * @param {goog.vec.Vec4.AnyType} vec0 The source vector.
     * @param {goog.vec.Vec4.AnyType} resultVec The vector to receive the result.
     *     May be vec0.
     * @return {!goog.vec.Vec4.AnyType} Return resultVec so that operations can be
     *     chained together.
     */
    function abs(vec0: goog.vec.Vec4.AnyType, resultVec: goog.vec.Vec4.AnyType): goog.vec.Vec4.AnyType;

    /**
     * Multiplies each component of vec0 with scalar storing the product into
     * resultVec.
     *
     * @param {goog.vec.Vec4.AnyType} vec0 The source vector.
     * @param {number} scalar The value to multiply with each component of vec0.
     * @param {goog.vec.Vec4.AnyType} resultVec The vector to
     *     receive the result. May be vec0.
     * @return {!goog.vec.Vec4.AnyType} Return resultVec so that operations can be
     *     chained together.
     */
    function scale(vec0: goog.vec.Vec4.AnyType, scalar: number, resultVec: goog.vec.Vec4.AnyType): goog.vec.Vec4.AnyType;

    /**
     * Returns the magnitudeSquared of the given vector.
     *
     * @param {goog.vec.Vec4.AnyType} vec0 The vector.
     * @return {number} The magnitude of the vector.
     */
    function magnitudeSquared(vec0: goog.vec.Vec4.AnyType): number;

    /**
     * Returns the magnitude of the given vector.
     *
     * @param {goog.vec.Vec4.AnyType} vec0 The vector.
     * @return {number} The magnitude of the vector.
     */
    function magnitude(vec0: goog.vec.Vec4.AnyType): number;

    /**
     * Normalizes the given vector storing the result into resultVec.
     *
     * @param {goog.vec.Vec4.AnyType} vec0 The vector to normalize.
     * @param {goog.vec.Vec4.AnyType} resultVec The vector to
     *     receive the result. May be vec0.
     * @return {!goog.vec.Vec4.AnyType} Return resultVec so that operations can be
     *     chained together.
     */
    function normalize(vec0: goog.vec.Vec4.AnyType, resultVec: goog.vec.Vec4.AnyType): goog.vec.Vec4.AnyType;

    /**
     * Returns the scalar product of vectors v0 and v1.
     *
     * @param {goog.vec.Vec4.AnyType} v0 The first vector.
     * @param {goog.vec.Vec4.AnyType} v1 The second vector.
     * @return {number} The scalar product.
     */
    function dot(v0: goog.vec.Vec4.AnyType, v1: goog.vec.Vec4.AnyType): number;

    /**
     * Linearly interpolate from v0 to v1 according to f. The value of f should be
     * in the range [0..1] otherwise the results are undefined.
     *
     * @param {goog.vec.Vec4.AnyType} v0 The first vector.
     * @param {goog.vec.Vec4.AnyType} v1 The second vector.
     * @param {number} f The interpolation factor.
     * @param {goog.vec.Vec4.AnyType} resultVec The vector to receive the
     *     results (may be v0 or v1).
     * @return {!goog.vec.Vec4.AnyType} Return resultVec so that operations can be
     *     chained together.
     */
    function lerp(v0: goog.vec.Vec4.AnyType, v1: goog.vec.Vec4.AnyType, f: number, resultVec: goog.vec.Vec4.AnyType): goog.vec.Vec4.AnyType;

    /**
     * Compares the components of vec0 with the components of another vector or
     * scalar, storing the larger values in resultVec.
     *
     * @param {goog.vec.Vec4.AnyType} vec0 The source vector.
     * @param {goog.vec.Vec4.AnyType|number} limit The limit vector or scalar.
     * @param {goog.vec.Vec4.AnyType} resultVec The vector to receive the
     *     results (may be vec0 or limit).
     * @return {!goog.vec.Vec4.AnyType} Return resultVec so that operations can be
     *     chained together.
     */
    function max(vec0: goog.vec.Vec4.AnyType, limit: goog.vec.Vec4.AnyType|number, resultVec: goog.vec.Vec4.AnyType): goog.vec.Vec4.AnyType;

    /**
     * Compares the components of vec0 with the components of another vector or
     * scalar, storing the smaller values in resultVec.
     *
     * @param {goog.vec.Vec4.AnyType} vec0 The source vector.
     * @param {goog.vec.Vec4.AnyType|number} limit The limit vector or scalar.
     * @param {goog.vec.Vec4.AnyType} resultVec The vector to receive the
     *     results (may be vec0 or limit).
     * @return {!goog.vec.Vec4.AnyType} Return resultVec so that operations can be
     *     chained together.
     */
    function min(vec0: goog.vec.Vec4.AnyType, limit: goog.vec.Vec4.AnyType|number, resultVec: goog.vec.Vec4.AnyType): goog.vec.Vec4.AnyType;

    /**
     * Returns true if the components of v0 are equal to the components of v1.
     *
     * @param {goog.vec.Vec4.AnyType} v0 The first vector.
     * @param {goog.vec.Vec4.AnyType} v1 The second vector.
     * @return {boolean} True if the vectors are equal, false otherwise.
     */
    function equals(v0: goog.vec.Vec4.AnyType, v1: goog.vec.Vec4.AnyType): boolean;
}
