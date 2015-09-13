// Type definitions for mssql v2.2.0
// Project: https://www.npmjs.com/package/mssql
// Definitions by: COLSA Corporation <http://www.colsa.com/>, Ben Farr <https://github.com/jaminfarr>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

/// <reference path="../node/node.d.ts" />
/// <reference path="../es6-promise/es6-promise.d.ts" />

declare module "mssql" {
    import events = require('events'); 

    type sqlTypeWithNoParams       = { type: sqlTypeFactoryWithNoParams }
    type sqlTypeWithLength         = { type: sqlTypeFactoryWithLength, length: number }
    type sqlTypeWithScale          = { type: sqlTypeFactoryWithScale, scale: number }
    type sqlTypeWithPrecisionScale = { type: sqlTypeFactoryWithPrecisionScale, precision: number, scale: number }
    type sqlTypeWithTvpType        = { type: sqlTypeFactoryWithTvpType, tvpType: any }

    type sqlTypeFactoryWithNoParams       = ()                                   => sqlTypeWithNoParams;
    type sqlTypeFactoryWithLength         = (length?: number)                    => sqlTypeWithLength;
    type sqlTypeFactoryWithScale          = (scale?: number)                     => sqlTypeWithScale;
    type sqlTypeFactoryWithPrecisionScale = (precision?: number, scale?: number) => sqlTypeWithPrecisionScale;
    type sqlTypeFactoryWithTvpType        = (tvpType: any)                       => sqlTypeWithTvpType;

    export var VarChar:          sqlTypeFactoryWithLength;
    export var NVarChar:         sqlTypeFactoryWithLength;
    export var Text:             sqlTypeFactoryWithNoParams;
    export var Int:              sqlTypeFactoryWithNoParams;
    export var BigInt:           sqlTypeFactoryWithNoParams;
    export var TinyInt:          sqlTypeFactoryWithNoParams;
    export var SmallInt:         sqlTypeFactoryWithNoParams;
    export var Bit:              sqlTypeFactoryWithNoParams;
    export var Float:            sqlTypeFactoryWithNoParams;
    export var Numeric:          sqlTypeFactoryWithPrecisionScale;
    export var Decimal:          sqlTypeFactoryWithPrecisionScale;
    export var Real:             sqlTypeFactoryWithNoParams;
    export var Date:             sqlTypeFactoryWithNoParams;
    export var DateTime:         sqlTypeFactoryWithNoParams;
    export var DateTime2:        sqlTypeFactoryWithScale;
    export var DateTimeOffset:   sqlTypeFactoryWithScale;
    export var SmallDateTime:    sqlTypeFactoryWithNoParams;
    export var Time:             sqlTypeFactoryWithScale;
    export var UniqueIdentifier: sqlTypeFactoryWithNoParams;
    export var SmallMoney:       sqlTypeFactoryWithNoParams;
    export var Money:            sqlTypeFactoryWithNoParams;
    export var Binary:           sqlTypeFactoryWithNoParams;
    export var VarBinary:        sqlTypeFactoryWithLength;
    export var Image:            sqlTypeFactoryWithNoParams;
    export var Xml:              sqlTypeFactoryWithNoParams;
    export var Char:             sqlTypeFactoryWithLength;
    export var NChar:            sqlTypeFactoryWithLength;
    export var NText:            sqlTypeFactoryWithNoParams;
    export var TVP:              sqlTypeFactoryWithTvpType;
    export var UDT:              sqlTypeFactoryWithNoParams;
    export var Geography:        sqlTypeFactoryWithNoParams;
    export var Geometry:         sqlTypeFactoryWithNoParams;

