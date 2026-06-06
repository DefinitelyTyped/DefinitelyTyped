/// <reference types="node" />

export = bufferEqual;

/**
 * @return Whether the two buffers are equal.
 *
 * @example
 * import bufferEqual = require('buffer-equal');
 *
 * console.dir(bufferEqual(
 *     Buffer.from([253,254,255]),
 *     Buffer.from([253,254,255])
 * ));
 * // -> true
 *
 * console.dir(bufferEqual(
 *     Buffer.from('abc'),
 *     Buffer.from('abcd')
 * ));
 * // -> false
 */
declare function bufferEqual(a: Buffer, b: Buffer): boolean;
