/// <reference types="node" />

export import AWS = require("aws-sdk2-types");
import * as joi from "joi";
import stream = require("stream");

// Dynogels Data Members
export let log: Log;
export let models: { [key: string]: Model };
export let types: {
    stringSet(): joi.AnySchema;
    numberSet(): joi.AnySchema;
    binarySet(): joi.AnySchema;
    uuid(): joi.AnySchema;
    timeUUID(): joi.AnySchema;
};

export interface Log {
    info(...args: any[]): void;
    warn(...args: any[]): void;
}

// Dynogels global functions
export function dynamoDriver(dynamoDB: AWS.DynamoDB): AWS.DynamoDB;
export function reset(): void;
export function define(modelName: string, config: ModelConfiguration): Model;
export function createTables(callback: (err: string) => void): void;
export function createTables(
    options: { [key: string]: CreateTablesOptions } | DynogelsGlobalOptions,
    callback: (err: string) => void,
): void;
export function Set(...args: any[]): any;

export interface DynogelsGlobalOptions {
    $dynogels: {
        pollingInterval: number;
    };
}

export interface CreateTablesOptions {
    readCapacity?: number | undefined;
    writeCapacity?: number | undefined;
    streamSpecification?: {
        streamEnabled: boolean;
        streamViewType: string;
    } | undefined;
}

export type LifeCycleAction = "create" | "update" | "destroy";

// Dynogels Model
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
    destroy(hashKey: any, rangeKey: any, options: DestroyItemOptions, callback: DynogelsItemCallback): void;
    destroy(haskKey: any, options: DestroyItemOptions, callback: DynogelsItemCallback): void;
    destroy(hashKey: any, callback: DynogelsItemCallback): void;
    destroy(hashKey: any, rangeKey: any, callback: DynogelsItemCallback): void;
    destroy(item: any, options: DestroyItemOptions, callback: DynogelsItemCallback): void;
    destroy(item: any, callback: DynogelsItemCallback): void;
    query(hashKey: any): Query;
    scan(): Scan;
    parallelScan(totalSegments: number): Scan;
    getItems(items: string[] | Array<{ [key: string]: string }>, callback: (err: Error, items: any[]) => void): void;
    getItems(
        items: string[] | Array<{ [key: string]: string }>,
        options: GetItemOptions,
        callback: (err: Error, items: any[]) => void,
    ): void;
    batchGetItems(
        items: string[] | Array<{ [key: string]: string }>,
        callback: (err: Error, items: any[]) => void,
    ): void;
    batchGetItems(
        items: string[] | Array<{ [key: string]: string }>,
        options: GetItemOptions,
        callback: (err: Error, items: any[]) => void,
    ): void;
    createTable(
        options: CreateTablesOptions,
        callback: (err: Error, data: AWS.DynamoDB.CreateTableOutput) => void,
    ): void;
    createTable(callback: (err: Error, data: AWS.DynamoDB.CreateTableOutput) => void): void;
    updateTable(throughput: Throughput, callback: (err: Error, data: AWS.DynamoDB.UpdateTableOutput) => void): void;
    updateTable(callback: (err: Error, data: AWS.DynamoDB.UpdateTableOutput) => void): void;
    describeTable(callback: (err: Error, data: AWS.DynamoDB.DescribeTableOutput) => void): void;
    deleteTable(callback: (err: Error) => void): void;
    tableName(): string;

    after(action: LifeCycleAction, listner: (item: Item) => void): void;
    before(action: LifeCycleAction, listner: (data: any, next: (err: Error | null, data: any) => void) => void): void;
    config(config: ModelConfig): { name: string };
}

export type DynogelsItemCallback = (err: Error, data: Item) => void;

export interface Throughput {
    readCapacity: number;
    writeCapacity: number;
}

export interface CreateItemOptions {
    expected?: { [key: string]: any } | undefined;
    overwrite?: boolean | undefined;

    Expected?: AWS.DynamoDB.ExpectedAttributeMap | undefined;
    ReturnValues?: AWS.DynamoDB.ReturnValue | undefined;
    ReturnConsumedCapacity?: AWS.DynamoDB.ReturnConsumedCapacity | undefined;
    ReturnItemCollectionMetrics?: AWS.DynamoDB.ReturnItemCollectionMetrics | undefined;
    ConditionalOperator?: AWS.DynamoDB.ConditionalOperator | undefined;
    ConditionExpression?: AWS.DynamoDB.ConditionExpression | undefined;
    ExpressionAttributeNames?: AWS.DynamoDB.ExpressionAttributeNameMap | undefined;
    ExpressionAttributeValues?: { [key: string]: any } | undefined;
}

export interface UpdateItemOptions {
    expected?: { [key: string]: any } | undefined;

    AttributeUpdates?: AWS.DynamoDB.AttributeUpdates | undefined;
    Expected?: AWS.DynamoDB.ExpectedAttributeMap | undefined;
    ConditionalOperator?: AWS.DynamoDB.ConditionalOperator | undefined;
    ReturnValues?: AWS.DynamoDB.ReturnValue | undefined;
    ReturnConsumedCapacity?: AWS.DynamoDB.ReturnConsumedCapacity | undefined;
    ReturnItemCollectionMetrics?: AWS.DynamoDB.ReturnItemCollectionMetrics | undefined;
    UpdateExpression?: AWS.DynamoDB.UpdateExpression | undefined;
    ConditionExpression?: AWS.DynamoDB.ConditionExpression | undefined;
    ExpressionAttributeNames?: AWS.DynamoDB.ExpressionAttributeNameMap | undefined;
    ExpressionAttributeValues?: { [key: string]: any } | undefined;
}

