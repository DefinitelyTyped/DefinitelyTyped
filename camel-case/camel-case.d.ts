// Type definitions for camel-case
// Project: https://github.com/blakeembrey/camel-case
// Definitions by: Sam Saint-Pettersen <https://github.com/stpettersens>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

declare module "camel-case" {
	function camelCase(string: string, locale?: string): string;
	export = camelCase;
}
