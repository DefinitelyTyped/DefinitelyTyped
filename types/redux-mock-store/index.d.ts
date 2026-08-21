import * as Redux from "redux";

export interface MockStore<S = any, A extends Redux.Action = Redux.AnyAction> extends Redux.Store<S, A> {
    getActions(): any[];
    clearActions(): void;
}

export type MockStoreEnhanced<S = {}, DispatchExts = {}> = MockStore<S> & { dispatch: DispatchExts };

export type MockStoreCreator<S = {}, DispatchExts = {}> = (
    state?: S | MockGetState<S>,
) => MockStoreEnhanced<S, DispatchExts>;

export type MockGetState<S = {}> = (actions: Redux.AnyAction[]) => S;

/**
 * @deprecated
 *
 * The Redux team does not recommend using this package for testing. Instead, check out our {@link https://redux.js.org/recipes/writing-tests testing docs} to learn more about testing Redux code.
 *
 * Testing with a mock store leads to potentially confusing behaviour, such as state not updating when actions are dispatched. Additionally, it's a lot less useful to assert on the actions dispatched rather than the observable state changes.
 *
 * You can test the entire combination of action creators, reducers, and selectors in a single test, for example:
 * ```js
 * it("should add a todo", () => {
 *   const store = makeStore(); // a user defined reusable store factory
 *
 *   store.dispatch(addTodo("Use Redux"));
 *
 *   expect(selectTodos(store.getState())).toEqual([{ text: "Use Redux", completed: false }]);
 * });
 * ```
 *
 * This avoids common pitfalls of testing each of these in isolation, such as mocked state shape becoming out of sync with the actual application.
 *
 * If you want to use `configureStore` without this visual deprecation warning, use the `legacy_configureStore` export instead.
 *
 * `import { legacy_configureStore as configureStore } from 'redux-mock-store';`
 */
export function configureStore<S, DispatchExts = {}>(
    middlewares?: Redux.Middleware[],
): MockStoreCreator<S, DispatchExts>;

/**
 * Create Mock Store returns a function that will create a mock store from a state
 * with the same set of set of middleware applied.
 *
 * @param middlewares The list of middleware to be applied.
 * @template S The type of state to be held by the store.
 * @template DispatchExts The additional Dispatch signatures for the middlewares applied.
 */
export const legacy_configureStore: typeof configureStore;

export default configureStore;
