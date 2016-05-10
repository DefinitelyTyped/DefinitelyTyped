// Type definitions for react-router v2.0.0
// Project: https://github.com/rackt/react-router
// Definitions by: Sergey Buturlakin <https://github.com/sergey-buturlakin>, Yuichi Murata <https://github.com/mrk21>, Václav Ostrožlík <https://github.com/vasek17>, Nathan Brown <https://github.com/ngbrown>, Alex Wendland <https://github.com/awendland>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped


/// <reference path="../react/react.d.ts" />
/// <reference path="./history.d.ts"/>


declare namespace ReactRouter {

    import React = __React

    import H = HistoryModule

    // types based on https://github.com/rackt/react-router/blob/master/docs/Glossary.md

    type Component = React.ReactType

    type EnterHook = (nextState: RouterState, replace: RedirectFunction, callback?: Function) => void

    type LeaveHook = () => void

    type ChangeHook = (prevState: RouterState, nextState: RouterState, replace: RedirectFunction, callback: Function) => void;

    type Params = { [param: string]: string }

    type ParseQueryString = (queryString: H.QueryString) => H.Query

    interface RedirectFunction {
        (location: H.LocationDescriptor): void;
        /**
        * @deprecated `replaceState(state, pathname, query) is deprecated; Use `replace(location)` with a location descriptor instead. http://tiny.cc/router-isActivedeprecated
        */
        (state: H.LocationState, pathname: H.Pathname | H.Path, query?: H.Query): void;
    }

    type RouteComponent = Component

    // use the following interface in an app code to get access to route param values, history, location...
    // interface MyComponentProps extends ReactRouter.RouteComponentProps<{}, { id: string }> {}
    // somewhere in MyComponent
    // ...
    //   let id = parseInt(this.props.routeParams.id, 10);
    // ...
    //   this.props.history. ...
    // ...
    interface RouteComponentProps<P, R> {
        history?: History
        location?: H.Location
        params?: P
        route?: PlainRoute
        routeParams?: R
        routes?: PlainRoute[]
        children?: React.ReactElement<any>
    }

    type RouteComponents = { [key: string]: RouteComponent }

    type RouteConfig = React.ReactNode | PlainRoute | PlainRoute[]

    type RouteHook = (nextLocation?: H.Location) => any

    type RoutePattern = string

    type StringifyQuery = (queryObject: H.Query) => H.QueryString

    type RouterListener = (error: Error, nextState: RouterState) => void

    interface RouterState {
        location: H.Location
        routes: PlainRoute[]
        params: Params
        components: RouteComponent[]
    }


    interface HistoryBase extends H.History {
        routes: PlainRoute[]
        parseQueryString?: ParseQueryString
        stringifyQuery?: StringifyQuery
    }

    type History = HistoryBase & H.HistoryQueries & HistoryRoutes
    const browserHistory: History;
    const hashHistory: History;

    function createMemoryHistory(options?: H.HistoryOptions): H.History

    interface Middleware {
        renderRouterContext: (previous: React.Props<{}>[], props: React.Props<{}>) => React.Props<{}>[]
        renderRouteComponent: (previous: React.Props<{}>[], props: React.Props<{}>) => React.Props<{}>[]
    }

    function applyRouterMiddleware(...middlewares: Middleware[]): (renderProps: React.Props<{}>) => React.Props<{}>[]

    /* components */

    interface RouterProps extends React.Props<Router> {
        history?: H.History
        routes?: RouteConfig // alias for children
        createElement?: (component: RouteComponent, props: Object) => any
        onError?: (error: any) => any
        onUpdate?: () => any
        parseQueryString?: ParseQueryString
        render?: (renderProps: React.Props<{}>) => React.Props<{}>[]
        stringifyQuery?: StringifyQuery
    }
    interface Router extends React.ComponentClass<RouterProps> {}
    interface RouterElement extends React.ReactElement<RouterProps> {}
    const Router: Router


