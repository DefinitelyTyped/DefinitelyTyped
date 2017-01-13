// Type definitions for react-router-redux v4.0.0
// Project: https://github.com/rackt/react-router-redux
// Definitions by: Isman Usoh <http://github.com/isman-usoh>, Noah Shipley <https://github.com/noah79>, Dimitri Rosenberg <https://github.com/rosendi>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="react-router"/>

import * as Redux from "redux";
import * as History from "history";

export = ReactRouterRedux;

declare namespace ReactRouterRedux {
    import R = Redux;

    const CALL_HISTORY_METHOD: string;
    const LOCATION_CHANGE: string;

    const push: PushAction;
    const replace: ReplaceAction;
    const go: GoAction;
    const goBack: GoForwardAction;
    const goForward: GoBackAction;
    const routerActions: RouteActions;

    type LocationDescriptor = History.LocationDescriptor;
    type PushAction = (nextLocation: LocationDescriptor) => RouterAction;
    type ReplaceAction = (nextLocation: LocationDescriptor) => RouterAction;
    type GoAction = (n: number) => RouterAction;
    type GoForwardAction = () => RouterAction;
    type GoBackAction = () => RouterAction;

    type RouterAction = {
        type: string
        payload?: LocationDescriptor
    }

    interface RouteActions {
        push: PushAction;
        replace: ReplaceAction;
        go: GoAction;
        goForward: GoForwardAction;
        goBack: GoBackAction;
    }
    interface ReactRouterReduxHistory extends History.History {
        unsubscribe(): void;
    }

    interface DefaultSelectLocationState extends Function {
        (state: any): any;
    }

    interface SyncHistoryWithStoreOptions {
        selectLocationState?: DefaultSelectLocationState;
        adjustUrlOnReplay?: boolean;
    }

    interface RouterState {
        locationBeforeTransitions: History.Location
    }

    function routerReducer(state?: RouterState, action?: R.Action): RouterState;
    function syncHistoryWithStore(history: History.History, store: R.Store<any>, options?: SyncHistoryWithStoreOptions): ReactRouterReduxHistory;
    function routerMiddleware(history: History.History): R.Middleware;
}
