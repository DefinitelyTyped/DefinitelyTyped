// Type definitions for mssql v3.1.0
// Project: https://www.npmjs.com/package/mssql
// Definitions by: COLSA Corporation <http://www.colsa.com/>, Ben Farr <https://github.com/jaminfarr>, Vitor Buzinaro <https://github.com/buzinas>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference path="../node/node.d.ts" />


import events = require('events');

type sqlTypeWithNoParams = { type: sqlTypeFactoryWithNoParams }
type sqlTypeWithLength = { type: sqlTypeFactoryWithLength, length: number }
type sqlTypeWithScale = { type: sqlTypeFactoryWithScale, scale: number }
type sqlTypeWithPrecisionScale = { type: sqlTypeFactoryWithPrecisionScale, precision: number, scale: number }
type sqlTypeWithTvpType = { type: sqlTypeFactoryWithTvpType, tvpType: any }

type sqlTypeFactoryWithNoParams = () => sqlTypeWithNoParams;
type sqlTypeFactoryWithLength = (length?: number) => sqlTypeWithLength;
type sqlTypeFactoryWithScale = (scale?: number) => sqlTypeWithScale;
type sqlTypeFactoryWithPrecisionScale = (precision?: number, scale?: number) => sqlTypeWithPrecisionScale;
type sqlTypeFactoryWithTvpType = (tvpType: any) => sqlTypeWithTvpType;

declare export var VarChar: sqlTypeFactoryWithLength;
declare export var NVarChar: sqlTypeFactoryWithLength;
declare export var Text: sqlTypeFactoryWithNoParams;
declare export var Int: sqlTypeFactoryWithNoParams;
declare export var BigInt: sqlTypeFactoryWithNoParams;
declare export var TinyInt: sqlTypeFactoryWithNoParams;
declare export var SmallInt: sqlTypeFactoryWithNoParams;
declare export var Bit: sqlTypeFactoryWithNoParams;
declare export var Float: sqlTypeFactoryWithNoParams;
declare export var Numeric: sqlTypeFactoryWithPrecisionScale;
declare export var Decimal: sqlTypeFactoryWithPrecisionScale;
declare export var Real: sqlTypeFactoryWithNoParams;
declare export var Date: sqlTypeFactoryWithNoParams;
declare export var DateTime: sqlTypeFactoryWithNoParams;
declare export var DateTime2: sqlTypeFactoryWithScale;
declare export var DateTimeOffset: sqlTypeFactoryWithScale;
declare export var SmallDateTime: sqlTypeFactoryWithNoParams;
declare export var Time: sqlTypeFactoryWithScale;
declare export var UniqueIdentifier: sqlTypeFactoryWithNoParams;
declare export var SmallMoney: sqlTypeFactoryWithNoParams;
declare export var Money: sqlTypeFactoryWithNoParams;
declare export var Binary: sqlTypeFactoryWithNoParams;
declare export var VarBinary: sqlTypeFactoryWithLength;
declare export var Image: sqlTypeFactoryWithNoParams;
declare export var Xml: sqlTypeFactoryWithNoParams;
declare export var Char: sqlTypeFactoryWithLength;
declare export var NChar: sqlTypeFactoryWithLength;
declare export var NText: sqlTypeFactoryWithNoParams;
declare export var TVP: sqlTypeFactoryWithTvpType;
declare export var UDT: sqlTypeFactoryWithNoParams;
declare export var Geography: sqlTypeFactoryWithNoParams;
declare export var Geometry: sqlTypeFactoryWithNoParams;

declare export var TYPES: {
    VarChar: sqlTypeFactoryWithLength;
    NVarChar: sqlTypeFactoryWithLength;
    Text: sqlTypeFactoryWithNoParams;
    Int: sqlTypeFactoryWithNoParams;
    BigInt: sqlTypeFactoryWithNoParams;
    TinyInt: sqlTypeFactoryWithNoParams;
    SmallInt: sqlTypeFactoryWithNoParams;
    Bit: sqlTypeFactoryWithNoParams;
    Float: sqlTypeFactoryWithNoParams;
    Numeric: sqlTypeFactoryWithPrecisionScale;
    Decimal: sqlTypeFactoryWithPrecisionScale;
    Real: sqlTypeFactoryWithNoParams;
    Date: sqlTypeFactoryWithNoParams;
    DateTime: sqlTypeFactoryWithNoParams;
    DateTime2: sqlTypeFactoryWithScale;
    DateTimeOffset: sqlTypeFactoryWithScale;
    SmallDateTime: sqlTypeFactoryWithNoParams;
    Time: sqlTypeFactoryWithScale;
    UniqueIdentifier: sqlTypeFactoryWithNoParams;
    SmallMoney: sqlTypeFactoryWithNoParams;
    Money: sqlTypeFactoryWithNoParams;
    Binary: sqlTypeFactoryWithNoParams;
    VarBinary: sqlTypeFactoryWithLength;
    Image: sqlTypeFactoryWithNoParams;
    Xml: sqlTypeFactoryWithNoParams;
    Char: sqlTypeFactoryWithLength;
    NChar: sqlTypeFactoryWithLength;
    NText: sqlTypeFactoryWithNoParams;
    TVP: sqlTypeFactoryWithTvpType;
    UDT: sqlTypeFactoryWithNoParams;
    Geography: sqlTypeFactoryWithNoParams;
    Geometry: sqlTypeFactoryWithNoParams;
};

