import Router from './Router';
import * as H from 'history';

export default History;

export interface HistoryRoutes {
    listen(listener: Router.RouterListener): Function;
    listenBeforeLeavingRoute(route: Router.PlainRoute, hook: Router.RouteHook): void;
    match(location: H.Location, callback: (error: any, nextState: Router.RouterState, nextLocation: H.Location) => void): void;
    isActive(pathname: H.Pathname, query?: H.Query, indexOnly?: boolean): boolean;
    setRouteLeaveHook(route: Router.PlainRoute, callback: Router.RouteHook): void;
}

export interface HistoryBase extends H.History {
    routes: Router.PlainRoute[];
    parseQueryString?: Router.ParseQueryString;
    stringifyQuery?: Router.StringifyQuery;
}

export type History = HistoryBase & H.HistoryQueries & HistoryRoutes;
export declare const browserHistory: History;
export declare const hashHistory: History;
