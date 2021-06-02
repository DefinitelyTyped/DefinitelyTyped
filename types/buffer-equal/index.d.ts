// Type definitions for buffer-equal 1.0
// Project: https://github.com/substack/node-buffer-equal
// Definitions by: Bart van der Schoor <https://github.com/Bartvds>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

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
