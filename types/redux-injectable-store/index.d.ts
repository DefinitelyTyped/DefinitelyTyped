// Type definitions for redux-injectable-store 1.0
// Project: https://github.com/lelandrichardson/redux-injectable-store#readme
// Definitions by: Daniel Perez Alvarez <https://github.com/unindented>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import { Reducer, Store, StoreEnhancer } from "redux";

export interface InjectableStore<S> extends Store<S> {
    inject(namespace: string, reducer: Reducer<any>): void;
    injectAll(reducers: { [key: string]: Reducer<any> }): void;
    clearReducers(): void;
}

export type WrapReducer<S> = (reducer: Reducer<S>) => Reducer<S>;

export interface InjectableStoreCreator {
    <S>(
        enhancer?: StoreEnhancer<S>,
        wrapReducer?: WrapReducer<S>
    ): InjectableStore<S>;
    <S>(
        preloadedState: S,
        enhancer?: StoreEnhancer<S>,
        wrapReducer?: WrapReducer<S>
    ): InjectableStore<S>;
}

export const createInjectableStore: InjectableStoreCreator;
