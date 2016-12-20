// Type definitions for minifier v0.8.0
// Project: https://github.com/fizker/minifier
// Definitions by: Jeongho Nam <http://samchon.org>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare module "minifier"
{
	/**
	 * Minify a file.
	 * 
	 * @param source Path of the source file to minify.
	 */
	function minify(source: string): void;

	/**
	 * Minify a file.
	 * 
	 * @param source Path of the source file to minify.
	 * @param options Detailed options. Reference {@link MinifierOptions}.
	 */
	function minify(source: string, options: MinifierOptions): void;

	/**
	 * Minify multiple files with merging.
	 * 
	 * Name of the output file follows the first item in the *source*.
	 * 
	 * @param sources Array containing path of source files to merge and minify. 
	 */
	function minify(sources: string[]): void;

	/**
	 * Minify multiple files with merging.
	 * 
	 * @param sources Array containing path of source files to merge and minify. 
	 * @param options Detailed options. Reference {@link MinifierOptions}.
	 */
	function minify(sources: string[], options: MinifierOptions): void;

	/**
	 * Minify a JavaScript string.
	 * 
	 * @param output Target path of output file.
	 * @param options Detailed options. Reference {@link OutputOptions}.
	 */
	function generateOutputName(output: string, options: OutputOptions): void;

	interface MinifierOptions
	{
		/**
		 * A path-string that tells where to put the output.
		 */
		output?: string;

		/**
		 * A string template for how to build the outputted filenames.
		 */
		template?: string;

		/**
		 * A bool for whether other files with names similar to the template should be deleted before minifying the contents of a folder.
		 */
		clean?: boolean;

		/**
		 * A bool for whether to run with clean option and then exiting before minifying any files.
		 */
		cleanOnly?: boolean;

		/**
		 * Whether to adjust uglify.
		 */
		uglify?: boolean;
	}

	interface OutputOptions
	{
		content: string;
		template?: string;
		glob?: boolean;
	}
}