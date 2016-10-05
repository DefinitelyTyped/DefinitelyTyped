// Type definitions for transducers-js
// Project: https://github.com/cognitect-labs/transducers-js
// Definitions by: Colin Kahn <https://github.com/colinkahn>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare module 'transducers-js' {
  export interface IteratorResult<T> {
    done: boolean;
    value?: T
  }

  export interface Iterator<T> {
    next (value?: any): IteratorResult<T>;
    return? (value?: any): IteratorResult<T>;
    throw? (e?: any): IteratorResult<T>;
  }

  export interface Reduced<TResult> {
    ['@@transducer/reduced']: boolean;
    ['@@transducer/value']: TResult;
  }

  export interface Reducer<TResult, TInput> {
    (result: TResult, input: TInput): TResult;
  }

  export interface Transducer<TResult, TInput, TOutput> {
    (xf: Transformer<TResult, TOutput>): Transformer<TResult, TInput>;
  }

  export interface CompletingTransformer <TResult, TCompleteResult, TInput> {
    ['@@transducer/init'] (): TResult | void;
    ['@@transducer/step'] (result: TResult, input: TInput): TResult | Reduced<TResult>;
    ['@@transducer/result'] (result: TResult): TCompleteResult;
  }

  export interface Transformer<TResult, TInput> extends CompletingTransformer<TResult, TResult, TInput> {
  }

  /**
   * Return a reduced value. Reduced values short circuit transduce.
   */
  export function reduced<TResult> (x: TResult): Reduced<TResult>;

  /**
   * Check if a value is reduced.
   */
  export function isReduced (x : any) : Boolean;

  /**
   * Function composition. Take N function and return their composition.
   */
  export function comp<T> (...args: T[]): T;

  /**
   * Take a predicate function and return its complement.
   */
  export function complement (f: Function): Function;

  /**
   * Identity function.
   */
  export function identity<T> (arg: T): T;

  export class Map<TResult, TInput, TOutput> implements Transformer<TResult, TInput> {
    constructor (f: (x: TInput) => TOutput, xf: Transformer<TResult, TOutput>);
    ['@@transducer/init'] (): TResult;
    ['@@transducer/step'] (result: TResult, input: TInput): TResult;
    ['@@transducer/result'] (result: TResult): TResult;
  }

  /**
   * Mapping transducer constructor
   */
  export function map<TResult, TInput, TOutput> (f: (x: TInput) => TOutput): Transducer<TResult, TInput, TOutput>;

  export class Filter<TResult, TInput> implements Transformer<TResult, TInput> {
    constructor (pred: (x: TInput) => boolean, xf: Transformer<TResult, TInput>);
    ['@@transducer/init'] (): TResult;
    ['@@transducer/step'] (result: TResult, input: TInput): TResult;
    ['@@transducer/result'] (result: TResult): TResult;
  }

  /**
   * Filtering transducer constructor
   */
  export function filter<TResult, TInput> (pred: (x: TInput) => boolean): Transducer<TResult, TInput, TInput>;

  /**
   * Similar to filter except the predicate is used to
   * eliminate values.
   */
  export function remove<TResult, TInput> (pred: (x: TInput) => boolean): Transducer<TResult, TInput, TInput>;

  export class Keep<TResult, TInput> implements Transformer<TResult, TInput> {
    constructor (f: (x: TInput) => any, xf: Transformer<TResult, TInput>);
    ['@@transducer/init'] (): TResult;
    ['@@transducer/step'] (result: TResult, input: TInput): TResult;
    ['@@transducer/result'] (result: TResult): TResult;
  }

  /**
   * A keeping transducer. Keep inputs as long as the provided
   * function does not return null or undefined.
   */
  export function keep<TResult, TInput> (f: (x: TInput) => any): Transducer<TResult, TInput, TInput>;

  export class KeepIndexed<TResult, TInput> implements Transformer<TResult, TInput> {
    constructor (f: (i: number, x:TInput) => any, xf: Transformer<TResult, TInput>);
    ['@@transducer/init'] (): TResult;
    ['@@transducer/step'] (result: TResult, input: TInput): TResult;
    ['@@transducer/result'] (result: TResult): TResult;
  }

  /**
   * Like keep but the provided function will be passed the
   * index as the fist argument.
   */
  export function keepIndexed<TResult, TInput> (f: (i: number, x: TInput) => any): Transducer<TResult, TInput, TInput>;

  export class Take<TResult, TInput> implements Transformer<TResult, TInput> {
    constructor (n: number, xf: Transformer<TResult, TInput>);
    ['@@transducer/init'] (): TResult;
    ['@@transducer/step'] (result: TResult, input: TInput): TResult | Reduced<TResult>;
    ['@@transducer/result'] (result: TResult): TResult;
  }

  /**
   * A take transducer constructor. Will take n values before
   * returning a reduced result.
   */
  export function take<TResult, TInput> (n: number): Transducer<TResult, TInput, TInput>;

  export class TakeWhile<TResult, TInput> implements Transformer<TResult, TInput> {
    constructor (pred: (n: TInput) => boolean, xf: Transformer<TResult, TInput>);
    ['@@transducer/init'] (): TResult;
    ['@@transducer/step'] (result: TResult, input: TInput): TResult | Reduced<TResult>;
    ['@@transducer/result'] (result: TResult): TResult;
  }

  /**
   * Like the take transducer except takes as long as the pred
   * return true for inputs.
   */
  export function takeWhile<TResult, TInput> (pred: (n: TInput) => boolean): Transducer<TResult, TInput, TInput>;

  export class TakeNth<TResult, TInput> implements Transformer<TResult, TInput> {
    constructor (n: number, xf: Transformer<TResult, TInput>);
    ['@@transducer/init'] (): TResult;
    ['@@transducer/step'] (result: TResult, input: TInput): TResult;
    ['@@transducer/result'] (result: TResult): TResult;
  }

  /**
   * A transducer that takes every Nth input
   */
  export function takeNth<TResult, TInput> (n: number): Transducer<TResult, TInput, TInput>;

  export class Drop<TResult, TInput> implements Transformer<TResult, TInput> {
    constructor (n: number, xf: Transformer<TResult, TInput>);
    ['@@transducer/init'] (): TResult;
    ['@@transducer/step'] (result: TResult, input: TInput): TResult;
    ['@@transducer/result'] (result: TResult): TResult;
  }

  /**
   * A dropping transducer constructor
   */
  export function drop<TResult, TInput> (n: number): Transducer<TResult, TInput, TInput>;

  export class DropWhile<TResult, TInput> implements Transformer<TResult, TInput> {
    constructor (pred: (input: TInput) => boolean, xf: Transformer<TResult, TInput>);
    ['@@transducer/init'] (): TResult;
    ['@@transducer/step'] (result: TResult, input: TInput): TResult;
    ['@@transducer/result'] (result: TResult): TResult;
  }

  /**
   * A dropping transducer that drop inputs as long as
   * pred is true.
   */
  export function dropWhile<TResult, TInput> (pred: (input: TInput) => boolean): Transducer<TResult, TInput, TInput>;

  export class PartitionBy<TResult, TInput> implements Transformer<TResult, TInput> {
    constructor (f: (input: TInput) => any, xf: Transformer<TResult, TInput[]>);
    ['@@transducer/init'] (): TResult;
    ['@@transducer/step'] (result: TResult, input: TInput): TResult
    ['@@transducer/result'] (result: TResult): TResult
  }

  /**
   * A partitioning transducer. Collects inputs into
   * arrays as long as predicate remains true for contiguous
   * inputs.
   */
  export function partitionBy<TResult, TInput> (f: (input: TInput) => any): Transducer<TResult, TInput, TInput[]>;

  export class PartitionAll<TResult, TInput> implements Transformer<TResult, TInput> {
    constructor (n: number, xf: Transformer<TResult, TInput[]>);
    ['@@transducer/init'] (): TResult;
    ['@@transducer/step'] (result: TResult, input: TInput): TResult
    ['@@transducer/result'] (result: TResult): TResult
  }

  /**
   * A partitioning transducer. Collects inputs into
   * arrays of size N.
   */
  export function partitionAll<TResult, TInput> (n: number): Transducer<TResult, TInput, TInput[]>;

  export class Completing<TResult, TCompleteResult, TInput> implements CompletingTransformer<TResult, TCompleteResult, TInput> {
    constructor (cf: (result: TResult) => TCompleteResult, xf: Transformer<TResult, TInput>);
    ['@@transducer/init'] (): TResult;
    ['@@transducer/step'] (result: TResult, input: TInput): TResult
    ['@@transducer/result'] (result: TResult): TCompleteResult
  }

  /**
   * A completing transducer constructor. Useful to provide cleanup
   * logic at the end of a reduction/transduction.
   */
  export function completing<TResult, TCompleteResult, TInput> (cf: (result: TResult) => TCompleteResult): CompletingTransformer<TResult, TCompleteResult, TInput>;

  export class Wrap<TResult, TInput> implements Transformer<TResult, TInput> {
    constructor (stepFn: Reducer<TResult, TInput>, xf: Transformer<TResult, TInput>);
    ['@@transducer/init'] (): TResult;
    ['@@transducer/step'] (result: TResult, input: TInput): TResult
    ['@@transducer/result'] (result: TResult): TResult
  }

  /**
   * Take a two-arity reducing function where the first argument is the
   * accumluation and the second argument is the next input and convert
   * it into a transducer transformer object.
   */
  export function wrap<TResult, TInput> (stepFn: Reducer<TResult, TInput>): Transducer<TResult, TInput, TInput>;

  /**
   * Given a transformer return a concatenating transformer
   */
  export function cat<TResult, TInput> (xf: Transformer<TResult, TInput>): Transformer<TResult, TInput> ;

  /**
   * A mapping concatenating transformer
   */
  export function mapcat<TResult, TInput, TOutput> (f: (arr: TInput[]) => TOutput[]): Transducer<TResult, TInput[], TOutput>;

  /**
   * Given a transducer, a builder function, an initial value
   * and a iterable collection - returns the reduction.
   */
  export function transduce<TResult, TInput, TOutput> (
    xf: Transducer<TResult, TInput, TOutput>,
    f: Transformer<TResult, TInput> | Reducer<TResult, TInput>,
    init: TResult,
    coll: TInput[] | Iterator<TInput> | string | Object): TResult;

  /**
   * Given a transducer, an intial value and a
   * collection - returns the reduction.
   */
  export function reduce<TResult, TInput, TOutput> (
    xf: Transducer<TResult, TInput, TOutput>,
    init: TResult,
    coll: TInput[] | Iterator<TInput> | string | Object): TResult

  /**
   * Reduce a value into the given empty value using a transducer.
   */
  export function into<TResult, TInput, TOutput>(
    empty: TResult,
    xf: Transducer<TResult, TInput, TOutput>,
    coll: TInput[] | Iterator<TInput> | string | Object): TResult;

  /**
   * Convert a transducer transformer object into a function so
   * that it can be used with existing reduce implementation i.e. native,
   * Underscore, lodash
   */
  export function toFn<TResult, TInput, TOutput> (
    xf: Transducer<TResult, TInput, TOutput>,
    builder: Reducer<TResult, TInput> | Transformer<TResult, TInput>
  ): Reducer<TResult, TInput>;

  /**
   * A transformer which simply returns the first input.
   */
  export function first<TResult, TInput> (): Wrap<TResult, TInput>;

  /**
   * Ensure that a value is reduced. If already reduced will not re-wrap.
   */
  export function ensureReduced<TResult> (x: TResult | Reduced<TResult>): Reduced<TResult>;

  /**
   * Ensure a value is not reduced. Unwraps if reduced.
   */
  export function unreduced<TResult> (x: TResult | Reduced<TResult>): TResult;

  /**
   * Returns the value of a reduced result.
   */
  export function deref<TResult> (x: Reduced<TResult>): TResult;
}
