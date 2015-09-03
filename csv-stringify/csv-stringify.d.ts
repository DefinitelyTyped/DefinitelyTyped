// Type definitions for csv-stringify 0.0.6
// Project: https://github.com/wdavidw/node-csv-stringify
// Definitions by: Rogier Schouten <https://github.com/rogierschouten>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

/// <reference path="../node/node.d.ts" />

declare module "csv-stringify" {

	module stringify {
		interface StringifyOpts {
			/**
			 * List of fields, applied when transform returns an object, order matters, read the transformer documentation for additionnal information, columns are auto discovered when the user write object, see the "header" option on how to print columns names on the first line.
			 */
			columns?: string[];
			/**
			 * Set the field delimiter, one character only, defaults to a comma.
			 */
			delimiter?: string;
			/**
			 * Add the value of "options.rowDelimiter" on the last line, default to true.
			 */
			eof?: boolean;
			/**
			 * Defaults to the escape read option.
			 */
			escape?: boolean;
			/**
			 * Display the column names on the first line if the columns option is provided or discovered.
			 */
			header?: boolean;
			/**
			 * String used to delimit record rows or a special value; special values are 'auto', 'unix', 'mac', 'windows', 'unicode'; defaults to 'auto' (discovered in source or 'unix' if no source is specified).
			 */
			lineBreaks?: string;
			/**
			 * Defaults to the quote read option.
			 */
			quote?: string;
			/**
			 * Boolean, default to false, quote all the non-empty fields even if not required.
			 */
			quoted?: boolean;
			/**
			 * Boolean, no default, quote empty fields? If specified, overrides quotedString for empty strings.
			 */
			quotedEmpty?: boolean;
			/**
			 * Boolean, default to false, quote all fields of type string even if not required.
			 */
			quotedString?: boolean;
			/**
			 * String used to delimit record rows or a special value; special values are 'auto', 'unix', 'mac', 'windows', 'unicode'; defaults to 'auto' (discovered in source or 'unix' if no source is specified).
			 */
			rowDelimiter?: string;

		}

		interface Stringifier extends NodeJS.ReadWriteStream {

			// Stringifier stream takes array of strings
			write(line: string[]): boolean;

			// repeat declarations from NodeJS.WritableStream to avoid compile error
			write(buffer: Buffer, cb?: Function): boolean;
			write(str: string, cb?: Function): boolean;
			write(str: string, encoding?: string, cb?: Function): boolean;
		}
	}

	/**
	 * Callback version: string in --> callback with string out
	 */
	function stringify(input: any[][], opts: stringify.StringifyOpts, callback: (error: Error, output: string) => void): void;
	function stringify(input: any[][], callback: (error: Error, output: string) => void): void;

	/**
	 * Streaming stringifier
	 */
	function stringify(opts: stringify.StringifyOpts): stringify.Stringifier;

	export = stringify;
}
