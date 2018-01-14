// Type definitions for Redux Mock Store 0.0.1
// Project: https://github.com/arnaudbenard/redux-mock-store
// Definitions by: Marian Palkus <https://github.com/MarianPalkus>, Cap3 <http://www.cap3.de>
// Definitions: https://github.com/borisyankov/DefinitelyTyped
// TypeScript Version: 2.3

import * as Redux from 'redux';

export interface MockStore<T> extends Redux.Store<T> {
    getActions(): any[];
    clearActions(): void;
}

export type MockStoreCreator<T = {}> = (state?: T) => MockStore<T>;

declare function createMockStore<T>(middlewares?: Redux.Middleware[]): MockStoreCreator<T>;

export default createMockStore;
