// Type definitions for cls-hooked 4.3
// Project: https://github.com/jeff-lewis/cls-hooked
// Definitions by: Leo Liang <https://github.com/aleung>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />

import { EventEmitter } from 'events';

export type Context = object;

export interface Namespace {
    active: Context | null;

    set<T>(key: string, value: T): T;
    get(key: string): any;
    run(fn: (context: Context) => void): Context;
    runAndReturn<T>(fn: (context: Context) => T): T;
    runPromise<T>(fn: (context: Context) => Promise<T>): Promise<T>;
    bind<F extends Function>(fn: F, context?: Context): F; // tslint:disable-line: ban-types
    bindEmitter(emitter: EventEmitter): void;
    createContext(): Context;
    enter(context: Context): void;
    exit(context: Context): void;
}

export function createNamespace(name: string): Namespace;
export function getNamespace(name: string): Namespace | undefined;
export function destroyNamespace(name: string): void;
export function reset(): void;
