// Type definitions for regenerator-runtime 0.13
// Project: https://github.com/facebook/regenerator
// Definitions by: ExE Boss <https://github.com/ExE-Boss>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// Minimum TypeScript Version: 3.6

export as namespace regeneratorRuntime;
declare global {
    var regeneratorRuntime: typeof import('.');
}

/**
 * The implementation of the generator.
 */
export type InnerFunction<T = undefined, TYield = unknown, TReturn = unknown, TNext = unknown> = (
    this: T,
    context: Context<TYield, TReturn, TNext>,
) => unknown;

export type ContextLocation = number | 'end';
export type CompletionType = 'normal' | 'return' | 'throw' | 'break' | 'continue';

// prettier-ignore
export type TryLocationsList = ReadonlyArray<
    | readonly [number, number]
    | readonly [number, number | undefined, number, ContextLocation]
>;

export interface CompletionRecord {
    type: CompletionType;
    arg: unknown;
}

export interface TryEntry {
    readonly tryLoc: number;
    readonly catchLoc?: number;
    readonly finallyLoc?: number;
    readonly afterLoc?: ContextLocation;
    completion?: CompletionRecord;
}

export interface DelegatedIterator {
    iterator: Iterator<unknown, unknown, unknown>;
}

export interface Context<TYield = unknown, TReturn = unknown, TNext = unknown> {
    readonly tryEntries: readonly [
        { readonly tryLoc: 'root' } & Omit<TryEntry, 'tryLoc'>,
        ...TryEntry[]
    ];

    /**
     * The value passed to `next()`.
     */
    sent: TNext;

    /**
     * The label of the previous location, needs to be set to `next` at the start of user code.
     */
    prev: unknown;

    /**
     * The label of the next location, is set to `'end'` when the generator needs to close abruptly.
     */
    next: number | 'end';

    /**
     * Whether the generator has finished.
     */
    done: boolean;

    /**
     * The return value, set by `abrupt("return")`.
     */
    rval: TReturn;

    /**
     * If truthy, then it contains information about the currently `yield*` delegated iterator.
     */
    delegate: DelegatedIterator | undefined;

    /**
     * The generator method.
     */
    method: 'next' | 'return' | 'throw';

    /**
     * The argument passed to the generator method.
     */
    arg: unknown;

    reset(skipTempReset?: boolean): void;

    /**
     * Ends the iteration.
     */
    stop(): TReturn;

    /**
     * Dispatches an exception to `innerFn`
     *
     * @param exception The exception to dispatch.
     */
    dispatchException(exception: unknown): boolean;

    /**
     * @param type The completion type.
     * @param rval The return value.
     */
    abrupt(type: 'return', rval?: TReturn): unknown;

    /**
     * @param type The completion type.
     * @param exception The exception to throw.
     */
    abrupt(type: 'throw', exception?: unknown): never;

    /**
     * @param type The completion type.
     * @param nextLoc The location label to resume iteration at.
     */
    abrupt(type: 'break' | 'continue', nextLoc: number): unknown;

    /**
     * @param type The completion type.
     * @param arg The [[Value]] or [[Target]] of the completion record.
     */
    abrupt(type: CompletionType, arg?: unknown): unknown;

    /**
     * @param record The completion record.
     * @param afterLoc The location to resume the generator at, only used by normal completions.
     */
    complete(record: Readonly<CompletionRecord>, afterLoc?: ContextLocation): unknown;

    /**
     * Used to signify the end of a finally block.
     *
     * @param finallyLoc The label of the beginning of the finally block.
     */
    finish(finallyLoc: number): unknown;

    /**
     * Used to obtain the exception that was thrown in the associated try block.
     *
     * @param tryLoc The label of the beginning of the try block.
     */
    catch(tryLoc: number): unknown;

    /**
     * @param iterable The iterable to delegate to.
     * @param resultName The name of the property to assign to on this context.
     * @param nextLoc The label of the location where to resume iteration.
     */
    delegateYield(
        iterable: { [Symbol.iterator](): Iterator<TYield, unknown, unknown> },
        resultName: string,
        nextLoc: ContextLocation,
    ): unknown;

    [
        /**
         * Expects properties to match `/^t[+-]?\d*(?:(?<=\d)\.\d*|\.\d+)?(?:e[+-]?\d+)?$/`.
         */
        temp: string
    ]: any;
}

export function wrap<T = undefined, TYield = unknown, TReturn = unknown, TNext = unknown>(
    innerFn: InnerFunction<T, TYield, TReturn, TNext>,
    // tslint:disable-next-line: ban-types
    outerFn?: Function | null,
    self?: T,
    tryLocsList?: TryLocationsList,
): Generator<TYield, TReturn, TNext>;

export interface ResolvablePromiseConstructorLike extends PromiseConstructorLike {
    resolve<T = void>(value?: T): PromiseLike<T>;
}

export class AsyncIterator<TYield = unknown, TReturn = unknown, TNext = unknown>
    implements AsyncGenerator<TYield, TReturn, TNext> {
    constructor(
        generator: Generator<
            TYield | PromiseLike<TYield> | awrap<unknown>,
            TReturn | PromiseLike<TReturn> | awrap<unknown>
        >,
        PromiseImpl: ResolvablePromiseConstructorLike,
    );

    // NOTE: 'next' is defined using a tuple to ensure we report the correct assignability errors in all places.
    next(...args: [] | [TNext]): Promise<IteratorResult<TYield, TReturn>>;
    return(value: TReturn | PromiseLike<TReturn>): Promise<IteratorResult<TYield, TReturn>>;
    throw(e: any): Promise<IteratorResult<TYield, TReturn>>;

    [Symbol.asyncIterator](): this;
}

export function async<T = undefined, TYield = unknown, TReturn = unknown>(
    innerFn: InnerFunction<T, TYield, TReturn>,
    outerFn: GeneratorFunction,
    self?: T,
    tryLocsList?: TryLocationsList,
    PromiseImpl?: ResolvablePromiseConstructorLike,
): AsyncIterator<
    TYield extends PromiseLike<infer Await> ? Await : Exclude<TYield, awrap<unknown>>,
    TReturn extends PromiseLike<infer Await> ? Await : Exclude<TReturn, awrap<unknown>>
>;
export function async<T = undefined, TReturn = unknown>(
    innerFn: InnerFunction<T, unknown, TReturn>,
    // tslint:disable-next-line: ban-types
    outerFn?: Function | null,
    self?: T,
    tryLocsList?: TryLocationsList,
    PromiseImpl?: ResolvablePromiseConstructorLike,
): Promise<TReturn extends PromiseLike<infer Await> ? Await : TReturn>;

export function awrap<V>(arg: V): awrap<V>;
export class awrap<V> {
    constructor(arg: V);

    // Used to tell TypeScript that this class is to be treated as a nominal type:
    private readonly '#private';

    readonly __await: V;
}

export function isGeneratorFunction(func: unknown): func is GeneratorFunction;

export function keys(object: {}): () => IteratorResult<string, undefined>;

// tslint:disable-next-line: ban-types
export function mark<F extends Function>(genFun: F): F & GeneratorFunction;

export function values<I extends Iterator<unknown, unknown, unknown>>(iterable: { [Symbol.iterator](): I }): I;
export function values<T>(iterableOrArrayLike: Iterable<T> | ArrayLike<T>): Iterator<T, unknown, unknown>;
