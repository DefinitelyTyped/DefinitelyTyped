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
  (state: ParserState<E, A, S>): ParserOutputState<E, A, S>
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

  static ['fantasy-land/of']<E, A, S = null>(value: A): Parser<E, A, S>;
  static of<E, A, S>(value: A): Parser<E, A, S>;
}

export const getData: Parser<never, any, any>;

export const setData: <E, A, T>(x: T) => Parser<E, A, T>;
export const mapData: <E, A, S, T>(fn: (x: S) => T) => Parser<E, A, T>;
export const withData: <E, A, X>(parser: Parser<E, A, X>) => <S>(data: S) => Parser<E, A, S>;

export const pipeParsers: <E, A, S>(parsers: [...Parser<unknown, unknown, unknown>[], Parser<E, A, S>]) => Parser<E, A, S>;
export const composeParsers: <E, A, S>(parsers: [Parser<E, A, S>, ...Parser<unknown, unknown, unknown>[]]) => Parser<E, A, S>;

export const tapParser: <E, A, S>(fn: (state: ParserState<E, A, S>) => void) => Parser<E, A, S>;
export const parse: <E, A, S>(parser: Parser<E, A, S>) => (target: ParserInput) => ParserOutputState<E, A, S>;

export const decide: <E, A, S, B>(fn: (result: A) => Parser<E, B, S>) => Parser<E, B, S>;
export const fail: <S, F>(errorMessage: F) => Parser<F, never, S>;
export const suceedWith: <E, A, S = null>(value: A) => Parser<E, A, S>;


export const either: <E, A, S>(parser: Parser<E, A, S>) => Parser<never, Either<E, A>, S>;
export const coroutine: <A, B>(g: () => Generator<Parser<unknown, B, unknown>, A, B>) => Parser<unknown, A, null>;

export const exactly: (n: number) => <E, A, S>(parser: Parser<E, A, S>) => Parser<E, A[], S>;
export const many: <E, A, S>(parser: Parser<E, A, S>) => Parser<E, A[], S>;
export const many1: <E, A, S>(parser: Parser<E, A, S>) => Parser<E, A[], S>;

export const mapTo: <E, A, S, B>(fn: (result: A) => B) => Parser<E, B, S>;
export const errorMapTo: <E, A, S, F>(fn: (result: E) => F) => Parser<F, A, S>;

export const char: (char: string) => Parser<string, string>;
export const anyChar: (char: string) => Parser<string, string>;
export const peek: Parser<string, string>;
export const str: (string: string) => Parser<string, string>;
export const regex: (regex: RegExp) => Parser<string, string>;
export const digit: Parser<string, string>;
export const digits: Parser<string, string>;
export const letter: Parser<string, string>;
export const letters: Parser<string, string>;
export const anyOfString: (string: string) => Parser<string, string>;

export const namedSequenceOf: <E, A extends {}, S>(pairedParsers: [keyof A, A[keyof A]][]) => Parser<E, A, S>;
export const sequenceOf: <E, A extends any[], S>(parsers: Parser<E, A[number], S>[]) => Parser<E, A, S>;
export const sepBy: <E, A, S>(sepParser: Parser<E, A, S>) => <B>(valParser: Parser<E, B, S>) => Parser<E, B[], S>;
export const sepBy1: <E, A, S>(sepParser: Parser<E, A, S>) => <B>(valParser: Parser<E, B, S>) => Parser<E, B[], S>;
export const choice: <E, A extends any[], S>(parsers: Parser<E, A[number], S>[]) => Parser<E, A[number], S>;
export const between: <E, A, B, C, S>(leftParser: Parser<E, A, S>) => (rightParser: Parser<E, C, S>) => (parser: Parser<E, B, S>) => Parser<E, B, S>;

export const everythingUntil: <E, A, S>(parser: Parser<E, A, S>) => Parser<E, string, S>;
export const everyCharUntil: <E, A, S>(parser: Parser<E, A, S>) => Parser<E, string, S>;
export const anythingExcept: <E, A, S>(parser: Parser<E, A, S>) => Parser<E, string, S>;
export const anyCharExcept: <E, A, S>(parser: Parser<E, A, S>) => Parser<E, string, S>;

export const lookAhead: <E, A, S>(parser: Parser<E, A, S>) => Parser<E, A, S>;
export const possibly: <E, A, S>(parser: Parser<E, A, S>) => Parser<never, A | null, S>;
export const skip: <E, A, S>(parser: Parser<E, A, S>) => Parser<E, A, S>;

export const endOfInput: Parser<string, null>;
export const whitespace: Parser<string, null>;
export const optionalWhitespace: Parser<string, null>;

export const recursiveParser: <E, A, S>(parser: () => Parser<E, A, S>) => Parser<E, A, S>;
export const takeRight: <E, A, S>(left: Parser<E, A, S>) => <F, B, T>(right: Parser<F, B, T>) => Parser<F, B, T>;
export const takeLeft: <E, A, S>(left: Parser<E, A, S>) => <F, B, T>(right: Parser<F, B, T>) => Parser<E, A, S>;

export const toPromise: <E, A, S>(result: ParserOutputState<E, A, S>) => Promise<A>;
export const toValue: <E, A, S>(result: ParserOutputState<E, A, S>) => A;
