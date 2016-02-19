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

    interface CountableQuery<T> {
        count(): ExecutableQuery<T>;
    }
    
    interface KeysQuery<T> extends DescableQuery<T>, ExecutableQuery<T>, FilterableQuery<T>, DistinctableQuery<T>, MappableQuery<T>    {
    } 

    interface KeyableQuery<T> {
        keys(): KeysQuery<T>;
    }
    
    interface FilterQuery<T> extends KeyableQuery<T>, ExecutableQuery<T>, FilterableQuery<T>, DescableQuery<T>, DistinctableQuery<T>, ModifiableQuery<T>, LimitableQuery<T>, MappableQuery<T> {
    }

    interface FilterableQuery<T> {
        filter<TValue>(index: string, value: TValue): FilterQuery<T>;
        filter(filter: (value: T) => boolean): FilterQuery<T>;
    }
    
    interface DescQuery<T> extends KeyableQuery<T>, CountableQuery<T>, ExecutableQuery<T>, FilterableQuery<T>, DescableQuery<T>, ModifiableQuery<T>, MappableQuery<T> {    
    }

    interface DescableQuery<T> {
        desc(): DescQuery<T>;
    }
    
    interface DistinctQuery<T> extends KeyableQuery<T>, ExecutableQuery<T>, FilterableQuery<T>, DescableQuery<T>, ModifiableQuery<T>, MappableQuery<T>, CountableQuery<T> {
    }

    interface DistinctableQuery<T> {
        distinct(filter: (value: T) => boolean): DistinctQuery<T>;
    }

    interface ModifiableQuery<T> {
        modify(filter: (value: T) => boolean): ExecutableQuery<T>;
    }

    interface LimitableQuery<T> {
        limit(n, m): ExecutableQuery<T>;
    }

    interface MappableQuery<T> {
        map<TMap>(fn: (value: T) => TMap): Query<TMap>;
    }
    
    interface Query<T> extends KeyableQuery<T>, ExecutableQuery<T>, FilterableQuery<T>, DescableQuery<T>, DistinctableQuery<T>, ModifiableQuery<T>, LimitableQuery<T>, MappableQuery<T>, CountableQuery<T> {
    }

    interface IndexQuery<T> extends Query<T> {
        only(): Query<T>;
        bound(): Query<T>;
        upperBound(): Query<T>;
        lowerBound(): Query<T>;
        range(opts): Query<T>;
        all(): Query<T>;
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
        count(table: string, key: any): Promise<number>;
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
        count(key: any): Promise<number>;
    }
    
    type Server = DbJs.ObjectStoreServer & DbJs.BaseServer;
}

declare module "db" {
    var db: DbJs.DbJsStatic;
    export = db;
}

declare var db: DbJs.DbJsStatic;
