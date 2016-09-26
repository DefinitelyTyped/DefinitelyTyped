// Type definitions for through2 v 2.0.0
// Project: https://github.com/rvagg/through2
// Definitions by: Bart van der Schoor <https://github.com/Bartvds>, jedmao <https://github.com/jedmao>, Georgios Valotasios <https://github.com/valotas>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference path="../node/node.d.ts" />

declare module 'through2' {

	import stream = require('stream');

	type TransformCallback = (err?: any, data?: any) => void;
	type TransformFunction = (chunk: any, enc: string, callback: TransformCallback) => void;
	type FlushCallback = (flushCallback: () => void) => void;

	function through2(transform?: TransformFunction, flush?: FlushCallback): NodeJS.ReadWriteStream;

	function through2(opts?: stream.DuplexOptions, transform?: TransformFunction, flush?: FlushCallback): NodeJS.ReadWriteStream;

	namespace through2 {

		export function obj(transform?: TransformFunction, flush?: FlushCallback): NodeJS.ReadWriteStream;

		export function push(data: any): void;

	}

	export = through2;

}
