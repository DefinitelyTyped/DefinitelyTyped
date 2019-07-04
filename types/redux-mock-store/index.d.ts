// Type definitions for Redux Mock Store 1.0.0
// Project: https://github.com/arnaudbenard/redux-mock-store
// Definitions by: Marian Palkus <https://github.com/MarianPalkus>, Cap3 <http://www.cap3.de>
// Definitions: https://github.com/borisyankov/DefinitelyTyped
// TypeScript Version: 2.3

import * as Redux from 'redux';

export interface MockStore<S = any, A extends Redux.Action = Redux.AnyAction> extends Redux.Store<S, A> {
    getActions(): any[];
    clearActions(): void;
}

export type MockStoreEnhanced<S = {}, DispatchExts = {}> = MockStore<S> & {dispatch: DispatchExts};

export type MockStoreCreator<S = {}, DispatchExts = {}> = (state?: S | MockGetState<S>) => MockStoreEnhanced<S, DispatchExts>;

export type MockGetState<S = {}> = (actions: Redux.AnyAction[]) => S;

/**
 * Create Mock Store returns a function that will create a mock store from a state
 * with the same set of set of middleware applied.
 *
 * @param middlewares The list of middleware to be applied.
 * @template S The type of state to be held by the store.
 * @template DispatchExts The additional Dispatch signatures for the middlewares applied.
 */
declare function createMockStore<S, DispatchExts = {}>(middlewares?: Redux.Middleware[]): MockStoreCreator<S, DispatchExts>;

export default createMockStore;
