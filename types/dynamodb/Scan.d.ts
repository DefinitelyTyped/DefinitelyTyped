import { ExecuteFilter } from './ExecuteFilter';
import { Page } from './Model';

export interface Scan<T> {
    limit(num: number): Scan<T>;
    addFilterCondition(condition: {
        attributeNames: any;
        attributeValues: any;
    }): Scan<T>;
    startKey(hashKey: string, rangeKey?: string): Scan<T>;
    attributes(attrs: ReadonlyArray<string> | string): Scan<T>;
    select(value: string): Scan<T>;
    returnConsumedCapacity(value?: string): Scan<T>;
    segments(segment: any, totalSegments: any): Scan<T>;
    where(keyName: string): Scan<T>;
    filterExpression(expression: any): Scan<T>;
    expressionAttributeValues(data: any): Scan<T>;
    expressionAttributeNames(data: any): Scan<T>;
    projectionExpression(data: any): Scan<T>;
    loadAll(): Scan<T>;
    notNull(): Scan<T>;
    null(): Scan<T>;
    contains(name: string): Scan<T>;
    beginsWith(name: string): Scan<T>;
    between(start: string, end: string): Scan<T>;
    notContains(name: string): Scan<T>;
    equals: (...args: any[]) => Scan<T>;
    in: (...args: any[]) => Scan<T>;
    ne: (...args: any[]) => Scan<T>;
    eq: (...args: any[]) => Scan<T>;
    lte: (...args: any[]) => Scan<T>;
    lt: (...args: any[]) => Scan<T>;
    gte: (...args: any[]) => Scan<T>;
    gt: (...args: any[]) => Scan<T>;
    exec: ExecuteFilter<Page<T>>;
    buildRequest(): any;
}

export type ParallelScan<T> = Scan<T>;
