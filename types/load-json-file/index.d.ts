// Type definitions for load-json-file v2.0.0
// Project: https://github.com/sindresorhus/load-json-file
// Definitions by: Sam Verschueren <https://github.com/SamVerschueren>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare module "load-json-file" {

	interface LoadJsonFile {
		/**
		 * Returns a promise for the parsed JSON.
		 *
		 * @param filepath
		 */
		(filepath: string): Promise<any>;
		/**
		 * Returns the parsed JSON.
		 *
		 * @param filepath
		 */
		sync(filepath: string): any;
	}

	const loadJsonFile: LoadJsonFile;

	export = loadJsonFile;
}
