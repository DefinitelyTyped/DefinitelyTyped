// Type definitions for dot-prop
// Project: https://github.com/sindresorhus/dot-prop
// Definitions by: Sam Verschueren <https://github.com/samverschueren>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare module "dot-prop" {
	export function get(object: any, path: string): any;
	export function set(object: any, path: string, value: any): void;
}