    interface LinkProps extends React.HTMLAttributes, React.Props<Link> {
        activeStyle?: React.CSSProperties
        activeClassName?: string
        onlyActiveOnIndex?: boolean
        to: RoutePattern | H.LocationDescriptor
        query?: H.Query
        state?: H.LocationState
    }
    interface Link extends React.ComponentClass<LinkProps> {}
    interface LinkElement extends React.ReactElement<LinkProps> {}
    const Link: Link


    const IndexLink: Link


    interface RouterContextProps extends React.Props<RouterContext> {
        history?: H.History
        router: Router
        createElement: (component: RouteComponent, props: Object) => any
        location: H.Location
        routes: RouteConfig
        params: Params
        components?: RouteComponent[]
    }
    interface RouterContext extends React.ComponentClass<RouterContextProps> {}
    interface RouterContextElement extends React.ReactElement<RouterContextProps> {
        history?: H.History
        location: H.Location
        router?: Router
    }
    const RouterContext: RouterContext


    /* components (configuration) */

    interface RouteProps extends React.Props<Route> {
        path?: RoutePattern
        component?: RouteComponent
        components?: RouteComponents
        getComponent?: (nextState: RouterState, cb: (error: any, component?: RouteComponent) => void) => void
        getComponents?: (nextState: RouterState, cb: (error: any, components?: RouteComponents) => void) => void
        onEnter?: EnterHook
        onLeave?: LeaveHook
        onChange?: ChangeHook
        getIndexRoute?: (location: H.Location, cb: (error: any, indexRoute: RouteConfig) => void) => void
        getChildRoutes?: (location: H.Location, cb: (error: any, childRoutes: RouteConfig) => void) => void
    }
    interface Route extends React.ComponentClass<RouteProps> {}
    interface RouteElement extends React.ReactElement<RouteProps> {}
    const Route: Route


    interface PlainRoute {
        path?: RoutePattern
        component?: RouteComponent
        components?: RouteComponents
        getComponent?: (nextState: RouterState, cb: (error: any, component?: RouteComponent) => void) => void
        getComponents?: (nextState: RouterState, cb: (error: any, components?: RouteComponents) => void) => void
        onEnter?: EnterHook
        onLeave?: LeaveHook
        indexRoute?: PlainRoute
        getIndexRoute?: (location: H.Location, cb: (error: any, indexRoute: RouteConfig) => void) => void
        childRoutes?: PlainRoute[]
        getChildRoutes?: (location: H.Location, cb: (error: any, childRoutes: RouteConfig) => void) => void
    }


    interface RedirectProps extends React.Props<Redirect> {
        path?: RoutePattern
        from?: RoutePattern // alias for path
        to: RoutePattern
        query?: H.Query
        state?: H.LocationState
    }
    interface Redirect extends React.ComponentClass<RedirectProps> {}
    interface RedirectElement extends React.ReactElement<RedirectProps> {}
    const Redirect: Redirect


    interface IndexRouteProps extends React.Props<IndexRoute> {
        component?: RouteComponent
        components?: RouteComponents
        getComponent?: (nextState: RouterState, cb: (error: any, component?: RouteComponent) => void) => void
        getComponents?: (nextState: RouterState, cb: (error: any, components?: RouteComponents) => void) => void
        onEnter?: EnterHook
        onLeave?: LeaveHook
    }
    interface IndexRoute extends React.ComponentClass<IndexRouteProps> {}
    interface IndexRouteElement extends React.ReactElement<IndexRouteProps> {}
    const IndexRoute: IndexRoute


    interface IndexRedirectProps extends React.Props<IndexRedirect> {
        to: RoutePattern
        query?: H.Query
        state?: H.LocationState
    }
    interface IndexRedirect extends React.ComponentClass<IndexRedirectProps> {}
    interface IndexRedirectElement extends React.ReactElement<IndexRedirectProps> {}
    const IndexRedirect: IndexRedirect

    interface RouterOnContext extends H.History {
        setRouteLeaveHook(route: PlainRoute, hook?: RouteHook): () => void;
        isActive(pathOrLoc: H.LocationDescriptor, indexOnly?: boolean): boolean;
    }

    /* mixins */

    interface HistoryMixin {
        history: History
    }
    const History: React.Mixin<any, any>


