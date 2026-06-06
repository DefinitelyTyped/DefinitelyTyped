/**
 * This function is usually called with the length in bytes of an array buffer.
 * It returns an padded value which ensure chunk size alignment according to STD140 layout.
 *
 * @function
 * @param {number} floatLength - The buffer length.
 * @return {number} The padded length.
 */
export function getFloatLength(floatLength: number): number;
/**
 * Given the count of vectors and their vector length, this function computes
 * a total length in bytes with buffer alignment according to STD140 layout.
 *
 * @function
 * @param {number} count - The number of vectors.
 * @param {number} [vectorLength=4] - The vector length.
 * @return {number} The padded length.
 */
export function getVectorLength(count: number, vectorLength?: number): number;
/**
 * This function is called with a vector length and ensure the computed length
 * matches a predefined stride (in this case `4`).
 *
 * @function
 * @param {number} vectorLength - The vector length.
 * @return {number} The padded length.
 */
export function getStrideLength(vectorLength: number): number;
