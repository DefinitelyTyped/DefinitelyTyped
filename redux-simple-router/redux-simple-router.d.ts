// Type definitions for redux-simple-router v2.0.4
// Project: https://github.com/rackt/redux-simple-router
// Definitions by: Daniel Chao <https://github.com/bioball>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

///<reference path="../react-router/react-router.d.ts"/>
///<reference path="../redux/redux.d.ts"/>

declare module ReduxSimpleRouter {
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

declare module "redux-simple-router" {
    import History = ReactRouter.History;
    import LocationState = ReduxSimpleRouter.LocationState;
    import Middleware = ReduxSimpleRouter.Middleware;
    import RouteActions = ReduxSimpleRouter.RouteActions;
    import transitionFunc = ReduxSimpleRouter.transitionFunc;
    import transitionToLocationFunc = ReduxSimpleRouter.transitionToLocationFunc;
    import transitionGoFunc = ReduxSimpleRouter.transitionGoFunc;

    export const TRANSITION: string;
    export const UPDATE_LOCATION: string;
    export const push: transitionToLocationFunc;
    export const replace: transitionToLocationFunc;
    export const go: transitionGoFunc;
    export const goBack: transitionFunc;
    export const goForward: transitionFunc;

    export const routeActions: RouteActions;

    export function routeReducer(state: LocationState, action: Object): LocationState;

    export function syncHistory(history: History): Middleware;
}
