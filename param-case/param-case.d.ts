// Type definitions for param-case
// Project: https://github.com/blakeembrey/param-case
// Definitions by: Sam Saint-Pettersen <https://github.com/stpettersens>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

declare module "param-case" {
	function paramCase(string: string, locale?: string): string;
	export = paramCase;
}
