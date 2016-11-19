// Type definitions for Parsimmon 0.9.2
// Project: https://github.com/jneen/parsimmon
// Definitions by: Bart van der Schoor <https://github.com/Bartvds>, Mizunashi Mana <https://github.com/mizunashi-mana>, Boris Cherny <https://github.com/bcherny>, Benny van Reeven <https://github.com/bvanreeven>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

// TODO convert to generics

declare module 'parsimmon' {
	namespace Parsimmon {

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

		export interface Result<T> {
			status: boolean;
			value?: T;
			expected?: string;
			index?: Index;
		}

		export interface Parser<T> {
			/**
			 * parse the string
			 */
			parse(input: string): Result<T>;
			/**
			 * returns a new parser which tries parser, and if it fails uses otherParser.
			 */
			or(otherParser: Parser<T>): Parser<T>;
			or<U>(otherParser: Parser<U>): Parser<any>;
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
			then<U>(anotherParser: Parser<U>): Parser<U>;
			/**
			 * transforms the output of parser with the given function.
			 */
			map<U>(call: (result: T) => U): Parser<U>;
			/**
			 * expects otherParser after parser, but preserves the yield value of parser.
			 */
			skip<U>(otherParser: Parser<U>): Parser<T>;
			/**
			 * returns a new parser with the same behavior, but which yields aResult.
			 */
			result<U>(aResult: U): Parser<U>;
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
		export function seq<T>(...parsers: Parser<T>[]): Parser<T[]>;
		export function seq(...parsers: Parser<any>[]): Parser<any[]>;

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
		export function alt<U>(...parsers: Parser<U>[]): Parser<U>;
		export function alt(...parsers: Parser<any>[]): Parser<any>;

		/**
		 * Accepts two parsers, and expects zero or more matches for content, separated by separator, yielding an array.
		 */
		export function sepBy<T>(content: Parser<T>, separator: Parser<T>): Parser<T>

		/**
		 * This is the same as Parsimmon.sepBy, but matches the content parser at least once.
		 */
		export function sepBy1<T>(content: Parser<T>, separator: Parser<T>): Parser<T>

		/**
		 * accepts a function that returns a parser, which is evaluated the first time the parser is used.
		 * This is useful for referencing parsers that haven't yet been defined.
		 */
		export function lazy<U>(f: () => Parser<U>): Parser<U>;
		export function lazy<U>(description: string, f: () => Parser<U>): Parser<U>;

		/**
		 * fail paring with a message
		 */
		export function fail(message: string): Parser<void>;
		export function fail<U>(message: string): Parser<U>;

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
		export var eof: Parser<void>;
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
}
