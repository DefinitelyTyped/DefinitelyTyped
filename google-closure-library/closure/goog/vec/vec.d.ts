declare module goog {
    function require(name: 'goog.vec'): typeof goog.vec;
}

declare module goog.vec {

    /** @typedef {!Float32Array} */
    type Float32 = Float32Array;

    /** @typedef {!Float64Array} */
    type Float64 = Float64Array;

    /** @typedef {!Array<number>} */
    type Number = Array<number>;

    /** @typedef {!goog.vec.Float32|!goog.vec.Float64|!goog.vec.Number} */
    type AnyType = goog.vec.Float32|goog.vec.Float64|goog.vec.Number;

    /**
     * @deprecated Use AnyType.
     * @typedef {!Float32Array|!Array<number>}
     */
    type ArrayType = Float32Array|Array<number>;

    /**
     * For graphics work, 6 decimal places of accuracy are typically all that is
     * required.
     *
     * @type {number}
     * @const
     */
    var EPSILON: number;
}
