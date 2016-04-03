declare module goog {
    function require(name: 'goog.vec.Quaternion'): typeof goog.vec.Quaternion;
}

declare module goog.vec.Quaternion {

    /** @typedef {goog.vec.Float32} */
    type Float32 = goog.vec.Float32;

    /** @typedef {goog.vec.Float64} */
    type Float64 = goog.vec.Float64;

    /** @typedef {goog.vec.Number} */
    type Number = goog.vec.Number;

    /** @typedef {goog.vec.AnyType} */
    type AnyType = goog.vec.AnyType;

    /**
     * Creates a Float32 quaternion, initialized to zero.
     *
     * @return {!goog.vec.Quaternion.Float32} The new quaternion.
     */
    function createFloat32(): goog.vec.Quaternion.Float32;

    /**
     * Creates a Float64 quaternion, initialized to zero.
     *
     * @return {goog.vec.Quaternion.Float64} The new quaternion.
     */
    function createFloat64(): goog.vec.Quaternion.Float64;

    /**
     * Creates a Number quaternion, initialized to zero.
     *
     * @return {goog.vec.Quaternion.Number} The new quaternion.
     */
    function createNumber(): goog.vec.Quaternion.Number;

    /**
     * Creates a new Float32 quaternion initialized with the values from the
     * supplied array.
     *
     * @param {goog.vec.AnyType} vec The source 4 element array.
     * @return {!goog.vec.Quaternion.Float32} The new quaternion.
     */
    function createFloat32FromArray(vec: goog.vec.AnyType): goog.vec.Quaternion.Float32;

    /**
     * Creates a new Float64 quaternion initialized with the values from the
     * supplied array.
     *
     * @param {goog.vec.AnyType} vec The source 4 element array.
     * @return {!goog.vec.Quaternion.Float64} The new quaternion.
     */
    function createFloat64FromArray(vec: goog.vec.AnyType): goog.vec.Quaternion.Float64;

    /**
     * Creates a new Float32 quaternion initialized with the supplied values.
     *
     * @param {number} v0 The value for element at index 0.
     * @param {number} v1 The value for element at index 1.
     * @param {number} v2 The value for element at index 2.
     * @param {number} v3 The value for element at index 3.
     * @return {!goog.vec.Quaternion.Float32} The new quaternion.
     */
    function createFloat32FromValues(v0: number, v1: number, v2: number, v3: number): goog.vec.Quaternion.Float32;

    /**
     * Creates a new Float64 quaternion initialized with the supplied values.
     *
     * @param {number} v0 The value for element at index 0.
     * @param {number} v1 The value for element at index 1.
     * @param {number} v2 The value for element at index 2.
     * @param {number} v3 The value for element at index 3.
     * @return {!goog.vec.Quaternion.Float64} The new quaternion.
     */
    function createFloat64FromValues(v0: number, v1: number, v2: number, v3: number): goog.vec.Quaternion.Float64;

    /**
     * Creates a clone of the given Float32 quaternion.
     *
     * @param {goog.vec.Quaternion.Float32} q The source quaternion.
     * @return {goog.vec.Quaternion.Float32} The new quaternion.
     */
    function cloneFloat32(q: goog.vec.Quaternion.Float32): goog.vec.Quaternion.Float32;

    /**
     * Creates a clone of the given Float64 quaternion.
     *
     * @param {goog.vec.Quaternion.Float64} q The source quaternion.
     * @return {goog.vec.Quaternion.Float64} The new quaternion.
     */
    function cloneFloat64(q: goog.vec.Quaternion.Float64): goog.vec.Quaternion.Float64;

    /**
     * Initializes the quaternion with the given values.
     *
     * @param {goog.vec.Quaternion.AnyType} q The quaternion to receive
     *     the values.
     * @param {number} v0 The value for element at index 0.
     * @param {number} v1 The value for element at index 1.
     * @param {number} v2 The value for element at index 2.
     * @param {number} v3 The value for element at index 3.
     * @return {!goog.vec.Vec4.AnyType} return q so that operations can be
     *     chained together.
     */
    function setFromValues(q: goog.vec.Quaternion.AnyType, v0: number, v1: number, v2: number, v3: number): goog.vec.Vec4.AnyType;

