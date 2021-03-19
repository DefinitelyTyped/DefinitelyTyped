// Type definitions for arcsecond 3.1
// Project: https://github.com/francisrstokes/arcsecond
// Definitions by: Fifi Art <https://github.com/fifiinart>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// Minimum TypeScript Version: 4.2

export type TypedArray =
  Uint8Array |
  Uint8ClampedArray |
  Int8Array |
  Uint16Array |
  Int16Array |
  Uint32Array |
  Int32Array |
  Float32Array |
  Float64Array;

export interface ParserInputState<S> {
  dataView: DataView;
  inputType: InputType;

  isError: false;
  error: null;
  data: S | null;
  index: number;
  result: null;
}

export interface ParserSucessState<A, S> {
  isError: false;
  data: S | null;
  index: number;
  result: A;
}

export interface ParserErrorState<E, S> {
  isError: true;
  data: S | null;
  index: number;
  error: E;
}

export type ParserOutputState<E, A, S> = ParserSucessState<A, S> | ParserErrorState<E, S>;
export type ParserState<E, A, S> = ParserOutputState<E, A, S> | ParserInputState<S>;

export enum InputType {
  STRING = 'string',
  ARRAY_BUFFER = 'arrayBuffer',
  TYPED_ARRAY = 'typedArray',
  DATA_VIEW = 'dataView',
}

export type Either<E, A> = {
  isError: true;
  value: E;
} | {
  isError: false;
  value: A;
};

export interface ParserTransformer<E, A, S> {
  (state: ParserState<E, A, S>): ParserOutputState<E, A, S>;
}

export type InputFromInputType<T> =
  T extends InputType.STRING ? string :
  T extends InputType.ARRAY_BUFFER ? ArrayBuffer :
  T extends InputType.TYPED_ARRAY ? TypedArray :
  T extends InputType.DATA_VIEW ? DataView :
  never;

export type ParserInput = InputFromInputType<InputType>;

export class Parser<E, A, S = null> {
  p: ParserTransformer<E, A, S>;

  run(target: ParserInput): ParserOutputState<E, A, S>;

  fork<B, F>(
    target: ParserInput,
    errorHandler: (error: string, parserState: ParserErrorState<E, S>) => F,
    successHandler: (result: A, parserState: ParserSucessState<A, S>) => B
  ): B | F;

  ['fantasy-land/map']<B>(fn: (result: A) => B): Parser<E, B, S>;
  map<B>(fn: (result: A) => B): Parser<E, B, S>;

  ['fantasy-land/chain']<B>(fn: (result: A) => Parser<E, B, S>): Parser<E, B, S>;
  chain<B>(fn: (result: A) => Parser<E, B, S>): Parser<E, B, S>;

  ['fantasy-land/ap']<B>(parserOfFunction: Parser<E, (result: A) => B, S>): Parser<E, B, S>;

  errorMap<F>(fn: (errorObj: {
    error: E,
    index: number,
    data: S
  }) => F): Parser<F, A, S>;
  errorChain<F>(fn: (errorObj: {
    error: E,
    index: number,
    data: S
  }) => Parser<F, A, S>): Parser<F, A, S>;

  mapFromData<B>(fn: (dataObj: { result: A, data: S }) => B): Parser<E, B, S>;
  chainFromData<B>(fn: (dataObj: { result: A, data: S }) => Parser<E, B, S>): Parser<E, B, S>;

  mapData<T>(fn: (data: S) => T): Parser<E, A, T>;

  static ['fantasy-land/of']<A>(value: A): Parser<any, A, any>;
  static of<A>(value: A): Parser<any, A, any>;
}

export const getData: Parser<never, any, any>;

export function setData<T>(x: T): Parser<any, any, T>;
export function mapData<T>(fn: (x: any) => T): Parser<any, any, T>;
export function withData<E, A>(parser: Parser<E, A, any>): <S>(data: S) => Parser<E, A, S>;

export function pipeParsers<E, A, S>(parsers: [...Array<Parser<unknown, unknown, unknown>>, Parser<E, A, S>]): Parser<E, A, S>;
export function composeParsers<E, A, S>(parsers: [Parser<E, A, S>, ...Array<Parser<unknown, unknown, unknown>>]): Parser<E, A, S>;

