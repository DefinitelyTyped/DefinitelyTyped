// Type definitions for swap-case
// Project: https://github.com/blakeembrey/swap-case
// Definitions by: Sam Saint-Pettersen <https://github.com/stpettersens>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

declare module "swap-case" {
	function swapCase(string: string, locale?: string): string;
	export = swapCase;
}
