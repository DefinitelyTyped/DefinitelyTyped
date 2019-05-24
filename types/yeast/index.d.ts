// Type definitions for yeast 0.1.2
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
        *
        * @returns {String} A unique id.
        * @api public
        */
        (): string;


		/**
		 * Return a string representing the specified number.
		 *
		 * @param {Number} num The number to convert.
		 * @returns {String} The string representation of the number.
		 * @api public
		 */
        encode: (num: number) => string;

		/**
 		* Return the integer value specified by the given string.
 		*
 		* @param {String} str The string to convert.
 		* @returns {Number} The integer value represented by the string.
 		* @api public
 		*/
        decode: (str: string) => number;
    }

}
