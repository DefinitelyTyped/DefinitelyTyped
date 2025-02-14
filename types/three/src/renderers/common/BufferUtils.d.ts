/** @module BufferUtils **/
/**
 * This function is usually called with the length in bytes of an array buffer.
 * It returns an padded value which ensure chunk size alignment according to STD140 layout.
 *
 * @function
 * @param {Number} floatLength - The buffer length.
 * @return {Number} The padded length.
 */
declare function getFloatLength(floatLength: number): number;
/**
 * Given the count of vectors and their vector length, this function computes
 * a total length in bytes with buffer alignment according to STD140 layout.
 *
 * @function
 * @param {Number} count - The number of vectors.
 * @param {Number} [vectorLength=4] - The vector length.
 * @return {Number} The padded length.
 */
declare function getVectorLength(count: number, vectorLength?: number): number;
/**
 * This function is called with a vector length and ensure the computed length
 * matches a predefined stride (in this case `4`).
 *
 * @function
 * @param {Number} vectorLength - The vector length.
 * @return {Number} The padded length.
 */
declare function getStrideLength(vectorLength: number): number;
export { getFloatLength, getStrideLength, getVectorLength };
