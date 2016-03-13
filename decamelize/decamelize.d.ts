// Type definitions for decamelize
// Project: https://github.com/sindresorhus/decamelize
// Definitions by: Sam Verschueren <https://github.com/samverschueren>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

declare module "decamelize" {
	function decamelize(input: string, separator?: string): string;
	namespace decamelize {}
	export = decamelize;
}