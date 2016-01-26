// Type definitions for sentence-case
// Project: https://github.com/blakeembrey/sentence-case
// Definitions by: Sam Saint-Pettersen <https://github.com/stpettersens>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

declare module "sentence-case" {
	function sentenceCase(string: string, locale?: string, repl?: string): string;
	export = sentenceCase;
}
