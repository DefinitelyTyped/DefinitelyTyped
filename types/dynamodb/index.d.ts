import * as bunyan from "bunyan";
import { AnySchema, ArraySchema, SchemaMap, StringSchema } from "joi";

import { Callback } from "./Callback";
import { DocumentClient, DynamoDB, DynamoDbSet, Projection } from "./DynamoDB";
import { Model } from "./Model";

interface CreateTablesOptions {
    [key: string]: { readCapacity: number; writeCapacity: number };
}

interface CreateTables {
    (options?: CreateTablesOptions): Promise<any>;
    (options: CreateTablesOptions, callback: Callback<any>): void;
    (callback: Callback<any>): void;
}

interface IndexDefinition<T> {
    hashKey: keyof T;
    rangeKey?: keyof T;
    name: string;
    type: "local" | "global";
    projection?: Projection<T>;
}

export interface DefineConfig<T> {
    hashKey: string;
    rangeKey?: string;
    timestamps?: boolean;
    createdAt?: boolean | string;
    updatedAt?: boolean | string;
    tableName?: string | (() => string);
    indexes?: ReadonlyArray<IndexDefinition<T>>;
    schema?: SchemaMap<T, true>;
}

export const log: bunyan;
export function dynamoDriver(driver?: DynamoDB): DynamoDB;
export function documentClient(docClient?: DocumentClient): DocumentClient;
export function reset(): void;
export function Set(data: ReadonlyArray<any>, type: string): DynamoDbSet;

export function define<T>(name: string, config: DefineConfig<T>): Model<T>;
export function define(name: string, config: DefineConfig<any>): Model<any>;

export function model(name: string, model?: Model<any>): Model<any>;
export function model<T>(name: string, model?: Model<T>): Model<T>;

export const createTables: CreateTables;

export const types: {
    stringSet: () => ArraySchema<string[]>;
    numberSet: () => ArraySchema<number[]>;
    binarySet: () => AnySchema;
    uuid: () => StringSchema;
    timeUUID: () => StringSchema;
};

export const models: {
    [key: string]: Model<any>;
};

export const AWS: any;

export { Model };
