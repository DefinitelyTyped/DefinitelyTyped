// Type definitions for fibers
// Project: https://github.com/laverdet/node-fibers
// Definitions by: Carlos Ballesteros Velasco <https://github.com/soywiz>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

// Imported from: https://github.com/soywiz/typescript-node-definitions/fibers.d.ts

declare module "fibers" {

	function fibers(callback: () => void): fibers.Fiber;

	module fibers {
		export var poolSize: number;
		export var fibersCreated: number;
		export var current: fibers.Fiber;
		export function yield(value: any): any;

		export interface Fiber {
			run(step?: number): any;
		}
	}

	export = fibers;
}
