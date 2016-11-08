// Type definitions for Redux v3.5.2
// Project: https://github.com/reactjs/redux
// Definitions by: William Buchwalter <https://github.com/wbuchwalter/>, Vincent Prouillet <https://github.com/Keats/>, Kaur Kuut <https://github.com/xStrom>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare namespace Redux {
    /**
     * An *action* is a plain object that represents an intention to change the
     * state. Actions are the only way to get data into the store. Any data,
     * whether from UI events, network callbacks, or other sources such as
     * WebSockets needs to eventually be dispatched as actions.
     *
     * Actions must have a `type` field that indicates the type of action being
     * performed. Types can be defined as constants and imported from another
     * module. It’s better to use strings for `type` than Symbols because strings
     * are serializable.
     *
     * Other than `type`, the structure of an action object is really up to you.
     * If you’re interested, check out Flux Standard Action for recommendations on
     * how actions should be constructed.
     */
    interface Action {
      type: any;
    }


    /* reducers */

    /**
     * A *reducer* (also called a *reducing function*) is a function that accepts
     * an accumulation and a value and returns a new accumulation. They are used
     * to reduce a collection of values down to a single value
     *
     * Reducers are not unique to Redux—they are a fundamental concept in
     * functional programming.  Even most non-functional languages, like
     * JavaScript, have a built-in API for reducing. In JavaScript, it's
     * `Array.prototype.reduce()`.
     *
     * In Redux, the accumulated value is the state object, and the values being
     * accumulated are actions. Reducers calculate a new state given the previous
     * state and an action. They must be *pure functions*—functions that return
     * the exact same output for given inputs. They should also be free of
     * side-effects. This is what enables exciting features like hot reloading and
     * time travel.
     *
     * Reducers are the most important concept in Redux.
     *
     * *Do not put API calls into reducers.*
     *
     * @template S State object type.
     */
    type Reducer<S> = <A extends Action>(state: S, action: A) => S;

    /**
     * Object whose values correspond to different reducer functions.
     */
    interface ReducersMapObject {
      [key: string]: Reducer<any>;
    }

    /**
     * Turns an object whose values are different reducer functions, into a single
     * reducer function. It will call every child reducer, and gather their results
     * into a single state object, whose keys correspond to the keys of the passed
     * reducer functions.
     *
     * @template S Combined state object type.
     *
     * @param reducers An object whose values correspond to different reducer
     *   functions that need to be combined into one. One handy way to obtain it
     *   is to use ES6 `import * as reducers` syntax. The reducers may never
     *   return undefined for any action. Instead, they should return their
     *   initial state if the state passed to them was undefined, and the current
     *   state for any unrecognized action.
     *
     * @returns A reducer function that invokes every reducer inside the passed
     *   object, and builds a state object with the same shape.
     */
    function combineReducers<S>(reducers: ReducersMapObject): Reducer<S>;


    /* store */

    /**
     * A *dispatching function* (or simply *dispatch function*) is a function that
     * accepts an action or an async action; it then may or may not dispatch one
     * or more actions to the store.
     *
     * We must distinguish between dispatching functions in general and the base
     * `dispatch` function provided by the store instance without any middleware.
     *
     * The base dispatch function *always* synchronously sends an action to the
     * store’s reducer, along with the previous state returned by the store, to
     * calculate a new state. It expects actions to be plain objects ready to be
     * consumed by the reducer.
     *
     * Middleware wraps the base dispatch function. It allows the dispatch
     * function to handle async actions in addition to actions. Middleware may
     * transform, delay, ignore, or otherwise interpret actions or async actions
     * before passing them to the next middleware.
     */
    interface Dispatch<S> {
        <A extends Action>(action: A): A;
    }

    /**
     * Function to remove listener added by `Store.subscribe()`.
     */
    interface Unsubscribe {
      (): void;
    }

    /**
     * A store is an object that holds the application’s state tree.
     * There should only be a single store in a Redux app, as the composition
     * happens on the reducer level.
     *
     * @template S State object type.
     */
    interface Store<S> {
      /**
       * Dispatches an action. It is the only way to trigger a state change.
       *
       * The `reducer` function, used to create the store, will be called with the
       * current state tree and the given `action`. Its return value will be
       * considered the **next** state of the tree, and the change listeners will
       * be notified.
       *
       * The base implementation only supports plain object actions. If you want
       * to dispatch a Promise, an Observable, a thunk, or something else, you
       * need to wrap your store creating function into the corresponding
       * middleware. For example, see the documentation for the `redux-thunk`
       * package. Even the middleware will eventually dispatch plain object
       * actions using this method.
       *
       * @param action A plain object representing “what changed”. It is a good
       *   idea to keep actions serializable so you can record and replay user
       *   sessions, or use the time travelling `redux-devtools`. An action must
       *   have a `type` property which may not be `undefined`. It is a good idea
       *   to use string constants for action types.
       *
       * @returns For convenience, the same action object you dispatched.
       *
       * Note that, if you use a custom middleware, it may wrap `dispatch()` to
       * return something else (for example, a Promise you can await).
       */
      dispatch: Dispatch<S>;

      /**
       * Reads the state tree managed by the store.
       *
       * @returns The current state tree of your application.
       */
      getState(): S;

      /**
       * Adds a change listener. It will be called any time an action is
       * dispatched, and some part of the state tree may potentially have changed.
       * You may then call `getState()` to read the current state tree inside the
       * callback.
       *
       * You may call `dispatch()` from a change listener, with the following
       * caveats:
       *
       * 1. The subscriptions are snapshotted just before every `dispatch()` call.
       * If you subscribe or unsubscribe while the listeners are being invoked,
       * this will not have any effect on the `dispatch()` that is currently in
       * progress. However, the next `dispatch()` call, whether nested or not,
       * will use a more recent snapshot of the subscription list.
       *
       * 2. The listener should not expect to see all states changes, as the state
       * might have been updated multiple times during a nested `dispatch()` before
       * the listener is called. It is, however, guaranteed that all subscribers
       * registered before the `dispatch()` started will be called with the latest
       * state by the time it exits.
       *
       * @param listener A callback to be invoked on every dispatch.
       * @returns A function to remove this change listener.
       */
      subscribe(listener: () => void): Unsubscribe;

      /**
       * Replaces the reducer currently used by the store to calculate the state.
       *
       * You might need this if your app implements code splitting and you want to
       * load some of the reducers dynamically. You might also need this if you
       * implement a hot reloading mechanism for Redux.
       *
       * @param nextReducer The reducer for the store to use instead.
       */
      replaceReducer(nextReducer: Reducer<S>): void;
    }

    /**
     * A store creator is a function that creates a Redux store. Like with
     * dispatching function, we must distinguish the base store creator,
     * `createStore(reducer, preloadedState)` exported from the Redux package, from
     * store creators that are returned from the store enhancers.
     *
     * @template S State object type.
     */
    interface StoreCreator {
      <S>(reducer: Reducer<S>, enhancer?: StoreEnhancer<S>): Store<S>;
      <S>(reducer: Reducer<S>, preloadedState: S, enhancer?: StoreEnhancer<S>): Store<S>;
    }

    /**
     * A store enhancer is a higher-order function that composes a store creator
     * to return a new, enhanced store creator. This is similar to middleware in
     * that it allows you to alter the store interface in a composable way.
     *
     * Store enhancers are much the same concept as higher-order components in
     * React, which are also occasionally called “component enhancers”.
     *
     * Because a store is not an instance, but rather a plain-object collection of
     * functions, copies can be easily created and modified without mutating the
     * original store. There is an example in `compose` documentation
     * demonstrating that.
     *
     * Most likely you’ll never write a store enhancer, but you may use the one
     * provided by the developer tools. It is what makes time travel possible
     * without the app being aware it is happening. Amusingly, the Redux
     * middleware implementation is itself a store enhancer.
     */
    type StoreEnhancer<S> = (next: StoreEnhancerStoreCreator<S>) => StoreEnhancerStoreCreator<S>;
    type GenericStoreEnhancer = <S>(next: StoreEnhancerStoreCreator<S>) => StoreEnhancerStoreCreator<S>;
    type StoreEnhancerStoreCreator<S> = (reducer: Reducer<S>, preloadedState?: S) => Store<S>;

    /**
     * Creates a Redux store that holds the state tree.
     * The only way to change the data in the store is to call `dispatch()` on it.
     *
     * There should only be a single store in your app. To specify how different
     * parts of the state tree respond to actions, you may combine several
     * reducers
     * into a single reducer function by using `combineReducers`.
     *
     * @template S State object type.
     *
     * @param reducer A function that returns the next state tree, given the
     *   current state tree and the action to handle.
     *
     * @param [preloadedState] The initial state. You may optionally specify it to
     *   hydrate the state from the server in universal apps, or to restore a
     *   previously serialized user session. If you use `combineReducers` to
     *   produce the root reducer function, this must be an object with the same
     *   shape as `combineReducers` keys.
     *
     * @param [enhancer] The store enhancer. You may optionally specify it to
     *   enhance the store with third-party capabilities such as middleware, time
     *   travel, persistence, etc. The only store enhancer that ships with Redux
     *   is `applyMiddleware()`.
     *
     * @returns A Redux store that lets you read the state, dispatch actions and
     *   subscribe to changes.
     */
    const createStore: StoreCreator;


    /* middleware */

    interface MiddlewareAPI<S> {
      dispatch: Dispatch<S>;
      getState(): S;
    }

    /**
     * A middleware is a higher-order function that composes a dispatch function
     * to return a new dispatch function. It often turns async actions into
     * actions.
     *
     * Middleware is composable using function composition. It is useful for
     * logging actions, performing side effects like routing, or turning an
     * asynchronous API call into a series of synchronous actions.
     */
    interface Middleware {
      <S>(api: MiddlewareAPI<S>): (next: Dispatch<S>) => Dispatch<S>;
    }

    /**
     * Creates a store enhancer that applies middleware to the dispatch method
     * of the Redux store. This is handy for a variety of tasks, such as
     * expressing asynchronous actions in a concise manner, or logging every
     * action payload.
     *
     * See `redux-thunk` package as an example of the Redux middleware.
     *
     * Because middleware is potentially asynchronous, this should be the first
     * store enhancer in the composition chain.
     *
     * Note that each middleware will be given the `dispatch` and `getState`
     * functions as named arguments.
     *
     * @param middlewares The middleware chain to be applied.
     * @returns A store enhancer applying the middleware.
     */
    function applyMiddleware(...middlewares: Middleware[]): GenericStoreEnhancer;


    /* action creators */

    /**
     * An *action creator* is, quite simply, a function that creates an action. Do
     * not confuse the two terms—again, an action is a payload of information, and
     * an action creator is a factory that creates an action.
     *
     * Calling an action creator only produces an action, but does not dispatch
     * it. You need to call the store’s `dispatch` function to actually cause the
     * mutation. Sometimes we say *bound action creators* to mean functions that
     * call an action creator and immediately dispatch its result to a specific
     * store instance.
     *
     * If an action creator needs to read the current state, perform an API call,
     * or cause a side effect, like a routing transition, it should return an
     * async action instead of an action.
     *
     * @template A Returned action type.
     */
    interface ActionCreator<A> {
      (...args: any[]): A;
    }

    /**
     * Object whose values are action creator functions.
     */
    interface ActionCreatorsMapObject {
      [key: string]: ActionCreator<any>;
    }

    /**
     * Turns an object whose values are action creators, into an object with the
     * same keys, but with every function wrapped into a `dispatch` call so they
     * may be invoked directly. This is just a convenience method, as you can call
     * `store.dispatch(MyActionCreators.doSomething())` yourself just fine.
     *
     * For convenience, you can also pass a single function as the first argument,
     * and get a function in return.
     *
     * @param actionCreator An object whose values are action creator functions.
     *   One handy way to obtain it is to use ES6 `import * as` syntax. You may
     *   also pass a single function.
     *
     * @param dispatch The `dispatch` function available on your Redux store.
     *
     * @returns The object mimicking the original object, but with every action
     *   creator wrapped into the `dispatch` call. If you passed a function as
     *   `actionCreator`, the return value will also be a single function.
     */
    function bindActionCreators<A extends ActionCreator<any>>(actionCreator: A, dispatch: Dispatch<any>): A;

    function bindActionCreators<
      A extends ActionCreator<any>,
      B extends ActionCreator<any>
      >(actionCreator: A, dispatch: Dispatch<any>): B;

    function bindActionCreators<M extends ActionCreatorsMapObject>(actionCreators: M, dispatch: Dispatch<any>): M;

    function bindActionCreators<
      M extends ActionCreatorsMapObject,
      N extends ActionCreatorsMapObject
      >(actionCreators: M, dispatch: Dispatch<any>): N;


    /* compose */

    /**
     * Composes single-argument functions from right to left. The rightmost
     * function can take multiple arguments as it provides the signature for the
     * resulting composite function.
     *
     * @param funcs The functions to compose.
     * @returns R function obtained by composing the argument functions from right
     *   to left. For example, `compose(f, g, h)` is identical to doing
     *   `(...args) => f(g(h(...args)))`.
     */
    function compose(): <R>(a: R, ...args: any[]) => R;

    function compose<A, R>(
      f1: (b: A) => R,
      f2: (...args: any[]) => A
    ): (...args: any[]) => R;

    function compose<A, B, R>(
      f1: (b: B) => R,
      f2: (a: A) => B,
      f3: (...args: any[]) => A
    ): (...args: any[]) => R;

    function compose<A, B, C, R>(
      f1: (b: C) => R,
      f2: (a: B) => C,
      f3: (a: A) => B,
      f4: (...args: any[]) => A
    ): (...args: any[]) => R;

    function compose<R>(
      f1: (a: any) => R,
      ...funcs: Function[]
    ): (...args: any[]) => R;
}

declare module "redux" {
    export = Redux;
}
