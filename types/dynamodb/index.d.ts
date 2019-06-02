// Type definitions for dynamodb 1.2
// Project: https://github.com/baseprime/dynamodb#readme
// Definitions by: katsanva <https://github.com/katsanva>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.4

import { AnySchema } from 'joi';
import * as bunyan from 'bunyan';
import { callbackify } from 'util';
import { Readable } from 'stream';

import { Callback } from './Callback';
import { Model } from './Model';
import { DynamoDB, Projection, DocumentClient, DynamoDbSet } from './DynamoDB';

interface CreateTablesOptions {
    [key: string]: { readCapacity: number; writeCapacity: number };
}

interface CreateTables {
    (options?: CreateTablesOptions): Promise<any>;
    (options: CreateTablesOptions, callback: Callback): void;
    (callback: Callback): void;
}

interface IndexDefinition {
    hashKey: string;
    rangeKey?: string;
    name: string;
    type: 'local' | 'global';
    projection?: Projection;
}

export interface DefineConfig {
    hashKey: string;
    rangeKey?: string;
    timestamps?: boolean;
    createdAt?: boolean | string;
    updatedAt?: boolean | string;
    tableName?: string | (() => string);
    indexes?: ReadonlyArray<IndexDefinition>;
    schema?: {
        [key: string]: AnySchema | { [key: string]: AnySchema };
    };
}

export const log: bunyan;
export function dynamoDriver(driver?: DynamoDB): DynamoDB;
export function documentClient(docClient?: DocumentClient): DocumentClient;
export function reset(): void;
export function Set(data: ReadonlyArray<any>, type: string): DynamoDbSet;
export function define(name: string, config: DefineConfig): typeof Model;
export function model(name: string, model?: Model): typeof Model;
export const createTables: CreateTables;
export const types: {
    stringSet: () => AnySchema;
    numberSet: () => AnySchema;
    binarySet: () => AnySchema;
    uuid: () => AnySchema;
    timeUUID: () => AnySchema;
};

export const models: {
    [key: string]: typeof Model;
};

export const AWS: any;

export { Model };
