// Type definitions for transducers.js 0.3
// Project: https://github.com/jlongster/transducers.js
// Definitions by: David Philipson <https://github.com/dphilipson>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export type Reducer<TResult, TInput> = (
    result: TResult,
    input: TInput,
) => TResult;

export type Transducer<TInput, TOutput> = <TResult>(
    xf: Transformer<TResult, TOutput>,
) => Transformer<TResult, TInput>;

export interface CompletingTransformer<TResult, TCompleteResult, TInput> {
    ["@@transducer/init"](): TResult | void;
    ["@@transducer/result"](result: TResult): TCompleteResult;
    ["@@transducer/step"](
        result: TResult,
        input: TInput,
    ): TResult | Reduced<TResult>;
}

export type Transformer<TResult, TInput> = CompletingTransformer<
    TResult,
    TResult,
    TInput
>;

export interface Reduced<T> {
    ["@@transducer/reduced"]: true;
    ["@@transducer/value"]: T;
}

export function reduce<TResult, TInput>(
    coll: Iterable<TInput>,
    xf: Transformer<TResult, TInput>,
    init: TResult,
): TResult;
export function reduce<TResult, TCompleteResult, TInput>(
    coll: Iterable<TInput>,
    xf: CompletingTransformer<TResult, TCompleteResult, TInput>,
    init: TResult,
): TCompleteResult;
// Overloads for object iteration.
export function reduce<TResult, TInput>(
    coll: { [key: string]: TInput },
    xf: Transformer<TResult, [string, TInput]>,
    init: TResult,
): TResult;
export function reduce<TResult, TCompleteResult, TInput>(
    coll: { [key: string]: TInput },
    xf: CompletingTransformer<TResult, TCompleteResult, [string, TInput]>,
    init: TResult,
): TCompleteResult;

export function transformer<TResult, TInput>(
    reducer: Reducer<TResult, TInput>,
): Transformer<TResult, TInput>;

export interface ReducedConstructor {
    new <T>(value: T): Reduced<T>;
}

export const Reduced: ReducedConstructor;

export function isReduced(x: any): boolean;

export function iterator<T>(coll: Iterable<T>): IterableIterator<T>;

export function push<T>(arr: T[], x: T): T[];

export function transduce<TResult, TInput, TOutput>(
    coll: Iterable<TInput>,
    xf: Transducer<TInput, TOutput>,
    f: Reducer<TResult, TOutput>,
    init: TResult,
): TResult;
export function transduce<TResult, TCompleteResult, TInput, TOutput>(
    coll: Iterable<TInput>,
    xf: Transducer<TInput, TOutput>,
    f: CompletingTransformer<TResult, TCompleteResult, TOutput>,
    init?: TResult,
): TCompleteResult;
// Overloads for object iteration.
export function transduce<TResult, TInput, TOutput>(
    coll: { [key: string]: TInput },
    xf: Transducer<[string, TInput], TOutput>,
    f: Reducer<TResult, TOutput>,
    init: TResult,
): TResult;
export function transduce<TResult, TCompleteResult, TInput, TOutput>(
    coll: { [key: string]: TInput },
    xf: Transducer<[string, TInput], TOutput>,
    f: CompletingTransformer<TResult, TCompleteResult, TOutput>,
    init?: TResult,
): TCompleteResult;

export function seq<TInput, TOutput>(
    coll: TInput[],
    xf: Transducer<TInput, TOutput>,
): TOutput[];
export function seq<TInput, TOutput>(
    coll: Iterable<TInput>,
    xf: Transducer<TInput, TOutput>,
): IterableIterator<TOutput>;
export function seq<TInput, TOutput>(
    coll: { [key: string]: TInput },
    xf: Transducer<[string, TInput], [string, TOutput]>,
): { [key: string]: TOutput };

export function toArray<TInput, TOutput>(
    coll: Iterable<TInput>,
    xf?: Transducer<TInput, TOutput>,
): TOutput[];
export function toArray<TInput, TOutput>(
    coll: { [key: string]: TInput },
    xf?: Transducer<[string, TInput], TOutput>,
): TOutput[];

export function toIter<TInput, TOutput>(
    coll: Iterable<TInput>,
    xf?: Transducer<TInput, TOutput>,
): IterableIterator<TOutput>;
export function toIter<TInput, TOutput>(
    coll: { [key: string]: TInput },
    xf?: Transducer<[string, TInput], TOutput>,
): IterableIterator<TOutput>;

export function toObj<TInput, TOutput>(
    coll: Iterable<TInput>,
    xf?: Transducer<TInput, [string, TOutput]>,
): { [key: string]: TOutput };
export function toObj<TInput, TOutput>(
    coll: { [key: string]: TInput },
    xf: Transducer<[string, TInput], [string, TOutput]>,
): { [key: string]: TOutput };

export function into<TInput, TOutput>(
    to: TOutput[],
    xf: Transducer<TInput, TOutput>,
    from: Iterable<TInput>,
): TOutput[];
export function into<TInput>(
    to: string,
    xf: Transducer<TInput, string>,
    from: Iterable<TInput>,
): string;
export function into<TInput, TOutput>(
    to: { [key: string]: TOutput },
    xf: Transducer<TInput, [string, TOutput]>,
    from: Iterable<TInput>,
): { [key: string]: TOutput };

export function compose(...fs: Array<(x: any) => any>): (x: any) => any;

export function map<TInput, TOutput>(
    f: (x: TInput) => TOutput,
): Transducer<TInput, TOutput>;

export function filter<TInput>(
    pred: (x: TInput) => boolean,
): Transducer<TInput, TInput>;

export function remove<TInput>(
    pred: (x: TInput) => boolean,
): Transducer<TInput, TInput>;

export function cat<TResult, TInput>(
    f: Transformer<TResult, TInput>,
): Transformer<TResult, Iterable<TInput>>;

export function mapcat<TInput, TOutput>(
    f: (x: TInput) => Iterable<TOutput>,
): Transducer<TInput, TOutput>;

export function keep<TInput>(): Transducer<TInput | null | undefined, TInput>;

export function dedupe<TInput>(): Transducer<TInput, TInput>;

export function take<TInput>(n: number): Transducer<TInput, TInput>;

export function takeWhile<TInput>(
    pred: (x: TInput) => boolean,
): Transducer<TInput, TInput>;

export function takeNth<TInput>(n: number): Transducer<TInput, TInput>;

export function drop<TInput>(n: number): Transducer<TInput, TInput>;

export function dropWhile<TInput>(
    pred: (x: TInput) => boolean,
): Transducer<TInput, TInput>;

export function partition<TInput>(n: number): Transducer<TInput, TInput[]>;

export function partitionBy<TInput>(
    f: (x: TInput) => any,
): Transducer<TInput, TInput[]>;

export function interpose<TInput>(sep: TInput): Transducer<TInput, TInput>;

export function repeat<TInput>(n: number): Transducer<TInput, TInput>;

export function range(n: number): number[];

export interface LazyTransformerConstructor {
    new <TInput, TOutput>(xf: Transducer<TInput, TOutput>, coll: Iterable<
        TInput
    >): IterableIterator<TOutput>;
}

export const LazyTransformer: LazyTransformerConstructor;
