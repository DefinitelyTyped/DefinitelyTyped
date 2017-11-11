// Type definitions for dynogels 8.0
// Project: https://github.com/clarkie/dynogels#readme
// Definitions by: My Self <https://github.com/me>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export import AWS = require("aws-sdk");
import stream = require("stream");
export namespace log {
    function info(...args: any[]): void;
    function warn(...args: any[]): void;
}
export let models: { [key: string]: any };
export function dynamoDriver(dynamoDB: AWS.DynamoDB): AWS.DynamoDB;
export function reset(): void;
export function define(modelName: string, config: ModelConfiguration): Model;
export function createTables(callback: (err: string) => void): any;

type DynogelsItemCallback = (err: Error, data: Item) => void;

export interface Model {
    new(attrs: { [key: string]: any }): Item;

    get(hashKey: any, rangeKey: any, options: AWS.DynamoDB.GetItemInput, callback: DynogelsItemCallback): void;
    get(haskKey: any, options: AWS.DynamoDB.GetItemInput, callback: DynogelsItemCallback): void;
    get(hashKey: any, callback: DynogelsItemCallback): void;
    get(hashKey: any, rangeKey: any, callback: DynogelsItemCallback): void;
    create(item: any, options: AWS.DynamoDB.CreateTableInput, callback: DynogelsItemCallback): void;
    create(item: any, callback: DynogelsItemCallback): void;
    update(item: any, options: AWS.DynamoDB.UpdateItemInput, callback: DynogelsItemCallback): void;
    update(item: any, callback: DynogelsItemCallback): void;
    destroy(hashKey: any, rangeKey: any, options: AWS.DynamoDB.DeleteItemInput, callback: DynogelsItemCallback): void;
    destroy(haskKey: any, options: AWS.DynamoDB.DeleteItemInput, callback: DynogelsItemCallback): void;
    destroy(hashKey: any, callback: DynogelsItemCallback): void;
    destroy(hashKey: any, rangeKey: any, callback: DynogelsItemCallback): void;
    destroy(item: any, options: AWS.DynamoDB.DeleteItemInput, callback: DynogelsItemCallback): void;
    destroy(item: any, callback: DynogelsItemCallback): void;
    query(hashKey: any): Query;
    scan(): void;
    parallelScan(): void;
    getItems(): void;
    batchGetItems(): void;
    createTable(): void;
    updateTable(): void;
    describeTable(): void;
    deleteTable(): void;
    tableName(): void;

    after(): void;
    before(): void;
    config(): void;
}

export interface Item {
    get(key: string): { [key: string]: any };
    set(params: {}): void;
    save(callback: DynogelsItemCallback): void;
    update(options: AWS.DynamoDB.UpdateItemInput, callback: DynogelsItemCallback): void;
    update(callback: DynogelsItemCallback): void;
    destroy(options: AWS.DynamoDB.DeleteItemInput, callback: DynogelsItemCallback): void;
    destroy(callback: DynogelsItemCallback): void;
    toJSON(): any;
    toPlainObject(): any;
}

export interface Query {
    limit(number: number): Query;
    filterExpression(expression: any): Query;
    expressionAttributeNames(data: any): Query;
    expressionAttributeValues(data: any): Query;
    projectionExpression(data: any): Query;
    usingIndex(name: string): Query;
    consistentRead(read: boolean): Query;
    addKeyCondition(condition: any): Query;
    addFilterCondition(condition: any): Query;
    startKey(hashKey: any, rangeKey: any): Query;
    attributes(attrs: any): Query;
    ascending(): Query;
    descending(): Query;
    select(value: any): Query;
    returnConsumedCapacity(value: any): Query;
    loadAll(): Query;
    where(keyName: string): {
        equals(value: any): Query;
        eq(value: any): Query;
        lte(value: any): Query;
        lt(value: any): Query;
        gte(value: any): Query;
        gt(value: any): Query;
        beginsWith(value: any): Query;
        between(value1: any, value2: any): Query;
    };
    filter(keyName: string): {
        equals(value: any): Query;
        eq(value: any): Query;
        ne(value: any): Query;
        lte(value: any): Query;
        lt(value: any): Query;
        gte(value: any): Query;
        gt(value: any): Query;
        null(): Query;
        exists(): Query;
        contains(value: any): Query;
        notContains(value: any): Query;
        in(values: any[]): Query;
        beginsWith(value: any): Query;
        between(value1: any, value2: any): Query;
    };
    exec(): stream.Readable;
    exec(callback: () => void): void;
}

export interface Scan {
    limit(number: number): Scan;
    addFilterCondition(condition: any): Scan;
    startKey(hashKey: any, rangeKey: any): Scan;
    attributes(attrs: any): Scan;
    select(value: any): Scan;
    segments(segment: any, totalSegments: number): Scan;
    where(keyName: string): {
        equals(value: any): Scan;
        eq(value: any): Scan;
        ne(value: any): Scan;
        lte(value: any): Scan;
        lt(value: any): Scan;
        gte(value: any): Scan;
        gt(value: any): Scan;
        null(): Scan;
        exists(): Scan;
        contains(value: any): Scan;
        notContains(value: any): Scan;
        in(values: any[]): Scan;
        beginsWith(value: any): Scan;
        between(value1: any, value2: any): Scan;
    };
    filterExpression(expression: any): Scan;
    expressionAttributeNames(data: any): Scan;
    expressionAttributeValues(data: any): Scan;
    projectionExpression(data: any): Scan;
    exec(): stream.Readable;
    exec(callback: () => void): void;
    loadAll(): Scan;
}

type tableResolve = () => string;

export interface ModelConfiguration {
    hashKey: string,
    rangeKey?: string,
    timestamps?: boolean,
    createdAt?: boolean,
    updatedAtField?: string,
    schema: { [key: string]: any },
    tableName?: string | tableResolve;
}
interface Document {
    [key: string]: any;
}

export interface DocumentCollection {
    Items: Document[],
    Count: number,
    ScannedCount: number
}
