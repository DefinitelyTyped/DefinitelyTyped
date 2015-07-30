// Type definitions for lower-case
// Project: https://github.com/blakeembrey/lower-case
// Definitions by: Sam Saint-Pettersen <https://github.com/stpettersens>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

declare module "lower-case" {
	function lowerCase(string: any, locale?: string): string;
	export = lowerCase;
}