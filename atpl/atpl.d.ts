// Type definitions for atpl
// Project: https://github.com/soywiz/atpl.js
// Definitions by: Carlos Ballesteros Velasco <https://github.com/soywiz>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

// Imported from: https://github.com/soywiz/typescript-node-definitions/atpl.d.ts

declare module "atpl" {
	export function compile(templateString: string, options: any): (context:any) => string;
	export function __express(filename: string, options: any, callback: Function): any;

	export function registerExtension(items: any): void;
	export function registerTags(items: any): void;
	export function registerFunctions(items: any): void;
	export function registerFilters(items: any): void;
	export function registerTests(items: any): void;

	export function renderFileSync(viewsPath: string, filename: string, parameters: any, cache: boolean ): string;
	export function renderFile(viewsPath: string, filename: string, parameters: any, cache: boolean, done: (err: Error, result?: string) => void): void;
}
