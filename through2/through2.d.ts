// Type definitions for through2 v 2.0.0
// Project: https://github.com/rvagg/through2
// Definitions by: Bart van der Schoor <https://github.com/Bartvds>, jedmao <https://github.com/jedmao>, Georgios Valotasios <https://github.com/valotas>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

/// <reference path="../node/node.d.ts" />

declare module 'through2' {

	import stream = require('stream');

	type TransfofmCallback = (err?: any, data?: any) => void;
	type TransformFunction = (chunk: any, enc: string, callback: TransfofmCallback) => void;
	type FlashCallback = (flushCallback: () => void) => void;

	function through2(transform?: TransformFunction, flush?: FlashCallback): NodeJS.ReadWriteStream;

	function through2(opts?: stream.DuplexOptions, transform?: TransformFunction, flush?: FlashCallback): NodeJS.ReadWriteStream;

	module through2 {

		export function obj(transform?: TransformFunction, flush?: FlashCallback): NodeJS.ReadWriteStream;

		export function push(data: any): void;

	}

	export = through2;

}
