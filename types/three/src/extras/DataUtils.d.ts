/**
 * Returns a half precision floating point value from the given single precision floating point value.
 * @param val A single precision floating point value.
 * @see {@link https://threejs.org/docs/index.html#api/en/extras/DataUtils | Official Documentation}
 * @see {@link https://github.com/mrdoob/three.js/blob/master/src/extras/DataUtils.js | Source}
 */
declare function toHalfFloat(val: number): number;

/**
 * Returns a single precision floating point value from the given half precision floating point value.
 * @param val A half precision floating point value.
 * @see {@link https://threejs.org/docs/index.html#api/en/extras/DataUtils | Official Documentation}
 * @see {@link https://github.com/mrdoob/three.js/blob/master/src/extras/DataUtils.js | Source}
 */
declare function fromHalfFloat(val: number): number;

declare const DataUtils: {
    toHalfFloat: typeof toHalfFloat;
    fromHalfFloat: typeof fromHalfFloat;
};

export { DataUtils, fromHalfFloat, toHalfFloat };
