// Type definitions for node-persist 3.0
// Project: https://github.com/simonlast/node-persist
// Definitions by: Spencer Williams <http://spencerwi.com/>,
//                 Samuel Elliott <https://github.com/samuelthomas2774>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

/// <reference types="node" />

declare namespace NodePersist {
    type Milliseconds = number;
    type FilterFunction<T> = (value: T, index: number, array: T[]) => boolean;

    interface InitOptions {
        dir?: string;
        stringify?: (data: any) => string;
        parse?: (str: string) => any;
        encoding?: BufferEncoding;
        logging?: boolean;
        expiredInterval?: Milliseconds;
        forgiveParseErrors?: boolean;
        ttl?: Milliseconds;
    }

    interface DatumOptions {
        raw?: boolean;
    }

    interface Datum {
        key: string;
        value: any;

        ttl?: number;
    }

    interface EnsureDirectoryResult {
        dir: string;
    }

    interface WriteFileResult {
        file: string;
        content: any;
    }

    interface DeleteFileResult {
        file: string;
        removed: boolean;
        existed: boolean;
    }

    class LocalStorage {
        constructor(options?: InitOptions);

        init(options?: InitOptions): Promise<InitOptions>;
        setOptions(options?: InitOptions): void;

        data(): Promise<Datum[]>;
        keys(filter?: FilterFunction<Datum>): Promise<string[]>;
        values(filter?: FilterFunction<Datum>): Promise<any[]>;
        length(filter?: FilterFunction<Datum>): Promise<number>;

        forEach(callback: (data: Datum) => Promise<void> | void): Promise<void>;

        valuesWithKeyMatch(match?: RegExp | string): Promise<any[]>;

        set(key: string, value: any, options?: DatumOptions): Promise<WriteFileResult>;
        setItem(key: string, value: any, options?: DatumOptions): Promise<WriteFileResult>;

        update(key: string, value: any, options?: DatumOptions): Promise<WriteFileResult>;
        updateItem(key: string, value: any, options?: DatumOptions): Promise<WriteFileResult>;

        get(key: string): Promise<any>;
        getItem(key: string): Promise<any>;

        getDatum(key: string): Datum | void;
        getRawDatum(key: string): string | void;
        getDatumValue(key: string): Datum | void;
        getDatumPath(key: string): string;

        del(key: string): Promise<DeleteFileResult>;
        rm(key: string): Promise<DeleteFileResult>;
        removeItem(key: string): Promise<DeleteFileResult>;

        removeExpiredItems(): Promise<void>;
        clear(): Promise<void>;

        ensureDirectory(dir: string): Promise<EnsureDirectoryResult>;
        readDirectory(dir: string): Promise<Datum[]>;
        readFile(file: string, options?: DatumOptions): Promise<Datum | string>;
        writeFile(file: string, content: Datum): Promise<WriteFileResult>;

        stringify(obj: any): string;
        parse(str: string | null): any;
        copy(value: any): any;

        startExpiredKeysInterval(): void;
        stopExpiredKeysInterval(): void;

        log(...args: any[]): void;

        calcTTL(ttl: number | null | undefined): number | undefined;
    }

    export function create(options?: InitOptions): LocalStorage;
    export function init(options?: InitOptions): Promise<InitOptions>;

    export const defaultInstance: LocalStorage | undefined;

    export function setOptions(options?: InitOptions): void;

    export function data(): Promise<Datum[]>;
    export function keys(filter?: FilterFunction<Datum>): Promise<string[]>;
    export function values(filter?: FilterFunction<Datum>): Promise<any[]>;
    export function length(filter?: FilterFunction<Datum>): Promise<number>;

    export function forEach(callback: (data: Datum) => Promise<void> | void): Promise<void>;

    export function valuesWithKeyMatch(match?: RegExp | string): Promise<any[]>;

    export function set(key: string, value: any, options?: DatumOptions): Promise<WriteFileResult>;
    export function setItem(key: string, value: any, options?: DatumOptions): Promise<WriteFileResult>;

    export function update(key: string, value: any, options?: DatumOptions): Promise<WriteFileResult>;
    export function updateItem(key: string, value: any, options?: DatumOptions): Promise<WriteFileResult>;

    export function get(key: string): Promise<any>;
    export function getItem(key: string): Promise<any>;

    export function getDatum(key: string): Datum | void;
    export function getRawDatum(key: string): string | void;
    export function getDatumValue(key: string): Datum | void;
    export function getDatumPath(key: string): string;

    export function del(key: string): Promise<DeleteFileResult>;
    export function rm(key: string): Promise<DeleteFileResult>;
    export function removeItem(key: string): Promise<DeleteFileResult>;

    export function removeExpiredItems(): Promise<void>;
    export function clear(): Promise<void>;

    export function ensureDirectory(dir: string): Promise<EnsureDirectoryResult>;
    export function readDirectory(dir: string): Promise<Datum[]>;
    export function readFile(file: string, options?: DatumOptions): Promise<Datum | string>;
    export function writeFile(file: string, content: Datum): Promise<WriteFileResult>;

    export function stringify(obj: any): string;
    export function parse(str: string | null): any;
    export function copy(value: any): any;

    export function startExpiredKeysInterval(): void;
    export function stopExpiredKeysInterval(): void;

    export function log(...args: any[]): void;

    export function calcTTL(ttl: number | null | undefined): number | undefined;
}

export = NodePersist;
