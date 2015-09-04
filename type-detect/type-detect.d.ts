// Type definitions for type-detect v0.1.2
// Project: https://github.com/chaijs/type-detect
// Definitions by: Bart van der Schoor <https://github.com/Bartvds>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

declare module 'type-detect' {
	function type(val: any): string;

	module type {
		export class Library {
			of(val: any): string;
			define (type: string, test: RegExp): void;
			define (type: string, test: (val: any) => boolean): void;
			test (val: any, type: string): boolean;
		}
	}
	export = type;
}
