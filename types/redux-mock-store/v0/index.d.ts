import * as Redux from "redux";

export interface MockStore<T> extends Redux.Store<T> {
    getActions(): any[];
    clearActions(): void;
}

export type MockStoreCreator<T = {}> = (state?: T) => MockStore<T>;

declare function createMockStore<T>(middlewares?: Redux.Middleware[]): MockStoreCreator<T>;

export default createMockStore;
