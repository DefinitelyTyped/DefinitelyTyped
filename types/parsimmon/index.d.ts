// Type definitions for Parsimmon 1.3
// Project: https://github.com/jneen/parsimmon
// Definitions by: Bart van der Schoor <https://github.com/Bartvds>
//                 Mizunashi Mana <https://github.com/mizunashi-mana>
//                 Boris Cherny <https://github.com/bcherny>
//                 Benny van Reeven <https://github.com/bvanreeven>
//                 Leonard Thieu <https://github.com/leonard-thieu>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.1

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
	type StreamType = string;

	interface Index {
		/** zero-based character offset */
		offset: number;
		/** one-based line offset */
		line: number;
		/** one-based column offset */
		column: number;
	}

	interface Mark<T> {
		start: Index;
		end: Index;
		value: T;
	}

	type Result<T> = Success<T> | Failure;

	interface Success<T> {
		status: true;
		value: T;
	}

	interface Failure {
		status: false;
		expected: string[];
		index: Index;
	}

	interface Parser<T> {
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
		 * Returns a parser that looks for anything but whatever anotherParser wants to
		 * parse, and does not consume it. Yields the same result as parser. Equivalent to
		 * parser.skip(Parsimmon.notFollowedBy(anotherParser)).
		 */
		notFollowedBy(anotherParser: Parser<any>): Parser<T>;
		/**
		 * Returns a parser that looks for whatever arg wants to parse, but does not
		 * consume it. Yields the same result as parser. Equivalent to
		 * parser.skip(Parsimmon.lookahead(anotherParser)).
		 */
		lookahead(arg: Parser<any> | string | RegExp): Parser<T>;
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
	function Parser<T>(fn: (input: string, i: number) => Parsimmon.Result<T>): Parser<T>;

	/**
	 * To be used inside of Parsimmon(fn). Generates an object describing how
	 * far the successful parse went (index), and what value it created doing
	 * so. See documentation for Parsimmon(fn).
	 */
	function makeSuccess<T>(index: number, value: T): Success<T>;

	/**
	 * To be used inside of Parsimmon(fn). Generates an object describing how
	 * far the unsuccessful parse went (index), and what kind of syntax it
	 * expected to see (expectation). See documentation for Parsimmon(fn).
	 */
	function makeFailure(furthest: number, expectation: string): Failure;

	/**
	 * Returns true if obj is a Parsimmon parser, otherwise false.
	 */
	function isParser(obj: any): obj is Parser<any>;

	/**
	 * is a parser that expects to find "my-string", and will yield the same.
	 */
	function string(string: string): Parser<string>;

	/**
	 * Returns a parser that looks for exactly one character from string, and yields that character.
	 */
	function oneOf(string: string): Parser<string>;

	/**
	 * Returns a parser that looks for exactly one character NOT from string, and yields that character.
	 */
	function noneOf(string: string): Parser<string>;

	/**
	 * Returns a parser that looks for a match to the regexp and yields the given match group
	 * (defaulting to the entire match). The regexp will always match starting at the current
	 * parse location. The regexp may only use the following flags: imu. Any other flag will
	 * result in an error being thrown.
	 */
	function regexp(myregex: RegExp, group?: number): Parser<string>;

	/**
	 * This was the original name for Parsimmon.regexp, but now it is just an alias.
	 */
	function regex(myregex: RegExp, group?: number): Parser<string>;

	/**
	 * Parses using parser, but does not consume what it parses. Yields null if the parser
	 * does not match the input. Otherwise it fails.
	 */
	function notFollowedBy(parser: Parser<any>): Parser<null>;

	/**
	 * Parses using arg, but does not consume what it parses. Yields an empty string.
	 */
	function lookahead(arg: Parser<any> | string | RegExp): Parser<''>;

	/**
	 * Returns a parser that doesn't consume any of the string, and yields result.
	 */
	function succeed<U>(result: U): Parser<U>;

	/**
	 * This is an alias for Parsimmon.succeed(result).
	 */
	function of<U>(result: U): Parser<U>;

	/**
	 * accepts a variable number of parsers that it expects to find in order, yielding an array of the results.
	 */
	function seq<T>(p1: Parser<T>): Parser<[T]>;
	function seq<T, U>(p1: Parser<T>, p2: Parser<U>): Parser<[T, U]>;
	function seq<T, U, V>(p1: Parser<T>, p2: Parser<U>, p3: Parser<V>): Parser<[T, U, V]>;
	function seq<T, U, V, W>(p1: Parser<T>, p2: Parser<U>, p3: Parser<V>, p4: Parser<W>): Parser<[T, U, V, W]>;
	function seq<T, U, V, W, X>(p1: Parser<T>, p2: Parser<U>, p3: Parser<V>, p4: Parser<W>, p5: Parser<X>): Parser<[T, U, V, W, X]>;
	function seq<T, U, V, W, X, Y>(p1: Parser<T>, p2: Parser<U>, p3: Parser<V>, p4: Parser<W>, p5: Parser<X>, p6: Parser<Y>): Parser<[T, U, V, W, X, Y]>;
	function seq<T, U, V, W, X, Y, Z>(p1: Parser<T>, p2: Parser<U>, p3: Parser<V>, p4: Parser<W>, p5: Parser<X>, p6: Parser<Y>, p7: Parser<Z>): Parser<[T, U, V, W, X, Y, Z]>;
	function seq<T>(...parsers: Array<Parser<T>>): Parser<T[]>;
	function seq(...parsers: Array<Parser<any>>): Parser<any[]>;

	/**
	 * Takes the string passed to parser.parse(string) and the error returned from
	 * parser.parse(string) and turns it into a human readable error message string.
	 * Note that there are certainly better ways to format errors, so feel free to write your own.
	 */
	function formatError<T>(string: string, error: Result<T>): string;

	/**
	 * Matches all parsers sequentially, and passes their results as the arguments to a function.
	 * Similar to calling Parsimmon.seq and then .map, but the values are not put in an array.
	 */
	function seqMap<T, U>(p1: Parser<T>, cb: (a1: T) => U): Parser<U>;
	function seqMap<T, U, V>(p1: Parser<T>, p2: Parser<U>, cb: (a1: T, a2: U) => V): Parser<V>;
	function seqMap<T, U, V, W>(p1: Parser<T>, p2: Parser<U>, p3: Parser<V>, cb: (a1: T, a2: U, a3: V) => W): Parser<W>;
	function seqMap<T, U, V, W, X>(p1: Parser<T>, p2: Parser<U>, p3: Parser<V>, p4: Parser<W>, cb: (a1: T, a2: U, a3: V, a4: W) => X): Parser<X>;
	function seqMap<T, U, V, W, X, Y>(p1: Parser<T>, p2: Parser<U>, p3: Parser<V>, p4: Parser<W>, p5: Parser<X>, cb: (a1: T, a2: U, a3: V, a4: W, a5: X) => Y): Parser<Y>;
	function seqMap<T, U, V, W, X, Y, Z>(p1: Parser<T>, p2: Parser<U>, p3: Parser<V>, p4: Parser<W>, p5: Parser<X>, p6: Parser<Y>, cb: (a1: T, a2: U, a3: V, a4: W, a5: X, a6: Y) => Z): Parser<Z>;
	function seqMap<T, U, V, W, X, Y, Z, A>(
		p1: Parser<T>, p2: Parser<U>, p3: Parser<V>, p4: Parser<W>, p5: Parser<X>, p6: Parser<Y>, p7: Parser<Z>,
		cb: (a1: T, a2: U, a3: V, a4: W, a5: X, a6: Y, a7: Z) => A): Parser<A>;
	function seqMap<T, U, V, W, X, Y, Z, A, B>(
		p1: Parser<T>, p2: Parser<U>, p3: Parser<V>, p4: Parser<W>, p5: Parser<X>, p6: Parser<Y>, p7: Parser<Z>, p8: Parser<A>,
		cb: (a1: T, a2: U, a3: V, a4: W, a5: X, a6: Y, a7: Z, a8: A) => B): Parser<B>;

	type SuccessFunctionType<U> = (index: number, result: U) => Result<U>;
	type FailureFunctionType<U> = (index: number, msg: string) => Result<U>;
	type ParseFunctionType<U> = (stream: StreamType, index: number) => Result<U>;
	/**
	 * allows to add custom primitive parsers.
	 */
	function custom<U>(parsingFunction: (success: SuccessFunctionType<U>, failure: FailureFunctionType<U>) => ParseFunctionType<U>): Parser<U>;

	/**
	 * accepts a variable number of parsers, and yields the value of the first one that succeeds,
	 * backtracking in between.
	 */
	function alt<U>(...parsers: Array<Parser<U>>): Parser<U>;
	function alt(...parsers: Array<Parser<any>>): Parser<any>;

	/**
	 * Accepts two parsers, and expects zero or more matches for content, separated by separator, yielding an array.
	 */
	function sepBy<T, U>(content: Parser<T>, separator: Parser<U>): Parser<T[]>;

	/**
	 * This is the same as Parsimmon.sepBy, but matches the content parser at least once.
	 */
	function sepBy1<T, U>(content: Parser<T>, separator: Parser<U>): Parser<T[]>;

	/**
	 * accepts a function that returns a parser, which is evaluated the first time the parser is used.
	 * This is useful for referencing parsers that haven't yet been defined.
	 */
	function lazy<U>(f: () => Parser<U>): Parser<U>;
	function lazy<U>(description: string, f: () => Parser<U>): Parser<U>;

	/**
	 * fail paring with a message
	 */
	function fail(message: string): Parser<never>;

	/**
	 * is equivalent to Parsimmon.regex(/[a-z]/i)
	 */
	const letter: Parser<string>;
	/**
	 * is equivalent to Parsimmon.regex(/[a-z]*`/i)
	 */
	const letters: Parser<string>;
	/**
	 * is equivalent to Parsimmon.regex(/[0-9]/)
	 */
	const digit: Parser<string>;
	/**
	 * is equivalent to Parsimmon.regex(/[0-9]*`/)
	 */
	const digits: Parser<string>;
	/**
	 * is equivalent to Parsimmon.regex(/\s+/)
	 */
	const whitespace: Parser<string>;
	/**
	 * is equivalent to Parsimmon.regex(/\s*`/)
	 */
	const optWhitespace: Parser<string>;
	/**
	 * consumes and yields the next character of the stream.
	 */
	const any: Parser<string>;
	/**
	 * consumes and yields the entire remainder of the stream.
	 */
	const all: Parser<string>;
	/**
	 * expects the end of the stream.
	 */
	const eof: Parser<undefined>;
	/**
	 * is a parser that yields the current index of the parse.
	 */
	const index: Parser<Index>;
	/**
	 * Returns a parser that yield a single character if it passes the predicate
	 */
	function test(predicate: (char: string) => boolean): Parser<string>;
	/**
	 * Returns a parser yield a string containing all the next characters that pass the predicate
	 */
	function takeWhile(predicate: (char: string) => boolean): Parser<string>;
}

export = Parsimmon;
