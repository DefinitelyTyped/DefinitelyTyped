// Type definitions for @wordpress/data 4.6
// Project: https://github.com/WordPress/gutenberg/tree/master/packages/data/README.md
// Definitions by: Derek Sifford <https://github.com/dsifford>
//                 Jon Surrell <https://github.com/sirreal>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.6

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

/**
 * Subscribe to any changes to the store
 *
 * @param callback Will be invoked whenever there are any updates to the store.
 * @returns        A callback that can be invoked to unsubscribe.
 *
 * @example
 *
 * const unsubscribe = subscribe( () => {
 *     // You could use this opportunity to test whether the derived result of a
 *     // selector has subsequently changed as the result of a state update.
 * } );
 *
 * // Later, if necessary...
 * unsubscribe();
 *
 */
export type Subscriber = (callback: () => void) => () => void;

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
        [k: string]: (...args: readonly any[]) => Action | Generator<any>;
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

    /**
     * Use persist with the persistence plugin to persist state.
     *
     * The registry must use the `persistence` plugin.
     *
     * Set to `true` to persist all state, or pass an array of state keys to persist.
     *
     * @example
     *
     * import { plugins, registerStore, use } from '@wordpress/data';
     *
     * use( plugins.persistence, { storageKey: 'example' } );
     *
     * registerStore( 'my-plugin', {
     *   // …
     *   persist: [ 'state-key-to-persist' ],
     * } );
     */
    persist?: true | Array<keyof S>;
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
export const useDispatch: typeof dispatch & {
    (): typeof dispatch;
};

//
// React HOCs
//
export function withDispatch<DP, P = {}, IP = {}>(
    mapDispatchToProps: (disp: typeof dispatch, ownProps: P & IP, registry: { select: typeof select }) => DP,
): (component: ComponentType<P & IP & DP>) => ComponentType<P>;

export function withSelect<SP, P = {}, IP = {}>(
    mapSelectToProps: (sel: typeof select, ownProps: P & IP) => SP,
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
    registrySelector: (select: S) => (state: any, ...args: any[]) => T,
): S;

// TODO: This is probably not completely accurate. Someone else can fix this if they need it. It's not used very much.
export function createRegistryControl<R extends DataRegistry, T>(
    registryControl: (registry: R) => (args: { [k: string]: any }) => T,
): R;
