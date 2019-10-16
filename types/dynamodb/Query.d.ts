import { ExecuteFilter } from './ExecuteFilter';

export interface Query {
    (hashKey: string, table: any, serializer: any): void;
    limit(num: number): Query;
    filterExpression(expression: any): Query;
    expressionAttributeValues(data: any): Query;
    expressionAttributeNames(data: any): Query;
    projectionExpression(data: any): Query;
    usingIndex(name: string): Query;
    consistentRead(read: boolean): Query;
    addKeyCondition(condition: {
        attributeNames: any;
        attributeValues: any;
    }): Query;
    addFilterCondition(condition: {
        attributeNames: any;
        attributeValues: any;
    }): Query;
    startKey(hashKey: string, rangeKey: string): Query;
    attributes(attrs: ReadonlyArray<string> | string): Query;
    ascending(): Query;
    descending(): Query;
    select(value: string): Query;
    returnConsumedCapacity(value?: string): Query;
    loadAll(): Query;
    where(keyName: string): Query;
    contains(name: string): Query;
    notContains(name: string): Query;
    filter(keyName: string): Query;
    exec: ExecuteFilter;
    buildKey(): string;
    buildRequest(): any;
    equals: (...args: any[]) => Query;
    eq: (...args: any[]) => Query;
    lte: (...args: any[]) => Query;
    lt: (...args: any[]) => Query;
    gte: (...args: any[]) => Query;
    gt: (...args: any[]) => Query;
    beginsWith: (...args: any[]) => Query;
    between: (...args: any[]) => Query;
}
