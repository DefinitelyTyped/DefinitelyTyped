// Type definitions for iniparser
// Project: https://github.com/shockie/node-iniparser
// Definitions by: Ilya Mochalov <https://github.com/chrootsu>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

declare module "iniparser" {
	export function parse<T>(
		file: string,
		callback: (err: any, data: T) => void
	): void;

	export function parseSync<T>(file: string): T;

	export function parseString<T>(data: string): T;
}
