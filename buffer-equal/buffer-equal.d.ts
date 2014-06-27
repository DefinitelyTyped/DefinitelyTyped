// Type definitions for buffer-equal 1.0 0
// Project: https://github.com/substack/node-buffer-equal
// Definitions by: Bart van der Schoor <https://github.com/Bartvds>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

/// <reference path="../node/node.d.ts" />

declare module 'buffer-equal' {
	function bufferEqual(actual:Buffer, expected:Buffer): boolean;
	export = bufferEqual;
}
