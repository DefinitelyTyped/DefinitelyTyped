// Type definitions for sprintff
// Project: https://github.com/maritz/node-sprintff
// Definitions by: Carlos Ballesteros Velasco <https://github.com/soywiz>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

// Imported from: https://github.com/soywiz/typescript-node-definitions/sprintff.d.ts

declare module "sprintf" {
	export function sprintf(fmt: string, ...args: any[]): string;
	export function vsprintf(fmt: string, args: any[]): string;
}
