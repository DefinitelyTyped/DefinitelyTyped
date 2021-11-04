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

    type Component = React.ElementType;
    type RouteComponent = Component;

    type EnterHook = (nextState: RouterState, replace: RedirectFunction, callback?: Function) => void;
    type LeaveHook = () => void;
    type ChangeHook = (prevState: RouterState, nextState: RouterState, replace: RedirectFunction, callback: Function) => void;
    type RouteHook = (nextLocation?: Location) => any;

    interface Params { [param: string]: string; }

    type RouterListener = (error: Error, nextState: RouterState) => void;

    interface LocationDescriptor {
        pathname?: Pathname | undefined;
        query?: Query | undefined;
        hash?: Href | undefined;
        state?: HLocationState | undefined;
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

    interface RouterProps {
        children?: React.ReactNode;
        ref?: React.LegacyRef<Router> | undefined;
        history?: History | undefined;
        routes?: RouteConfig | undefined; // alias for children
        createElement?: ((component: RouteComponent, props: Object) => any) | undefined;
        onError?: ((error: any) => any) | undefined;
        onUpdate?: (() => any) | undefined;
        parseQueryString?: ParseQueryString | undefined;
        stringifyQuery?: StringifyQuery | undefined;
        basename?: string | undefined;
        render?: ((renderProps: { children?: React.ReactNode; ref?: React.LegacyRef<{}> | undefined; }) => RouterContext) | undefined;
    }

    interface PlainRoute {
        path?: RoutePattern | undefined;
        component?: RouteComponent | undefined;
        components?: RouteComponents | undefined;
        getComponent?: ((location: Location, cb: (error: any, component?: RouteComponent) => void) => void) | undefined;
        getComponents?: ((location: Location, cb: (error: any, components?: RouteComponents) => void) => void) | undefined;
        onEnter?: EnterHook | undefined;
        onLeave?: LeaveHook | undefined;
        indexRoute?: PlainRoute | undefined;
        getIndexRoute?: ((location: Location, cb: (error: any, indexRoute: RouteConfig) => void) => void) | undefined;
        childRoutes?: PlainRoute[] | undefined;
        getChildRoutes?: ((location: Location, cb: (error: any, childRoutes: RouteConfig) => void) => void) | undefined;
    }

    interface RouteComponentProps<P, R> {
        history?: History | undefined;
        location: Location;
        params: P;
        route?: PlainRoute | undefined;
        routeParams?: R | undefined;
        routes?: PlainRoute[] | undefined;
        children?: React.ReactElement | undefined;
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