    export var TYPES: {
        VarChar:          sqlTypeFactoryWithLength;
        NVarChar:         sqlTypeFactoryWithLength;
        Text:             sqlTypeFactoryWithNoParams;
        Int:              sqlTypeFactoryWithNoParams;
        BigInt:           sqlTypeFactoryWithNoParams;
        TinyInt:          sqlTypeFactoryWithNoParams;
        SmallInt:         sqlTypeFactoryWithNoParams;
        Bit:              sqlTypeFactoryWithNoParams;
        Float:            sqlTypeFactoryWithNoParams;
        Numeric:          sqlTypeFactoryWithPrecisionScale;
        Decimal:          sqlTypeFactoryWithPrecisionScale;
        Real:             sqlTypeFactoryWithNoParams;
        Date:             sqlTypeFactoryWithNoParams;
        DateTime:         sqlTypeFactoryWithNoParams;
        DateTime2:        sqlTypeFactoryWithScale;
        DateTimeOffset:   sqlTypeFactoryWithScale;
        SmallDateTime:    sqlTypeFactoryWithNoParams;
        Time:             sqlTypeFactoryWithScale;
        UniqueIdentifier: sqlTypeFactoryWithNoParams;
        SmallMoney:       sqlTypeFactoryWithNoParams;
        Money:            sqlTypeFactoryWithNoParams;
        Binary:           sqlTypeFactoryWithNoParams;
        VarBinary:        sqlTypeFactoryWithLength;
        Image:            sqlTypeFactoryWithNoParams;
        Xml:              sqlTypeFactoryWithNoParams;
        Char:             sqlTypeFactoryWithLength;
        NChar:            sqlTypeFactoryWithLength;
        NText:            sqlTypeFactoryWithNoParams;
        TVP:              sqlTypeFactoryWithTvpType;
        UDT:              sqlTypeFactoryWithNoParams;
        Geography:        sqlTypeFactoryWithNoParams;
        Geometry:         sqlTypeFactoryWithNoParams;
    };

    export var MAX: number;
    export var fix: boolean;
    export var Promise: any;

    export var map: { js: any, sql: any }[];
    export var DRIVERS: string[];

    type recordSet = any;
    type IIsolationLevel = number;

    export var ISOLATION_LEVEL: {
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

    export var pool: IPool;

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

    export class Connection extends events.EventEmitter {
        public constructor(config: config, callback?: (err?: any) => void);
        public connect(): Promise<void>;
        public connect(callback: (err: any) => void): void;
        public close(): Promise<void>;
        public close(callback: (err: any) => void): void;
    }

    export class ConnectionError implements Error {
        constructor(message: string, code?: any)
        public name: string;
        public message: string;
        public code: string;
    }

    class columns {
        public add(name: string, type: any, options: any): void;
    }

    class rows {
        public add(...row: any[]): void;
    }

    export class Table {
        public create: boolean;
        public columns: columns;
        public rows: rows;
        public constructor(tableName: string);
    }

    export class Request extends events.EventEmitter {
        public constructor(connection?: Connection);
        public constructor(transaction: Transaction);
        public constructor(preparedStatement: PreparedStatement);
        public execute(procedure: string): Promise<recordSet>;
        public execute(procedure: string, callback: (err?: any, recordsets?: any, returnValue?: any) => void): void;
        public input(name: string, value: any): void;
        public input(name: string, type: any, value: any): void;
        public output(name: string, type: any, value?: any): void;
        public pipe(stream: NodeJS.WritableStream): void;
        public query(command: string): Promise<void>;
        public query(command: string, callback: (err?: any, recordset?: any) => void): void;
        public batch(batch: string): Promise<recordSet>;
        public batch(batch: string, callback: (err?: any, recordset?: any) => void): void;
        public bulk(table: Table): Promise<void>;
        public bulk(table: Table, callback: (err: any, rowCount: any) => void): void;
        public cancel(): void;
        public parameters: any;
    }

    export class RequestError implements Error {
        constructor(message: string, code?: any)
        public name: string;
        public message: string;
        public code: string;
    }

    export class Transaction extends events.EventEmitter {
        public constructor(connection?: Connection);
        public begin(isolationLevel?: IIsolationLevel): Promise<void>;
        public begin(isolationLevel?: IIsolationLevel, callback?: (err?: any) => void): void;
        public commit(): Promise<void>;
        public commit(callback: (err?: any) => void): void;
        public rollback(): Promise<void>;
        public rollback(callback: (err?: any) => void): void;
    }

    export class TransactionError implements Error {
        constructor(message: string, code?: any)
        public name: string;
        public message: string;
        public code: string;
    }

    export class PreparedStatement extends events.EventEmitter {
        public constructor(connection?: Connection);
        public input(name: string, type: any): void;
        public output(name: string, type: any): void;
        public prepare(statement?: string): Promise<void>;
        public prepare(statement?: string, callback?: (err?: any) => void): void;
        public execute(values: Object): Promise<recordSet>;
        public execute(values: Object, callback: (err: any, recordSet: recordSet) => void): void;
        public unprepare(): Promise<void>;
        public unprepare(callback: (err?: any) => void): void;
    }

    export class PreparedStatementError implements Error {
        constructor(message: string, code?: any)
        public name: string;
        public message: string;
        public code: string;
    }
}
