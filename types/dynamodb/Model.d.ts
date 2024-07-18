import * as bunyan from "bunyan";
import { DynamoDB } from "./DynamoDB";

import { EventEmitter } from "events";
import { Callback } from "./Callback";
import { Query } from "./Query";
import { ParallelScan, Scan } from "./Scan";

export class Item<T> extends EventEmitter {
    constructor(attrs: T, table: any);
    attrs: T;
    get<K extends keyof T>(key: K): T[K];
    set(attributes: Partial<T>): this;
    save(callback: Callback<T>): void;
    save(): Promise<T>;
    update(options: UpdateOptions<T>, callback: Callback<Item<T>>): void;
    update(callback: Callback<Item<T>>): void;
    update(options?: UpdateOptions<T>): Promise<Item<T>>;
    destroy(options: DestroyOptions<T>, callback: Callback<Item<T>>): void;
    destroy(callback: Callback<Item<T>>): void;
    destroy(options?: DestroyOptions<T>): Promise<Item<T>>;
    toJSON(): T;
}

export interface Model<T> {
    new(attrs: T): Item<T>;
    log: bunyan;

    get(hashKey: string, rangeKey: string, options: GetOptions<T>, callback: Callback<Item<T> | null>): void;
    get(hashKey: string, rangeKeyOrOptions: string | GetOptions<T>, callback: Callback<Item<T> | null>): void;
    get(hashKeyOrAttributes: string | Partial<T>, callback: Callback<Item<T> | null>): void;
    get(attributes: Partial<T>, options: GetOptions<T>, callback: Callback<Item<T> | null>): void;
    get(hashKey: string, rangeKey?: string, options?: GetOptions<T>): Promise<Item<T> | null>;
    get(hashKeyOrAttributes: string | Partial<T>, options?: GetOptions<T>): Promise<Item<T> | null>;

    update(attributes: Partial<T>, options: UpdateOptions<T>, callback: Callback<Item<T>>): void;
    update(attributes: Partial<T>, callback: Callback<Item<T>>): void;
    update(attributes: Partial<T>, options?: UpdateOptions<T>): Promise<Item<T>>;

    create(attributes: Partial<T>, options: CreateOptions, callback: Callback<Item<T>>): void;
    create(attributes: Partial<T>, callback: Callback<Item<T>>): void;
    create(attributes: Partial<T>, options?: CreateOptions): Promise<Item<T>>;
    create(attributes: ReadonlyArray<Partial<T>>, options: CreateOptions, callback: Callback<Array<Item<T>>>): void;
    create(attributes: ReadonlyArray<Partial<T>>, callback: Callback<Array<Item<T>>>): void;
    create(attributes: ReadonlyArray<Partial<T>>, options?: CreateOptions): Promise<Array<Item<T>>>;

    destroy(hashKey: string, rangeKey: string, options: DestroyOptions<T>, callback: Callback<any>): void;
    destroy(hashKey: string, rangeKey: string, callback: Callback<any>): void;
    destroy(hashKeyOrAttributes: string | Partial<T>, options: DestroyOptions<T>, callback: Callback<any>): void;
    destroy(hashKey: string, callback: Callback<any>): void;
    destroy(attributes: Partial<T>, callback: Callback<any>): void;
    destroy(hashKey: string, rangeKey?: string, options?: DestroyOptions<T>): Promise<any>;
    destroy(hashKeyOrAttributes: string | Partial<T>, options?: DestroyOptions<T>): Promise<any>;

    getItems(
        keys: ReadonlyArray<Partial<T> | string>,
        options: GetOptions<T>,
        callback: Callback<Array<Item<T>>>,
    ): void;
    getItems(keys: ReadonlyArray<Partial<T> | string>, callback: Callback<Array<Item<T>>>): void;
    getItems(keys: ReadonlyArray<Partial<T> | string>, options?: GetOptions<T>): Promise<Array<Item<T>>>;

    query(hashKey: string): Query<T>;
    scan(): Scan<T>;
    parallelScan(totalSegments: number): ParallelScan<T>;

    createTable(options: object, callback: Callback<any>): void;

    deleteTable(callback: Callback<any>): void;
    deleteTable(): Promise<any>;

    before: (event: "create" | "update", hook: (data: Partial<T>, next: Callback<Partial<T>>) => void) => void;
    after: (event: "create" | "update" | "destroy", hook: (data: Item<T>, next: Callback<void>) => void) => void;

    config(config: { dynamodb?: DynamoDB; tableName?: string }): any;
}

export interface Page<T> {
    Items: Array<Item<T>>;
    Count: number;
    ScannedCount?: number;
    LastEvaluatedKey?: any;
    ConsumedCapacity?: {
        CapacityUnits: number;
        TableName: string;
    };
}

export interface WriteOptions {
    ReturnValues?: string | boolean;
}

export interface ConditionalOptions<T> {
    ConditionExpression?: string;
    ExpressionAttributeValues?: Record<string, any>;
    ExpressionAttributeNames?: Record<string, string>;
    expected?: Partial<T>;
}

export interface CreateOptions extends WriteOptions {
    overwrite?: boolean;
}

export interface UpdateOptions<T> extends ConditionalOptions<T>, WriteOptions {
    UpdateExpression?: string;
    ReturnValues?: string | boolean;
}

export interface DestroyOptions<T> extends ConditionalOptions<T>, WriteOptions {
}

export interface GetOptions<T> {
    ConsistentRead?: boolean;
    AttributesToGet?: Array<keyof T>;
    ProjectionExpression?: string;
}
