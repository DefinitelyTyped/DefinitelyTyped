// Type definitions for urlencode 1.1
// Project: https://github.com/node-modules/urlencode
// Definitions by: kimcoder <https://github.com/kimcoder>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

interface charsetParam {
	charset: string;
}

/**
 * Encode string
 * @param str The string for encoding.
 */
declare function urlencode(str: string, charset?: string): string;

declare namespace urlencode {
	/**
	 * Encode string
	 * @param str The string for encoding.
	 */
	function encode(str: string, charset?: string): string;

	/**
	 * Decode string
	 * @param encodedString The encoded string.
	 */
	function decode(encodedString: string, charset?: string): string;

	/**
	 * Parse querystring
	 * @param queryString Querystring
	 * @param charsetParam The charset for parsing
	 */
	function parse(queryString: string, charsetParam: charsetParam): any;
	interface charsetParam {
		charset: string;
	}
	/**
	 * Stringify object
	 * @param obj Query Object
	 * @param charsetParam The charset for parsing
	 */
	function stringify(obj: any, prefix?: charsetParam, charsetParam?: charsetParam): string;
}

export = urlencode;
