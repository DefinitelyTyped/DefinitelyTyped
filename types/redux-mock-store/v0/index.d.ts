import * as Redux from "redux";

declare namespace reduxMockStore {
    type MockStore<T> = Redux.Store<T>;
    type MockStoreCreator<T = {}> = (state?: T) => MockStore<T>;

    interface ConfigureStore {
        <T>(middlewares?: Redux.Middleware[]): MockStoreCreator<T>;
    }
}

declare const reduxMockStore: reduxMockStore.ConfigureStore;

export = reduxMockStore;
