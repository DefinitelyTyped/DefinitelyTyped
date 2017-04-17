// Type definitions for beetle.js query extension 2.0
// Project: https://github.com/umutozel/Beetle.js
// File version: 2.0.3

declare module beetle {

    module interfaces {
        interface IClosedQueryable<T, TOptions> {
            then(successCallback: Delegate1<T>, failCallback?: interfaces.Delegate1<Error>, options?: TOptions);
        }
    }

    module querying {
        interface ArrayQuery<T> extends Array<T> {
            length: number; // also executes query (like GetEnumerator)

            forEach(callback: interfaces.Delegate1<T>);
        }

        interface EntityQuery<T> {
            then(callback: interfaces.Delegate1<T[]>, failCallback?: interfaces.Delegate1<Error>, options?: beetle.ManagerOptions);
        }
    }
}

interface Array<T> {
    inlineCount(isEnabled?: boolean): beetle.querying.ArrayQuery<T>;
    ofType<TResult extends T>(type: string): beetle.querying.ArrayQuery<TResult>;
    ofType<TResult extends T>(constructor: beetle.interfaces.ParameterlessConstructor<TResult>): beetle.querying.ArrayQuery<TResult>;
    where(predicate: string, varContext?: any): beetle.querying.ArrayQuery<T>;
    where(predicate: beetle.interfaces.Func1<T, boolean>): beetle.querying.ArrayQuery<T>;
    orderBy(keySelector?: string): beetle.querying.ArrayQuery<T>;
    orderBy(comparer: beetle.interfaces.Func2<T, T, number>): beetle.querying.ArrayQuery<T>;
    orderByDesc(keySelector?: string): beetle.querying.ArrayQuery<T>;
    orderByDesc(comparer: beetle.interfaces.Func2<T, T, number>): beetle.querying.ArrayQuery<T>;
    select<TResult>(selector: string): beetle.querying.ArrayQuery<TResult>;
    select(selector: string): beetle.querying.ArrayQuery<any>;
    select<TResult>(selector: beetle.interfaces.Func1<T, TResult>): beetle.querying.ArrayQuery<TResult>;
    select(selector: beetle.interfaces.Func1<T, any>): beetle.querying.ArrayQuery<any>;
    skip(count: number): beetle.querying.ArrayQuery<T>;
    take(count: number): beetle.querying.ArrayQuery<T>;
    top(count: number): beetle.querying.ArrayQuery<T>;
    groupBy<TResult>(keySelector: string, valueSelector: string): beetle.querying.ArrayQuery<TResult>;
    groupBy(keySelector: string, valueSelector: string): beetle.querying.ArrayQuery<any>;
    groupBy<TKey, TResult>(keySelector: beetle.interfaces.Func1<T, TKey>, valueSelector: beetle.interfaces.Func1<beetle.interfaces.Grouping<T, TKey>, TResult>): beetle.querying.ArrayQuery<TResult>;
    groupBy<TResult>(keySelector: beetle.interfaces.Func1<T, any>, valueSelector: beetle.interfaces.Func1<beetle.interfaces.Grouping<T, any>, TResult>): beetle.querying.ArrayQuery<TResult>;
    groupBy(keySelector: beetle.interfaces.Func1<T, any>, valueSelector?: beetle.interfaces.Func1<beetle.interfaces.Grouping<T, any>, any>): beetle.querying.ArrayQuery<any>;
    distinct(): beetle.querying.ArrayQuery<T>;
    distinct<TResult>(selector: string): beetle.querying.ArrayQuery<TResult>;
    distinct(selector: string): beetle.querying.ArrayQuery<any>;
    distinct<TResult>(selector: beetle.interfaces.Func1<T, TResult>): beetle.querying.ArrayQuery<TResult>;
    distinct(selector: beetle.interfaces.Func1<T, any>): beetle.querying.ArrayQuery<any>;
    selectMany<TResult>(selector: string): beetle.querying.ArrayQuery<Array<TResult>>;
    selectMany(selector: string): beetle.querying.ArrayQuery<any>;
    selectMany<TResult>(selector: beetle.interfaces.Func1<T, Array<TResult>>): beetle.querying.ArrayQuery<Array<TResult>>;
    selectMany(selector: beetle.interfaces.Func1<T, any>): beetle.querying.ArrayQuery<any>;
    skipWhile(predicate: string, varContext?: any): beetle.querying.ArrayQuery<T>;
    skipWhile(predicate: beetle.interfaces.Func1<T, boolean>): beetle.querying.ArrayQuery<T>;
    takeWhile(predicate: string, varContext?: any): beetle.querying.ArrayQuery<T>;
    takeWhile(predicate: beetle.interfaces.Func1<T, boolean>): beetle.querying.ArrayQuery<T>;
    all(predicate?: string, varContext?: any): boolean;
    all(predicate: beetle.interfaces.Func1<T, boolean>): boolean;
    any(predicate?: string, varContext?: any): boolean;
    any(predicate: beetle.interfaces.Func1<T, boolean>): boolean;
    avg(selector?: string): number;
    avg(selector: beetle.interfaces.Func1<T, number>): number;
    max(selector?: string): number;
    max(selector: beetle.interfaces.Func1<T, number>): number;
    min(selector?: string): number;
    min(selector: beetle.interfaces.Func1<T, number>): number;
    sum(selector?: string): number;
    sum(selector: beetle.interfaces.Func1<T, number>): number;
    count(predicate?: string, varContext?: any): number;
    count(predicate: beetle.interfaces.Func1<T, boolean>): number;
    first(predicate?: string, varContext?: any): T;
    first(predicate: beetle.interfaces.Func1<T, boolean>): T;
    firstOrDefault(predicate?: string, varContext?: any): T;
    firstOrDefault(predicate: beetle.interfaces.Func1<T, boolean>): T;
    single(predicate?: string, varContext?: any): T;
    single(predicate: beetle.interfaces.Func1<T, boolean>): T;
    singleOrDefault(predicate?: string, varContext?: any): T;
    singleOrDefault(predicate: beetle.interfaces.Func1<T, boolean>): T;
    last(predicate?: string, varContext?: any): T;
    last(predicate: beetle.interfaces.Func1<T, boolean>): T;
    lastOrDefault(predicate?: string, varContext?: any): T;
    lastOrDefault(predicate: beetle.interfaces.Func1<T, boolean>): T;

