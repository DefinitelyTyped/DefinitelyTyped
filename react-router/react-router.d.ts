// Type definitions for React Router 0.13.3
// Project: https://github.com/rackt/react-router
// Definitions by: Yuichi Murata <https://github.com/mrk21>, Václav Ostrožlík <https://github.com/vasek17>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

///<reference path='../react/react.d.ts' />
///<reference path='../react/react-addons.d.ts' />

declare module ReactRouter {
    import React = __React;

    //
    // Transition
    // ----------------------------------------------------------------------
    interface Transition {
        path: string;
        abortReason: any;
        retry(): void;
        abort(reason?: any): void;
        redirect(to: string, params?: {}, query?: {}): void;
        cancel(): void;
        from: (transition: Transition, routes: Route[], components?: React.ReactElement<any>[], callback?: (error?: any) => void) => void;
        to: (transition: Transition, routes: Route[], params?: {}, query?: {}, callback?: (error?: any) => void) => void;
    }

    interface TransitionStaticLifecycle {
        willTransitionTo?(
            transition: Transition,
            params: {},
            query: {},
            callback: Function
        ): void;

        willTransitionFrom?(
            transition: Transition,
            component: React.ReactElement<any>,
            callback: Function
        ): void;
    }

    //
    // Route Configuration
    // ----------------------------------------------------------------------
    // DefaultRoute
    interface DefaultRouteProp {
        name?: string;
        handler: React.ComponentClass<any>;
    }
    interface DefaultRoute extends React.ReactElement<DefaultRouteProp> {}
    interface DefaultRouteClass extends React.ComponentClass<DefaultRouteProp> {}

    // NotFoundRoute
    interface NotFoundRouteProp {
        name?: string;
        handler: React.ComponentClass<any>;
    }
    interface NotFoundRoute extends React.ReactElement<NotFoundRouteProp> {}
    interface NotFoundRouteClass extends React.ComponentClass<NotFoundRouteProp> {}

    // Redirect
    interface RedirectProp {
        path?: string;
        from?: string;
        to?: string;
    }
    interface Redirect extends React.ReactElement<RedirectProp> {}
    interface RedirectClass extends React.ComponentClass<RedirectProp> {}

    // Route
    interface RouteProp {
        name?: string;
        path?: string;
        handler?: React.ComponentClass<any>;
        ignoreScrollBehavior?: boolean;
    }
    interface Route extends React.ReactElement<RouteProp> {}
    interface RouteClass extends React.ComponentClass<RouteProp> {}

    var DefaultRoute: DefaultRouteClass;
    var NotFoundRoute: NotFoundRouteClass;
    var Redirect: RedirectClass;
    var Route: RouteClass;

    interface CreateRouteOptions {
        name?: string;
        path?: string;
        ignoreScrollBehavior?: boolean;
        isDefault?: boolean;
        isNotFound?: boolean;
        onEnter?: (transition: Transition, params: {}, query: {}, callback: Function) => void;
        onLeave?: (transition: Transition, wtf: any, callback: Function) => void;
        handler?: Function;
        parentRoute?: Route;
    }

    type CreateRouteCallback = (route: Route) => void;

    function createRoute(callback: CreateRouteCallback): Route;
    function createRoute(options: CreateRouteOptions | string, callback: CreateRouteCallback): Route;
    function createDefaultRoute(options?: CreateRouteOptions | string): Route;
    function createNotFoundRoute(options?: CreateRouteOptions | string): Route;

    interface CreateRedirectOptions extends CreateRouteOptions {
        path?: string;
        from?: string;
        to: string;
        params?: {};
        query?: {};
    }
    function createRedirect(options: CreateRedirectOptions): Redirect;
    function createRoutesFromReactChildren(children: Route): Route[];

    //
    // Components
    // ----------------------------------------------------------------------
    // Link
    interface LinkProp {
        activeClassName?: string;
        activeStyle?: {};
        to: string;
        params?: {};
        query?: {};
        onClick?: Function;
    }
    interface Link extends React.ReactElement<LinkProp>, Navigation, State {
        handleClick(event: any): void;
        getHref(): string;
        getClassName(): string;
        getActiveState(): boolean;
    }
    interface LinkClass extends React.ComponentClass<LinkProp> {}

    // RouteHandler
    interface RouteHandlerProp { }
    interface RouteHandlerChildContext {
        routeDepth: number;
    }
    interface RouteHandler extends React.ReactElement<RouteHandlerProp> {
        getChildContext(): RouteHandlerChildContext;
        getRouteDepth(): number;
        createChildRouteHandler(props: {}): RouteHandler;
    }
    interface RouteHandlerClass extends React.ComponentClass<RouteHandlerProp> {}

    var Link: LinkClass;
    var RouteHandler: RouteHandlerClass;


    //
    // Top-Level
    // ----------------------------------------------------------------------
    interface Router extends React.ReactElement<any>, Navigation, State {
        run(callback: RouterRunCallback): void;
    }

    interface RouterState {
        path: string;
        action: string;
        pathname: string;
        params: {};
        query: {};
        routes: Route[];
    }

    interface RouterCreateOption {
        routes: Route;
        location?: LocationBase;
        scrollBehavior?: ScrollBehaviorBase;
        onError?: (error: any) => void;
        onAbort?: (error: any) => void;
    }

    type RouterRunCallback = (Handler: RouteClass, state: RouterState) => void;

