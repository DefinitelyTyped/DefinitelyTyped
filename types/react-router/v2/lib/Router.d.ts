import * as React from 'react';
import RouterContext from './RouterContext';
import {
    QueryString, Query,
    Location, LocationDescriptor, LocationState as HLocationState,
    History, Href,
    Pathname, Path } from 'history';

declare const Router: Router;
interface Router extends React.ComponentClass<Router.RouterProps> { }

export default Router;

// types based on https://github.com/rackt/react-router/blob/master/docs/Glossary.md

declare namespace Router {
    type RouteConfig = React.ReactNode | PlainRoute | PlainRoute[];
    type RoutePattern = string;
    interface RouteComponents { [key: string]: RouteComponent; }

    type ParseQueryString = (queryString: QueryString) => Query;
    type StringifyQuery = (queryObject: Query) => QueryString;

    type Component = React.ReactType;
    type RouteComponent = Component;

    type EnterHook = (nextState: RouterState, replace: RedirectFunction, callback?: Function) => void;
    type LeaveHook = () => void;
    type ChangeHook = (prevState: RouterState, nextState: RouterState, replace: RedirectFunction, callback: Function) => void;
    type RouteHook = (nextLocation?: Location) => any;

    interface Params { [param: string]: string; }

    type RouterListener = (error: Error, nextState: RouterState) => void;

    interface LocationDescriptor {
        pathname?: Pathname;
        query?: Query;
        hash?: Href;
        state?: HLocationState;
    }

    interface RedirectFunction {
        (location: LocationDescriptor): void;
        /**
        * @deprecated `replaceState(state, pathname, query) is deprecated; Use `replace(location)` with a location descriptor instead. http://tiny.cc/router-isActivedeprecated
        */
        (state: HLocationState, pathname: Pathname | Path, query?: Query): void;
    }

    interface RouterState {
        location: Location;
        routes: PlainRoute[];
        params: Params;
        components: RouteComponent[];
    }

    interface RouterProps extends React.Props<Router> {
        history?: History;
        routes?: RouteConfig; // alias for children
        createElement?: (component: RouteComponent, props: Object) => any;
        onError?: (error: any) => any;
        onUpdate?: () => any;
        parseQueryString?: ParseQueryString;
        stringifyQuery?: StringifyQuery;
        basename?: string;
        render?: (renderProps: React.Props<{}>) => RouterContext;
    }

    interface PlainRoute {
        path?: RoutePattern;
        component?: RouteComponent;
        components?: RouteComponents;
        getComponent?: (location: Location, cb: (error: any, component?: RouteComponent) => void) => void;
        getComponents?: (location: Location, cb: (error: any, components?: RouteComponents) => void) => void;
        onEnter?: EnterHook;
        onLeave?: LeaveHook;
        indexRoute?: PlainRoute;
        getIndexRoute?: (location: Location, cb: (error: any, indexRoute: RouteConfig) => void) => void;
        childRoutes?: PlainRoute[];
        getChildRoutes?: (location: Location, cb: (error: any, childRoutes: RouteConfig) => void) => void;
    }

    interface RouteComponentProps<P, R> {
        history?: History;
        location: Location;
        params: P;
        route?: PlainRoute;
        routeParams?: R;
        routes?: PlainRoute[];
        children?: React.ReactElement;
    }

    interface RouterOnContext extends History {
        setRouteLeaveHook(route: PlainRoute, hook?: RouteHook): () => void;
        isActive(pathOrLoc: Path | LocationDescriptor, indexOnly?: boolean): boolean;
    }

    // Wrap a component using withRouter(Component) to provide a router object
    // to the Component's props, allowing the Component to programmatically call
    // push and other functions.
    //
    // https://github.com/reactjs/react-router/blob/v2.4.0/upgrade-guides/v2.4.0.md

    interface InjectedRouter {
        push: (pathOrLoc: Path | LocationDescriptor) => void;
        replace: (pathOrLoc: Path | LocationDescriptor) => void;
        go: (n: number) => void;
        goBack: () => void;
        goForward: () => void;
        setRouteLeaveHook(route: PlainRoute, callback: RouteHook): void;
        createPath(path: History.Path, query?: History.Query): History.Path;
        createHref(path: History.Path, query?: History.Query): History.Href;
        isActive: (pathOrLoc: Path | LocationDescriptor, indexOnly?: boolean) => boolean;
    }
}
