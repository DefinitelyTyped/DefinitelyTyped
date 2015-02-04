// Type definitions for minimist 0.0.8
// Project: https://github.com/substack/minimist
// Definitions by: Bart van der Schoor <https://github.com/Bartvds>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

declare module 'minimist' {
	function minimist(args?: string[], opts?: minimist.Opts): minimist.ParsedArgs;

	module minimist {
		export interface Opts {
			// a string or array of strings argument names to always treat as strings
			// string?: string;
			string?: string[];
			// a string or array of strings to always treat as booleans
			// boolean?: string;
			boolean?: string[];
			// an object mapping string names to strings or arrays of string argument names to use
			// alias?: {[key:string]: string};
			alias?: {[key:string]: string[]};
			// an object mapping string argument names to default values
			default?: {[key:string]: any};
		}

		export interface ParsedArgs {
			_: string[];
		}
	}

	export = minimist;
}
