// Type definitions for mssql 3.3
// Project: https://www.npmjs.com/package/mssql
// Definitions by: COLSA Corporation <http://www.colsa.com/>, Ben Farr <https://github.com/jaminfarr>, Vitor Buzinaro <https://github.com/buzinas>, Matt Richardson <https://github.com/mrrichar/>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />


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

export declare var VarChar: sqlTypeFactoryWithLength;
export declare var NVarChar: sqlTypeFactoryWithLength;
export declare var Text: sqlTypeFactoryWithNoParams;
export declare var Int: sqlTypeFactoryWithNoParams;
export declare var BigInt: sqlTypeFactoryWithNoParams;
export declare var TinyInt: sqlTypeFactoryWithNoParams;
export declare var SmallInt: sqlTypeFactoryWithNoParams;
export declare var Bit: sqlTypeFactoryWithNoParams;
export declare var Float: sqlTypeFactoryWithNoParams;
export declare var Numeric: sqlTypeFactoryWithPrecisionScale;
export declare var Decimal: sqlTypeFactoryWithPrecisionScale;
export declare var Real: sqlTypeFactoryWithNoParams;
export declare var Date: sqlTypeFactoryWithNoParams;
export declare var DateTime: sqlTypeFactoryWithNoParams;
export declare var DateTime2: sqlTypeFactoryWithScale;
export declare var DateTimeOffset: sqlTypeFactoryWithScale;
export declare var SmallDateTime: sqlTypeFactoryWithNoParams;
export declare var Time: sqlTypeFactoryWithScale;
export declare var UniqueIdentifier: sqlTypeFactoryWithNoParams;
export declare var SmallMoney: sqlTypeFactoryWithNoParams;
export declare var Money: sqlTypeFactoryWithNoParams;
export declare var Binary: sqlTypeFactoryWithNoParams;
export declare var VarBinary: sqlTypeFactoryWithLength;
export declare var Image: sqlTypeFactoryWithNoParams;
export declare var Xml: sqlTypeFactoryWithNoParams;
export declare var Char: sqlTypeFactoryWithLength;
export declare var NChar: sqlTypeFactoryWithLength;
export declare var NText: sqlTypeFactoryWithNoParams;
export declare var TVP: sqlTypeFactoryWithTvpType;
export declare var UDT: sqlTypeFactoryWithNoParams;
export declare var Geography: sqlTypeFactoryWithNoParams;
export declare var Geometry: sqlTypeFactoryWithNoParams;

export declare var TYPES: {
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

export declare var MAX: number;
export declare var fix: boolean;
export declare var Promise: any;


interface IMap extends Array<{ js: any, sql: any }> {
    register(jstype: any, sql: any): void;
}

export declare var map: IMap;

export declare var DRIVERS: string[];

type recordSet = any;
type IIsolationLevel = number;

export declare var ISOLATION_LEVEL: {
    READ_UNCOMMITTED: IIsolationLevel
    READ_COMMITTED: IIsolationLevel
    REPEATABLE_READ: IIsolationLevel
    SERIALIZABLE: IIsolationLevel
    SNAPSHOT: IIsolationLevel
}

export interface IOptions {
    encrypt?: boolean;
    instanceName?: string;
    useUTC?: boolean;
    tdsVersion?: string;
    appName?: string;
    abortTransactionOnError?: boolean;
    trustedConnection?: boolean;
}


export interface IPool {
    min: number;
    max: number;
    idleTimeoutMillis: number;
}

export declare var pool: IPool;

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

export declare class Connection extends events.EventEmitter {
    public connected: boolean;
    public connecting: boolean;
    public driver: string;
    public constructor(config: config, callback?: (err?: any) => void);
    public connect(): Promise<Connection>;
    public connect(callback: (err: any) => void): void;
    public close(): Promise<void>;
    public close(callback: (err: any) => void): void;
}

export declare class ConnectionError implements Error {
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

export declare class Table {
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

export declare class Request extends events.EventEmitter {
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

export declare class RequestError implements Error {
    constructor(message: string, code?: any)
    public name: string;
    public message: string;
    public code: string;
}

export declare class Transaction extends events.EventEmitter {
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

export declare class TransactionError implements Error {
    constructor(message: string, code?: any)
    public name: string;
    public message: string;
    public code: string;
}

export declare class PreparedStatement extends events.EventEmitter {
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

export declare class PreparedStatementError implements Error {
    constructor(message: string, code?: any)
    public name: string;
    public message: string;
    public code: string;
}
