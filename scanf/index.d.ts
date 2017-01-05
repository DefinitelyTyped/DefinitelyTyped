// Type definitions for node-scanf
// Project: https://github.com/Lellansin/node-scanf
// Definitions by: Jeongho Nam <http://samchon.org>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare module "scanf"
{
	export = __node_scanf.scanf;
}

declare namespace __node_scanf
{
	/* ------------------------------------------------------------
		SCANF - FROM STDIN
	------------------------------------------------------------ */
	/**
	 * <p> Read formatted word from stdin. </p>
	 * 
	 * <p> Reads a word from stdin and returns it according to parameter <i>format</i>. </p>
	 * 
	 * @param format The format represents a word.
	 * @return A word.
	 */
	function scanf(format: "%s"): string;

	/**
	 * <p> Read formatted line from stdin. </p>
	 * 
	 * <p> Reads a word from stdin and returns it according to parameter <i>format</i>. </p>
	 * 
	 * @param format The format represents a word.
	 * @return A word.
	 */
	function scanf(format: "%S"): string;

	/**
	 * <p> Read formatted integer from stdin. </p>
	 * 
	 * <p> Reads an integer from stdin and returns it according to parameter <i>format</i>. </p>
	 * 
	 * @param format The format represents an integer value.
	 * @return An integer.
	 */
	function scanf(format: "%d"): number;

	/**
	 * <p> Read formatted float from stdin. </p>
	 * 
	 * <p> Reads a float from stdin and returns it according to parameter <i>format</i>. </p>
	 * 
	 * @param format The format represents an float value.
	 * @return A float.
	 */
	function scanf(format: "%f"): number;

	/**
	 * <p> Read formatted octal from stdin. </p>
	 * 
	 * <p> Reads an octal from stdin and returns it according to parameter <i>format</i>. </p>
	 * 
	 * @param format The format represents an octal value.
	 * @return An octal.
	 */
	function scanf(format: "%o"): number;

	/**
	 * <p> Read formatted hex from stdin. </p>
	 * 
	 * <p> Reads a hex from stdin and returns it according to parameter <i>format</i>. </p>
	 * 
	 * @param format The format represents a hex value.
	 * @return A hex.
	 */
	function scanf(format: "%x"): number;
	
	/**
	 * <p> Reads formatted data from stdin. </p>
	 * 
	 * <p> Reads data from stdin and stores them according to the parameter <i>format</i> into an array to be returned. </p>
	 * 
	 * @param format The format contains a sequence of characters that control how characters extracted from the stream are tread.
	 * @return An array containing data constructed from stdin with the <i>format</i>.
	 */
	function scanf(format: string): Array<number|string>;

	/**
	 * <p> Reads formatted data from stdin. </p>
	 * 
	 * <p> Reads data from stdin and stores them according to the parameter <i>format</i> into a JSON object following sequence of <i>names</i>. </p>
	 * 
	 * @param format The format contains a sequence of characters that control how characters extracted from the stream are tread.
	 * @param names Names of data constructed from stdin with the <i>format</i>.
	 * 
	 * @return A JSON object containing data constructed from stdin with the <i>format</i> and following <i>names</i>.
	 */
	function scanf(format: string, ...names: string[]): Object;

	/* ------------------------------------------------------------
		SSCANF - FROM SOURCE STRING
	------------------------------------------------------------ */
	namespace scanf
	{
		/**
		 * <p> Read formatted word from string. </p>
		 * 
		 * <p> Reads a word from <i>source</i> and returns it according to parameter <i>format</i>. </p>
		 * 
		 * @param source Source string to retrieve data.
		 * @param format The format represents a word.
		 * 
		 * @return A word.
		 */
		function sscanf(source: string, format: "%s"): string;

		/**
		 * <p> Read formatted line from string. </p>
		 * 
		 * <p> Reads a word from <i>source</i> and returns it according to parameter <i>format</i>. </p>
		 * 
		 * @param source Source string to retrieve data.
		 * @param format The format represents a word.
		 * 
		 * @return A word.
		 */
		function sscanf(source: string, format: "%S"): string;

		/**
		 * <p> Read formatted integer from string. </p>
		 * 
		 * <p> Reads an integer from <i>source</i> and returns it according to parameter <i>format</i>. </p>
		 * 
		 * @param source Source string to retrieve data.
		 * @param format The format represents an integer value.
		 * 
		 * @return An integer.
		 */
		function sscanf(source: string, format: "%d"): number;

		/**
		 * <p> Read formatted float from string. </p>
		 * 
		 * <p> Reads a float from <i>source</i> and returns it according to parameter <i>format</i>. </p>
		 * 
		 * @param source Source string to retrieve data.
		 * @param format The format represents an float value.
		 * 
		 * @return A float.
		 */
		function sscanf(source: string, format: "%f"): number;

		/**
		 * <p> Read formatted octal from string. </p>
		 * 
		 * <p> Reads an octal from <i>source</i> and returns it according to parameter <i>format</i>. </p>
		 * 
		 * @param source Source string to retrieve data.
		 * @param format The format represents an octal value.
		 * 
		 * @return An octal.
		 */
		function sscanf(source: string, format: "%o"): number;

		/**
		 * <p> Read formatted hex from string. </p>
		 * 
		 * <p> Reads a hex from <i>source</i> and returns it according to parameter <i>format</i>. </p>
		 * 
		 * @param source Source string to retrieve data.
		 * @param format The format represents a hex value.
		 * 
		 * @return A hex.
		 */
		function sscanf(source: string, format: "%x"): number;
		
		/**
		 * <p> Reads formatted data from string. </p>
		 * 
		 * <p> Reads data from <i>source</i> and stores them according to the parameter <i>format</i> into an array to be returned. </p>
		 * 
		 * @param source Source string to retrieve data.
		 * @param format The format contains a sequence of characters that control how characters extracted from the stream are tread.
		 * 
		 * @return An array containing data constructed from string with the <i>format</i>.
		 */
		function sscanf(source: string, format: string): Array<number|string>;

		/**
		 * <p> Reads formatted data from string. </p>
		 * 
		 * <p> Reads data from <i>source</i> and stores them according to the parameter <i>format</i> into a JSON object following sequence of <i>names</i>. </p>
		 * 
		 * @param source Source string to retrieve data.
		 * @param format The format contains a sequence of characters that control how characters extracted from the stream are tread.
		 * @param names Names of data constructed from string with the <i>format</i>.
		 * 
		 * @return A JSON object containing data constructed from string with the <i>format</i> and following <i>names</i>.
		 */
		function sscanf(source: string, format: string, ...names: string[]): Object;
	}
}