    interface LifecycleMixin {
        routerWillLeave(nextLocation: H.Location): string | boolean
    }
    const Lifecycle: React.Mixin<any, any>


    const RouteContext: React.Mixin<any, any>

    /* Higher Order Component */

    // Wrap a component using withRouter(Component) to provide a router object
    // to the Component's props, allowing the Component to programmatically call
    // push and other functions.
    //
    // https://github.com/reactjs/react-router/blob/v2.4.0/upgrade-guides/v2.4.0.md

    interface InjectedRouter {
        push: (pathOrLoc: H.LocationDescriptor) => void
        replace: (pathOrLoc: H.LocationDescriptor) => void
        go: (n: number) => void
        goBack: () => void
        goForward: () => void
        setRouteLeaveHook(route: PlainRoute, callback: RouteHook): void
        createPath(path: H.Path, query?: H.Query): H.Path
        createHref(path: H.Path, query?: H.Query): H.Href
        isActive: (pathOrLoc: H.LocationDescriptor, indexOnly?: boolean) => boolean
    }

    function withRouter<C extends React.ComponentClass<any> | React.StatelessComponent<any> | React.PureComponent<any, any>>(component: C): C

    /* utils */

    interface HistoryRoutes {
        listen(listener: RouterListener): Function
        listenBeforeLeavingRoute(route: PlainRoute, hook: RouteHook): void
        match(location: H.Location, callback: (error: any, nextState: RouterState, nextLocation: H.Location) => void): void
        isActive(pathname: H.Pathname, query?: H.Query, indexOnly?: boolean): boolean
        setRouteLeaveHook(route: PlainRoute, callback: RouteHook): void
    }

    function useRoutes<T>(createHistory: HistoryModule.CreateHistory<T>): HistoryModule.CreateHistory<T & HistoryRoutes>


    function createRoutes(routes: RouteConfig): PlainRoute[]


    interface MatchArgs {
        routes?: RouteConfig
        history?: H.History
        location?: H.Location | string
        parseQueryString?: ParseQueryString
        stringifyQuery?: StringifyQuery
        basename?: string
    }
    interface MatchState extends RouterState {
        history: History
        router: Router
        createElement: (component: RouteComponent, props: Object) => any
    }
    function match(args: MatchArgs, cb: (error: any, nextLocation: H.Location, nextState: MatchState) => void): void

}


declare module "react-router/lib/Router" {

    export default ReactRouter.Router

}


declare module "react-router/lib/Link" {

    export default ReactRouter.Link

}


declare module "react-router/lib/IndexLink" {

    export default ReactRouter.IndexLink

}


declare module "react-router/lib/IndexRedirect" {

    export default ReactRouter.IndexRedirect

}


declare module "react-router/lib/IndexRoute" {

    export default ReactRouter.IndexRoute

}


declare module "react-router/lib/Redirect" {

    export default ReactRouter.Redirect

}


declare module "react-router/lib/Route" {

    export default ReactRouter.Route

}


declare module "react-router/lib/History" {

    export default ReactRouter.History

}


declare module "react-router/lib/Lifecycle" {

    export default ReactRouter.Lifecycle

}


declare module "react-router/lib/RouteContext" {

    export default ReactRouter.RouteContext

}


declare module "react-router/lib/useRoutes" {

    export default ReactRouter.useRoutes

}

declare module "react-router/lib/PatternUtils" {

    export function formatPattern(pattern: string, params: {}): string;

}

declare module "react-router/lib/RouteUtils" {

    type E = __React.ReactElement<any>

    export function isReactChildren(object: E | E[]): boolean

    export function createRouteFromReactElement(element: E): ReactRouter.PlainRoute

    export function createRoutesFromReactChildren(children: E | E[], parentRoute: ReactRouter.PlainRoute): ReactRouter.PlainRoute[]

    export import createRoutes = ReactRouter.createRoutes

}


declare module "react-router/lib/RouterContext" {

    export default ReactRouter.RouterContext

}


declare module "react-router/lib/PropTypes" {

    import React = __React

    export function falsy(props: any, propName: string, componentName: string): Error;

    export const history: React.Requireable<any>

