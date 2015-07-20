// Type definitions for through2 v 0.4.2
// Project: https://github.com/rvagg/through2
// Definitions by: Bart van der Schoor <https://github.com/Bartvds>, jedmao <https://github.com/jedmao>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

/// <reference path="../node/node.d.ts" />

declare module 'through2' {

	import stream = require('stream');

	function through2(transform?: (chunk: any, enc: string, callback: () => void) => void, flush?: () => void): NodeJS.ReadWriteStream;

	function through2(opts?: stream.DuplexOptions, transform?: (chunk: any, enc: string, callback: () => void) => void, flush?: () => void): NodeJS.ReadWriteStream;

	module through2 {

		export function obj(transform?: (chunk: any, enc: string, callback: () => void) => void, flush?: () => void): NodeJS.ReadWriteStream;

		export function push(data: any): void;

	}

	export = through2;

}
