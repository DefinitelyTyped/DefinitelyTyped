// Type definitions for Dexie v1.1
// Project: https://github.com/dfahlander/Dexie.js
// Definitions by: David Fahlander <http://github.com/dfahlander>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

interface Thenable<R> {
    then<U>(onFulfilled: (value: R) => Thenable<U>, onRejected: (error: any) => Thenable<U>): Thenable<U>;
    then<U>(onFulfilled: (value: R) => Thenable<U>, onRejected?: (error: any) => U): Thenable<U>;
    then<U>(onFulfilled: (value: R) => U, onRejected: (error: any) => Thenable<U>): Thenable<U>;
    then<U>(onFulfilled?: (value: R) => U, onRejected?: (error: any) => U): Thenable<U>;
}

declare class Dexie {
    constructor(databaseName: string);

    constructor(databaseName: string, options: { addons: Array<(db: Dexie) => void> });

    name: string;
    tables: Dexie.Table<any, any>[];
    verno: number;

    static addons: Array<(db: Dexie) => void>;
    static version: number;

    static getDatabaseNames(): Dexie.Promise<Array<string>>;

    static getDatabaseNames<U>(onFulfilled: (value: Array<string>) => Thenable<U>): Dexie.Promise<U>;

    static getDatabaseNames<U>(onFulfilled: (value: Array<string>) => U): Dexie.Promise<U>;

    static getByKeyPath(obj: Object, keyPath: string): any;

    static setByKeyPath(obj: Object, keyPath: string, value: any): void;

    static delByKeyPath(obj: Object, keyPath: string): void;

    static shallowClone(obj: Object): Object;

    static deepClone(obj: Object): Object;

    version(versionNumber: Number): Dexie.Version

    on: {
        (eventName: string, subscriber: () => any): void;
        (eventName: string, subscriber: () => any, bSticky: boolean): void;
        ready: Dexie.DexieOnReadyEvent;
        error: Dexie.DexieErrorEvent;
        populate: Dexie.DexieEvent;
        blocked: Dexie.DexieEvent;
        versionchange: Dexie.DexieVersionChangeEvent;
    }

    open(): Dexie.Promise<void>;

    table(tableName: string): Dexie.Table<any, any>;

    table<T>(tableName: string): Dexie.Table<T, any>;

    table<T, Key>(tableName: string): Dexie.Table<T, Key>;

    transaction<U>(mode: string, table: Dexie.Table<any, any>, scope: () => Thenable<U>): Dexie.Promise<U>;

    transaction<U>(mode: string, table: Dexie.Table<any, any>, table2: Dexie.Table<any, any>, scope: () => Thenable<U>): Dexie.Promise<U>;

    transaction<U>(mode: string, table: Dexie.Table<any, any>, table2: Dexie.Table<any, any>, table3: Dexie.Table<any, any>, scope: () => Thenable<U>): Dexie.Promise<U>;

    transaction<U>(mode: string, tables: Dexie.Table<any, any>[], scope: () => Thenable<U>): Dexie.Promise<U>;

    transaction<U>(mode: string, table: Dexie.Table<any, any>, scope: () => U): Dexie.Promise<U>;

    transaction<U>(mode: string, table: Dexie.Table<any, any>, table2: Dexie.Table<any, any>, scope: () => U): Dexie.Promise<U>;

    transaction<U>(mode: string, table: Dexie.Table<any, any>, table2: Dexie.Table<any, any>, table3: Dexie.Table<any, any>, scope: () => U): Dexie.Promise<U>;

    transaction<U>(mode: string, tables: Dexie.Table<any, any>[], scope: () => U): Dexie.Promise<U>;

    close(): void;

    delete(): Dexie.Promise<void>;

    isOpen(): boolean;

    hasFailed(): boolean;

    backendDB(): IDBDatabase;

    vip<U>(scopeFunction: () => U): U;
}

declare module Dexie {

    class Promise<R> implements Thenable<R> {
        constructor(callback: (resolve: (value?: Thenable<R>) => void, reject: (error?: any) => void) => void);

        constructor(callback: (resolve: (value?: R) => void, reject: (error?: any) => void) => void);

        then<U>(onFulfilled: (value: R) => Thenable<U>, onRejected: (error: any) => Thenable<U>): Promise<U>;

        then<U>(onFulfilled: (value: R) => Thenable<U>, onRejected?: (error: any) => U): Promise<U>;

        then<U>(onFulfilled: (value: R) => U, onRejected: (error: any) => Thenable<U>): Promise<U>;

