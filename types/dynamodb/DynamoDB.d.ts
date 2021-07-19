export interface Projection {
    ProjectionType?: 'ALL' | 'KEYS_ONLY' | 'INCLUDE' | string | undefined;
    NonKeyAttributes?: string[] | undefined;
}

import * as stream from 'stream';

export type DynamoDB = any;

export type DocumentClient = any;

export type binaryType =
    | Buffer
    | {}
    | ArrayBuffer
    | DataView
    | Int8Array
    | Uint8Array
    | Uint8ClampedArray
    | Int16Array
    | Uint16Array
    | Int32Array
    | Uint32Array
    | Float32Array
    | Float64Array
    | stream.Stream;

interface StringSet {
    type: 'String';
    values: string[];
}

interface NumberSet {
    type: 'Number';
    values: number[];
}

interface BinarySet {
    type: 'Binary';
    values: binaryType[];
}

export type DynamoDbSet = StringSet | NumberSet | BinarySet;

export interface GetItemInput {
    TableName: string;
    Key: object;
    AttributesToGet?: string[] | undefined;
    ConsistentRead?: boolean | undefined;
    ReturnConsumedCapacity?: string | undefined;
    ProjectionExpression?: string | undefined;
    ExpressionAttributeNames?: { [key: string]: string } | undefined;
}

export {};
