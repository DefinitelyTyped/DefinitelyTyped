// Type definitions for snake-case
// Project: https://github.com/blakeembrey/snake-case
// Definitions by: Sam Saint-Pettersen <https://github.com/stpettersens>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

declare module "snake-case" {
	function snakeCase(string: string, locale?: string): string;
	export = snakeCase;
}
