// Type definitions for dynogels 8.0
// Project: https://github.com/clarkie/dynogels#readme
// Definitions by: My Self <https://github.com/me>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export import AWS = require("aws-sdk");
import * as joi from "joi";
import stream = require("stream");

export let log: Log;

interface Log {
    info(...args: any[]): void;
    warn(...args: any[]): void;
}

export let models: { [key: string]: any };
export function dynamoDriver(dynamoDB: AWS.DynamoDB): AWS.DynamoDB;
export function reset(): void;
export function define(modelName: string, config: ModelConfiguration): Model;
export function createTables(callback: (err: string) => void): void;
export function createTables(options: { [key: string]: CreateTablesOptions } | DynogelsGlobalOptions, callback: (err: string) => void): void;
export function Set(...args: any[]): any;

type DynogelsGlobalOptions = {
    $dynogels: {
        pollingInterval: number;
    }
};

interface CreateTablesOptions {
    readCapacity?: number;
    writeCapacity?: number;
    streamSpecification?: {
        streamEnabled: boolean;
        streamViewType: string;
    };
}

export let types: {
    stringSet(): joi.AnySchema;
    numberSet(): joi.AnySchema;
    binarySet(): joi.AnySchema;
    uuid(): joi.AnySchema;
    timeUUID(): joi.AnySchema;
};

type DynogelsItemCallback = (err: Error, data: Item) => void;

export interface Model {
    new(attrs: { [key: string]: any }): Item;

    get(hashKey: any, rangeKey: any, options: GetItemOptions, callback: DynogelsItemCallback): void;
    get(haskKey: any, options: GetItemOptions, callback: DynogelsItemCallback): void;
    get(hashKey: any, callback: DynogelsItemCallback): void;
    get(hashKey: any, rangeKey: any, callback: DynogelsItemCallback): void;
    create(item: any, options: CreateItemOptions, callback: DynogelsItemCallback): void;
    create(item: any, callback: DynogelsItemCallback): void;
    update(item: any, options: UpdateItemOptions, callback: DynogelsItemCallback): void;
    update(item: any, callback: DynogelsItemCallback): void;
    destroy(hashKey: any, rangeKey: any, options: AWS.DynamoDB.DeleteItemInput, callback: DynogelsItemCallback): void;
    destroy(haskKey: any, options: AWS.DynamoDB.DeleteItemInput, callback: DynogelsItemCallback): void;
    destroy(hashKey: any, callback: DynogelsItemCallback): void;
    destroy(hashKey: any, rangeKey: any, callback: DynogelsItemCallback): void;
    destroy(item: any, options: AWS.DynamoDB.DeleteItemInput, callback: DynogelsItemCallback): void;
    destroy(item: any, callback: DynogelsItemCallback): void;
    query(hashKey: any): Query;
    scan(): Scan;
    parallelScan(totalSegments: number): Scan;
    getItems(items: string[] | { [key: string]: string }[], callback: (err: Error, items: any[]) => void): void;
    getItems(items: string[] | { [key: string]: string }[], options: GetItemOptions, callback: (err: Error, items: any[]) => void): void;
    batchGetItems(): void;
    createTable(): void;
    updateTable(): void;
    describeTable(): void;
    deleteTable(callback: (err: Error) => void): void;
    tableName(): void;

    after(): void;
    before(): void;
    config(config: ModelConfig): void;
}

interface CreateItemOptions {
    expected?: { [key: string]: any };
    overwrite?: boolean;

    Expected?: AWS.DynamoDB.ExpectedAttributeMap;
    ReturnValues?: AWS.DynamoDB.ReturnValue;
    ReturnConsumedCapacity?: AWS.DynamoDB.ReturnConsumedCapacity;
    ReturnItemCollectionMetrics?: AWS.DynamoDB.ReturnItemCollectionMetrics;
    ConditionalOperator?: AWS.DynamoDB.ConditionalOperator;
    ConditionExpression?: AWS.DynamoDB.ConditionExpression;
    ExpressionAttributeNames?: AWS.DynamoDB.ExpressionAttributeNameMap;
    ExpressionAttributeValues?: { [key: string]: any };
}

interface UpdateItemOptions {
    expected?: { [key: string]: any };

    AttributeUpdates?: AWS.DynamoDB.AttributeUpdates;
    Expected?: AWS.DynamoDB.ExpectedAttributeMap;
    ConditionalOperator?: AWS.DynamoDB.ConditionalOperator;
    ReturnValues?: AWS.DynamoDB.ReturnValue;
    ReturnConsumedCapacity?: AWS.DynamoDB.ReturnConsumedCapacity;
    ReturnItemCollectionMetrics?: AWS.DynamoDB.ReturnItemCollectionMetrics;
    UpdateExpression?: AWS.DynamoDB.UpdateExpression;
    ConditionExpression?: AWS.DynamoDB.ConditionExpression;
    ExpressionAttributeNames?: AWS.DynamoDB.ExpressionAttributeNameMap;
    ExpressionAttributeValues?: { [key: string]: any };
}

interface DestroyItemOptions {
    Expected?: AWS.DynamoDB.ExpectedAttributeMap;
    ConditionalOperator?: AWS.DynamoDB.ConditionalOperator;
    ReturnValues?: AWS.DynamoDB.ReturnValue;
    ReturnConsumedCapacity?: AWS.DynamoDB.ReturnConsumedCapacity;
    ReturnItemCollectionMetrics?: AWS.DynamoDB.ReturnItemCollectionMetrics;
    ConditionExpression?: AWS.DynamoDB.ConditionExpression;
    ExpressionAttributeNames?: AWS.DynamoDB.ExpressionAttributeNameMap;
    ExpressionAttributeValues?: { [key: string]: any };
}

interface GetItemOptions {
    AttributesToGet?: AWS.DynamoDB.AttributeNameList;
    ConsistentRead?: AWS.DynamoDB.ConsistentRead;
    ReturnConsumedCapacity?: AWS.DynamoDB.ReturnConsumedCapacity;
    ProjectionExpression?: AWS.DynamoDB.ProjectionExpression;
    ExpressionAttributeNames?: AWS.DynamoDB.ExpressionAttributeNameMap;
}

interface ModelConfig {
    tableName?: string;
    docClient?: any;
    dynamodb?: AWS.DynamoDB;
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
        null(): Query;
        exists(): Query;
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
    exec(callback: (err: Error, data: any) => void): void;
}

export interface Scan {
    limit(number: number): Scan;
    addFilterCondition(condition: any): Scan;
    startKey(hashKey: any, rangeKey?: any): Scan;
    attributes(attrs: any): Scan;
    select(value: any): Scan;
    returnConsumedCapacity(): Scan;
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
        notNull(): Scan;
    };
    filterExpression(expression: any): Scan;
    expressionAttributeNames(data: any): Scan;
    expressionAttributeValues(data: any): Scan;
    projectionExpression(data: any): Scan;
    exec(): stream.Readable;
    exec(callback: (err: Error, data: any) => void): void;
    loadAll(): Scan;
}

type tableResolve = () => string;

type schemaType = { [key: string]: joi.AnySchema | schemaType };

export interface ModelConfiguration {
    hashKey: string,
    rangeKey?: string,
    timestamps?: boolean,
    createdAt?: boolean,
    updatedAt?: string,
    schema?: schemaType,
    validation?: joi.ValidationOptions,
    tableName?: string | tableResolve;
    indexes?: any[];
    log?: Log;
}
interface Document {
    [key: string]: any;
}

export interface DocumentCollection {
    Items: Document[],
    Count: number,
    ScannedCount: number
}