    aggregate<TAggregate>(func: beetle.interfaces.Func2<TAggregate, T, TAggregate>, seed?: TAggregate): beetle.querying.ArrayQuery<TAggregate>;
    concat(other: Array<T>): beetle.querying.ArrayQuery<T>;
    contains(item: T): boolean;
    except(other: Array<T>): beetle.querying.ArrayQuery<T>;
    groupJoin<TOther>(other: Array<TOther>, thisKey: string, otherKey: string, selector: beetle.interfaces.Func2<T, Array<TOther>, any>): beetle.querying.ArrayQuery<any>;
    groupJoin<TOther, TKey>(other: Array<TOther>, thisKey: beetle.interfaces.Func1<T, TKey>, otherKey: beetle.interfaces.Func1<TOther, TKey>,
        selector: beetle.interfaces.Func2<T, Array<TOther>, any>): beetle.querying.ArrayQuery<any>;
    groupJoin<TOther, TResult>(other: Array<TOther>, thisKey: string, otherKey: string,
        selector: beetle.interfaces.Func2<T, Array<TOther>, TResult>): beetle.querying.ArrayQuery<TResult>;
    groupJoin<TOther, TKey, TResult>(other: Array<TOther>, thisKey: beetle.interfaces.Func1<T, TKey>, otherKey: beetle.interfaces.Func1<TOther, TKey>,
        selector: beetle.interfaces.Func2<T, Array<TOther>, TResult>): beetle.querying.ArrayQuery<TResult>;
    join<TOther>(other: Array<TOther>, thisKey: string, otherKey: string, selector: beetle.interfaces.Func2<T, TOther, any>): beetle.querying.ArrayQuery<any>;
    join<TOther, TKey>(other: Array<TOther>, thisKey: beetle.interfaces.Func1<T, TKey>, otherKey: beetle.interfaces.Func1<TOther, TKey>,
        selector: beetle.interfaces.Func2<T, TOther, any>): beetle.querying.ArrayQuery<any>;
    join<TOther, TResult>(other: Array<TOther>, thisKey: string, otherKey: string,
        selector: beetle.interfaces.Func2<T, TOther, TResult>): beetle.querying.ArrayQuery<TResult>;
    join<TOther, TKey, TResult>(other: Array<TOther>, thisKey: beetle.interfaces.Func1<T, TKey>, otherKey: beetle.interfaces.Func1<TOther, TKey>,
        selector: beetle.interfaces.Func2<T, TOther, TResult>): beetle.querying.ArrayQuery<TResult>;
    innerJoin<TOther>(other: Array<TOther>, thisKey: string, otherKey: string, selector: beetle.interfaces.Func2<T, TOther, any>): beetle.querying.ArrayQuery<any>;
    innerJoin<TOther, TKey>(other: Array<TOther>, thisKey: beetle.interfaces.Func1<T, TKey>, otherKey: beetle.interfaces.Func1<TOther, TKey>,
        selector: beetle.interfaces.Func2<T, TOther, any>): beetle.querying.ArrayQuery<any>;
    innerJoin<TOther, TResult>(other: Array<TOther>, thisKey: string, otherKey: string,
        selector: beetle.interfaces.Func2<T, TOther, TResult>): beetle.querying.ArrayQuery<TResult>;
    innerJoin<TOther, TKey, TResult>(other: Array<TOther>, thisKey: beetle.interfaces.Func1<T, TKey>, otherKey: beetle.interfaces.Func1<TOther, TKey>,
        selector: beetle.interfaces.Func2<T, TOther, TResult>): beetle.querying.ArrayQuery<TResult>;
    leftJoin<TOther>(other: Array<TOther>, thisKey: string, otherKey: string, selector: beetle.interfaces.Func2<T, TOther, any>): beetle.querying.ArrayQuery<any>;
    leftJoin<TOther, TKey>(other: Array<TOther>, thisKey: beetle.interfaces.Func1<T, TKey>, otherKey: beetle.interfaces.Func1<TOther, TKey>,
        selector: beetle.interfaces.Func2<T, TOther, any>): beetle.querying.ArrayQuery<any>;
    leftJoin<TOther, TResult>(other: Array<TOther>, thisKey: string, otherKey: string,
        selector: beetle.interfaces.Func2<T, TOther, TResult>): beetle.querying.ArrayQuery<TResult>;
    leftJoin<TOther, TKey, TResult>(other: Array<TOther>, thisKey: beetle.interfaces.Func1<T, TKey>, otherKey: beetle.interfaces.Func1<TOther, TKey>,
        selector: beetle.interfaces.Func2<T, TOther, TResult>): beetle.querying.ArrayQuery<TResult>;
    rightJoin<TOther>(other: Array<TOther>, thisKey: string, otherKey: string, selector: beetle.interfaces.Func2<T, TOther, any>): beetle.querying.ArrayQuery<any>;
    rightJoin<TOther, TKey>(other: Array<TOther>, thisKey: beetle.interfaces.Func1<T, TKey>, otherKey: beetle.interfaces.Func1<TOther, TKey>,
        selector: beetle.interfaces.Func2<T, TOther, any>): beetle.querying.ArrayQuery<any>;
    rightJoin<TOther, TResult>(other: Array<TOther>, thisKey: string, otherKey: string,
        selector: beetle.interfaces.Func2<T, TOther, TResult>): beetle.querying.ArrayQuery<TResult>;
    rightJoin<TOther, TKey, TResult>(other: Array<TOther>, thisKey: beetle.interfaces.Func1<T, TKey>, otherKey: beetle.interfaces.Func1<TOther, TKey>,
        selector: beetle.interfaces.Func2<T, TOther, TResult>): beetle.querying.ArrayQuery<TResult>;
    fullJoin<TOther>(other: Array<TOther>, thisKey: string, otherKey: string, selector: beetle.interfaces.Func2<T, TOther, any>): beetle.querying.ArrayQuery<any>;
    fullJoin<TOther, TKey>(other: Array<TOther>, thisKey: beetle.interfaces.Func1<T, TKey>, otherKey: beetle.interfaces.Func1<TOther, TKey>,
        selector: beetle.interfaces.Func2<T, TOther, any>): beetle.querying.ArrayQuery<any>;
    fullJoin<TOther, TResult>(other: Array<TOther>, thisKey: string, otherKey: string,
        selector: beetle.interfaces.Func2<T, TOther, TResult>): beetle.querying.ArrayQuery<TResult>;
    fullJoin<TOther, TKey, TResult>(other: Array<TOther>, thisKey: beetle.interfaces.Func1<T, TKey>, otherKey: beetle.interfaces.Func1<TOther, TKey>,
        selector: beetle.interfaces.Func2<T, TOther, TResult>): beetle.querying.ArrayQuery<TResult>;
    crossJoin<TOther>(other: Array<TOther>, selector: beetle.interfaces.Func2<T, TOther, any>): beetle.querying.ArrayQuery<any>;
    crossJoin<TOther, TResult>(other: Array<TOther>, selector: beetle.interfaces.Func2<T, TOther, TResult>): beetle.querying.ArrayQuery<TResult>;
    intersect(other: Array<T>): beetle.querying.ArrayQuery<T>;
    sequenceEqual(other: Array<T>): boolean;
    toLookup(keySelector: beetle.interfaces.Func1<T, any>, elementSelector: beetle.interfaces.Func1<beetle.interfaces.Grouping<T, any>, any>): beetle.querying.ArrayQuery<any>;
    toLookup<TKey>(keySelector: beetle.interfaces.Func1<T, TKey>, elementSelector: beetle.interfaces.Func1<beetle.interfaces.Grouping<T, any>, any>): beetle.querying.ArrayQuery<any>;
    toLookup<TKey, TResult>(keySelector: beetle.interfaces.Func1<T, TKey>, elementSelector: beetle.interfaces.Func1<beetle.interfaces.Grouping<T, TKey>, any>): beetle.querying.ArrayQuery<TResult>;
    union(other: Array<T>): beetle.querying.ArrayQuery<T>;
    zip<TOther>(other: Array<TOther>, selector: beetle.interfaces.Func2<T, TOther, any>): beetle.querying.ArrayQuery<any>;
    zip<TOther, TResult>(other: Array<TOther>, selector: beetle.interfaces.Func2<T, TOther, TResult>): beetle.querying.ArrayQuery<TResult>;

    forEach(callback: beetle.interfaces.Delegate1<T>);
}

interface ArrayConstructor {
    range(start: number, count: number): Array<number>;
    repeat(item: any, count: number): Array<number>;
}
