// Type definitions for Parsimmon 1.0
// Project: https://github.com/jneen/parsimmon
// Definitions by: Bart van der Schoor <https://github.com/Bartvds>
//                 Mizunashi Mana <https://github.com/mizunashi-mana>
//                 Boris Cherny <https://github.com/bcherny>
//                 Benny van Reeven <https://github.com/bvanreeven>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/**
 * **NOTE:** You probably will never need to use this function. Most parsing
 * can be accomplished using `Parsimmon.regexp` and combination with
 * `Parsimmon.seq` and `Parsimmon.alt`.
 *
 * You can add a primitive parser (similar to the included ones) by using
 * `Parsimmon(fn)`. This is an example of how to create a parser that matches
 * any character except the one provided:
 *
 * ```javascript
 * function notChar(char) {
 *   return Parsimmon(function(input, i) {
 *     if (input.charAt(i) !== char) {
 *       return Parsimmon.makeSuccess(i + 1, input.charAt(i));
 *     }
 *     return Parsimmon.makeFailure(i, 'anything different than "' + char + '"');
 *   });
 * }
 * ```
 *
 * This parser can then be used and composed the same way all the existing
 * ones are used and composed, for example:
 *
 * ```javascript
 * var parser =
 *   Parsimmon.seq(
 *     Parsimmon.string('a'),
 *     notChar('b').times(5)
 *   );
 * parser.parse('accccc');
 * //=> {status: true, value: ['a', ['c', 'c', 'c', 'c', 'c']]}
 * ```
 */
declare function Parsimmon<T>(fn: (input: string, i: number) => Parsimmon.Result<T>): Parsimmon.Parser<T>;

declare namespace Parsimmon {
	export type StreamType = string;

	export interface Index {
		/** zero-based character offset */
		offset: number;
		/** one-based line offset */
		line: number;
		/** one-based column offset */
		column: number;
	}

	export interface Mark<T> {
		start: Index;
		end: Index;
		value: T;
	}

	export type Result<T> = Success<T> | Failure;

	export interface Success<T> {
		status: true;
		value: T;
	}

	export interface Failure {
		status: false;
		expected: string[];
		index: Index;
	}

	export interface Parser<T> {
		/**
		 * parse the string
		*/
		parse(input: string): Result<T>;
		/**
		 * Like parser.parse(input) but either returns the parsed value or throws
		 * an error on failure. The error object contains additional properties
		 * about the error.
		 */
		tryParse(input: string): T;
		/**
		 * returns a new parser which tries parser, and if it fails uses otherParser.
		 */
		or<U>(otherParser: Parser<U>): Parser<T | U>;
		/**
		 * returns a new parser which tries parser, and on success calls the given function
		 * with the result of the parse, which is expected to return another parser, which
		 * will be tried next
		*/
		chain<U>(next: (result: T) => Parser<U>): Parser<U>;
		/**
		 * returns a new parser which tries parser, and on success calls the given function
		 * with the result of the parse, which is expected to return another parser.
		 */
		then<U>(call: (result: T) => Parser<U>): Parser<U>;
		/**
		 * expects anotherParser to follow parser, and yields the result of anotherParser.
		 * NB: the result of parser here is ignored.
		 */
		// tslint:disable-next-line:unified-signatures
		then<U>(anotherParser: Parser<U>): Parser<U>;
		/**
		 * transforms the output of parser with the given function.
		 */
		map<U>(call: (result: T) => U): Parser<U>;
		/**
		 * returns a new parser with the same behavior, but which yields aResult.
		 */
		result<U>(aResult: U): Parser<U>;
		/**
		 * returns a new parser that returns the fallback value if the first parser failed.
		 */
		fallback<U>(fallbackValue: U): Parser<T | U>;
		/**
		 * expects otherParser after parser, but preserves the yield value of parser.
		 */
		skip<U>(otherParser: Parser<U>): Parser<T>;
		/**
		 * expects parser zero or more times, and yields an array of the results.
		 */
		many(): Parser<T[]>;
		/**
		 * expects parser exactly n times, and yields an array of the results.
		 */
		times(n: number): Parser<T[]>;
		/**
		 * expects parser between min and max times, and yields an array of the results.
		 */
		// tslint:disable-next-line:unified-signatures
		times(min: number, max: number): Parser<T[]>;
		/**
		 * expects parser at most n times. Yields an array of the results.
		 */
		atMost(n: number): Parser<T[]>;
		/**
		 * expects parser at least n times. Yields an array of the results.
		 */
		atLeast(n: number): Parser<T[]>;
		/**
		 * returns a new parser whose failure message is the passed description.
		 */
		mark(): Parser<Mark<T>>;
		/**
		 * Returns a new parser whose failure message is description.
		 * For example, string('x').desc('the letter x') will indicate that 'the letter x' was expected.
		 */
		desc(description: string): Parser<T>;
	}