declare export var MAX: number;
declare export var fix: boolean;
declare export var Promise: any;


interface IMap extends Array<{ js: any, sql: any }> {
    register(jstype: any, sql: any): void;
}

declare export var map: IMap;

declare export var DRIVERS: string[];

type recordSet = any;
type IIsolationLevel = number;

declare export var ISOLATION_LEVEL: {
    READ_UNCOMMITTED: IIsolationLevel
    READ_COMMITTED: IIsolationLevel
    REPEATABLE_READ: IIsolationLevel
    SERIALIZABLE: IIsolationLevel
    SNAPSHOT: IIsolationLevel
}

export interface IOptions {
    encrypt: boolean;
}


export interface IPool {
    min: number;
    max: number;
    idleTimeoutMillis: number;
}

declare export var pool: IPool;

export interface config {
    driver?: string;
    user?: string;
    password?: string;
    server: string;
    port?: number;
    domain?: string;
    database: string;
    connectionTimeout?: number;
    requestTimeout?: number;
    stream?: boolean;
    options?: IOptions;
    pool?: IPool;
}

declare export class Connection extends events.EventEmitter {
    public connected: boolean;
    public connecting: boolean;
    public driver: string;
    public constructor(config: config, callback?: (err?: any) => void);
    public connect(): Promise<void>;
    public connect(callback: (err: any) => void): void;
    public close(): Promise<void>;
    public close(callback: (err: any) => void): void;
}

declare export class ConnectionError implements Error {
    constructor(message: string, code?: any)
    public name: string;
    public message: string;
    public code: string;
}

declare class columns {
    public add(name: string, type: any, options: any): void;
}

declare class rows {
    public add(...row: any[]): void;
}

declare export class Table {
    public create: boolean;
    public columns: columns;
    public rows: rows;
    public constructor(tableName: string);
}

interface IRequestParameters {
    [name: string]: {
        name: string;
        type: any;
        io: number;
        value: any;
        length: number;
        scale: number;
        precision: number;
        tvpType: any;
    }
}

declare export class Request extends events.EventEmitter {
    public connection: Connection;
    public transaction: Transaction;
    public pstatement: PreparedStatement;
    public parameters: IRequestParameters;
    public verbose: boolean;
    public multiple: boolean;
    public canceled: boolean;
    public stream: any;
    public constructor(connection?: Connection);
    public constructor(transaction: Transaction);
    public constructor(preparedStatement: PreparedStatement);
    public execute(procedure: string): Promise<recordSet>;
    public execute<Entity>(procedure: string, callback: (err?: any, recordsets?: Entity[], returnValue?: any, rowsAffected?: number) => void): void;
    public input(name: string, value: any): void;
    public input(name: string, type: any, value: any): void;
    public output(name: string, type: any, value?: any): void;
    public pipe(stream: NodeJS.WritableStream): void;
    public query(command: string): Promise<void>;
    public query<Entity>(command: string): Promise<Entity[]>;
    public query(command: string, callback: (err?: any, recordset?: any, rowsAffected?: number) => void): void;
    public query<Entity>(command: string, callback: (err?: any, recordset?: Entity[]) => void): void;
    public batch(batch: string): Promise<recordSet>;
    public batch<Entity>(batch: string): Promise<Entity[]>;
    public batch(batch: string, callback: (err?: any, recordset?: any) => void): void;
    public batch<Entity>(batch: string, callback: (err?: any, recordset?: Entity[]) => void): void;
    public bulk(table: Table): Promise<void>;
    public bulk(table: Table, callback: (err: any, rowCount: any) => void): void;
    public cancel(): void;
}

declare export class RequestError implements Error {
    constructor(message: string, code?: any)
    public name: string;
    public message: string;
    public code: string;
}

declare export class Transaction extends events.EventEmitter {
    public connection: Connection;
    public isolationLevel: IIsolationLevel;
    public constructor(connection?: Connection);
    public begin(isolationLevel?: IIsolationLevel): Promise<void>;
    public begin(isolationLevel?: IIsolationLevel, callback?: (err?: any) => void): void;
    public commit(): Promise<void>;
    public commit(callback: (err?: any) => void): void;
    public rollback(): Promise<void>;
    public rollback(callback: (err?: any) => void): void;
}

declare export class TransactionError implements Error {
    constructor(message: string, code?: any)
    public name: string;
    public message: string;
    public code: string;
}

declare export class PreparedStatement extends events.EventEmitter {
    public connection: Connection;
    public transaction: Transaction;
    public prepared: boolean;
    public statement: string;
    public parameters: IRequestParameters;
    public multiple: boolean;
    public stream: any;
    public constructor(connection?: Connection);
    public input(name: string, type: any): void;
    public output(name: string, type: any): void;
    public prepare(statement?: string): Promise<void>;
    public prepare(statement?: string, callback?: (err?: any) => void): void;
    public execute(values: Object): Promise<recordSet>;
    public execute<Entity>(values: Object): Promise<Entity[]>;
    public execute(values: Object, callback: (err: any, recordSet: recordSet, rowsAffected: number) => void): void;
    public execute<Entity>(values: Object, callback: (err: any, recordSet: Entity[]) => void): void;
    public unprepare(): Promise<void>;
    public unprepare(callback: (err?: any) => void): void;
}

declare export class PreparedStatementError implements Error {
    constructor(message: string, code?: any)
    public name: string;
    public message: string;
    public code: string;
}
