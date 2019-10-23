// Type definitions for continuation-local-storage 3.2
// Project: https://github.com/othiym23/node-continuation-local-storage
// Definitions by: Jang-Ho Hwang <https://github.com/rath>, Kei Son <https://github.com/heycalmdown>, Brandon Slade <https://github.com/aboveyou00>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.1

/// <reference types="node" />

export type Context = {
    [key: string]: any
};

export type Func<T> = (...args: any[]) => T;

export interface Namespace {
    readonly name: string; // Note: this is readonly because changing it does not actually rename it

    readonly active: Context; // Note: this is readonly because changing it manually will break functionality
    createContext(): Context;

    set<T>(key: string, value: T): T;
    get(key: string): any;

    run(callback: Func<void>): Context;
    run<T>(callback: Func<T>): Context;
    runAndReturn<T>(callback: Func<T>): T;
    bind(callback: Func<void>, context?: Context): Func<void>;
    bind<T>(callback: Func<T>, context?: Context): Func<T>;
    bindEmitter(emitter: NodeJS.EventEmitter): void;
    enter(context: Context): void;
    exit(context: Context): void;
}

export function createNamespace(name: string): Namespace;
export function getNamespace(name: string): Namespace;
export function destroyNamespace(name: string): void;
export function reset(): void;

// declare namespace process {
//     var namespaces: ContinuationLocalStorage.Namespace[];
// }
