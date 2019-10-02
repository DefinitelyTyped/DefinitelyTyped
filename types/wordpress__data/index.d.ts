// Type definitions for @wordpress/data 4.6
// Project: https://github.com/WordPress/gutenberg/tree/master/packages/data/README.md
// Definitions by: Derek Sifford <https://github.com/dsifford>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.5

import { ComponentType, Consumer, Provider, useContext } from '@wordpress/element';
import { AnyAction as Action, combineReducers, Reducer } from 'redux';

/**
 * Re-exports
 */
export { Action, combineReducers };

//
// Core functionality
//
export type SelectorMap = Record<string, <T = unknown>(...args: readonly any[]) => T>;
export type DispatcherMap = Record<string, <T = void>(...args: readonly any[]) => T>;
export type Subscriber = (callback: () => void) => void;

export function dispatch(key: string): DispatcherMap;
export function select(key: string): SelectorMap;
export const subscribe: Subscriber;

//
// Stores
//
export interface GenericStoreConfig {
    getActions(): DispatcherMap;
    getSelectors(): SelectorMap;
    subscribe: Subscriber;
}
export interface StoreConfig<S> {
    reducer: Reducer<S>;
    actions?: {
        [k: string]: (...args: readonly any[]) => Action | IterableIterator<any>;
    };
    selectors?: {
        [k: string]: (state: S, ...args: readonly any[]) => any;
    };
    resolvers?: {
        [k: string]: (...args: readonly any[]) => any;
    };
    controls?: {
        [k: string]: (action: Action) => any;
    };
    initialState?: S;
}
export interface Store<S, A extends Action = Action> {
    getState(): S;
    subscribe: Subscriber;
    dispatch(action: A): A;
}

export function registerGenericStore(key: string, config: GenericStoreConfig): void;
export function registerStore<T = {}>(key: string, config: StoreConfig<T>): void;

//
// Registry
//
export interface DataRegistry {
    dispatch: typeof dispatch;
    registerGenericStore: typeof registerGenericStore;
    registerStore: typeof registerStore;
    select: typeof select;
    subscribe: typeof subscribe;
}

export function createRegistry(storeConfigs?: object, parent?: DataRegistry): DataRegistry;

export const RegistryConsumer: Consumer<DataRegistry>;
export const RegistryProvider: Provider<DataRegistry>;

//
// React Hooks
//
export function useRegistry(): DataRegistry;
export function useSelect<T>(mapSelect: (s: typeof select) => T, deps?: readonly any[]): T;
export function useDispatch(storeName: string): DispatcherMap;
export function useDispatch(): typeof dispatch;

//
// React HOCs
//
export function withDispatch<DP, P = {}, IP = {}>(
    mapDispatchToProps: (disp: typeof dispatch, ownProps: P & IP, registry: { select: typeof select }) => DP
): (component: ComponentType<P & IP & DP>) => ComponentType<P>;

export function withSelect<SP, P = {}, IP = {}>(
    mapSelectToProps: (sel: typeof select, ownProps: P & IP) => SP
): (component: ComponentType<P & IP & SP>) => ComponentType<P>;

export function withRegistry<P = {}>(component: ComponentType<P>): ComponentType<P & { registry: DataRegistry }>;

//
// Plugins
//
export type Plugin<T extends Record<string, any>> = (registry: DataRegistry, options: T) => Partial<DataRegistry>;

export const plugins: {
    persistence: Plugin<{
        storage?: Pick<Storage, 'getItem' | 'setItem'> & Partial<Storage>;
        storageKey?: string;
    }>;
};

export function use<T>(plugin: Plugin<T>, options: T): DataRegistry;

//
// Factory functions
//
// TODO: This is probably not completely accurate. Someone else can fix this if they need it. It's not used very much.
export function createRegistrySelector<S extends typeof select, T>(
    registrySelector: (select: S) => (state: any, ...args: any[]) => T
): S;

// TODO: This is probably not completely accurate. Someone else can fix this if they need it. It's not used very much.
export function createRegistryControl<R extends DataRegistry, T>(
    registryControl: (registry: R) => (args: { [k: string]: any }) => T
): R;
