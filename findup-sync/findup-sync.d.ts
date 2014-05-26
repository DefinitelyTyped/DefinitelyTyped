// Type definitions for findup-sync v0.1.3
// Project: https://github.com/cowboy/node-findup-sync
// Definitions by: Bart van der Schoor <https://github.com/Bartvds>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

/// <reference path="../minimatch/minimatch.d.ts" />

declare module 'findup-sync' {
	import minimatch = require('minimatch');

	function mod(pattern: string, opts?: minimatch.IOptions): string;
	function mod(pattern: string[], opts?: minimatch.IOptions): string;

	export = mod;
}
