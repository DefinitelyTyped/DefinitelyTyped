// Type definitions for secure-random 1.1
// Project: https://github.com/jprichardson/secure-random
// Definitions by: Teun Verhaert <https://github.com/teunverhaert>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />

type TypeName = 'Array' | 'Buffer' | 'Uint8Array';

type ObjectType<T> =
    T extends 'Array' ? number[] :
    T extends 'Buffer' ? Buffer :
    T extends 'Uint8Array' ? Uint8Array :
    never;

declare namespace secureRandom {
    /**
     * Sugar for secureRandom(byteCount, {type: 'Array'}).
     * @param byteCount is the number of bytes to return.
     */
    function randomArray(byteCount: number): number[];

    /**
     * Sugar for secureRandom(byteCount, {type: 'Uint8Array'}).
     * @param byteCount is the number of bytes to return.
     */
    function randomUint8Array(byteCount: number): Uint8Array;

    /**
     * Sugar for secureRandom(byteCount, {type: 'Buffer'}).
     * @param byteCount is the number of bytes to return.
     */
    function randomBuffer(byteCount: number): Buffer;
}

export = secureRandom;

/**
 * Sugar for secureRandom(byteCount, {type: 'Buffer'}).
 * @param byteCount is the number of bytes to return.
 * @param options options to pass.
 *                Only valid value at this time type.
 *                type can be either Array, Uint8Array, or Buffer.
 *                Buffer is only valid in Node.js or Browserify environments - it will throw an error otherwise.
 */
declare function secureRandom<T extends TypeName>(byteCount: number, options: { type: T }): ObjectType<T>;
