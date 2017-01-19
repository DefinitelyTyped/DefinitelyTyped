// Type definitions for react-router-redux 3.x
// Project: https://github.com/rackt/react-router-redux
// Definitions by: Isman Usoh <http://github.com/isman-usoh>, Noah Shipley <https://github.com/noah79>, Dimitri Rosenberg <https://github.com/rosendi>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import * as Redux from "redux";
import * as History from "history";

declare namespace ReactRouterRedux {
    const TRANSITION: string;
    const UPDATE_LOCATION: string;

    const push: PushAction;
    const replace: ReplaceAction;
    const go: GoAction;
    const goBack: GoForwardAction;
    const goForward: GoBackAction;
    const routeActions: RouteActions;

    type LocationDescriptor = History.LocationDescriptor;
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
    interface HistoryMiddleware extends Redux.Middleware {
        listenForReplays(store: Redux.Store<any>, selectLocationState?: Function): void;
        unsubscribe(): void;
    }

    function routeReducer(state?: any, options?: any): Redux.Reducer<any>;
    function syncHistory(history: History.History): HistoryMiddleware;
}

export = ReactRouterRedux;
