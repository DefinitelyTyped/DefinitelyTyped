﻿// Type definitions for Mozilla's localForage
// Project: https://github.com/mozilla/localforage
// Definitions by: yuichi david pichsenmeister <https://github.com/3x14159265>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

interface LocalForageOptions {
    driver?: string | LocalForageDriver | LocalForageDriver[];

    name?: string;

    size?: number;

    storeName?: string;

    version?: number;

    description?: string;
}

interface LocalForageDbMethods {
    getItem<T>(key: string): Promise<T>;
    getItem<T>(key: string, callback: (err: any, value: T) => void): void;

    setItem<T>(key: string, value: T): Promise<T>;
    setItem<T>(key: string, value: T, callback: (err: any, value: T) => void): void;

    removeItem(key: string): Promise<void>;
    removeItem(key: string, callback: (err: any) => void): void;

    clear(): Promise<void>;
    clear(callback: (err: any) => void): void;

    length(): Promise<number>;
    length(callback: (err: any, numberOfKeys: number) => void): void;

    key(keyIndex: number): Promise<string>;
    key(keyIndex: number, callback: (err: any, key: string) => void): void;

    keys(): Promise<string[]>;
    keys(callback: (err: any, keys: string[]) => void): void;

    iterate(iteratee: (value: any, key: string, iterationNumber: number) => any): Promise<any>;
    iterate(iteratee: (value: any, key: string, iterationNumber: number) => any,
            callback: (err: any, result: any) => void): void;
}

interface LocalForageDriverSupportFunc {
    (): Promise<boolean>;
}

interface LocalForageDriver extends LocalForageDbMethods {
    _driver: string;

    _initStorage(options: LocalForageOptions): void;

    _support: boolean | LocalForageDriverSupportFunc;
}

interface LocalForageSerializer {
    serialize<T>(value: T | ArrayBuffer | Blob, callback: (value: string, error: any) => {}): void;

    deserialize<T>(value: string): T | ArrayBuffer | Blob;

    stringToBuffer(serializedString: string): ArrayBuffer;

    bufferToString(buffer: ArrayBuffer): string;
}

interface LocalForage extends LocalForageDbMethods {
    LOCALSTORAGE: string;
    WEBSQL: string;
    INDEXEDDB: string;

    /**
    * Set and persist localForage options. This must be called before any other calls to localForage are made, but can be called after localForage is loaded.
    * If you set any config values with this method they will persist after driver changes, so you can call config() then setDriver()
    * @param {ILocalForageConfig} options?
    */
    config(options: LocalForageOptions): boolean;

    /**
     * Create a new instance of localForage to point to a different store.
     * All the configuration options used by config are supported.
     * @param {LocalForageOptions} options
     */
    createInstance(options: LocalForageOptions): LocalForage;

    driver(): string;
    /**
    * Force usage of a particular driver or drivers, if available.
    * @param {string} driver
    */
    setDriver(driver: string | string[]): Promise<void>;
    setDriver(driver: string | string[], callback: () => void, errorCallback: (error: any) => void): void;
    defineDriver(driver: LocalForageDriver): Promise<void>;
    defineDriver(driver: LocalForageDriver, callback: () => void, errorCallback: (error: any) => void): void;
    /**
    * Return a particular driver
    * @param {string} driver
    */
    getDriver(driver: string): Promise<LocalForageDriver>;

    getSerializer(): Promise<LocalForageSerializer>;
    getSerializer(callback: (serializer: LocalForageSerializer) => void): void;

    supports(driverName: string): boolean;
}

declare module "localforage" {
    let localforage: LocalForage;
    export = localforage;
}