        then<U>(onFulfilled?: (value: R) => U, onRejected?: (error: any) => U): Promise<U>;

        catch<U>(onRejected: (error: any) => Promise<U>): Promise<U>;

        catch<U>(ExceptionType: Function, onRejected: (error : any) => Promise<U>): Promise<U>;

        catch<U>(errorName: string, onRejected: (error : any) => Promise<U>): Promise<U>;

        finally<R>(onFinally: () => any): Promise<R>;

        onuncatched: () => any;
    }

    module Promise {
        function resolve<R>(value?: Thenable<R>): Promise<R>;

        function resolve<R>(value?: R): Promise<R>;

        function reject(error: any): Promise<any>;

        function all<R>(promises: Thenable<R>[]): Promise<R[]>;

        function all<R>(...promises: Thenable<R>[]): Promise<R[]>;

        function race<R>(promises: Thenable<R>[]): Promise<R>;

        function newPSD<R>(scope: () => R): R;

        var PSD: any;

        var on: {
            (eventName: string, subscriber: (...args : any[]) => any): void;
            error: DexieErrorEvent;
        }
    }


    interface Version {
        stores(schema: { [key: string]: string }): Version;
        upgrade(fn: (trans: Transaction) => void): Version;
    }

    interface Transaction {
        active: boolean;
        db: Dexie;
        mode: string;
        idbtrans: IDBTransaction;
        tables: { [type: string]: Table<any, any> };
        storeNames: Array<string>;
        on: {
            (eventName: string, subscriber: () => any): void;
            complete: DexieEvent;
            abort: DexieEvent;
            error: DexieEvent;
        }
        abort(): void;
        table(tableName: string): Table<any, any>;
        table<T>(tableName: string): Table<T, any>;
        table<T, Key>(tableName: string): Table<T, Key>;
    }

    interface DexieEvent {
        subscribe(fn: () => any) : void;
        unsubscribe(fn: () => any) : void;
        fire() : any;
    }

    interface DexieErrorEvent {
        subscribe(fn: (error: any) => any) : void;
        unsubscribe(fn: (error: any) => any) : void;
        fire(error: any) : any;
    }

    interface DexieVersionChangeEvent {
        subscribe(fn: (event: IDBVersionChangeEvent) => any) : void;
        unsubscribe(fn: (event: IDBVersionChangeEvent) => any) : void;
        fire(event: IDBVersionChangeEvent) : any;
    }

    interface DexieOnReadyEvent
    {
        subscribe(fn: () => any, bSticky: boolean) : void;
        unsubscribe(fn: () => any) : void;
        fire() : any;
    }

    interface Table<T, Key> {
        name: string;
        schema: TableSchema;
        hook: {
            (eventName: string, subscriber: () => any): void;
            creating: DexieEvent;
            reading: DexieEvent;
            updating: DexieEvent;
            deleting: DexieEvent;
        }

        get(key: Key): Promise<T>;
        where(index: string): WhereClause<T, Key>;

        filter(fn: (obj: T) => boolean): Collection<T, Key>;

        count(): Promise<number>;
        count<U>(onFulfilled: (value: number) => Thenable<U>): Promise<U>;
        count<U>(onFulfilled: (value: number) => U): Promise<U>;

        offset(n: number): Collection<T, Key>;

        limit(n: number): Collection<T, Key>;

        each(callback: (obj: T, cursor: IDBCursor) => any): Promise<void>;

        toArray(): Promise<Array<T>>;
        toArray<U>(onFulfilled: (value: Array<T>) => Thenable<U>): Promise<U>;
        toArray<U>(onFulfilled: (value: Array<T>) => U): Promise<U>;

        toCollection(): Collection<T, Key>;
        orderBy(index: string): Collection<T, Key>;
        reverse(): Collection<T, Key>;
        mapToClass(constructor: Function): Function;
        add(item: T, key?: Key): Promise<Key>;
        update(key: Key, changes: { [keyPath: string]: any }) : Promise<number>;
        put(item: T, key?: Key): Promise<Key>;
        delete(key: Key): Promise<void>;
        clear(): Promise<void>;
    }

