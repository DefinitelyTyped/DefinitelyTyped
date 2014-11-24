// Type definitions for sqlite3 2.2.3
// Project: https://github.com/mapbox/node-sqlite3
// Definitions by: Nick Malaguti <https://github.com/nmalaguti/>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

/// <reference path="../node/node.d.ts" />

declare module "sqlite3" {
    import events = require("events");
    
    export var OPEN_READONLY: number;
    export var OPEN_READWRITE: number;
    export var OPEN_CREATE: number;
    
    export var cached: {
        Database(filename: string, callback?: (err: Error) => void): Database;
        Database(filename: string, mode?: number, callback?: (err: Error) => void): Database;
    };
    
    export interface RunResult {
        lastID: number;
        changes: number;
    }
    
    export class Statement {
        public bind(callback?: (err: Error) => void): Statement;
        public bind(...params: any[]): Statement;
        
        public reset(callback?: (err: Error) => void): Statement;
        
        public finalize(callback?: (err: Error) => void): Statement;
        
        public run(callback?: (err: Error) => void): Statement;
        public run(...params: any[]): Statement;
        
        public get(callback?: (err: Error, row: any) => void): Statement;
        public get(...params: any[]): Statement;
        
        public all(callback?: (err: Error, rows: any[]) => void): Statement;
        public all(...params: any[]): Statement;
        
        public each(callback?: (err: Error, row: any) => void, complete?: (err: Error, count: number) => void): Statement;
        public each(...params: any[]): Statement;
    }
    
    export class Database extends events.EventEmitter {
        constructor(filename: string, callback?: (err: Error) => void);
        constructor(filename: string, mode?: number, callback?: (err: Error) => void);
        
        public close(callback?: (err: Error) => void): void;
        
        public run(sql: string, callback?: (err: Error) => void): Database;
        public run(sql: string, ...params: any[]): Database;
        
        public get(sql: string, callback?: (err: Error, row: any) => void): Database;
        public get(sql: string, ...params: any[]): Database;
        
        public all(sql: string, callback?: (err: Error, rows: any[]) => void): Database;
        public all(sql: string, ...params: any[]): Database;
        
        public each(sql: string, callback?: (err: Error, row: any) => void, complete?: (err: Error, count: number) => void): Database;
        public each(sql: string, ...params: any[]): Database;
        
        public exec(sql: string, callback?: (err: Error) => void): Database;
        
        public prepare(sql: string, callback?: (err: Error) => void): Statement;
        public prepare(sql: string, ...params: any[]): Statement;
        
        public serialize(callback?: () => void): void;
        public parallelize(callback?: () => void): void;
        
        public on(event: "trace", listener: (sql: string) => void): Database;
        public on(event: "profile", listener: (sql: string, time: number) => void): Database;
        public on(event: "error", listener: (err: Error) => void): Database;
        public on(event: "open", listener: () => void): Database;
        public on(event: "close", listener: () => void): Database;
        public on(event: string, listener: Function): Database;
    }
    
    function verbose(): void;
}