    export const location: React.Requireable<any>

    export const component: React.Requireable<any>

    export const components: React.Requireable<any>

    export const route: React.Requireable<any>

    export const routes: React.Requireable<any>

    export const routerShape: React.Requireable<any>

    export const locationShape: React.Requireable<any>

    export default {
        falsy,
        history,
        location,
        component,
        components,
        route
    }

}

declare module "react-router/lib/browserHistory" {
    export default ReactRouter.browserHistory;
}

declare module "react-router/lib/hashHistory" {
    export default ReactRouter.hashHistory;
}

declare module "react-router/lib/match" {

    export default ReactRouter.match;

}

declare module "react-router/lib/useRouterHistory" {
    interface CreateRouterHistory {
        (options?: HistoryModule.HistoryOptions): HistoryModule.History & HistoryModule.HistoryQueries;
    }

    export default function useRouterHistory<T>(createHistory: HistoryModule.CreateHistory<T>): CreateRouterHistory;
}

declare module "react-router/lib/createMemoryHistory" {
    export default ReactRouter.createMemoryHistory;
}

declare module "react-router/lib/withRouter" {
    export default ReactRouter.withRouter;
}

declare module "react-router/lib/applyRouterMiddleware" {
    export default ReactRouter.applyRouterMiddleware;
}

declare module "react-router" {

    import Router from "react-router/lib/Router"

    import Link from "react-router/lib/Link"

    import IndexLink from "react-router/lib/IndexLink"

    import IndexRedirect from "react-router/lib/IndexRedirect"

    import IndexRoute from "react-router/lib/IndexRoute"

    import Redirect from "react-router/lib/Redirect"

    import Route from "react-router/lib/Route"

    import History from "react-router/lib/History"

    import Lifecycle from "react-router/lib/Lifecycle"

    import RouteContext from "react-router/lib/RouteContext"

    import browserHistory from "react-router/lib/browserHistory"

    import hashHistory from "react-router/lib/hashHistory"

    import useRoutes from "react-router/lib/useRoutes"

    import { createRoutes } from "react-router/lib/RouteUtils"

    import { formatPattern } from "react-router/lib/PatternUtils"

    import RouterContext from "react-router/lib/RouterContext"

    import PropTypes from "react-router/lib/PropTypes"

    import match from "react-router/lib/match"

    import useRouterHistory from "react-router/lib/useRouterHistory";

    import createMemoryHistory from "react-router/lib/createMemoryHistory";

    import withRouter from "react-router/lib/withRouter";

    import applyRouterMiddleware from "react-router/lib/applyRouterMiddleware";

    // PlainRoute is defined in the API documented at:
    // https://github.com/rackt/react-router/blob/master/docs/API.md
    // but not included in any of the .../lib modules above.
    export type PlainRoute = ReactRouter.PlainRoute

    // The following definitions are also very useful to export
    // because by using these types lots of potential type errors
    // can be exposed:
    export type EnterHook = ReactRouter.EnterHook
    export type LeaveHook = ReactRouter.LeaveHook
    export type ParseQueryString = ReactRouter.ParseQueryString
    export type RedirectFunction = ReactRouter.RedirectFunction
    export type RouteComponentProps<P, R> = ReactRouter.RouteComponentProps<P, R>;
    export type RouteHook = ReactRouter.RouteHook
    export type StringifyQuery = ReactRouter.StringifyQuery
    export type RouterListener = ReactRouter.RouterListener
    export type RouterState = ReactRouter.RouterState
    export type HistoryBase = ReactRouter.HistoryBase
    export type RouterOnContext = ReactRouter.RouterOnContext
    export type RouteProps = ReactRouter.RouteProps

    export {
        Router,
        Link,
        IndexLink,
        IndexRedirect,
        IndexRoute,
        Redirect,
        Route,
        History,
        browserHistory,
        hashHistory,
        Lifecycle,
        RouteContext,
        useRoutes,
        createRoutes,
        formatPattern,
        RouterContext,
        PropTypes,
        match,
        useRouterHistory,
        createMemoryHistory,
        withRouter,
        applyRouterMiddleware
    }

    export default Router

}
