// Type definitions for electron-redux 1.4
// Project: https://github.com/hardchor/electron-redux/tree/master/packages/electron-redux
// Definitions by: Haley Hitch <haley@dxdt.life>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.1

import { Action, AnyAction, Middleware, Reducer, Store } from 'redux';

type ReturnMiddleware = ReturnType<Middleware>;

type FSACompliantAction<T, TPayload> = {
    type: T;
    payload?: TPayload;
    error?: boolean;
    meta?: object;
};

type Exact<T, E> = T & { [K in keyof E]: K extends keyof T ? E[K] : never };
type NoInfer<T> = [T][T extends any ? 0 : never];

/**
 * Middleware that fowards dispatches from the renderer to main.  Use this in your renderer store.  This **must** be the
 * first middleware argument of `applyMiddleware()`.
 *
 * @example
 *
 * const myApp = combineReducers(reducers);
 * const initialState = getInitialStateRenderer<typeof myApp>(); // pulls the initial state from main thread
 *
 * const store = createStore(
 *     myApp,
 *     initialState,
 *     applyMiddleware(
 *         forwardToMain, // IMPORTANT! This goes first
 *         ...otherMiddleware,
 *     ),
 * );
 */
export function forwardToMain(): ReturnMiddleware;

/**
 * Middleware that fowards dispatches from the renderer to the main thread.  Use this in your renderer store.  This
 * **must** be the first middleware argument of `applyMiddleware()`.
 *
 * By default actions of certain type (e.g. starting with `'@@'`) are not propagated to the main thread. You can change
 * this behaviour by using `forwardToMainWithParams` function with a `blacklist` array of regular expressions.
 *
 * @example
 *
 * const myApp = combineReducers(reducers);
 * const store = createStore(
 *     myApp,
 *     initialState, // optional
 *     applyMiddleware(
 *         // IMPORTANT! This goes first
 *         forwardToMainWithParams({
 *             blacklist: [/^@@/, /^redux-form/]
 *         }),
 *         ...otherMiddleware,
 *     ),
 * );
 */
export function forwardToMainWithParams(data?: { blacklist?: RegExp[] }): () => ReturnMiddleware;

/**
 * Middleware that forwards dispatches from the main thread to the renderer.  Use this in your main store.  This MUST be
 * the last middleware argument of `applyMiddleware()`.
 *
 * @example
 *
 * const myApp = combineReducers(reducers);
 * const store = createStore(
 *     myApp,
 *     undefined, // intial state
 *     applyMiddleware(
 *         triggerAlias, // optional, see below
 *         ...otherMiddleware,
 *         forwardToRenderer, // IMPORTANT! This goes last
 *     ),
 * );
 */
export function forwardToRenderer(): ReturnMiddleware;

/**
 * Middleware that allows preventing some actions originating in the renderer from being executed in the renderer.  Use
 * this in your main store and in conjuction with `createAliasedAction`.  For more information, read the
 * [documentation](https://github.com/hardchor/electron-redux/tree/master/packages/electron-redux#aliased-actions-main-process).
 *
 * @example
 *
 * // In the main thread store.
 * const store = createStore(
 *     myApp,
 *     undefined,
 *     applyMiddleware(
 *         triggerAlias,
 *         ...otherMiddleware,
 *         forwardToRenderer,
 *     ),
 * );
 */
export function triggerAlias(): ReturnMiddleware;

/**
 * Aliases an action originating in the renderer so that it is not executed there (only being executed on the main
 * thread).  Results of the action are still propagated to the renderer.  An example use case might be fetching data
 * from an external source, or creating another `BrowserWindow` to handle logging in.
 *
 * Aliased actions **must** be [FSA-compliant](https://github.com/acdlite/flux-standard-action#example).
 *
 * @example
 * export const importGithubProjects = createAliasedAction(
 *     'IMPORT_GITHUB_PROJECTS', // unique identifier
 *     (accessToken, repoFullName) => ({
 *         type: 'IMPORT_GITHUB_PROJECTS',
 *         payload: importProjects(accessToken, repoFullName),
 *     }),
 * );
 *
 * @param id Unique identifier.
 * @param action Action being aliased.
 */
export function createAliasedAction<
    TType extends string | symbol | number,
    TPayload,
    TAction extends Exact<FSACompliantAction<NoInfer<TType>, TPayload>, TAction>
>(id: TType, action: (...args: any[]) => TAction): ReturnType<typeof action>;

/**
 * Creates a subscriber to the store that sends actions to the renderer.
 */
export function replayActionMain<S = any, A extends Action<any> = AnyAction>(store: Store<S, A>): void;

/**
 * Creates a subscriber to the store that sends actions to the main thread.
 */
export function replayActionRenderer<S = any, A extends Action<any> = AnyAction>(store: Store<S, A>): void;

/**
 * Use in the renderer store to retrieve the initial state from main store.
 *
 * @example
 *
 * const myApp = combineReducers(reducers);
 * const initialState = getInitialStateRenderer<typeof myApp>();
 */
export function getInitialStateRenderer(): any;

interface Foo<T, S> {
    foo: T;
    bar?: S;
    baz?: any;
}

export function createAliasedAction<
    T extends string | symbol | number,
    S,
    F extends Exact<FSACompliantAction<NoInfer<T>, S>, F>
>(id: T, callback: () => F): ReturnType<typeof callback>;
