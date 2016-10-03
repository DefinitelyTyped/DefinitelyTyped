// Type definitions for react-router-redux v2.x - v3.x
// Project: https://github.com/rackt/react-router-redux
// Definitions by: Isman Usoh <http://github.com/isman-usoh>, Noah Shipley <https://github.com/noah79>, Dimitri Rosenberg <https://github.com/rosendi>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference path="../redux/redux.d.ts" />
/// <reference path="../react-router/react-router.d.ts"/>

declare namespace ReactRouterRedux {
    import R = Redux;
    import H = HistoryModule;

    const TRANSITION: string;
    const UPDATE_LOCATION: string;

    const push: PushAction;
    const replace: ReplaceAction;
    const go: GoAction;
    const goBack: GoForwardAction;
    const goForward: GoBackAction;
    const routeActions: RouteActions;

    type LocationDescriptor = H.LocationDescriptor;
    type PushAction = (nextLocation: LocationDescriptor) => void;
    type ReplaceAction = (nextLocation: LocationDescriptor) => void;
    type GoAction = (n: number) => void;
    type GoForwardAction = () => void;
    type GoBackAction = () => void;

    interface RouteActions {
        push: PushAction;
        replace: ReplaceAction;
        go: GoAction;
        goForward: GoForwardAction;
        goBack: GoBackAction;
    }
    interface HistoryMiddleware extends R.Middleware {
        listenForReplays(store: R.Store<any>, selectLocationState?: Function): void;
        unsubscribe(): void;
    }

    function routeReducer(state?: any, options?: any): R.Reducer<any>;
    function syncHistory(history: H.History): HistoryMiddleware;
}

declare module "react-router-redux" {
    export = ReactRouterRedux;
}