export interface DestroyItemOptions {
    Expected?: AWS.DynamoDB.ExpectedAttributeMap | undefined;
    ConditionalOperator?: AWS.DynamoDB.ConditionalOperator | undefined;
    ReturnValues?: AWS.DynamoDB.ReturnValue | undefined;
    ReturnConsumedCapacity?: AWS.DynamoDB.ReturnConsumedCapacity | undefined;
    ReturnItemCollectionMetrics?: AWS.DynamoDB.ReturnItemCollectionMetrics | undefined;
    ConditionExpression?: AWS.DynamoDB.ConditionExpression | undefined;
    ExpressionAttributeNames?: AWS.DynamoDB.ExpressionAttributeNameMap | undefined;
    ExpressionAttributeValues?: { [key: string]: any } | undefined;
}

export interface GetItemOptions {
    AttributesToGet?: AWS.DynamoDB.AttributeNameList | undefined;
    ConsistentRead?: AWS.DynamoDB.ConsistentRead | undefined;
    ReturnConsumedCapacity?: AWS.DynamoDB.ReturnConsumedCapacity | undefined;
    ProjectionExpression?: AWS.DynamoDB.ProjectionExpression | undefined;
    ExpressionAttributeNames?: AWS.DynamoDB.ExpressionAttributeNameMap | undefined;
}

export interface ModelConfig {
    tableName?: string | undefined;
    docClient?: any;
    dynamodb?: AWS.DynamoDB | undefined;
}

// Dynogels Item
export interface Item {
    get(): { [key: string]: any };
    get(key: string): any;
    set(params: {}): Item;
    save(callback?: DynogelsItemCallback): void;
    update(options: UpdateItemOptions, callback?: DynogelsItemCallback): void;
    update(callback?: DynogelsItemCallback): void;
    destroy(options: DestroyItemOptions, callback?: DynogelsItemCallback): void;
    destroy(callback?: DynogelsItemCallback): void;
    toJSON(): any;
    toPlainObject(): any;
}

export interface BaseChain<T> {
    equals(value: any): T;
    eq(value: any): T;
    lte(value: any): T;
    lt(value: any): T;
    gte(value: any): T;
    gt(value: any): T;
    null(): T;
    exists(): T;
    beginsWith(value: any): T;
    between(value1: any, value2: any): T;
}

export interface ExtendedChain<T> extends BaseChain<T> {
    contains(value: any): T;
    notContains(value: any): T;
    in(values: any[]): T;
    ne(value: any): T;
}

export type QueryWhereChain = BaseChain<Query>;
export type QueryFilterChain = ExtendedChain<Query>;

// Dynogels Query
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
    startKey(hashKey: any, rangeKey?: any): Query;
    attributes(attrs: any): Query;
    ascending(): Query;
    descending(): Query;
    select(value: any): Query;
    returnConsumedCapacity(value: any): Query;
    loadAll(): Query;
    where(keyName: string): QueryWhereChain;
    filter(keyName: string): QueryFilterChain;
    exec(): stream.Readable;
    exec(callback: (err: Error, data: any) => void): void;
}

export interface ScanWhereChain extends ExtendedChain<Scan> {
    notNull(): Scan;
}

// Dynogels Scan
export interface Scan {
    limit(number: number): Scan;
    addFilterCondition(condition: any): Scan;
    startKey(hashKey: any, rangeKey?: any): Scan;
    attributes(attrs: any): Scan;
    select(value: any): Scan;
    returnConsumedCapacity(): Scan;
    segments(segment: any, totalSegments: number): Scan;
    where(keyName: string): ScanWhereChain;
    filterExpression(expression: any): Scan;
    expressionAttributeNames(data: any): Scan;
    expressionAttributeValues(data: any): Scan;
    projectionExpression(data: any): Scan;
    exec(): stream.Readable;
    exec(callback: (err: Error, data: any) => void): void;
    loadAll(): Scan;
}

export type tableResolve = () => string;

export interface SchemaType {
    [key: string]: joi.AnySchema | SchemaType;
}

export interface ModelConfiguration {
    hashKey: string;
    rangeKey?: string | undefined;
    timestamps?: boolean | undefined;
    createdAt?: boolean | string | undefined;
    updatedAt?: boolean | string | undefined;
    schema?: SchemaType | undefined;
    validation?: joi.ValidationOptions | undefined;
    tableName?: string | tableResolve | undefined;
    indexes?: any[] | undefined;
    log?: Log | undefined;
}

export interface Document {
    [key: string]: any;
}

export interface ConsumedCapacity {
    CapacityUnits: number;
    TableName: string;
}

export interface DocumentCollection {
    Items: Document[];
    Count: number;
    ScannedCount: number;
    ConsumedCapacity: ConsumedCapacity;
    LastEvaluatedKey?: any;
}
