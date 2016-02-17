// Type definitions for glob-stream v3.1.12
// Project: http://github.com/wearefractal/glob-stream
// Definitions by: Bart van der Schoor <https://github.com/Bartvds>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

/// <reference path="../node/node.d.ts" />
/// <reference path="../glob/glob.d.ts" />

declare module 'glob-stream' {
	import glob = require('glob');

	export interface Options extends glob.IOptions {
		cwd?: string;
		base?: string;
		cwdbase?: boolean;
	}

	export interface Element {
		cwd: string;
		base: string;
		path: string;
	}

	export function create(glob:string, opts?: Options): NodeJS.ReadableStream;
	export function create(globs:string[], opts?: Options): NodeJS.ReadableStream;
}
