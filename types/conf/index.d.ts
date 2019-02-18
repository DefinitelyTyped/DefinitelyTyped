// Type definitions for conf 2.1
// Project: https://github.com/sindresorhus/conf
// Definitions by: Sam Verschueren <https://github.com/SamVerschueren>
//                 BendingBender <https://github.com/BendingBender>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

/// <reference types="node" />

declare class Conf<T = any> implements Iterable<[string, T]> {
    store: { [key: string]: T };
    readonly path: string;
    readonly size: number;

    constructor(options?: Conf.Options<T>);
    get(key: string, defaultValue?: T): T;
    set(key: string, val: T): void;
    set(object: { [key: string]: T }): void;
    has(key: string): boolean;
    delete(key: string): void;
    clear(): void;
    onDidChange(key: string, callback: (oldVal: T | undefined, newVal: T | undefined) => void): void;
    [Symbol.iterator](): Iterator<[string, T]>;
}

declare namespace Conf {
    interface Options<T> {
        defaults?: { [key: string]: T };
        configName?: string;
        projectName?: string;
        cwd?: string;
        encryptionKey?: string | Buffer | NodeJS.TypedArray | DataView;
        fileExtension?: string;
    }
}

export = Conf;
