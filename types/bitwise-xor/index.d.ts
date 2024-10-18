/// <reference types="node" />

/**
 * Bitwise XOR between two Buffers or Strings, returns a Buffer
 */
declare function xor(a: Buffer | string, b: Buffer | string): Buffer;

export = xor;
