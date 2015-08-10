// Type definitions for dot-case
// Project: https://github.com/blakeembrey/dot-case
// Definitions by: Sam Saint-Pettersen <https://github.com/stpettersens>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

declare module "dot-case" {
	function dotCase(string: string, locale?: string): string;
	export = dotCase;
}
