// Type definitions for db.js v0.9.0
// Project: https://github.com/aaronpowell/db.js/
// Definitions by: Chris Wrench <https://github.com/cgwrench>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

/// <reference path="../es6-promise/es6-promise.d.ts" />

// TODO - Implement a ghost, or non-instantiated, module.
// See http://definitelytyped.org/guides/best-practices.html

interface DbJsOpenOptions {
    server: string;
    version: number;
    schema?: any;
}

interface DbJsStatic {
    open(options: DbJsOpenOptions): Promise<DbJsServer>;
    delete(dbName: string): Promise<void>;
}

// Query API

// TODO - complete the definition of the fluent API for query\indexed query.

interface DbJsExecutableQuery<T> {
    execute(): Promise<T[]>;
}

interface DbJsIndexQuery<T> extends DbJsExecutableQuery<T> {
    all(): DbJsIndexQuery<T>;
    filter<TValue>(index: string, value: TValue): DbJsIndexQuery<T>;
    filter<TValue>(filter: (value: TValue) => boolean): DbJsIndexQuery<T>;
    limit(n, m): DbJsExecutableQuery<T>
    count(): DbJsExecutableQuery<T>
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

interface DbJsQuery<T> {
    all(): DbJsQuery<T>;
    execute(): Promise<T[]>;
    filter<TValue>(index: string, value: TValue): DbJsQuery<T>;
    filter<TValue>(filter: (value: TValue) => boolean): DbJsQuery<T>;
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

interface DbJsKeyValuePair<TKey, TValue> {
    key: TKey;
    item: TValue;
}

interface DbJsBaseServer {
    getIndexedDB(): IDBDatabase;
    close(): void;
}

// TODO - Check typings for the count API as thses may not be correct.

interface DbJsNamedObjectStoreServer {
    add<T>(table: string, entity: T): Promise<T>;
    add<T>(table: string, ...entities: T[]): Promise<T[]>;
    add<TKey, TValue>(table: string, entity: DbJsKeyValuePair<TKey, TValue>): Promise<DbJsKeyValuePair<TKey, TValue>>;
    add<TKey, TValue>(table: string, ...entities: DbJsKeyValuePair<TKey, TValue>[]): Promise<DbJsKeyValuePair<TKey, TValue>[]>;
    update<T>(table: string, entity: T): Promise<T>;
    update<T>(table: string, ...entities: T[]): Promise<T[]>;
    update<TKey, TValue>(table: string, entity: DbJsKeyValuePair<TKey, TValue>): Promise<DbJsKeyValuePair<TKey, TValue>>;
    update<TKey, TValue>(table: string, ...entities: DbJsKeyValuePair<TKey, TValue>[]): Promise<DbJsKeyValuePair<TKey, TValue>[]>;
    remove<T>(table: string, key: T): Promise<T>;
    remove<T>(table: string, ...keys: T[]): Promise<T[]>;
    clear(table: string): Promise<void>;
    get<T>(table: string, key: any): Promise<T>;
    query<T>(table: string): DbJsIndexQuery<T>;
    query<T>(table: string, index: string): DbJsIndexQuery<T>;
    count(table: string, key: any): number;
}

interface DbJsDynamicObjectServer {
    [storeName: string]: DbJsObjectStoreServer
}

interface DbJsObjectStoreServer {
    add<T>(entity: T): Promise<T>;
    add<T>(...entities: T[]): Promise<T[]>;
    add<TKey, TValue>(entity: DbJsKeyValuePair<TKey, TValue>): Promise<DbJsKeyValuePair<TKey, TValue>>;
    add<TKey, TValue>(...entities: DbJsKeyValuePair<TKey, TValue>[]): Promise<DbJsKeyValuePair<TKey, TValue>[]>;
    update<T>(entity: T): Promise<T>;
    update<T>(...entities: T[]): Promise<T[]>;
    update<TKey, TValue>(entity: DbJsKeyValuePair<TKey, TValue>): Promise<DbJsKeyValuePair<TKey, TValue>>;
    update<TKey, TValue>(...entities: DbJsKeyValuePair<TKey, TValue>[]): Promise<DbJsKeyValuePair<TKey, TValue>[]>;
    remove<T>(key: T): Promise<T>;
    remove<T>(...keys: T[]): Promise<T[]>;
    clear(): Promise<void>;
    get<T>(key: any): Promise<T>;
    query<T>(): DbJsIndexQuery<T>;
    query<T>(index: string): DbJsIndexQuery<T>;
    count(key: any): number;
}

declare type DbJsServer = DbJsNamedObjectStoreServer & DbJsDynamicObjectServer & DbJsBaseServer;

declare module "db" {
    var db: DbJsStatic;
    export = db;
}

declare var db: DbJsStatic;