// Type definitions for db.js v0.9.0
// Project: https://github.com/aaronpowell/db.js/
// Definitions by: Chris Wrench <https://github.com/cgwrench>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

/// <reference path="../es6-promise/es6-promise.d.ts" />

declare module DbJs {
    interface OpenOptions {
        server: string;
        version: number;
        schema?: any;
    }

    interface DbJsStatic {
        open(options: OpenOptions): Promise<Server>;
        delete(dbName: string): Promise<void>;
    }

    // Query API

    // TODO - complete the definition of the fluent API for query\indexed query.

    interface ExecutableQuery<T> {
        execute(): Promise<T[]>;
    }

    interface IndexQuery<T> extends ExecutableQuery<T> {
        all(): IndexQuery<T>;
        filter<TValue>(index: string, value: TValue): IndexQuery<T>;
        filter(filter: (value: T) => boolean): IndexQuery<T>;
        limit(n, m): ExecutableQuery<T>
        count(): ExecutableQuery<T>
        // desc()
        // distinct()
        // modify(update)
        // map(fn)
        // only()
        // bound()
        // upperBound()
        // lowerBound()
        // range()
    }

    interface Query<T> {
        all(): Query<T>;
        execute(): Promise<T[]>;
        filter<TValue>(index: string, value: TValue): Query<T>;
        filter<TValue>(filter: (value: TValue) => boolean): Query<T>;
        // limit(n, m)
        // count()
        // desc()
        // distinct()
        // modify(update)
        // map(fn)
        // only()
        // bound()
        // upperBound()
        // lowerBound()
        // range()
    }

    interface KeyValuePair<TKey, TValue> {
        key: TKey;
        item: TValue;
    }

    interface BaseServer {
        getIndexedDB(): IDBDatabase;
        close(): void;
    }

    // TODO - Check typings for the count API as thses may not be correct.

    interface ObjectStoreServer {
        add<T>(table: string, entity: T): Promise<T>;
        add<T>(table: string, ...entities: T[]): Promise<T[]>;
        add<TKey, TValue>(table: string, entity: KeyValuePair<TKey, TValue>): Promise<KeyValuePair<TKey, TValue>>;
        add<TKey, TValue>(table: string, ...entities: KeyValuePair<TKey, TValue>[]): Promise<KeyValuePair<TKey, TValue>[]>;
        update<T>(table: string, entity: T): Promise<T>;
        update<T>(table: string, ...entities: T[]): Promise<T[]>;
        update<TKey, TValue>(table: string, entity: KeyValuePair<TKey, TValue>): Promise<KeyValuePair<TKey, TValue>>;
        update<TKey, TValue>(table: string, ...entities: KeyValuePair<TKey, TValue>[]): Promise<KeyValuePair<TKey, TValue>[]>;
        remove<TKey>(table: string, key: TKey): Promise<TKey>;
        remove<TKey>(table: string, ...keys: TKey[]): Promise<TKey[]>;
        clear(table: string): Promise<void>;
        get<T>(table: string, key: any): Promise<T>;
        query<T>(table: string): IndexQuery<T>;
        query<T>(table: string, index: string): IndexQuery<T>;
        count(table: string, key: any): number;
    }

    interface TypedObjectStoreServer<T> {
        add(entity: T): Promise<T>;
        add(...entities: T[]): Promise<T[]>;
        add<TKey, TValue>(entity: KeyValuePair<TKey, TValue>): Promise<KeyValuePair<TKey, TValue>>;
        add<TKey, TValue>(...entities: KeyValuePair<TKey, TValue>[]): Promise<KeyValuePair<TKey, TValue>[]>;
        update(entity: T): Promise<T>;
        update(...entities: T[]): Promise<T[]>;
        update<TKey, TValue>(entity: KeyValuePair<TKey, TValue>): Promise<KeyValuePair<TKey, TValue>>;
        update<TKey, TValue>(...entities: KeyValuePair<TKey, TValue>[]): Promise<KeyValuePair<TKey, TValue>[]>;
        remove<TKey>(key: TKey): Promise<TKey>;
        remove<TKey>(...keys: TKey[]): Promise<TKey[]>;
        clear(): Promise<void>;
        get(key: any): Promise<T>;
        query(): IndexQuery<T>;
        query(index: string): IndexQuery<T>;
        count(key: any): number;
    }
    
    type Server = DbJs.ObjectStoreServer & DbJs.BaseServer;
}

declare module "db" {
    var db: DbJs.DbJsStatic;
    export = db;
}

declare var db: DbJs.DbJsStatic;
