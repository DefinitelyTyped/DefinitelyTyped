// Type definitions for bitwise-xor 0.0.0
// Project: https://github.com/czzarr/node-bitwise-xor
// Definitions by: Rogier Schouten <https://github.com/rogierschouten>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />


/**
 * Bitwise XOR between two Buffers or Strings, returns a Buffer
 */
declare function xor(b1: Buffer, b2: Buffer): Buffer;
declare function xor(s1: string, s2: string): Buffer;

export = xor;
