// Type definitions for stream-to-array
// Project: https://github.com/stream-utils/stream-to-array
// Definitions by: Bart van der Schoor <https://github.com/Bartvds>
// Definitions: https://github.com/borisyankov/DefinitelyTyped


/// <reference path="../node/node.d.ts" />

declare module 'stream-to-array' {
	function toArray(stream: NodeJS.ReadableStream, callback: (err: any, arr: any[]) => void): NodeJS.ReadWriteStream;
	export = toArray;
}
