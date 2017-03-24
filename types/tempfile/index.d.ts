// Type definitions for tempfile v1.1.0
// Project: https://github.com/sindresorhus/tempfile
// Definitions by: Sam Verschueren <https://github.com/SamVerschueren>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare module "tempfile" {
	function tempfile(extension?: string): string;
	module tempfile {}
	export = tempfile;
}
