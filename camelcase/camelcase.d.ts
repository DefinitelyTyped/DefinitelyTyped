// Type definitions for camelcase
// Project: https://github.com/sindresorhus/camelcase
// Definitions by: Sam Verschueren <https://github.com/samverschueren>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare module "camelcase" {
	function camelcase(...args: string[]): string;
	namespace camelcase {}
	export = camelcase;
}