    function create(options: RouterCreateOption): Router;
    function run(routes: Route, callback: RouterRunCallback): Router;
    function run(routes: Route, location: LocationBase | string, callback: RouterRunCallback): Router;


    //
    // Location
    // ----------------------------------------------------------------------
    interface LocationBase {
        getCurrentPath(): void;
        toString(): string;
    }
    interface Location extends LocationBase {
        push(path: string): void;
        replace(path: string): void;
        pop(): void;
    }

    interface LocationListener {
        addChangeListener(listener: Function): void;
        removeChangeListener(listener: Function): void;
    }

    interface HashLocation extends Location, LocationListener { }
    interface HistoryLocation extends Location, LocationListener { }
    interface RefreshLocation extends Location { }
    interface StaticLocation extends LocationBase { }
    interface TestLocation extends Location, LocationListener { }

    var HashLocation: HashLocation;
    var HistoryLocation: HistoryLocation;
    var RefreshLocation: RefreshLocation;
    var StaticLocation: StaticLocation;
    var TestLocation: TestLocation;


    //
    // Behavior
    // ----------------------------------------------------------------------
    interface ScrollBehaviorBase {
        updateScrollPosition(position: { x: number; y: number; }, actionType: string): void;
    }
    interface ImitateBrowserBehavior extends ScrollBehaviorBase { }
    interface ScrollToTopBehavior extends ScrollBehaviorBase { }

    var ImitateBrowserBehavior: ImitateBrowserBehavior;
    var ScrollToTopBehavior: ScrollToTopBehavior;


    //
    // Mixin
    // ----------------------------------------------------------------------
    interface Navigation {
        makePath(to: string, params?: {}, query?: {}): string;
        makeHref(to: string, params?: {}, query?: {}): string;
        transitionTo(to: string, params?: {}, query?: {}): void;
        replaceWith(to: string, params?: {}, query?: {}): void;
        goBack(): void;
    }

    interface State {
        getPath(): string;
        getRoutes(): Route[];
        getPathname(): string;
        getParams(): {};
        getQuery(): {};
        isActive(to: string, params?: {}, query?: {}): boolean;
    }

    var Navigation: Navigation;
    var State: State;


    //
    // History
    // ----------------------------------------------------------------------
    interface History {
        back(): void;
        length: number;
    }
    var History: History;


    //
    // Context
    // ----------------------------------------------------------------------
    interface Context {
        makePath(to: string, params?: {}, query?: {}): string;
        makeHref(to: string, params?: {}, query?: {}): string;
        transitionTo(to: string, params?: {}, query?: {}): void;
        replaceWith(to: string, params?: {}, query?: {}): void;
        goBack(): void;

        getCurrentPath(): string;
        getCurrentRoutes(): Route[];
        getCurrentPathname(): string;
        getCurrentParams(): {};
        getCurrentQuery(): {};
        isActive(to: string, params?: {}, query?: {}): boolean;
    }
}

declare module "react-router" {
    export = ReactRouter;
}

declare module __React {

  // for DefaultRoute
  function createElement(
    type: ReactRouter.DefaultRouteClass,
    props: ReactRouter.DefaultRouteProp,
    ...children: __React.ReactNode[]): ReactRouter.DefaultRoute;

  // for Link
  function createElement(
    type: ReactRouter.LinkClass,
    props: ReactRouter.LinkProp,
    ...children: __React.ReactNode[]): ReactRouter.Link;

  // for NotFoundRoute
  function createElement(
    type: ReactRouter.NotFoundRouteClass,
    props: ReactRouter.NotFoundRouteProp,
    ...children: __React.ReactNode[]): ReactRouter.NotFoundRoute;

  // for Redirect
  function createElement(
    type: ReactRouter.RedirectClass,
    props: ReactRouter.RedirectProp,
    ...children: __React.ReactNode[]): ReactRouter.Redirect;

  // for Route
  function createElement(
    type: ReactRouter.RouteClass,
    props: ReactRouter.RouteProp,
    ...children: __React.ReactNode[]): ReactRouter.Route;

  // for RouteHandler
  function createElement(
    type: ReactRouter.RouteHandlerClass,
    props: ReactRouter.RouteHandlerProp,
    ...children: __React.ReactNode[]): ReactRouter.RouteHandler;
}

declare module "react/addons" {
  // for DefaultRoute
  function createElement(
    type: ReactRouter.DefaultRouteClass,
    props: ReactRouter.DefaultRouteProp,
    ...children: __React.ReactNode[]): ReactRouter.DefaultRoute;

  // for Link
  function createElement(
    type: ReactRouter.LinkClass,
    props: ReactRouter.LinkProp,
    ...children: __React.ReactNode[]): ReactRouter.Link;

  // for NotFoundRoute
  function createElement(
    type: ReactRouter.NotFoundRouteClass,
    props: ReactRouter.NotFoundRouteProp,
    ...children: __React.ReactNode[]): ReactRouter.NotFoundRoute;

  // for Redirect
  function createElement(
    type: ReactRouter.RedirectClass,
    props: ReactRouter.RedirectProp,
    ...children: __React.ReactNode[]): ReactRouter.Redirect;

  // for Route
  function createElement(
    type: ReactRouter.RouteClass,
    props: ReactRouter.RouteProp,
    ...children: __React.ReactNode[]): ReactRouter.Route;

  // for RouteHandler
  function createElement(
    type: ReactRouter.RouteHandlerClass,
    props: ReactRouter.RouteHandlerProp,
    ...children: __React.ReactNode[]): ReactRouter.RouteHandler;
}
