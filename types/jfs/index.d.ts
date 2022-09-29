// Type definitions for jfs 0.2
// Project: https://github.com/flosse/json-file-store
// Definitions by: Tomasz Łaziuk <https://github.com/tlaziuk>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.1

declare const JsonFileStore: JsonFileStore.JsonFileStore;

declare namespace JsonFileStore {
    interface Storable {
        [key: string]: any;
    }

    interface Options {
        type?: 'single' | 'memory' | undefined;
        pretty?: boolean | undefined;
        saveId?: boolean | string | undefined;
    }

    interface JsonFileStore {
        new <T extends Storable>(name?: string, opts?: Options): Instance<T>;
    }

    interface Instance<T> {
        save<K extends keyof T, V extends T[K]>(id: K, o: V, cb?: (err?: Error, id?: K) => void): void;
        save<V extends T[keyof T]>(o: V, cb?: (err?: Error, id?: string) => void): void;

        saveSync<K extends keyof T, V extends T[K]>(id: K, o: V): void;
        saveSync<V extends T[keyof T]>(o: V): void;

        get<K extends keyof T, V extends T[K]>(id: K, cb?: (err?: Error, o?: V) => void): void;

        getSync<K extends keyof T, V extends T[K]>(id: K): V | Error;

        delete<K extends keyof T>(id: K, cb?: (err?: Error) => void): void;

        deleteSync<K extends keyof T>(id: K): Error | void;

        all(cb: (err?: Error, all?: T) => void): void;

        allSync(): T;
    }
}

export = JsonFileStore;
