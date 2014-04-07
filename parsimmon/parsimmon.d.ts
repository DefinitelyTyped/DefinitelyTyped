// Type definitions for Parsimmon 0.3.0
// Project: https://github.com/jayferd/parsimmon
// Definitions by: Bart van der Schoor <https://github.com/Bartvds>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

// TODO convert to generics

declare module 'parsimmon' {
	module Parsimmon {

		export interface Mark<T> {
			start: number;
			end: number;
			value: T;
		}

		export interface Parser<T> {
			/*
			 parse the string
			 */
			parse(input: string): T;
			/*
			 returns a new parser which tries parser, and if it fails uses otherParser.
			 */
			or(otherParser: Parser<T>): Parser<T>;
			or<U>(otherParser: Parser<U>): Parser<any>;
			/*
			 returns a new parser which tries parser, and on success calls the given function with the result of the parse, which is expected to return another parser.
			 */
			then<U>(call: (result: T) => Parser<U>): Parser<U>;
			/*
			 expects anotherParser to follow parser, and yields the result of anotherParser. NB: the result of parser here is ignored.
			 */
			then<U>(anotherParser: Parser<U>): Parser<U>;
			/*
			 transforms the output of parser with the given function.
			 */
			map<U>(call: (result: T) => U): Parser<U>;
			/*
			 expects otherParser after parser, but preserves the yield value of parser.
			 */
			skip<U>(otherParser: Parser<U>): Parser<T>;
			/*
			 returns a new parser with the same behavior, but which yields aResult.
			 */
			result<U>(aResult: U): Parser<U>;
			/*
			 expects parser zero or more times, and yields an array of the results.
			 */
			many(): Parser<T[]>;
			/*
			 expects parser exactly n times, and yields an array of the results.
			 */
			times(n: number): Parser<T[]>;
			/*
			 expects parser between min and max times, and yields an array of the results.
			 */
			times(min: number, max: number): Parser<T[]>;
			/*
			 expects parser at most n times. Yields an array of the results.
			 */
			atMost(n: number): Parser<T[]>;
			/*
			 expects parser at least n times. Yields an array of the results.
			 */
			atLeast(n: number): Parser<T[]>;
			/*
			 yields an object with start, value, and end keys, where value is the original value yielded by the parser, and start and end are the indices in the stream that contain the parsed text.
			 */
			mark(): Parser<Mark<T>>;
		}
		/*
		 is a parser that expects to find "my-string", and will yield the same.
		 */
		export function string(mystring: string): Parser<string>;

		/*
		 is a parser that expects the stream to match the given regex.
		 */
		export function regex(myregex: RegExp): Parser<string>;

		/*
		 is a parser that doesn't consume any of the string, and yields result.
		 */
		export function succeed<U>(result: U): Parser<U>;

		/*
		 accepts a variable number of parsers that it expects to find in order, yielding an array of the results.
		 */
		export function seq(...parsers: Parser<any>[]): Parser<any[]>;

		/*
		 accepts a function that returns a parser, which is evaluated the first time the parser is used. This is useful for referencing parsers that haven't yet been defined.
		 */
		export function lazy<U>(f: () => Parser<U>): Parser<U>;

		/*
		 fail paring with a message
		 */
		export function fail(message: string): Parser<void>;
		export function fail<U>(message: string): Parser<U>;

		/*
		 is equivalent to Parsimmon.regex(/[a-z]/i)
		 */
		export var letter: Parser<string>;
		/*
		 is equivalent to Parsimmon.regex(/[a-z]*`/i)
		 */
		export var letters: Parser<string>;
		/*
		 is equivalent to Parsimmon.regex(/[0-9]/)
		 */
		export var digit: Parser<string>;
		/*
		 is equivalent to Parsimmon.regex(/[0-9]*`/)
		 */
		export var digits: Parser<string>;
		/*
		 is equivalent to Parsimmon.regex(/\s+/)
		 */
		export var whitespace: Parser<string>;
		/*
		 is equivalent to Parsimmon.regex(/\s*`/)
		 */
		export var optWhitespace: Parser<string>;
		/*
		 consumes and yields the next character of the stream.
		 */
		export var any: Parser<string>;
		/*
		 consumes and yields the entire remainder of the stream.
		 */
		export var all: Parser<string>;
		/*
		 expects the end of the stream.
		 */
		export var eof: Parser<string>;
		/*
		 is a parser that yields the current index of the parse.
		 */
		export var index: Parser<number>;
	}

	export = Parsimmon;
}
