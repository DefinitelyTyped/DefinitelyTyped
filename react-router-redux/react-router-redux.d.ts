// Type definitions for react-router-redux v2.0.4
// Project: https://github.com/rackt/react-router-redux
// Definitions by: Stepan Mikhaylyuk <https://github.com/stepancar>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

///<reference path="../react-router/react-router.d.ts"/>
///<reference path="../redux/redux.d.ts"/>

declare module ReactRouterRedux {
    interface transitionGoFunc {
        (n?: number): { type: string; payload: Object }
    }
    interface transitionToLocationFunc {
        (nextLocation: string): { type: string; payload: Object }
    }
    interface transitionFunc {
        (): { type: string; payload: Object }
    }
    interface RouteActions {
        push: transitionToLocationFunc;
        replace: transitionToLocationFunc;
        go: transitionGoFunc;
        goBack: transitionFunc;
        goForward: transitionFunc;
    }
    interface LocationState {
        location: string;
    }
    interface Middleware extends Redux.Middleware {
        listenForReplays: (store: Redux.Store) => any;
    }
}

declare module "react-router-redux" {
    import History = ReactRouter.History;
    import LocationState = ReactRouterRedux.LocationState;
    import Middleware = ReactRouterRedux.Middleware;
    import RouteActions = ReactRouterRedux.RouteActions;
    import transitionFunc = ReactRouterRedux.transitionFunc;
    import transitionToLocationFunc = ReactRouterRedux.transitionToLocationFunc;
    import transitionGoFunc = ReactRouterRedux.transitionGoFunc;

    export const TRANSITION: string;
    export const UPDATE_LOCATION: string;
    export const push: transitionToLocationFunc;
    export const replace: transitionToLocationFunc;
    export const go: transitionGoFunc;
    export const goBack: transitionFunc;
    export const goForward: transitionFunc;
    /**
    * An object that contains all the actions creators you can use to manipulate history:
    */
    export const routeActions: RouteActions;
    /**
    * A reducer function that keeps track of the router state. You must add this reducer to your app reducers when creating the store. It will return a location property in state. If you use combineReducers, it will be nested under wherever property you add it to (state.routing in the example above).
    */
    export function routeReducer(state: LocationState, action: Object): LocationState;
    /**
    * Call this to create a middleware that can be applied with Redux's applyMiddleware to allow actions to call history methods. The middleware will look for route actions created by push, replace, etc. and applies them to the history.
    */
    export function syncHistory(history: History): Middleware;
}
