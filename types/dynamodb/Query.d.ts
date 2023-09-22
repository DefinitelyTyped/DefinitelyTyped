import { ExecuteFilter } from "./ExecuteFilter";
import { Page } from "./Model";

export interface QueryBase<T> {
    startKey(hashKey: string, rangeKey?: string): this;
    limit(num: number): this;
    attributes(attrs: ReadonlyArray<keyof T> | keyof T): this;
    select(value: string): this;
    where<K extends keyof T>(keyName: K): PredicateFor<T, K, this>;
    returnConsumedCapacity(value?: string): this;
    loadAll(): this;

    filterExpression(expression: string): this;
    addFilterCondition(condition: {
        attributeNames: Record<string, any>;
        attributeValues: Record<string, any>;
    }): this;

    projectionExpression(expression: string): this;

    expressionAttributeValues(valueMapping: Record<string, any>): this;
    expressionAttributeNames(nameMapping: Record<string, any>): this;

    exec: ExecuteFilter<Page<T>>;
    buildRequest(): any;
}

export interface Query<T> extends QueryBase<T> {
    usingIndex(name: string): this;
    consistentRead(read: boolean): this;

    addKeyCondition(condition: {
        attributeNames: Record<string, any>;
        attributeValues: Record<string, any>;
    }): this;

    ascending(): this;
    descending(): this;

    filter<K extends keyof T>(keyName: K): PredicateFor<T, K, this>;

    buildKey(): string;
}

export type IsStrictlyAny<T> = (T extends never ? true : false) extends false ? false : true;

export type PredicateFor<T, K extends keyof T, O extends QueryBase<T>> = IsStrictlyAny<T[K]> extends true
    ? AnyPredicate<T, T[K], O>
    : T[K] extends any[] ? ArrayPredicate<T, T[K][number], O>
    : T[K] extends string ? StringPredicate<T, O>
    : T[K] extends (string | number) ? RangePredicate<T, T[K], O>
    : AnyPredicate<T, T[K], O>;

export interface Predicate<T, V, O extends QueryBase<T>> {
    equals: (value: V) => O;
    exists: (exists?: boolean) => O;
    in: (...args: V[]) => O;
    null(): O;
    notNull(): O;
}

export interface RangePredicate<T, V, O extends QueryBase<T>> extends Predicate<T, V, O> {
    eq: (value: V) => O;
    ne: (value: V) => O;
    lte: (value: V) => O;
    lt: (value: V) => O;
    gte: (value: V) => O;
    gt: (value: V) => O;
    between: (...args: any[]) => O;
}

export interface ArrayPredicate<T, V, O extends QueryBase<T>> extends Predicate<T, V, O> {
    contains(value: V): O;
    notContains(value: V): O;
}

export interface StringPredicate<T, O extends QueryBase<T>> extends RangePredicate<T, string, O> {
    beginsWith: (...args: any[]) => O;
}

export type AnyPredicate<T, V, O extends QueryBase<T>> =
    & StringPredicate<T, O>
    & RangePredicate<T, V, O>
    & ArrayPredicate<T, V, O>;
