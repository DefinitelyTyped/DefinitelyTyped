// Type definitions for swig
// Project: http://github.com/paularmstrong/swig
// Definitions by: Carlos Ballesteros Velasco <https://github.com/soywiz>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

// Imported from: https://github.com/soywiz/typescript-node-definitions/swig.d.ts

// API Documentation : http://paularmstrong.github.io/swig/docs/api/

declare module "swig" {
	export function init(options: Options): void;
	export function compileFile(filepath: string): any;
	export function compile(source: string, options?: Options): any;
	export function renderFile(pathName: string, locals?: any, cb?: (err: any, output: string) => void): string;

	export interface Options {
		allowErrors?: boolean;
		autoescape?: boolean;
		cache?: boolean;
		encoding?: string;
		filters?: any;
		root?: string;
		tags?: any;
		extensions?: any;
		tzOffset?: number;
	}
}
