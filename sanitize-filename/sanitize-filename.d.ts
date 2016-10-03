// Type definitions for sanitize-filename v1.1.1
// Project: https://github.com/parshap/node-sanitize-filename
// Definitions by: Wim Looman <https://github.com/Nemo157>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare module "sanitize-filename" {
	function sanitize(filename: string, options?: sanitize.Options): string;

	namespace sanitize {
		interface Options {
			replacement: string;
		}
	}

	export = sanitize;
}
