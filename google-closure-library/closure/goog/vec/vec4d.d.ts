declare module goog {
    function require(name: 'goog.vec.vec4d'): typeof goog.vec.vec4d;
}

declare module goog.vec.vec4d {

    /** @typedef {goog.vec.Float64} */
    type Type = goog.vec.Float64;

    /**
     * Creates a vec4d with all elements initialized to zero.
     *
     * @return {!goog.vec.vec4d.Type} The new vec4d.
     */
    function create(): goog.vec.vec4d.Type;

    /**
     * Initializes the vector with the given values.
     *
     * @param {goog.vec.vec4d.Type} vec The vector to receive the values.
     * @param {number} v0 The value for element at index 0.
     * @param {number} v1 The value for element at index 1.
     * @param {number} v2 The value for element at index 2.
     * @param {number} v3 The value for element at index 3.
     * @return {!goog.vec.vec4d.Type} Return vec so that operations can be
     *     chained together.
     */
    function setFromValues(vec: goog.vec.vec4d.Type, v0: number, v1: number, v2: number, v3: number): goog.vec.vec4d.Type;

    /**
     * Initializes vec4d vec from vec4d src.
     *
     * @param {goog.vec.vec4d.Type} vec The destination vector.
     * @param {goog.vec.vec4d.Type} src The source vector.
     * @return {!goog.vec.vec4d.Type} Return vec so that operations can be
     *     chained together.
     */
    function setFromVec4d(vec: goog.vec.vec4d.Type, src: goog.vec.vec4d.Type): goog.vec.vec4d.Type;

    /**
     * Initializes vec4d vec from vec4f src (typed as a Float32Array to
     * avoid circular goog.requires).
     *
     * @param {goog.vec.vec4d.Type} vec The destination vector.
     * @param {Float32Array} src The source vector.
     * @return {!goog.vec.vec4d.Type} Return vec so that operations can be
     *     chained together.
     */
    function setFromVec4f(vec: goog.vec.vec4d.Type, src: Float32Array): goog.vec.vec4d.Type;

    /**
     * Initializes vec4d vec from Array src.
     *
     * @param {goog.vec.vec4d.Type} vec The destination vector.
     * @param {Array<number>} src The source vector.
     * @return {!goog.vec.vec4d.Type} Return vec so that operations can be
     *     chained together.
     */
    function setFromArray(vec: goog.vec.vec4d.Type, src: Array<number>): goog.vec.vec4d.Type;

    /**
     * Performs a component-wise addition of vec0 and vec1 together storing the
     * result into resultVec.
     *
     * @param {goog.vec.vec4d.Type} vec0 The first addend.
     * @param {goog.vec.vec4d.Type} vec1 The second addend.
     * @param {goog.vec.vec4d.Type} resultVec The vector to
     *     receive the result. May be vec0 or vec1.
     * @return {!goog.vec.vec4d.Type} Return resultVec so that operations can be
     *     chained together.
     */
    function add(vec0: goog.vec.vec4d.Type, vec1: goog.vec.vec4d.Type, resultVec: goog.vec.vec4d.Type): goog.vec.vec4d.Type;

    /**
     * Performs a component-wise subtraction of vec1 from vec0 storing the
     * result into resultVec.
     *
     * @param {goog.vec.vec4d.Type} vec0 The minuend.
     * @param {goog.vec.vec4d.Type} vec1 The subtrahend.
     * @param {goog.vec.vec4d.Type} resultVec The vector to
     *     receive the result. May be vec0 or vec1.
     * @return {!goog.vec.vec4d.Type} Return resultVec so that operations can be
     *     chained together.
     */
    function subtract(vec0: goog.vec.vec4d.Type, vec1: goog.vec.vec4d.Type, resultVec: goog.vec.vec4d.Type): goog.vec.vec4d.Type;

    /**
     * Negates vec0, storing the result into resultVec.
     *
     * @param {goog.vec.vec4d.Type} vec0 The vector to negate.
     * @param {goog.vec.vec4d.Type} resultVec The vector to
     *     receive the result. May be vec0.
     * @return {!goog.vec.vec4d.Type} Return resultVec so that operations can be
     *     chained together.
     */
    function negate(vec0: goog.vec.vec4d.Type, resultVec: goog.vec.vec4d.Type): goog.vec.vec4d.Type;

    /**
     * Takes the absolute value of each component of vec0 storing the result in
     * resultVec.
     *
     * @param {goog.vec.vec4d.Type} vec0 The source vector.
     * @param {goog.vec.vec4d.Type} resultVec The vector to receive the result.
     *     May be vec0.
     * @return {!goog.vec.vec4d.Type} Return resultVec so that operations can be
     *     chained together.
     */
    function abs(vec0: goog.vec.vec4d.Type, resultVec: goog.vec.vec4d.Type): goog.vec.vec4d.Type;

