// Type definitions for is-upper-case
// Project: https://github.com/blakeembrey/is-upper-case
// Definitions by: Sam Saint-Pettersen <https://github.com/stpettersens>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

declare module "is-upper-case" {
	function isUpperCase(string: string, locale?: string): boolean;
	export = isUpperCase;
}