// Type definitions for lower-case-first
// Project: https://github.com/blakeembrey/lower-case-first
// Definitions by: Sam Saint-Pettersen <https://github.com/stpettersens>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

declare module "lower-case-first" {
	function lowerCaseFirst(string: string, locale?: string): string;
	export = lowerCaseFirst;
}