export function tapParser<E, A, S>(fn: (state: ParserState<E, A, S>) => void): Parser<E, A, S>;
export function parse<E, A, S>(parser: Parser<E, A, S>): (target: ParserInput) => ParserOutputState<E, A, S>;

export function decide<E, S, B>(fn: (result: any) => Parser<E, B, S>): Parser<E, B, S>;
export function fail<F>(errorMessage: F): Parser<F, never, any>;
export function suceedWith<A>(value: A): Parser<never, A, any>;

export function either<E, A, S>(parser: Parser<E, A, S>): Parser<never, Either<E, A>, S>;
export function coroutine<A, B>(g: () => Generator<Parser<unknown, B, unknown>, A, B>): Parser<unknown, A>;

export function exactly(n: number): <E, A, S>(parser: Parser<E, A, S>) => Parser<E, A[], S>;
export function many<E, A, S>(parser: Parser<E, A, S>): Parser<E, A[], S>;
export function many1<E, A, S>(parser: Parser<E, A, S>): Parser<E, A[], S>;

export function mapTo<B>(fn: (result: any) => B): Parser<any, B, any>;
export function errorMapTo<F>(fn: (result: any) => F): Parser<F, any, any>;

export function char(char: string): Parser<string, string>;
export function anyChar(char: string): Parser<string, string>;
export const peek: Parser<string, string>;
export function str(string: string): Parser<string, string>;
export function regex(regex: RegExp): Parser<string, string>;
export const digit: Parser<string, string>;
export const digits: Parser<string, string>;
export const letter: Parser<string, string>;
export const letters: Parser<string, string>;
export function anyOfString(string: string): Parser<string, string>;

export function namedSequenceOf<A extends {}>(pairedParsers: Array<[keyof A, A[keyof A]]>): Parser<any, A, any>;
export function sequenceOf<E, A extends any[], S>(parsers: { [I in keyof A]: Parser<E, A[I], S> }): Parser<E, A, S>;
export function sepBy<E, S>(sepParser: Parser<E, any, S>): <B>(valParser: Parser<E, B, S>) => Parser<E, B[], S>;
export function sepBy1<E, S>(sepParser: Parser<E, any, S>): <B>(valParser: Parser<E, B, S>) => Parser<E, B[], S>;
export function choice<E, A extends any[], S>(parsers: Array<Parser<E, A[number], S>>): Parser<E, A[number], S>;
export function between<E, A, S>(leftParser: Parser<E, any, S>): (rightParser: Parser<E, any, S>) => (parser: Parser<E, A, S>) => Parser<E, A, S>;

export function everythingUntil<E, S>(parser: Parser<E, any, S>): Parser<E, string, S>;
export function everyCharUntil<E, S>(parser: Parser<E, any, S>): Parser<E, string, S>;
export function anythingExcept<E, S>(parser: Parser<E, any, S>): Parser<E, string, S>;
export function anyCharExcept<E, S>(parser: Parser<E, any, S>): Parser<E, string, S>;

export function lookAhead<E, S>(parser: Parser<E, any, S>): Parser<E, any, S>;
export function possibly<A, S>(parser: Parser<any, A, S>): Parser<never, A | null, S>;
export function skip<E, S>(parser: Parser<E, any, S>): Parser<E, any, S>;

export const endOfInput: Parser<string, null>;
export const whitespace: Parser<string, null>;
export const optionalWhitespace: Parser<string, null>;

export function recursiveParser<E, A, S>(parser: () => Parser<E, A, S>): Parser<E, A, S>;
export function takeRight(left: Parser<any, any, any>): <F, B, T>(right: Parser<F, B, T>) => Parser<F, B, T>;
export function takeLeft<E, A, S>(left: Parser<E, A, S>): (right: Parser<any, any, any>) => Parser<E, A, S>;

export function toPromise<A>(result: ParserOutputState<any, A, any>): Promise<A>;
export function toValue<A>(result: ParserOutputState<any, A, any>): A;
