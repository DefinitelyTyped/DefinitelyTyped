// Type definitions for redux-persist 4.0
// Project: https://github.com/rt2zz/redux-persist
// Definitions by: Karol Janyst <https://github.com/LKay>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import { Action, GenericStoreEnhancer, Store } from "redux";

export interface PersistAction<S> extends Action {
    payload?: S;
    error?: any;
}

export interface PersistorRehydrateOptions {
    serial?: boolean;
}

export interface Persistor {
    purge(keys?: string[]): void;
    rehydrate<A>(incoming: A, options?: PersistorRehydrateOptions): A;
    pause(): void;
    resume(): void;
}

export type PersistCallback<A> = (err: any, response?: A) => void;

export interface PersistTransformer {
    in(state: any, key: string): any;
    out(state: any, key: string): any;
}

export interface PersistStorage {
    setItem(key: string, value: any, callback?: PersistCallback<void>): Promise<void>;
    getItem<A>(key: string, callback?: PersistCallback<A>): Promise<A>;
    removeItem(key: string, callback?: PersistCallback<void>): Promise<void>;
    getAllKeys<A>(callback?: PersistCallback<A>): Promise<A>;
    [key: string]: any;
}

export type PersistStateReconciler<A, B, C> = (state: A, inboundState: B, reducedState: C, log?: boolean) => C;

export interface PersistAutoRehydrateConfig<A, B, C> {
    stateReconcile?: PersistStateReconciler<A, B, C>;
}

export interface PersistConfig {
    whitelist?: string[];
    blacklist?: string[];
    transforms?: PersistTransformer[];
    storage?: PersistStorage;
    debounce?: number;
    keyPrefix?: string;
    serialize?: (data: any) => string;
    deserialize?: (data: string) => any;
}

export function autoRehydrate<A, B ,C> (config?: PersistAutoRehydrateConfig<A, B, C>): GenericStoreEnhancer;

export function createPersistor<A> (store: Store<A>, config?: PersistConfig): Persistor;

export function createTransform (inbound: any, outbound: any, config?: PersistConfig): PersistTransformer;

export function getStoredState(config?: PersistConfig, callback?: PersistCallback<any>): Promise<any>;

export function persistStore<A> (store: Store<A>, config?: PersistConfig, callback?: PersistCallback<any>): Persistor;

export function purgeStoredState (config?: PersistConfig, keys?: string[]): Promise<void>;
