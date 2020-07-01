// Type definitions for fromjs 2.1
// Project: https://github.com/suckgamony/fromjs
// Definitions by: Glenn Dierckx <https://github.com/glenndierckx>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare function from<T>(results: Array<T>): FromJS.IQueryable<T>;
declare function from<T>(results: any): FromJS.IQueryable<any>;

declare namespace FromJS {
    export interface IOrderedQueryable<T> extends IQueryable<T> {
        thenBy<TResult>(item: (item: T) => TResult): IOrderedQueryable<T>;
        thenByDesc<TResult>(item: (item: T) => TResult): IOrderedQueryable<T>;
    }

    export interface IQueryable<T> {
        where(predicate: (item: T) => boolean): IQueryable<T>;
        select<TResult>(item: (item: T) => TResult): IQueryable<TResult>;
        orderByDesc<TResult>(item: (item: T) => TResult): IOrderedQueryable<T>;
        orderBy<TResult>(item: (item: T) => TResult): IOrderedQueryable<T>;
        selectMany<TResult>(item: (item: T) => Array<TResult>): IQueryable<TResult>;
        skip<TResult>(count: Number): IQueryable<TResult>;
        take<TResult>(count: Number): IQueryable<TResult>;
        single(): T;
        single(predicate: (item: T) => boolean): T;
        singleOrDefault(): T;
        singleOrDefault(predicate: (item: T) => boolean): T;
        first(): T;
        last(): T;
        max(): T;
        distinct(): IQueryable<T>;
        count(): number;
        contains(item: T): boolean;
        first(predicate: (item: T) => boolean): T;
        firstOrDefault(): T;
        each<TKey>(action: (value: T, key: TKey) => void): void;
        each(action: (item: T) => void, a?: boolean): void;
        toArray(): Array<T>;
        concat(second: Array<T>): IQueryable<T>;
        sum(): T;
        any(): boolean;
        any(predicate: (item: T) => boolean): boolean;
        all(predicate: (item: T) => boolean): boolean;
    }
}
