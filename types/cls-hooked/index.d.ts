/// <reference types="node" />

import { EventEmitter } from "events";

export interface Namespace<N = Record<string, any>> {
    active: any;

    set<K extends keyof N = keyof N>(key: K, value: N[K]): N[K];
    get<K extends keyof N = keyof N>(key: K): N[K];
    run(fn: (...args: any[]) => void): void;
    runAndReturn<T>(fn: (...args: any[]) => T): T;
    runPromise<T>(fn: (...args: any[]) => Promise<T>): Promise<T>;
    bind<F extends Function>(fn: F, context?: any): F; // eslint-disable-line @typescript-eslint/no-unsafe-function-type
    bindEmitter(emitter: EventEmitter): void;
    createContext(): any;
    enter(context: any): void;
    exit(context: any): void;
}

// eslint-disable-next-line @definitelytyped/no-unnecessary-generics
export function createNamespace<N = Record<string, any>>(name: string): Namespace<N>;
// eslint-disable-next-line @definitelytyped/no-unnecessary-generics
export function getNamespace<N = Record<string, any>>(name: string): Namespace<N> | undefined;
export function destroyNamespace(name: string): void;
export function reset(): void;
