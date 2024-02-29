import { Reducer, ReducersMapObject, Store, StoreEnhancer } from "redux";

/**
 * An `InjectableStore` allows reducers to "inject" themselves into the store
 * at any time, for use with bundle splitting, large apps, and SPAs
 * @template S State object type.
 */
export interface InjectableStore<S> extends Store<S> {
    inject: (namespace: string, reducer: Reducer<S>, force?: boolean) => void;
    injectAll: (reducers: ReducersMapObject, force?: boolean) => void;
    clearReducers: () => void;
}

export type WrapReducer<S> = (reducer: Reducer<S>) => Reducer<S>;

/**
 * The `createInjectableStore` API follows the same API as Redux's
 * `createStore`, but with the first argument (`reducer`) missing,
 * and an optional additional last argument, `wrapReducer`.
 *
 * @template S State object type.
 */
export interface InjectableStoreCreator {
    <S>(
        preloadedState?: S,
        enhancer?: StoreEnhancer<S>,
        wrapReducer?: WrapReducer<S>,
    ): InjectableStore<S>;
}

export const createInjectableStore: InjectableStoreCreator;
