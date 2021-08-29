import { ExecuteFilter } from './ExecuteFilter';
import { Page } from './Model';

export interface Query<T> {
    (hashKey: string, table: any, serializer: any): void;
    limit(num: number): Query<T>;
    filterExpression(expression: any): Query<T>;
    expressionAttributeValues(data: any): Query<T>;
    expressionAttributeNames(data: any): Query<T>;
    projectionExpression(data: any): Query<T>;
    usingIndex(name: string): Query<T>;
    consistentRead(read: boolean): Query<T>;
    addKeyCondition(condition: {
        attributeNames: any;
        attributeValues: any;
    }): Query<T>;
    addFilterCondition(condition: {
        attributeNames: any;
        attributeValues: any;
    }): Query<T>;
    startKey(hashKey: string, rangeKey: string): Query<T>;
    attributes(attrs: ReadonlyArray<string> | string): Query<T>;
    ascending(): Query<T>;
    descending(): Query<T>;
    select(value: string): Query<T>;
    returnConsumedCapacity(value?: string): Query<T>;
    loadAll(): Query<T>;
    where(keyName: string): Query<T>;
    contains(name: string): Query<T>;
    notContains(name: string): Query<T>;
    filter(keyName: string): Query<T>;
    exec: ExecuteFilter<Page<T>>;
    buildKey(): string;
    buildRequest(): any;
    equals: (...args: any[]) => Query<T>;
    eq: (...args: any[]) => Query<T>;
    lte: (...args: any[]) => Query<T>;
    lt: (...args: any[]) => Query<T>;
    gte: (...args: any[]) => Query<T>;
    gt: (...args: any[]) => Query<T>;
    beginsWith: (...args: any[]) => Query<T>;
    between: (...args: any[]) => Query<T>;
    exists: (exists?: boolean) => Query<T>;
}
