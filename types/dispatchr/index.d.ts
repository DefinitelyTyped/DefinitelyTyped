// Type definitions for dispatchr 1.2
// Project: https://github.com/yahoo/fluxible#readme
// Definitions by: Ragg <https://github.com/Ragg->
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.5
/// <reference types="node" />
import { EventEmitter } from 'events';

export interface DispatcherState {
    stores: { [storeName: string]: any };
}

export interface DispatcherOption {
    stores?: StoreClass[];
    errorHandler?: (e: DispatcherError, context: DispatcherContext) => void;
}

export interface StoreClass {
    storeName: string;
    new(): Store;
}

export interface Store<S = {}> extends EventEmitter {
    dehydrate?(): S;
    rehydrate?(state: S): void;
    shouldDehydrate?(): boolean;
    emitChange(): void;
}

export interface Dispatcher {
    createContext(context: object): DispatcherContext;
    registerStore(store: StoreClass): void;
    isRegistered(store: StoreClass | string): boolean;
    getStoreName(store: StoreClass | string): string;
}

export interface DispatcherInterface {
    getContext(): DispatcherContext;
    getStore: DispatcherContext['getStore'];
    waitFor: DispatcherContext['waitFor'];
}

export interface DispatcherContext {
    getStore(name: string): Store;
    getStore<T extends StoreClass>(name: T): T;

    dispatch(actionName: string, payload: any): void;

    dehydrate(): DispatcherState;
    rehydrate(dispatcherState: DispatcherState): void;

    waitFor(stores: ReadonlyArray<string|StoreClass>, callback: () => void): void;
    dispatcherInterface: DispatcherInterface;
}

export interface DispatcherError {
    message: string;
    type: string;
    meta: {
        actionName?: string,
        payload?: any,
        error: Error
    };
}

export function createDispatcher(options: DispatcherOption): Dispatcher;
