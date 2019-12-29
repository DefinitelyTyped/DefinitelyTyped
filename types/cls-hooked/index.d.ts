// Type definitions for cls-hooked 4.3
// Project: https://github.com/jeff-lewis/cls-hooked
// Definitions by: Leo Liang <https://github.com/aleung>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />

import { EventEmitter } from 'events';

export interface Namespace {
    active: any;

    set<T>(key: string, value: T): T;
    get(key: string): any;
    run(fn: (...args: any[]) => void): void;
    runAndReturn<T>(fn: (...args: any[]) => T): T;
    runPromise<T>(fn: (...args: any[]) => Promise<T>): Promise<T>;
    bind<F extends Function>(fn: F, context?: any): F; // tslint:disable-line: ban-types
    bindEmitter(emitter: EventEmitter): void;
    createContext(): any;
    enter(context: any): void;
    exit(context: any): void;
}

export function createNamespace(name: string): Namespace;
export function getNamespace(name: string): Namespace;
export function destroyNamespace(name: string): void;
export function reset(): void;
