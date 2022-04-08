import { ExecuteFilter } from './ExecuteFilter';

export interface Scan {
    limit(num: number): Scan;
    addFilterCondition(condition: {
        attributeNames: any;
        attributeValues: any;
    }): Scan;
    startKey(hashKey: string, rangeKey?: string): Scan;
    attributes(attrs: ReadonlyArray<string> | string): Scan;
    select(value: string): Scan;
    returnConsumedCapacity(value?: string): Scan;
    segments(segment: any, totalSegments: any): Scan;
    where(keyName: string): Scan;
    filterExpression(expression: any): Scan;
    expressionAttributeValues(data: any): Scan;
    expressionAttributeNames(data: any): Scan;
    projectionExpression(data: any): Scan;
    loadAll(): Scan;
    notNull(): Scan;
    null(): Scan;
    contains(name: string): Scan;
    beginsWith(name: string): Scan;
    between(start: string, end: string): Scan;
    notContains(name: string): Scan;
    equals: (...args: any[]) => Scan;
    in: (...args: any[]) => Scan;
    ne: (...args: any[]) => Scan;
    eq: (...args: any[]) => Scan;
    lte: (...args: any[]) => Scan;
    lt: (...args: any[]) => Scan;
    gte: (...args: any[]) => Scan;
    gt: (...args: any[]) => Scan;
    exec: ExecuteFilter;
    buildRequest(): any;
}

export type ParallelScan = Scan;
