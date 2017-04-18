declare module goog {
    function require(name: 'goog.vec.vec2d'): typeof goog.vec.vec2d;
}

declare module goog.vec.vec2d {

    /** @typedef {goog.vec.Float64} */
    type Type = goog.vec.Float64;

    /**
     * Creates a vec2d with all elements initialized to zero.
     *
     * @return {!goog.vec.vec2d.Type} The new vec2d.
     */
    function create(): goog.vec.vec2d.Type;

    /**
     * Initializes the vector with the given values.
     *
     * @param {goog.vec.vec2d.Type} vec The vector to receive the values.
     * @param {number} v0 The value for element at index 0.
     * @param {number} v1 The value for element at index 1.
     * @return {!goog.vec.vec2d.Type} Return vec so that operations can be
     *     chained together.
     */
    function setFromValues(vec: goog.vec.vec2d.Type, v0: number, v1: number): goog.vec.vec2d.Type;

    /**
     * Initializes vec2d vec from vec2d src.
     *
     * @param {goog.vec.vec2d.Type} vec The destination vector.
     * @param {goog.vec.vec2d.Type} src The source vector.
     * @return {!goog.vec.vec2d.Type} Return vec so that operations can be
     *     chained together.
     */
    function setFromVec2d(vec: goog.vec.vec2d.Type, src: goog.vec.vec2d.Type): goog.vec.vec2d.Type;

    /**
     * Initializes vec2d vec from vec2f src (typed as a Float32Array to
     * avoid circular goog.requires).
     *
     * @param {goog.vec.vec2d.Type} vec The destination vector.
     * @param {Float32Array} src The source vector.
     * @return {!goog.vec.vec2d.Type} Return vec so that operations can be
     *     chained together.
     */
    function setFromVec2f(vec: goog.vec.vec2d.Type, src: Float32Array): goog.vec.vec2d.Type;

    /**
     * Initializes vec2d vec from Array src.
     *
     * @param {goog.vec.vec2d.Type} vec The destination vector.
     * @param {Array<number>} src The source vector.
     * @return {!goog.vec.vec2d.Type} Return vec so that operations can be
     *     chained together.
     */
    function setFromArray(vec: goog.vec.vec2d.Type, src: Array<number>): goog.vec.vec2d.Type;

    /**
     * Performs a component-wise addition of vec0 and vec1 together storing the
     * result into resultVec.
     *
     * @param {goog.vec.vec2d.Type} vec0 The first addend.
     * @param {goog.vec.vec2d.Type} vec1 The second addend.
     * @param {goog.vec.vec2d.Type} resultVec The vector to
     *     receive the result. May be vec0 or vec1.
     * @return {!goog.vec.vec2d.Type} Return resultVec so that operations can be
     *     chained together.
     */
    function add(vec0: goog.vec.vec2d.Type, vec1: goog.vec.vec2d.Type, resultVec: goog.vec.vec2d.Type): goog.vec.vec2d.Type;

    /**
     * Performs a component-wise subtraction of vec1 from vec0 storing the
     * result into resultVec.
     *
     * @param {goog.vec.vec2d.Type} vec0 The minuend.
     * @param {goog.vec.vec2d.Type} vec1 The subtrahend.
     * @param {goog.vec.vec2d.Type} resultVec The vector to
     *     receive the result. May be vec0 or vec1.
     * @return {!goog.vec.vec2d.Type} Return resultVec so that operations can be
     *     chained together.
     */
    function subtract(vec0: goog.vec.vec2d.Type, vec1: goog.vec.vec2d.Type, resultVec: goog.vec.vec2d.Type): goog.vec.vec2d.Type;

    /**
     * Multiplies each component of vec0 with the matching element of vec0
     * storing the products into resultVec.
     *
     * @param {!goog.vec.vec2d.Type} vec0 The first vector.
     * @param {!goog.vec.vec2d.Type} vec1 The second vector.
     * @param {!goog.vec.vec2d.Type} resultVec The vector to
     *     receive the result. May be vec0.
     * @return {!goog.vec.vec2d.Type} Return resultVec so that operations can be
     *     chained together.
     */
    function componentMultiply(vec0: goog.vec.vec2d.Type, vec1: goog.vec.vec2d.Type, resultVec: goog.vec.vec2d.Type): goog.vec.vec2d.Type;

