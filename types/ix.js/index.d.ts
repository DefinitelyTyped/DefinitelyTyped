/// <reference path="l2o.d.ts"/>

declare namespace Ix {
    export interface Observer<T> {
        onNext?(value: T): void;
        onError?(error: Error): void;
        onCompleted?(): void;
    }

    export interface Enumerable<T> {
        isEmpty(): boolean;

        minBy<TKey>(keySelector: (item: T) => TKey, comparer: Comparer<TKey, TKey>): Enumerable<T>;
        minBy(keySelector: (item: T) => number): Enumerable<T>;
        maxBy<TKey>(keySelector: (item: T) => TKey, comparer: Comparer<TKey, TKey>): Enumerable<T>;
        maxBy(keySelector: (item: T) => number): Enumerable<T>;

        share<TResult>(selector: (source: Enumerable<T>) => Enumerable<TResult>): Enumerable<TResult>;
        share(): Enumerable<T>;

        publish<TResult>(selector: (source: Enumerable<T>) => Enumerable<TResult>): Enumerable<TResult>;
        publish(): Enumerable<T>;

        memoize(): Enumerable<T>;

        do(onNext: (value: T) => void, onError?: (error: Error) => void, onCompleted?: () => void): Enumerable<T>;
        doAction(onNext: (value: T) => void, onError?: (error: Error) => void, onCompleted?: () => void): Enumerable<T>;
        do(onbserver: Observer<T>): Enumerable<T>;
        doAction(onbserver: Observer<T>): Enumerable<T>;

        bufferWithCount(count: number, skip?: number): Enumerable<T>;

        ignoreElements(): Enumerable<T>;

        distinctBy<TKey>(keySelector: (item: T) => TKey, comparer?: EqualityComparer<TKey, TKey>): Enumerable<T>;

        distinctUntilChanged<TKey>(
            keySelector: (item: T) => TKey,
            comparer?: EqualityComparer<TKey, TKey>,
        ): Enumerable<T>;
        distinctUntilChanged(): Enumerable<T>;
        // if need to set comparer without keySelector
        distinctUntilChanged(_: boolean, comparer: EqualityComparer<T, T>): Enumerable<T>;

        expand(selector: (item: T) => Enumerable<T>): Enumerable<T>;

        startWith(...values: T[]): Enumerable<T>;

        scan<TAccumulate>(
            seed: TAccumulate,
            accumulate: (acc: TAccumulate, item: T) => TAccumulate,
        ): Enumerable<TAccumulate>;
        scan(accumulate: (acc: T, item: T) => T): Enumerable<T>;

        takeLast(count: number): Enumerable<T>;
        skipLast(count: number): Enumerable<T>;

        repeat(count?: number): Enumerable<T>;

        catch(handler: (error: Error) => Enumerable<T>): Enumerable<T>;
        catchException(handler: (error: Error) => Enumerable<T>): Enumerable<T>;
        catch(second: Enumerable<T>, ...other: Enumerable<T>[]): Enumerable<T>;
        catchException(second: Enumerable<T>, ...other: Enumerable<T>[]): Enumerable<T>;

        // todo: Enumerable<Enumerable<T>>.catch(): Enumerable<T>
        // catch<TInner, T extends Enumerable<TInner>>(): Enumerable<TInner>;

        finally(finallyAction: () => void): Enumerable<T>;
        finallyDo(finallyAction: () => void): Enumerable<T>;

        onErrorResumeNext(second: Enumerable<T>): Enumerable<T>;

        retry(retryCount?: number): Enumerable<T>;
    }

    export interface EnumerableStatic {
        throw<T>(error: Error): Enumerable<T>;
        throwException<T>(error: Error): Enumerable<T>;

        defer<T>(enumerableFactory: () => Enumerable<T>): Enumerable<T>;

        generate<TState, TResult>(
            initialState: TState,
            condition: Predicate<TState>,
            iterate: (state: TState) => TState,
            resultSelector: (state: TState) => TResult,
        ): Enumerable<TResult>;

        using<TResource extends Disposable, T>(
            resourceFactory: () => TResource,
            enumerableFactory: (resource: TResource) => Enumerable<T>,
        ): Enumerable<T>;

        catch<T>(...sources: Enumerable<T>[]): Enumerable<T>;
        catchException<T>(...sources: Enumerable<T>[]): Enumerable<T>;

        onErrorResumeNext<T>(...sources: Enumerable<T>[]): Enumerable<T>;

        while<T>(condition: EnumerablePredicate<Enumerable<T>>, source: Enumerable<T>): Enumerable<T>;
        whileDo<T>(condition: EnumerablePredicate<Enumerable<T>>, source: Enumerable<T>): Enumerable<T>;

        if<T>(condition: () => boolean, thenSource: Enumerable<T>, elseSource?: Enumerable<T>): Enumerable<T>;
        ifThen<T>(condition: () => boolean, thenSource: Enumerable<T>, elseSource?: Enumerable<T>): Enumerable<T>;

        doWhile<T>(source: Enumerable<T>, condition: EnumerablePredicate<Enumerable<T>>): Enumerable<T>;

        case<T>(
            selector: () => number,
            sources: { [key: number]: Enumerable<T> },
            defaultSource?: Enumerable<T>,
        ): Enumerable<T>;
        case<T>(
            selector: () => string,
            sources: { [key: string]: Enumerable<T> },
            defaultSource?: Enumerable<T>,
        ): Enumerable<T>;
        switchCase<T>(
            selector: () => number,
            sources: { [key: number]: Enumerable<T> },
            defaultSource?: Enumerable<T>,
        ): Enumerable<T>;
        switchCase<T>(
            selector: () => string,
            sources: { [key: string]: Enumerable<T> },
            defaultSource?: Enumerable<T>,
        ): Enumerable<T>;

        for<T, TResult>(source: Enumerable<T>, resultSelector: EnumerableFunc<T, TResult>): Enumerable<TResult>;
        forIn<T, TResult>(source: Enumerable<T>, resultSelector: EnumerableFunc<T, TResult>): Enumerable<TResult>;
    }
}

declare module "ix" {
    export = Ix;
}
