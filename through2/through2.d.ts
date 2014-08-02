// Type definitions for through2 v 0.4.2
// Project: https://github.com/rvagg/through2
// Definitions by: Bart van der Schoor <https://github.com/Bartvds>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

/// <reference path="../node/node.d.ts" />

declare module 'through2' {
	import stream = require('stream');

	var mod: mod.Through2;

	module mod {
		interface Through2 {
			(transform?: (entry: any, enc: string, callback: () => void) => void, flush?: () => void): NodeJS.ReadWriteStream;
			(opts: stream.DuplexOptions, transform?: (entry: any, enc: string, callback: () => void) => void, flush?: () => void): NodeJS.ReadWriteStream;
			obj(transform: (entry: any, enc: string, callback: () => void) => void, flush?: () => void): NodeJS.ReadWriteStream;
			push(data: any): void;
		}
	}
	export = mod;
}