    /**
     * Divides each component of vec0 with the matching element of vec0
     * storing the divisor into resultVec.
     *
     * @param {!goog.vec.vec2d.Type} vec0 The first vector.
     * @param {!goog.vec.vec2d.Type} vec1 The second vector.
     * @param {!goog.vec.vec2d.Type} resultVec The vector to
     *     receive the result. May be vec0.
     * @return {!goog.vec.vec2d.Type} Return resultVec so that operations can be
     *     chained together.
     */
    function componentDivide(vec0: goog.vec.vec2d.Type, vec1: goog.vec.vec2d.Type, resultVec: goog.vec.vec2d.Type): goog.vec.vec2d.Type;

    /**
     * Negates vec0, storing the result into resultVec.
     *
     * @param {goog.vec.vec2d.Type} vec0 The vector to negate.
     * @param {goog.vec.vec2d.Type} resultVec The vector to
     *     receive the result. May be vec0.
     * @return {!goog.vec.vec2d.Type} Return resultVec so that operations can be
     *     chained together.
     */
    function negate(vec0: goog.vec.vec2d.Type, resultVec: goog.vec.vec2d.Type): goog.vec.vec2d.Type;

    /**
     * Takes the absolute value of each component of vec0 storing the result in
     * resultVec.
     *
     * @param {goog.vec.vec2d.Type} vec0 The source vector.
     * @param {goog.vec.vec2d.Type} resultVec The vector to receive the result.
     *     May be vec0.
     * @return {!goog.vec.vec2d.Type} Return resultVec so that operations can be
     *     chained together.
     */
    function abs(vec0: goog.vec.vec2d.Type, resultVec: goog.vec.vec2d.Type): goog.vec.vec2d.Type;

    /**
     * Multiplies each component of vec0 with scalar storing the product into
     * resultVec.
     *
     * @param {goog.vec.vec2d.Type} vec0 The source vector.
     * @param {number} scalar The value to multiply with each component of vec0.
     * @param {goog.vec.vec2d.Type} resultVec The vector to
     *     receive the result. May be vec0.
     * @return {!goog.vec.vec2d.Type} Return resultVec so that operations can be
     *     chained together.
     */
    function scale(vec0: goog.vec.vec2d.Type, scalar: number, resultVec: goog.vec.vec2d.Type): goog.vec.vec2d.Type;

    /**
     * Returns the magnitudeSquared of the given vector.
     *
     * @param {goog.vec.vec2d.Type} vec0 The vector.
     * @return {number} The magnitude of the vector.
     */
    function magnitudeSquared(vec0: goog.vec.vec2d.Type): number;

    /**
     * Returns the magnitude of the given vector.
     *
     * @param {goog.vec.vec2d.Type} vec0 The vector.
     * @return {number} The magnitude of the vector.
     */
    function magnitude(vec0: goog.vec.vec2d.Type): number;

    /**
     * Normalizes the given vector storing the result into resultVec.
     *
     * @param {goog.vec.vec2d.Type} vec0 The vector to normalize.
     * @param {goog.vec.vec2d.Type} resultVec The vector to
     *     receive the result. May be vec0.
     * @return {!goog.vec.vec2d.Type} Return resultVec so that operations can be
     *     chained together.
     */
    function normalize(vec0: goog.vec.vec2d.Type, resultVec: goog.vec.vec2d.Type): goog.vec.vec2d.Type;

    /**
     * Returns the scalar product of vectors vec0 and vec1.
     *
     * @param {goog.vec.vec2d.Type} vec0 The first vector.
     * @param {goog.vec.vec2d.Type} vec1 The second vector.
     * @return {number} The scalar product.
     */
    function dot(vec0: goog.vec.vec2d.Type, vec1: goog.vec.vec2d.Type): number;

