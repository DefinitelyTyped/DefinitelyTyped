/// <reference types="node" />

declare namespace NodePersist {
    type Milliseconds = number;
    type FilterFunction<T> = (value: T, index: number, array: T[]) => boolean;

    interface InitOptions {
        /**
         * @default '.' + pkg.name + '/storage'
         */
        dir?: string | undefined;

        /**
         * @default JSON.stringify
         */
        stringify?: (data: any) => string | undefined;

        /**
         * @default JSON.parse
         */
        parse?: (str: string) => any;

        /**
         * @default utf8
         */
        encoding?: BufferEncoding | undefined;

        /**
         * Whether or not to enable logging. Can also be custom logging function
         * @default false
         */
        logging?: boolean | ((...args: any[]) => void) | undefined;

        /**
         * Interval in which the process will clean-up the expired cache (in milliseconds)
         * @default 2 * 60 * 1000 // (2 minutes)
         */
        expiredInterval?: Milliseconds | undefined;

        /**
         * In some cases, you (or some other service) might add non-valid storage files to your
         * storage dir, i.e. Google Drive, make this true if you'd like to ignore these files and not throw an error
         * @default false
         */
        forgiveParseErrors?: boolean | undefined;

        /**
         * Can be true for 24h default or a number in MILLISECONDS or a valid Javascript Date object
         * @default false
         */
        ttl?: Milliseconds | boolean | undefined;

        /**
         * Instead of writing to file immediately, each "file" will have its own mini queue to avoid corrupted files. Keep in mind that this would not properly work in multi-process setting.
         * @default true
         */
        writeQueue?: boolean | undefined;

        /**
         * How often to check for pending writes in Milliseconds, don't worry if you feel like 1s is a lot, it actually tries to process every time you setItem as well
         * @default 1000
         */
        writeQueueIntervalMs?: Milliseconds | undefined;

        /**
         * If you setItem() multiple times to the same key, only the last one would be set, BUT the others would still resolve with the results of the last one, if you turn this to false, each one will execute, but might slow down the writing process.
         * @default true
         */
        writeQueueWriteOnlyLast?: boolean | undefined;
    }

    interface DatumOptions {
        raw?: boolean | undefined;
        ttl?: Milliseconds | undefined;
    }

    interface Datum {
        key: string;
        value: any;

        ttl?: Milliseconds;
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

        // eslint-disable-next-line @typescript-eslint/no-invalid-void-type
        getDatum(key: string): Datum | void;
        // eslint-disable-next-line @typescript-eslint/no-invalid-void-type
        getRawDatum(key: string): string | void;
        // eslint-disable-next-line @typescript-eslint/no-invalid-void-type
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

        calcTTL(ttl?: number | null): number | undefined;
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

    // eslint-disable-next-line @typescript-eslint/no-invalid-void-type
    function getDatum(key: string): Datum | void;
    // eslint-disable-next-line @typescript-eslint/no-invalid-void-type
    function getRawDatum(key: string): string | void;
    // eslint-disable-next-line @typescript-eslint/no-invalid-void-type
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

    function calcTTL(ttl?: number | null): number | undefined;
}

// eslint-disable-next-line @definitelytyped/export-just-namespace
export = NodePersist;
