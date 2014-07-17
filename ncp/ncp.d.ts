// Type definitions for ncp v0.5.1
// Project: https://github.com/AvianFlu/ncp
// Definitions by: Bart van der Schoor <https://github.com/bartvds/>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

/// <reference path="../node/node.d.ts" />

declare module 'ncp' {
	function ncp (source: string, destination: string, callback: (err: Error) => void): void;
	function ncp (source: string, destination: string, options: Options, callback: (err: Error) => void): void;

	interface Options {
		filter? : RegExp;
		transform? : (read: NodeJS.ReadableStream, write: NodeJS.WritableStream) => void;
		clobber? : boolean;
		stopOnErr? : boolean;
		errs? : NodeJS.WritableStream;
	}
}
