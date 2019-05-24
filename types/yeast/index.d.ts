// Type definitions for yeast 0.1
// Project: https://github.com/unshiftio/yeast
// Definitions by: Christian Scheja <https://github.com/schmollmolch>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare var yeast: yeast.Yeast;

export = yeast;
export as namespace yeast;

declare namespace yeast {
	interface Yeast {
		/**
		 * Yeast: A tiny growing id generator.
		 */
		(): string;

		/**
		 * Return a string representing the specified number.
		 */
		encode: (num: number) => string;

		/**
		 * Return the integer value specified by the given string.
		 */
		decode: (str: string) => number;
	}
}