    /**
     * Initializes the quaternion with the given array of values.
     *
     * @param {goog.vec.Quaternion.AnyType} q The quaternion to receive
     *     the values.
     * @param {goog.vec.AnyType} values The array of values.
     * @return {!goog.vec.Quaternion.AnyType} return q so that operations can be
     *     chained together.
     */
    function setFromArray(q: goog.vec.Quaternion.AnyType, values: goog.vec.AnyType): goog.vec.Quaternion.AnyType;

    /**
     * Adds the two quaternions.
     *
     * @param {goog.vec.Quaternion.AnyType} quat0 The first addend.
     * @param {goog.vec.Quaternion.AnyType} quat1 The second addend.
     * @param {goog.vec.Quaternion.AnyType} resultQuat The quaternion to
     *     receive the result. May be quat0 or quat1.
     */
    function add(quat0: goog.vec.Quaternion.AnyType, quat1: goog.vec.Quaternion.AnyType, resultQuat: goog.vec.Quaternion.AnyType): void;

    /**
     * Negates a quaternion, storing the result into resultQuat.
     *
     * @param {goog.vec.Quaternion.AnyType} quat0 The quaternion to negate.
     * @param {goog.vec.Quaternion.AnyType} resultQuat The quaternion to
     *     receive the result. May be quat0.
     */
    function negate(quat0: goog.vec.Quaternion.AnyType, resultQuat: goog.vec.Quaternion.AnyType): void;

    /**
     * Multiplies each component of quat0 with scalar storing the product into
     * resultVec.
     *
     * @param {goog.vec.Quaternion.AnyType} quat0 The source quaternion.
     * @param {number} scalar The value to multiply with each component of quat0.
     * @param {goog.vec.Quaternion.AnyType} resultQuat The quaternion to
     *     receive the result. May be quat0.
     */
    function scale(quat0: goog.vec.Quaternion.AnyType, scalar: number, resultQuat: goog.vec.Quaternion.AnyType): void;

    /**
     * Returns the square magnitude of the given quaternion.
     *
     * @param {goog.vec.Quaternion.AnyType} quat0 The quaternion.
     * @return {number} The magnitude of the quaternion.
     */
    function magnitudeSquared(quat0: goog.vec.Quaternion.AnyType): number;

    /**
     * Returns the magnitude of the given quaternion.
     *
     * @param {goog.vec.Quaternion.AnyType} quat0 The quaternion.
     * @return {number} The magnitude of the quaternion.
     */
    function magnitude(quat0: goog.vec.Quaternion.AnyType): number;

    /**
     * Normalizes the given quaternion storing the result into resultVec.
     *
     * @param {goog.vec.Quaternion.AnyType} quat0 The quaternion to
     *     normalize.
     * @param {goog.vec.Quaternion.AnyType} resultQuat The quaternion to
     *     receive the result. May be quat0.
     */
    function normalize(quat0: goog.vec.Quaternion.AnyType, resultQuat: goog.vec.Quaternion.AnyType): void;

    /**
     * Computes the dot (scalar) product of two quaternions.
     *
     * @param {goog.vec.Quaternion.AnyType} q0 The first quaternion.
     * @param {goog.vec.Quaternion.AnyType} q1 The second quaternion.
     * @return {number} The scalar product.
     */
    function dot(q0: goog.vec.Quaternion.AnyType, q1: goog.vec.Quaternion.AnyType): number;

    /**
     * Computes the conjugate of the quaternion in quat storing the result into
     * resultQuat.
     *
     * @param {goog.vec.Quaternion.AnyType} quat The source quaternion.
     * @param {goog.vec.Quaternion.AnyType} resultQuat The quaternion to
     *     receive the result.
     * @return {!goog.vec.Quaternion.AnyType} Return q so that
     *     operations can be chained together.
     */
    function conjugate(quat: goog.vec.Quaternion.AnyType, resultQuat: goog.vec.Quaternion.AnyType): goog.vec.Quaternion.AnyType;

    /**
     * Concatenates the two quaternions storing the result into resultQuat.
     *
     * @param {goog.vec.Quaternion.AnyType} quat0 The first quaternion.
     * @param {goog.vec.Quaternion.AnyType} quat1 The second quaternion.
     * @param {goog.vec.Quaternion.AnyType} resultQuat The quaternion to
     *     receive the result.
     * @return {!goog.vec.Quaternion.AnyType} Return q so that
     *     operations can be chained together.
     */
    function concat(quat0: goog.vec.Quaternion.AnyType, quat1: goog.vec.Quaternion.AnyType, resultQuat: goog.vec.Quaternion.AnyType): goog.vec.Quaternion.AnyType;

