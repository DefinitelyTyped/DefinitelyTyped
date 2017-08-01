// Type definitions for Redux Mock Store v0.0.7
// Project: https://github.com/arnaudbenard/redux-mock-store
// Definitions by: Marian Palkus <https://github.com/MarianPalkus>, Cap3 <http://www.cap3.de>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

///<reference types="redux" />

declare module 'redux-mock-store' {
    import * as Redux from 'redux';

    export interface MockStore<T> extends Redux.Store<T> {
        getActions(): any[];
        clearActions(): void;
    }

    export interface MockStoreCreator<T> {
        (state?: T): MockStore<T>;
    }

    function createMockStore<T>(middlewares?: Redux.Middleware[]): MockStoreCreator<T>;

    export default createMockStore;
}
