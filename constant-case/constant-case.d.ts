// Type definitions for constant-case
// Project: https://github.com/blakeembrey/constant-case
// Definitions by: Sam Saint-Pettersen <https://github.com/stpettersens>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

declare module "constant-case" {
	function constantCase(string: string, locale?: string): string;
	export = constantCase;
}
