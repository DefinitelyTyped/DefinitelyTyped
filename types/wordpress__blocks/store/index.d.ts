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

//
// Core functionality
//
export type SelectorMap = Record<string, <T = unknown>(...args: readonly any[]) => T>;
export type DispatcherMap = Record<string, <T = void>(...args: readonly any[]) => T>;

//
// @wordpress/data GenericStoreConfig type
//
export interface GenericStoreConfig {
    getActions(): DispatcherMap;
    getSelectors(): SelectorMap;
    subscribe: Subscriber;
}

export const store: GenericStoreConfig;