    interface WhereClause<T, Key> {
        above(key: number): Collection<T, Key>;
        above(key: string): Collection<T, Key>;
        above(key: Date): Collection<T, Key>;
        above(key: Array<any>): Collection<T, Key>;
        aboveOrEqual(key: number): Collection<T, Key>;
        aboveOrEqual(key: string): Collection<T, Key>;
        aboveOrEqual(key: Date): Collection<T, Key>;
        aboveOrEqual(key: Array<any>): Collection<T, Key>;
        anyOf(keys: Array<any>): Collection<T, Key>;
        anyOf(...keys: any[]): Collection<T, Key>;
        below(key: number): Collection<T, Key>;
        below(key: string): Collection<T, Key>;
        below(key: Date): Collection<T, Key>;
        below(key: Array<any>): Collection<T, Key>;
        belowOrEqual(key: number): Collection<T, Key>;
        belowOrEqual(key: string): Collection<T, Key>;
        belowOrEqual(key: Date): Collection<T, Key>;
        belowOrEqual(key: Array<any>): Collection<T, Key>;
        between(lower: number, upper: number, includeLower?: boolean, includeUpper?: boolean): Collection<T, Key>;
        between(lower: string, upper: string, includeLower?: boolean, includeUpper?: boolean): Collection<T, Key>;
        between(lower: Date, upper: Date, includeLower?: boolean, includeUpper?: boolean): Collection<T, Key>;
        between(lower: Array<any>, upper: Array<any>, includeLower?: boolean, includeUpper?: boolean): Collection<T, Key>;
        equals(key: number): Collection<T, Key>;
        equals(key: string): Collection<T, Key>;
        equals(key: Date): Collection<T, Key>;
        equals(key: Array<any>): Collection<T, Key>;
        equalsIgnoreCase(key: string): Collection<T, Key>;
        startsWith(key: string): Collection<T, Key>;
        startsWithIgnoreCase(key: string): Collection<T, Key>;
    }

    interface Collection<T, Key> {
        and(filter: (x: T) => boolean): Collection<T, Key>;
        count(): Promise<number>;
        count<U>(onFulfilled: (value: number) => Thenable<U>): Promise<U>;
        count<U>(onFulfilled: (value: number) => U): Promise<U>;
        distinct(): Collection<T, Key>;
        each(callback: (obj: T, cursor: IDBCursor) => any): Promise<void>;
        eachKey(callback: (key: Key, cursor: IDBCursor) => any): Promise<void>;
        eachUniqueKey(callback: (key: Key, cursor: IDBCursor) => any): Promise<void>;
        first(): Promise<T>;
        first<U>(onFulfilled: (value: T) => Thenable<U>): Promise<U>;
        first<U>(onFulfilled: (value: T) => U): Promise<U>;
        keys(): Promise<Key[]>;
        keys<U>(onFulfilled: (value: Key[]) => Thenable<U>): Promise<U>;
        keys<U>(onFulfilled: (value: Key[]) => U): Promise<U>;
        last(): Promise<T>;
        last<U>(onFulfilled: (value: T) => Thenable<U>): Promise<U>;
        last<U>(onFulfilled: (value: T) => U): Promise<U>;
        limit(n: number): Collection<T, Key>;
        offset(n: number): Collection<T, Key>;
        or(indexOrPrimayKey: string): WhereClause<T, Key>;
        reverse(): Collection<T, Key>;
        sortBy(keyPath: string): Promise<T[]>;
        sortBy<U>(keyPath: string, onFulfilled: (value: T[]) => Thenable<U>): Promise<U>;
        sortBy<U>(keyPath: string, onFulfilled: (value: T[]) => U): Promise<U>;
        toArray(): Promise<Array<T>>;
        toArray<U>(onFulfilled: (value: Array<T>) => Thenable<U>): Promise<U>;
        toArray<U>(onFulfilled: (value: Array<T>) => U): Promise<U>;
        uniqueKeys(): Promise<Key[]>;
        uniqueKeys<U>(onFulfilled: (value: Key[]) => Thenable<U>): Promise<U>;
        uniqueKeys<U>(onFulfilled: (value: Key[]) => U): Promise<U>;
        until(filter: (value: T) => boolean, includeStopEntry?: boolean): Collection<T, Key>;
        // WriteableCollection:
        delete(): Promise<number>;
        modify(changes: { [keyPath: string]: any }): Promise<number>;
        modify(changeCallback: (obj: T) => void): Promise<number>;
    }

    interface TableSchema {
        name: string;
        primKey: IndexSpec;
        indexes: IndexSpec[];
        mappedClass: Function;
    }

    interface IndexSpec {
        name: string;
        keyPath: any;
        unique: boolean;
        multi: boolean;
        auto: boolean;
        compound: boolean;
        src: string;
    }
}

declare module 'dexie' {
    export = Dexie;
}
