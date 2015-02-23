// Type definitions for bitwise-xor 0.0.0
// Project: https://github.com/czzarr/node-bitwise-xor
// Definitions by: Rogier Schouten <https://github.com/rogierschouten>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

/// <reference path="../node/node.d.ts" />
declare module "bitwise-xor" {

	/**
	 * Bitwise XOR between two Buffers or Strings, returns a Buffer
	 */
	function xor(b1: Buffer, b2: Buffer): Buffer;
	function xor(s1: string, s2: string): Buffer;

	export = xor;
}