    /**
     * Generates a unit quaternion from the given angle-axis rotation pair.
     * The rotation axis is not required to be a unit vector, but should
     * have non-zero length.  The angle should be specified in radians.
     *
     * @param {number} angle The angle (in radians) to rotate about the axis.
     * @param {goog.vec.Quaternion.AnyType} axis Unit vector specifying the
     *     axis of rotation.
     * @param {goog.vec.Quaternion.AnyType} quat Unit quaternion to store the
     *     result.
     * @return {goog.vec.Quaternion.AnyType} Return q so that
     *     operations can be chained together.
     */
    function fromAngleAxis(angle: number, axis: goog.vec.Quaternion.AnyType, quat: goog.vec.Quaternion.AnyType): goog.vec.Quaternion.AnyType;

    /**
     * Generates an angle-axis rotation pair from a unit quaternion.
     * The quaternion is assumed to be of unit length.  The calculated
     * values are returned via the passed 'axis' object and the 'angle'
     * number returned by the function itself. The returned rotation axis
     * is a non-zero length unit vector, and the returned angle is in
     * radians in the range of [-PI, +PI].
     *
     * @param {goog.vec.Quaternion.AnyType} quat Unit quaternion to convert.
     * @param {goog.vec.Quaternion.AnyType} axis Vector to store the returned
     *     rotation axis.
     * @return {number} angle Angle (in radians) to rotate about 'axis'.
     *     The range of the returned angle is [-PI, +PI].
     */
    function toAngleAxis(quat: goog.vec.Quaternion.AnyType, axis: goog.vec.Quaternion.AnyType): number;

    /**
     * Generates the quaternion from the given rotation matrix.
     *
     * @param {goog.vec.Quaternion.AnyType} matrix The source matrix.
     * @param {goog.vec.Quaternion.AnyType} quat The resulting quaternion.
     * @return {!goog.vec.Quaternion.AnyType} Return q so that
     *     operations can be chained together.
     */
    function fromRotationMatrix4(matrix: goog.vec.Quaternion.AnyType, quat: goog.vec.Quaternion.AnyType): goog.vec.Quaternion.AnyType;

    /**
     * Generates the rotation matrix from the given quaternion.
     *
     * @param {goog.vec.Quaternion.AnyType} quat The source quaternion.
     * @param {goog.vec.AnyType} matrix The resulting matrix.
     * @return {!goog.vec.AnyType} Return resulting matrix so that
     *     operations can be chained together.
     */
    function toRotationMatrix4(quat: goog.vec.Quaternion.AnyType, matrix: goog.vec.AnyType): goog.vec.AnyType;

    /**
     * Computes the spherical linear interpolated value from the given quaternions
     * q0 and q1 according to the coefficient t. The resulting quaternion is stored
     * in resultQuat.
     *
     * @param {goog.vec.Quaternion.AnyType} q0 The first quaternion.
     * @param {goog.vec.Quaternion.AnyType} q1 The second quaternion.
     * @param {number} t The interpolating coefficient.
     * @param {goog.vec.Quaternion.AnyType} resultQuat The quaternion to
     *     receive the result.
     * @return {goog.vec.Quaternion.AnyType} Return q so that
     *     operations can be chained together.
     */
    function slerp(q0: goog.vec.Quaternion.AnyType, q1: goog.vec.Quaternion.AnyType, t: number, resultQuat: goog.vec.Quaternion.AnyType): goog.vec.Quaternion.AnyType;

    /**
     * Compute the simple linear interpolation of the two quaternions q0 and q1
     * according to the coefficient t. The resulting quaternion is stored in
     * resultVec.
     *
     * @param {goog.vec.Quaternion.AnyType} q0 The first quaternion.
     * @param {goog.vec.Quaternion.AnyType} q1 The second quaternion.
     * @param {number} t The interpolation factor.
     * @param {goog.vec.Quaternion.AnyType} resultQuat The quaternion to
     *     receive the results (may be q0 or q1).
     */
    function nlerp(q0: goog.vec.Quaternion.AnyType, q1: goog.vec.Quaternion.AnyType, t: number, resultQuat: goog.vec.Quaternion.AnyType): void;
}
