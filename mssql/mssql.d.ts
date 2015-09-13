// Type definitions for mssql
// Project: https://www.npmjs.com/package/mssql
// Definitions by: COLSA Corporation <http://www.colsa.com/>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

declare module "mssql" {

    export var Date: any;
    export var DateTime: any;
    export var DateTime2: any;
    export var DateTimeOffset: any;
    export var SmallDateTime: any;
    export var Time: any;
    export var Char: any;
    export var VarChar:any;
    export var NChar: any;
    export var NVarChar: any;
    export var Text:any;
    export var NText:any;
    export var Xml: any;
    export var TinyInt:any;
    export var SmallInt:any;
    export var Int: any;
    export var BigInt:any;
    export var Decimal:any;
    export var Float:any;
    export var Real:any;
    export var SmallMoney:any;
    export var Money:any;
    export var Numeric:any;
    export var Bit: any;
    export var Binary: any;
    export var VarBinary: any;
    export var TVP: any;
    export var UniqueIdentifier: any;
    export var Image: any;
    export var UDT: any;
    export var Geography: any;
    export var Geometry: any;

    export interface options {

    export var MAX: number;
    export var fix: boolean;
    export var Promise: any;

    export var map: { js: any, sql: any }[];
    export var DRIVERS: string[];

    export var ISOLATION_LEVEL: {
        READ_UNCOMMITTED: number
        READ_COMMITTED: number
        REPEATABLE_READ: number
        SERIALIZABLE: number
        SNAPSHOT: number
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

    export class Connection {

        public constructor(config: config, callback?: (err?: any) => void);

        public connect(callback?: (err?: any) => void): void;

        public close(): void;
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

    export class Request {
        public constructor(connection?: Connection);
        public execute(procedure: string, callback?: (err?: any, recordsets?: any, returnValue?: any) => void): void;
        public input(name: string, value: any): void;
        public input(name: string, type: any, value: any): void;
        public output(name: string, type: any, value?: any): void;
        public pipe(stream: any): void;
        public query(command: string, callback?: (err?: any, recordset?: any) => void): void;
        public batch(batch: string, callback?: (err?: any, recordset?: any) => void): void;
        public bulk(table: Table, callback?: (err?: any, rowCount?: any) => void): void;
        public cancel(): void;
        public parameters: any;
    }

    export class Transaction {
        public constructor(connection?: Connection);
        public begin(isolationLevel?: any, callback?: (err?: any) => void): void;
        public begin(callback?: (err?: any) => void): void;
        public commit(callback?: (err?: any) => void): void;
        public rollback(callback?: (err?: any) => void): void;
    }

    export class PreparedStatement {
        public constructor(connection?: Connection);
        public input(name: string, type: any): void;
        public output(name: string, type: any): void;
        public prepare(statement: string, callback?: (err?: any) => void): void;
        public execute(values: any, callback?: (err?: any) => void): void;
        public unprepare(callback?: (err?: any) => void): void;
    }
}
