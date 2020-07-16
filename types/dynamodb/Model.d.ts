import { AnySchema } from 'joi';
import * as bunyan from 'bunyan';
import { GetItemInput, DynamoDB } from './DynamoDB';

import { Callback } from './Callback';
import { Query } from './Query';
import { Scan, ParallelScan } from './Scan';
import { EventEmitter } from 'events';

export class Item extends EventEmitter {
    constructor(attrs: object, table: any);
    get(name: string): any;
    set(params: any): this;
    save(callback: Callback): void;
    save(): Promise<any>;
    update(options: any, callback: Callback): void;
    update(options: any): Promise<any>;
    destroy(options: any, callback: Callback): void;
    destroy(options: any): Promise<any>;
    toJSON(): object;
}

export class Model extends Item {
    constructor(attrs: any);
}

export namespace Model {
    const get: GetOperation;
    const create: CreateOperation;
    const update: UpdateOperation;
    const destroy: DestroyOperation;
    function query(hashKey: string): Query;
    function scan(): Scan;
    function parallelScan(totalSegments: number): ParallelScan;
    const getItems: GetItemsOperation;
    function batchGetItems(
        hashKey: string,
        rangeKey: string,
        options: any,
        callback?: Callback,
    ): Promise<any> | void;
    function createTable(
        hashKey: string,
        rangeKey: string,
        options: any,
        callback?: Callback,
    ): Promise<any> | void;
    function updateTable(
        hashKey: string,
        rangeKey: string,
        options: any,
        callback?: Callback,
    ): Promise<any> | void;
    function describeTable(
        hashKey: string,
        rangeKey: string,
        options: any,
        callback?: Callback,
    ): Promise<any> | void;
    function deleteTable(callback: Callback): void;
    function deleteTable(): Promise<any>;
    function tableName(
        hashKey: string,
        rangeKey: string,
        options: any,
        callback: Callback,
    ): void;
    function tableName(
        hashKey: string,
        rangeKey: string,
        options: any,
    ): Promise<any>;
    const itemFactory: typeof Model;
    const log: bunyan;
    const after: any;
    const before: any;
    function config(config: { dynamodb?: DynamoDB; tableName?: string }): any;

    interface OperationResult {
        get(name: string): any;
    }

    interface OperationOptions {
        UpdateExpression?: any;
        ConditionExpression?: any;
        ExpressionAttributeValues?: any;
        ExpressionAttributeNames?: any;
        expected?: any;
        overwrite?: boolean;
        ReturnValues?: string | boolean;
    }

    interface UpdateOperation {
        (item: any, options: OperationOptions, callback: Callback): void;
        (item: any, callback: Callback): void;
        (item: any, options?: OperationOptions): Promise<any>;
    }

    interface GetOperation {
        (
            hashKey: string,
            rangeKey: string,
            options: object,
            callback: Callback,
        ): void;
        (
            data: object | string,
            options: object | string,
            callback: Callback,
        ): void;
        (data: object | string, callback: Callback): void;
        (hashKey: string, rangeKey: string, options: object): Promise<any>;
        (hashKey: string, options?: object | string): Promise<any>;
    }

    interface CreateOperation {
        (doc: any, params: OperationOptions, callback: Callback): void;
        (doc: any, callback: Callback): void;
        (doc: any, params?: OperationOptions): Promise<any>;
    }

    interface DestroyOperation {
        (
            hashKey: string,
            rangeKey: string,
            options: OperationOptions,
            callback: Callback,
        ): void;
        (hashKey: string, rangeKey: string, callback: Callback): void;
        (
            data: { [key: string]: any } | string,
            options: OperationOptions,
            callback: Callback,
        ): void;
        (data: { [key: string]: any } | string, callback: Callback): void;
        (hashKey: string, rangeKey: string, options: OperationOptions): Promise<
            any
        >;
        (hashKey: string, options?: OperationOptions | string): Promise<any>;
    }

    interface GetItemsOperation {
        (keys: ReadonlyArray<any>, options: any, callback: Callback): void;
        (keys: ReadonlyArray<any>, callback: Callback): void;
        (keys: ReadonlyArray<any>, options?: any): Promise<any>;
    }
}
