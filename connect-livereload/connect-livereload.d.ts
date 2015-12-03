// Type definitions for connect-livereload v0.5.3
// Project: https://github.com/intesso/connect-livereload
// Definitions by: Maxime LUCE <https://github.com/SomaticIT/>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

/// <reference path="../connect/connect.d.ts" />

declare module "connect-livereload" {
	import { HandleFunction } from "connect";
	
	function livereload(): HandleFunction;
	function livereload(options: livereload.Options): HandleFunction;
	
	module livereload {
		export type FileMatcher = string | RegExp;
		
		export interface Rule {
			match: RegExp;
			fn: (w: string, s: string) => string;
		}
		
		export interface Options {
			ignore?: FileMatcher[];
			excludeList?: FileMatcher[];
			
			include?: FileMatcher[];
			html?: (val: string) => boolean;
			rules?: Rule[];
			disableCompression?: boolean;
			
			hostname?: string;
			port?: number;
			src?: string;
		}
	}
	
	export = livereload;
}