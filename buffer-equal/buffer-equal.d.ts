// Type definitions for buffer-equal 1.0 0
// Project: https://github.com/chaijs/assertion-error
// Definitions by: Bart van der Schoor <https://github.com/Bartvds>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

/// <reference path="../node/node.d.ts" />

declare module 'buffer-equal' {
	function bufferEqual(actual:NodeBuffer, expected:NodeBuffer): boolean;
	export = bufferEqual;
}
