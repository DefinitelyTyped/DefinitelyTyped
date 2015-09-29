// Type definitions for history v1.0.0-rc1
// Project: https://github.com/rackt/react-router
// Definitions by: Sergey Buturlakin <http://github.com/sergey-buturlakin>
// Definitions: https://github.com/borisyankov/DefinitelyTyped


///<reference path="../react/react-global.d.ts" />


declare namespace ReactRouter {

    // types based on https://github.com/rackt/react-router/blob/master/docs/Glossary.md

    type Action = string

    type Component = React.ReactType

    type EnterHook = (nextState: RouterState, replaceState: RedirectFunction, callback?: Function) => any

    type LeaveHook = () => any

    interface Location {
        pathname: Pathname
        search: QueryString
        query: Query
        state: LocationState
        action: Action
        key: LocationKey
    }

    type LocationKey = string

    type LocationListener = (location: Location) => void

    type LocationState = Object

    type Params = Object

    type Path = string // Pathname + QueryString

    type Pathname = string

    type Query = Object

    type QueryString = string

    type RedirectFunction = (state: LocationState, pathname: Pathname | Path, query?: Query) => void

    interface RouteComponentProps {
        history?: RouterObject
        location?: Location
        params?: Params
        route?: RouteObject
        routeParams?: Params
        routes?: PlainRoute[]
    }

    type RouteComponent = React.ComponentClass<RouteComponentProps>

    type RouteConfig = RouteObject[]

    type RouteHook = (nextLocation?: Location) => any

    type RoutePattern = string

    interface RouteObject {
        component: RouteComponent
        path: RoutePattern
        onEnter: EnterHook
        onLeave: LeaveHook
    }

    interface RouterObject {
        transitionTo: (location: Location) => void
        pushState: (state: LocationState, pathname: Pathname | Path, query?: Query) => void
        replaceState: (state: LocationState, pathname: Pathname | Path, query?: Query) => void
        go(n: Number): void
        listen(listener: RouterListener): Function
        match(location: Location, callback: RouterListener): void
    }

    type RouterListener = (error: Error, nextState: RouterState) => void

    interface RouterState {
        location: Location
        routes: RouteConfig
        params: Params
        components: Component[]
    }


    interface HistoryProp {
        listen(listener: LocationListener): Function
        pushState(state: LocationState, path: Path): void
        replaceState(state: LocationState, path: Path): void
        go(n: number): void
    }

    type RouteType = Route | IndexRoute | PlainRoute | Redirect

    type Components = { [key: string]: Component }


    interface RouterProps {
        history?: HistoryProp
        children?: RouteType[]
        routes?:  RouteType[] // alias for children
        createElement?: (component: Component, props: Object) => any
        onError?: (err: any) => any
        onUpdate?: () => any
        parseQueryString?: (queryString: QueryString) => Query
        stringifyQuery?: (queryObject: Query) => QueryString
    }
    interface Router extends React.ComponentClass<RouterProps> {}
    interface RouterElement extends React.ReactElement<RouterProps> {}
    const Router: Router


    interface LinkProps extends React.HTMLAttributesBase<LinkProps> {
        activeStyle?: React.CSSProperties
        activeClassName?: string
        onlyActiveOnIndex?: boolean
        to: RoutePattern
        query?: Query
        state?: LocationState
    }
    interface Link extends React.ComponentClass<LinkProps> {}
    interface LinkElement extends React.DOMElement<LinkProps> {}
    const Link: Link


    interface RoutePropsBase  {
        children?: RouteType[]
        ignoreScrollBehavior?: boolean
        component?: Component
        components?: Components
        getComponent?: (location: Location, cb: (err: any, component?: Component) => void) => void
        getComponents?: (location: Location, cb: (err: any, components?: Components) => void) => void
        onEnter?: EnterHook
        onLeave?: LeaveHook
    }

    interface RouteProps extends RoutePropsBase {
        path?: RoutePattern
    }
    interface Route extends React.ComponentClass<RouteProps> {}
    interface RouteElement extends React.ReactElement<RouteProps> {}
    const Route: Route


    interface PlainRoute extends RoutePropsBase {
        childRoutes: RouteType[]
        getChildRoutes: (location: Location, cb: (err: any, routesArray: RouteType[]) => void) => void
    }


    interface RedirectProps {
        path?: RoutePattern
        from?: RoutePattern // alias for path
        to: RoutePattern
        query?: Query
        state?: LocationState

    }
    interface Redirect extends React.ReactElement<RedirectProps> {}
    interface RedirectELement extends React.ReactElement<RedirectELement> {}
    const Redirect: Redirect


    interface IndexRouteProps extends RoutePropsBase {}
    interface IndexRoute extends React.ComponentClass<IndexRouteProps> {}
    interface IndexRouteElement extends React.ReactElement<IndexRouteProps> {}
    const IndexRoute: IndexRoute

}


declare module "react-router/lib/Router" {

    export default ReactRouter.Router

}


declare module "react-router/lib/Link" {

    export default ReactRouter.Link

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

    const History: any

    export default History

}


declare module "react-router/lib/Lifecycle" {

    const Lifecycle: any

    export default Lifecycle

}


declare module "react-router/lib/RouteContext" {

    const RouteContext: any

    export default RouteContext

}


declare module "react-router/lib/useRoutes" {

    const useRoutes: any

    export default useRoutes

}


declare module "react-router/lib/RouteUtils" {

    export const createRoutes: any

}


declare module "react-router/lib/RoutingContext" {

    const RoutingContext: any

    export default RoutingContext

}


declare module "react-router/lib/PropTypes" {

    const PropTypes: any

    export default PropTypes

}


declare module "react-router/lib/match" {

    const match: any

    export default match

}


declare module "react-router" {

    import Router from "react-router/lib/Router"

    import Link from "react-router/lib/Link"

    import IndexRoute from "react-router/lib/IndexRoute"

    import Redirect from "react-router/lib/Redirect"

    import Route from "react-router/lib/Route"

    import History from "react-router/lib/History"

    import Lifecycle from "react-router/lib/Lifecycle"

    import RouteContext from "react-router/lib/RouteContext"

    import { createRoutes } from "react-router/lib/RouteUtils"

    import RoutingContext from "react-router/lib/RoutingContext"

    import PropTypes from "react-router/lib/PropTypes"

    import match from "react-router/lib/match"

    export {
        Router,
        Link,
        IndexRoute,
        Redirect,
        Route,
        History,
        Lifecycle,
        RouteContext,
        createRoutes,
        RoutingContext,
        PropTypes,
        match
    }

    export default Router

}