	/**
	 * Alias of `Parsimmon(fn)` for backwards compatibility.
	 */
	export function Parser<T>(fn: (input: string, i: number) => Parsimmon.Result<T>): Parser<T>;

	/**
	 * To be used inside of Parsimmon(fn). Generates an object describing how
	 * far the successful parse went (index), and what value it created doing
	 * so. See documentation for Parsimmon(fn).
	 */
	export function makeSuccess<T>(index: number, value: T): Success<T>;

	/**
	 * To be used inside of Parsimmon(fn). Generates an object describing how
	 * far the unsuccessful parse went (index), and what kind of syntax it
	 * expected to see (expectation). See documentation for Parsimmon(fn).
	 */
	export function makeFailure(furthest: number, expectation: string): Failure;

	/**
	 * Returns true if obj is a Parsimmon parser, otherwise false.
	 */
	export function isParser(obj: any): boolean;

	/**
	 * is a parser that expects to find "my-string", and will yield the same.
	 */
	export function string(string: string): Parser<string>;

	/**
	 * Returns a parser that looks for exactly one character from string, and yields that character.
	 */
	export function oneOf(string: string): Parser<string>;

	/**
	 * Returns a parser that looks for exactly one character NOT from string, and yields that character.
	 */
	export function noneOf(string: string): Parser<string>;

	/**
	 * Returns a parser that looks for a match to the regexp and yields the given match group
	 * (defaulting to the entire match). The regexp will always match starting at the current
	 * parse location. The regexp may only use the following flags: imu. Any other flag will
	 * result in an error being thrown.
	 */
	export function regexp(myregex: RegExp, group?: number): Parser<string>;

	/**
	 * This was the original name for Parsimmon.regexp, but now it is just an alias.
	 */
	export function regex(myregex: RegExp, group?: number): Parser<string>;

	/**
	 * Returns a parser that doesn't consume any of the string, and yields result.
	 */
	export function succeed<U>(result: U): Parser<U>;

	/**
	 * This is an alias for Parsimmon.succeed(result).
	 */
	export function of<U>(result: U): Parser<U>;

	/**
	 * accepts a variable number of parsers that it expects to find in order, yielding an array of the results.
	 */
	export function seq<T>(p1: Parser<T>): Parser<[T]>;
	export function seq<T, U>(p1: Parser<T>, p2: Parser<U>): Parser<[T, U]>;
	export function seq<T, U, V>(p1: Parser<T>, p2: Parser<U>, p3: Parser<V>): Parser<[T, U, V]>;
	export function seq<T, U, V, W>(p1: Parser<T>, p2: Parser<U>, p3: Parser<V>, p4: Parser<W>): Parser<[T, U, V, W]>;
	export function seq<T, U, V, W, X>(p1: Parser<T>, p2: Parser<U>, p3: Parser<V>, p4: Parser<W>, p5: Parser<X>): Parser<[T, U, V, W, X]>;
	export function seq<T, U, V, W, X, Y>(p1: Parser<T>, p2: Parser<U>, p3: Parser<V>, p4: Parser<W>, p5: Parser<X>, p6: Parser<Y>): Parser<[T, U, V, W, X, Y]>;
	export function seq<T, U, V, W, X, Y, Z>(p1: Parser<T>, p2: Parser<U>, p3: Parser<V>, p4: Parser<W>, p5: Parser<X>, p6: Parser<Y>, p7: Parser<Z>): Parser<[T, U, V, W, X, Y, Z]>;
	export function seq<T>(...parsers: Array<Parser<T>>): Parser<T[]>;
	export function seq(...parsers: Array<Parser<any>>): Parser<any[]>;

	/**
	 * Takes the string passed to parser.parse(string) and the error returned from
	 * parser.parse(string) and turns it into a human readable error message string.
	 * Note that there are certainly better ways to format errors, so feel free to write your own.
	 */
	export function formatError<T>(string: string, error: Result<T>): string;

