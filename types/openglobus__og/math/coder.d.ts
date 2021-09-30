/**
 * Encode 32 bit float value to the RGBA vector.
 * @function
 * @param {number} v - 32 bit float value.
 * @returns {og.math.Vec4} - RGBA vector value.
 */
export function encodeFloatToRGBA(v: number): any;
/**
 * Decode RGBA vector to 32 bit float value.
 * @function
 * @param {og.Vec4} rgba - RGBA encoded 32 bit float value.
 * @returns {number} - Float value.
 */
export function decodeFloatFromRGBA(rgba: any): number;
/**
 * Decode RGBA vector to 32 bit float value.
 * @function
 * @param {og.Vec4} rgba - RGBA encoded 32 bit float value.
 * @returns {number} - Float value.
 */
export function decodeFloatFromRGBAArr(arr: any, use32: any): number;
/**
 * Separate 64 bit value to two 32 bit float values.
 * @function
 * @param {number} value - Double type value.
 * @returns {Array.<number,number>} Encoded array.
 */
export function doubleToTwoFloats(value: number): Array<number>;
/**
 * Separate 64 bit value to two 32 bit float values.
 * @function
 * @param {number} value - Double type value.
 * @returns {Array.<number,number>} Encoded array.
 */
export function doubleToTwoFloats2(value: number, highLowArr: any): Array<number>;
/**
 * Separate 64 bit value to two 32 bit float values.
 * @function
 * @param {number} value - Double type value.
 * @returns {Array.<number,number>} Encoded array.
 */
export function doubleToTwoFloatsV2(value: number, highLowVec: any): Array<number>;