    /**
     * Multiplies each component of vec0 with scalar storing the product into
     * resultVec.
     *
     * @param {goog.vec.vec4d.Type} vec0 The source vector.
     * @param {number} scalar The value to multiply with each component of vec0.
     * @param {goog.vec.vec4d.Type} resultVec The vector to
     *     receive the result. May be vec0.
     * @return {!goog.vec.vec4d.Type} Return resultVec so that operations can be
     *     chained together.
     */
    function scale(vec0: goog.vec.vec4d.Type, scalar: number, resultVec: goog.vec.vec4d.Type): goog.vec.vec4d.Type;

    /**
     * Returns the magnitudeSquared of the given vector.
     *
     * @param {goog.vec.vec4d.Type} vec0 The vector.
     * @return {number} The magnitude of the vector.
     */
    function magnitudeSquared(vec0: goog.vec.vec4d.Type): number;

    /**
     * Returns the magnitude of the given vector.
     *
     * @param {goog.vec.vec4d.Type} vec0 The vector.
     * @return {number} The magnitude of the vector.
     */
    function magnitude(vec0: goog.vec.vec4d.Type): number;

    /**
     * Normalizes the given vector storing the result into resultVec.
     *
     * @param {goog.vec.vec4d.Type} vec0 The vector to normalize.
     * @param {goog.vec.vec4d.Type} resultVec The vector to
     *     receive the result. May be vec0.
     * @return {!goog.vec.vec4d.Type} Return resultVec so that operations can be
     *     chained together.
     */
    function normalize(vec0: goog.vec.vec4d.Type, resultVec: goog.vec.vec4d.Type): goog.vec.vec4d.Type;

    /**
     * Returns the scalar product of vectors v0 and v1.
     *
     * @param {goog.vec.vec4d.Type} v0 The first vector.
     * @param {goog.vec.vec4d.Type} v1 The second vector.
     * @return {number} The scalar product.
     */
    function dot(v0: goog.vec.vec4d.Type, v1: goog.vec.vec4d.Type): number;

    /**
     * Linearly interpolate from v0 to v1 according to f. The value of f should be
     * in the range [0..1] otherwise the results are undefined.
     *
     * @param {goog.vec.vec4d.Type} v0 The first vector.
     * @param {goog.vec.vec4d.Type} v1 The second vector.
     * @param {number} f The interpolation factor.
     * @param {goog.vec.vec4d.Type} resultVec The vector to receive the
     *     results (may be v0 or v1).
     * @return {!goog.vec.vec4d.Type} Return resultVec so that operations can be
     *     chained together.
     */
    function lerp(v0: goog.vec.vec4d.Type, v1: goog.vec.vec4d.Type, f: number, resultVec: goog.vec.vec4d.Type): goog.vec.vec4d.Type;

    /**
     * Compares the components of vec0 with the components of another vector or
     * scalar, storing the larger values in resultVec.
     *
     * @param {goog.vec.vec4d.Type} vec0 The source vector.
     * @param {goog.vec.vec4d.Type|number} limit The limit vector or scalar.
     * @param {goog.vec.vec4d.Type} resultVec The vector to receive the
     *     results (may be vec0 or limit).
     * @return {!goog.vec.vec4d.Type} Return resultVec so that operations can be
     *     chained together.
     */
    function max(vec0: goog.vec.vec4d.Type, limit: goog.vec.vec4d.Type|number, resultVec: goog.vec.vec4d.Type): goog.vec.vec4d.Type;

    /**
     * Compares the components of vec0 with the components of another vector or
     * scalar, storing the smaller values in resultVec.
     *
     * @param {goog.vec.vec4d.Type} vec0 The source vector.
     * @param {goog.vec.vec4d.Type|number} limit The limit vector or scalar.
     * @param {goog.vec.vec4d.Type} resultVec The vector to receive the
     *     results (may be vec0 or limit).
     * @return {!goog.vec.vec4d.Type} Return resultVec so that operations can be
     *     chained together.
     */
    function min(vec0: goog.vec.vec4d.Type, limit: goog.vec.vec4d.Type|number, resultVec: goog.vec.vec4d.Type): goog.vec.vec4d.Type;

    /**
     * Returns true if the components of v0 are equal to the components of v1.
     *
     * @param {goog.vec.vec4d.Type} v0 The first vector.
     * @param {goog.vec.vec4d.Type} v1 The second vector.
     * @return {boolean} True if the vectors are equal, false otherwise.
     */
    function equals(v0: goog.vec.vec4d.Type, v1: goog.vec.vec4d.Type): boolean;
}