    /**
     * Returns the squared distance between two points.
     *
     * @param {goog.vec.vec2d.Type} vec0 First point.
     * @param {goog.vec.vec2d.Type} vec1 Second point.
     * @return {number} The squared distance between the points.
     */
    function distanceSquared(vec0: goog.vec.vec2d.Type, vec1: goog.vec.vec2d.Type): number;

    /**
     * Returns the distance between two points.
     *
     * @param {goog.vec.vec2d.Type} vec0 First point.
     * @param {goog.vec.vec2d.Type} vec1 Second point.
     * @return {number} The distance between the points.
     */
    function distance(vec0: goog.vec.vec2d.Type, vec1: goog.vec.vec2d.Type): number;

    /**
     * Returns a unit vector pointing from one point to another.
     * If the input points are equal then the result will be all zeros.
     *
     * @param {goog.vec.vec2d.Type} vec0 Origin point.
     * @param {goog.vec.vec2d.Type} vec1 Target point.
     * @param {goog.vec.vec2d.Type} resultVec The vector to receive the
     *     results (may be vec0 or vec1).
     * @return {!goog.vec.vec2d.Type} Return resultVec so that operations can be
     *     chained together.
     */
    function direction(vec0: goog.vec.vec2d.Type, vec1: goog.vec.vec2d.Type, resultVec: goog.vec.vec2d.Type): goog.vec.vec2d.Type;

    /**
     * Linearly interpolate from vec0 to vec1 according to f. The value of f should
     * be in the range [0..1] otherwise the results are undefined.
     *
     * @param {goog.vec.vec2d.Type} vec0 The first vector.
     * @param {goog.vec.vec2d.Type} vec1 The second vector.
     * @param {number} f The interpolation factor.
     * @param {goog.vec.vec2d.Type} resultVec The vector to receive the
     *     results (may be vec0 or vec1).
     * @return {!goog.vec.vec2d.Type} Return resultVec so that operations can be
     *     chained together.
     */
    function lerp(vec0: goog.vec.vec2d.Type, vec1: goog.vec.vec2d.Type, f: number, resultVec: goog.vec.vec2d.Type): goog.vec.vec2d.Type;

    /**
     * Compares the components of vec0 with the components of another vector or
     * scalar, storing the larger values in resultVec.
     *
     * @param {goog.vec.vec2d.Type} vec0 The source vector.
     * @param {goog.vec.vec2d.Type|number} limit The limit vector or scalar.
     * @param {goog.vec.vec2d.Type} resultVec The vector to receive the
     *     results (may be vec0 or limit).
     * @return {!goog.vec.vec2d.Type} Return resultVec so that operations can be
     *     chained together.
     */
    function max(vec0: goog.vec.vec2d.Type, limit: goog.vec.vec2d.Type|number, resultVec: goog.vec.vec2d.Type): goog.vec.vec2d.Type;

    /**
     * Compares the components of vec0 with the components of another vector or
     * scalar, storing the smaller values in resultVec.
     *
     * @param {goog.vec.vec2d.Type} vec0 The source vector.
     * @param {goog.vec.vec2d.Type|number} limit The limit vector or scalar.
     * @param {goog.vec.vec2d.Type} resultVec The vector to receive the
     *     results (may be vec0 or limit).
     * @return {!goog.vec.vec2d.Type} Return resultVec so that operations can be
     *     chained together.
     */
    function min(vec0: goog.vec.vec2d.Type, limit: goog.vec.vec2d.Type|number, resultVec: goog.vec.vec2d.Type): goog.vec.vec2d.Type;

    /**
     * Returns true if the components of vec0 are equal to the components of vec1.
     *
     * @param {goog.vec.vec2d.Type} vec0 The first vector.
     * @param {goog.vec.vec2d.Type} vec1 The second vector.
     * @return {boolean} True if the vectors are equal, false otherwise.
     */
    function equals(vec0: goog.vec.vec2d.Type, vec1: goog.vec.vec2d.Type): boolean;
}
