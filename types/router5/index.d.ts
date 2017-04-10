// Type definitions for router5
// Project: https://github.com/router5/router5
// Definitions by: Matthew Dahl <https://github.com/sandersky>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped


interface constants {
    ROUTER_NOT_STARTED: String;
    ROUTER_ALREADY_STARTED: String;
    ROUTE_NOT_FOUND: String;
    SAME_STATES: String;
    CANNOT_DEACTIVATE: String;
    CANNOT_ACTIVATE: String;
    TRANSITION_ERR: String;
    TRANSITION_CANCELLED: String;
}

interface State {
    _meta: Array<Object>;
    name: String;
    params: Object;
}

interface RouteNode {
    add(route: any, cb?: Function): RouteNode;
    addNode(name?: any, params?: any): RouteNode;
    buildPath(routeName: String, params?: Object): String;
    buildPathFromSegments(segment: Array<Object>, params?: Object): String;
    buildState(name: String, params?: Object): State;
    buildStateFromSegments(segments: Array<Object>): State;
    getMetaFromSegments(segments: Array<Object>): Array<Object>;
    getPath(routeName: String): String;
    getPathFromSegments(segments: Array<Object>): String;
    getSegmentsByName(routeName: String): Array<Object>;
    getSegmentsMatchingPath(path: any, options: Object): Array<any>;
    matchPath(path: any, options?: Object): State;
    setPath(path?: any): void;
}

interface RouteNodeFactory {
    new (name?: any, path?: any, childRoutes?: any, cb?: Function): RouteNode;
    (name?: any, path?: any, childRoutes?: any, cb?: Function): RouteNode;
}

interface Router5 {
    add(routes: any): Router5;
    addNode(name: String, path: String, canActivate?: Function): Router5;
    areStatesDescendants(parentState: any, childState: any): Boolean;
    areStatesEqual(state1: any, state2: any): Boolean;
    buildPath(route: String, params: Object): String;
    buildState(route: String, params: Object): String;
    buildUrl(route: String, params: Object): String;
    canActivate(name: String, canActivate: Function): Router5;
    canDeactivate(name: String, canDeactivate: Boolean): any;
    cancel(): void;
    getAdditionalArgs(): Array<any>;
    getState(): Object;
    isActive(name: String, params?: Object, strictEquality?: Boolean, ignoreQueryParams?: Boolean): Boolean;
    matchPath(path: String): Object;
    matchUrl(url: String): Object;
    navigate(name: String, ...args: Array<Object | Function>): Function;
    setAdditionalArgs(args: Array<any>): void;
    setOption(opt: String, val: any): Router5;
    start(...args: Array<any>): Router5;
    stop(): Router5;
    urlToPath(path: String): String;
    useMiddleware(...args: Array<Function>): Router5;
    usePlugin(pluginFactory: Function): Router5;
}

interface Router5Factory {
    new (routes?: any, opts?: Object): Router5;
    (routes?: any, opts?: Object): Router5;
}

declare var errCodes: constants;
declare var loggerPlugin: () => Function;
declare var RouteNode: RouteNodeFactory;
declare var Router5: Router5Factory;
declare var transitionPath: (toState: any, fromState: any) => any;

export default Router5;
export {
errCodes,
loggerPlugin,
RouteNode,
Router5,
transitionPath
};