	/**
	 * Matches all parsers sequentially, and passes their results as the arguments to a function.
	 * Similar to calling Parsimmon.seq and then .map, but the values are not put in an array.
	 */
	export function seqMap<T, U>(p1: Parser<T>, cb: (a1: T) => U): Parser<U>;
	export function seqMap<T, U, V>(p1: Parser<T>, p2: Parser<U>, cb: (a1: T, a2: U) => V): Parser<V>;
	export function seqMap<T, U, V, W>(p1: Parser<T>, p2: Parser<U>, p3: Parser<V>, cb: (a1: T, a2: U, a3: V) => W): Parser<W>;
	export function seqMap<T, U, V, W, X>(p1: Parser<T>, p2: Parser<U>, p3: Parser<V>, p4: Parser<W>, cb: (a1: T, a2: U, a3: V, a4: W) => X): Parser<X>;
	export function seqMap<T, U, V, W, X, Y>(p1: Parser<T>, p2: Parser<U>, p3: Parser<V>, p4: Parser<W>, p5: Parser<X>, cb: (a1: T, a2: U, a3: V, a4: W, a5: X) => Y): Parser<Y>;
	export function seqMap<T, U, V, W, X, Y, Z>(p1: Parser<T>, p2: Parser<U>, p3: Parser<V>, p4: Parser<W>, p5: Parser<X>, p6: Parser<Y>, cb: (a1: T, a2: U, a3: V, a4: W, a5: X, a6: Y) => Z): Parser<Z>;
	export function seqMap<T, U, V, W, X, Y, Z, A>(
		p1: Parser<T>, p2: Parser<U>, p3: Parser<V>, p4: Parser<W>, p5: Parser<X>, p6: Parser<Y>, p7: Parser<Z>,
		cb: (a1: T, a2: U, a3: V, a4: W, a5: X, a6: Y, a7: Z) => A): Parser<A>;
	export function seqMap<T, U, V, W, X, Y, Z, A, B>(
		p1: Parser<T>, p2: Parser<U>, p3: Parser<V>, p4: Parser<W>, p5: Parser<X>, p6: Parser<Y>, p7: Parser<Z>, p8: Parser<A>,
		cb: (a1: T, a2: U, a3: V, a4: W, a5: X, a6: Y, a7: Z, a8: A) => B): Parser<B>;

	export type SuccessFunctionType<U> = (index: number, result: U) => Result<U>;
	export type FailureFunctionType<U> = (index: number, msg: string) => Result<U>;
	export type ParseFunctionType<U> = (stream: StreamType, index: number) => Result<U>;
		/**
		 * allows to add custom primitive parsers.
	 */
	export function custom<U>(parsingFunction: (success: SuccessFunctionType<U>, failure: FailureFunctionType<U>) => ParseFunctionType<U>): Parser<U>;

	/**
	 * accepts a variable number of parsers, and yields the value of the first one that succeeds,
	 * backtracking in between.
	 */
	export function alt<U>(...parsers: Array<Parser<U>>): Parser<U>;
	export function alt(...parsers: Array<Parser<any>>): Parser<any>;

	/**
	 * Accepts two parsers, and expects zero or more matches for content, separated by separator, yielding an array.
	 */
	export function sepBy<T, U>(content: Parser<T>, separator: Parser<U>): Parser<T[]>;

	/**
	 * This is the same as Parsimmon.sepBy, but matches the content parser at least once.
	 */
	export function sepBy1<T, U>(content: Parser<T>, separator: Parser<U>): Parser<T[]>;

	/**
	 * accepts a function that returns a parser, which is evaluated the first time the parser is used.
	 * This is useful for referencing parsers that haven't yet been defined.
	 */
	export function lazy<U>(f: () => Parser<U>): Parser<U>;
	export function lazy<U>(description: string, f: () => Parser<U>): Parser<U>;

	/**
	 * fail paring with a message
	 */
	export function fail(message: string): Parser<never>;

	/**
	 * is equivalent to Parsimmon.regex(/[a-z]/i)
	 */
	export var letter: Parser<string>;
	/**
	 * is equivalent to Parsimmon.regex(/[a-z]*`/i)
	 */
	export var letters: Parser<string>;
	/**
	 * is equivalent to Parsimmon.regex(/[0-9]/)
	 */
	export var digit: Parser<string>;
	/**
	 * is equivalent to Parsimmon.regex(/[0-9]*`/)
	 */
	export var digits: Parser<string>;
	/**
	 * is equivalent to Parsimmon.regex(/\s+/)
	 */
	export var whitespace: Parser<string>;
	/**
	 * is equivalent to Parsimmon.regex(/\s*`/)
	 */
	export var optWhitespace: Parser<string>;
	/**
	 * consumes and yields the next character of the stream.
	 */
	export var any: Parser<string>;
	/**
	 * consumes and yields the entire remainder of the stream.
	 */
	export var all: Parser<string>;
	/**
	 * expects the end of the stream.
	 */
	export var eof: Parser<undefined>;
	/**
	 * is a parser that yields the current index of the parse.
	 */
	export var index: Parser<Index>;
	/**
	 * Returns a parser that yield a single character if it passes the predicate
	 */
	export function test(predicate: (char: string) => boolean): Parser<string>;
	/**
	 * Returns a parser yield a string containing all the next characters that pass the predicate
	 */
	export function takeWhile(predicate: (char: string) => boolean): Parser<string>;
}

export = Parsimmon;
