// Type definitions for bitwise-xor 0.0
// Project: https://github.com/czzarr/node-bitwise-xor
// Definitions by: Rogier Schouten <https://github.com/rogierschouten>
//                 BendingBender <https://github.com/BendingBender>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />

/**
 * Bitwise XOR between two Buffers or Strings, returns a Buffer
 */
declare function xor(a: Buffer | string, b: Buffer | string): Buffer;

export = xor;
