// Type definitions for Redux v1.0.0
// Project: https://github.com/rackt/redux
// Definitions by: William Buchwalter <https://github.com/wbuchwalter/>, Vincent Prouillet <https://github.com/Keats/>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

declare module Redux {
    // FSA-compliant action (from redux-actions.d.ts)
    // See: https://github.com/acdlite/flux-standard-action
    type Action = {
        type: string
        payload?: any
        error?: boolean
        meta?: any
    };

	// Not used...?
	interface ActionCreator extends Function {
        (...args: any[]): Action;
    }

	// Also not used here...
	interface StoreMethods<T,A extends Action> {
        dispatch: Dispatch;
        getState(): T;
    }

	// Reducer is a function that takes a state of type T and an
	// action and returns a new state, also of type T
    interface Reducer<T> extends Function {
        (state: T, action: any): T;
    }

	// Dispatch is a function that takes an action of type A and
	// returns an instance of that same action (still of type A)
    interface Dispatch extends Function {
        <A extends Action>(action: A): A;
    }

	// MiddlewareArg is an instance of middleware that provides a
	// dispatch method and a getState method.  The type parameter T is
	// the type of the state.  No type parameter is provided on
	// Dispatch because the middleware generally needs to be able to
	// handle any type of action.
    interface MiddlewareArg<T> {
        dispatch: Dispatch;
        getState: () => T;
    }

	// Middleware is constructed from an instance of MiddlewareArg<T> where
	// T is the type of the state.
    interface Middleware<T> extends Function {
        (obj: MiddlewareArg<T>): Function;
    }

	// Store manages the state of the system.  The state of the system
	// should be of type T.
    class Store<T> {
        getReducer(): Reducer<T>;
        replaceReducer(nextReducer: Reducer<T>): void;
        dispatch<A extends Action>(action: A): A;
        getState(): T;
        subscribe(listener: () => void): () => void;
    }

	// StoreCreator describes any function that can be used to create
	// a Store<T> (where T is the type of the state).  This type is
	// used to describe the return type of applyMiddleware since
	// produces special function that can be used to create a store
	// that integrates a collection of middleware.
	interface StoreCreator<T> extends Function {
		(reducer: Reducer<T>, initialState?: T): Store<T>;
	}

    function createStore<T>(reducer: Reducer<T>, initialState?: T): Store<T>;
    function bindActionCreators<C>(actionCreators: C, dispatch: Dispatch): C;
    function combineReducers<T>(reducers: { [key: string]: Reducer<T> }): Reducer<T>;
    function applyMiddleware<T>(...middlewares: Middleware<T>[]): (c: StoreCreator<T>) => StoreCreator<T>;
    function compose<T extends Function>(...functions: Function[]): T;
}

declare module "redux" {
    export = Redux;
}
