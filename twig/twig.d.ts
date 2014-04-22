// Type definitions for twig
// Project: https://github.com/justjohn/twig.js
// Definitions by: Carlos Ballesteros Velasco <https://github.com/soywiz>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

// Imported from: https://github.com/soywiz/typescript-node-definitions/twig.d.ts

declare module "twig" {
	export interface Parameters {
		id?: any;
		ref?: any;
		href?: any;
		path?: any;
		debug?: boolean;
		trace?: boolean;
		strict_variables?: boolean;
		data: any;
	}

	export interface Template {
	}

	export interface CompileOptions {
		filename: string;
		settings: any;
	}

	export function twig(params: Parameters): Template;
	export function extendFilter(name: string, definition: (left: any, ...params: any[]) => string): void;
	export function extendFunction(name: string, definition: (...params: any[]) => string): void;
	export function extendTest(name: string, definition: (value: any) => boolean): void;
	export function extendTag(definition: any): void;
	export function compile(markup: string, options: CompileOptions): (context: any) => any;
	export function renderFile(path: string, options: CompileOptions, fn: (err: Error, result: any) => void): void;
	export function __express(path: string, options: CompileOptions, fn: (err: Error, result: any) => void): void;
	export function cache(value: boolean): void;
}
