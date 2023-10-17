/// <reference types="node" />

declare namespace NodePersist {
    type Milliseconds = number;
    type FilterFunction<T> = (value: T, index: number, array: T[]) => boolean;

    interface InitOptions {
        dir?: string | undefined;
        stringify?: ((data: any) => string) | undefined;
        parse?: ((str: string) => any) | undefined;
        encoding?: BufferEncoding | undefined;
        logging?: ((...args: any[]) => void) | boolean | undefined;
        expiredInterval?: Milliseconds | undefined;
        forgiveParseErrors?: boolean | undefined;
        ttl?: Milliseconds | undefined;
    }

    interface DatumOptions {
        raw?: boolean | undefined;
        ttl?: Milliseconds | undefined;
    }

    interface Datum {
        key: string;
        value: any;

        ttl?: Milliseconds | undefined;
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

    function create(options?: InitOptions): LocalStorage;
    function init(options?: InitOptions): Promise<InitOptions>;

    const defaultInstance: LocalStorage | undefined;

    function setOptions(options?: InitOptions): void;

    function data(): Promise<Datum[]>;
    function keys(filter?: FilterFunction<Datum>): Promise<string[]>;
    function values(filter?: FilterFunction<Datum>): Promise<any[]>;
    function length(filter?: FilterFunction<Datum>): Promise<number>;

    function forEach(callback: (data: Datum) => Promise<void> | void): Promise<void>;

    function valuesWithKeyMatch(match?: RegExp | string): Promise<any[]>;

    function set(key: string, value: any, options?: DatumOptions): Promise<WriteFileResult>;
    function setItem(key: string, value: any, options?: DatumOptions): Promise<WriteFileResult>;

    function update(key: string, value: any, options?: DatumOptions): Promise<WriteFileResult>;
    function updateItem(key: string, value: any, options?: DatumOptions): Promise<WriteFileResult>;

    function get(key: string): Promise<any>;
    function getItem(key: string): Promise<any>;

    function getDatum(key: string): Datum | void;
    function getRawDatum(key: string): string | void;
    function getDatumValue(key: string): Datum | void;
    function getDatumPath(key: string): string;

    function del(key: string): Promise<DeleteFileResult>;
    function rm(key: string): Promise<DeleteFileResult>;
    function removeItem(key: string): Promise<DeleteFileResult>;

    function removeExpiredItems(): Promise<void>;
    function clear(): Promise<void>;

    function ensureDirectory(dir: string): Promise<EnsureDirectoryResult>;
    function readDirectory(dir: string): Promise<Datum[]>;
    function readFile(file: string, options?: DatumOptions): Promise<Datum | string>;
    function writeFile(file: string, content: Datum): Promise<WriteFileResult>;

    function stringify(obj: any): string;
    function parse(str: string | null): any;
    function copy(value: any): any;

    function startExpiredKeysInterval(): void;
    function stopExpiredKeysInterval(): void;

    function log(...args: any[]): void;

    function calcTTL(ttl: number | null | undefined): number | undefined;
}

// eslint-disable-next-line @definitelytyped/export-just-namespace
export = NodePersist;
