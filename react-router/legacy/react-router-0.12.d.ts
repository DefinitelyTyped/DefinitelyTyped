// Type definitions for React Router 0.12.0
// Project: https://github.com/rackt/react-router
// Definitions by: Yuichi Murata <https://github.com/mrk21>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

///<reference path='../../react/legacy/react-0.12.d.ts' />

declare module ReactRouter {
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
    
    interface RouteHandlerMixin {
        getRouteDepth(): number;
        createChildRouteHandler(props: {}): RouteHandler;
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
    var RouteHandlerMixin: RouteHandlerMixin;
    
    
    //
    // Component
    // ----------------------------------------------------------------------
    // DefaultRoute
    interface DefaultRouteProp {
        name?: string;
        handler: React.ComponentClass<any>;
    }
    interface DefaultRoute extends React.ReactElement<DefaultRouteProp> {
        __react_router_default_route__: any; // dummy
    }
    interface DefaultRouteClass extends React.ComponentClass<DefaultRouteProp> {
        __react_router_default_route__: any; // dummy
    }
    
    // Link
    interface LinkProp {
        activeClassName?: string;
        to: string;
        params?: {};
        query?: {};
        onClick?: Function;
    }
    interface Link extends React.ReactElement<LinkProp>, Navigation, State {
        __react_router_link__: any; // dummy
        
        getHref(): string;
        getClassName(): string;
    }
    interface LinkClass extends React.ComponentClass<LinkProp> {
        __react_router_link__: any; // dummy
    }
    
    // NotFoundRoute
    interface NotFoundRouteProp {
        name?: string;
        handler: React.ComponentClass<any>;
    }
    interface NotFoundRoute extends React.ReactElement<NotFoundRouteProp> {
        __react_router_not_found_route__: any; // dummy
    }
    interface NotFoundRouteClass extends React.ComponentClass<NotFoundRouteProp> {
        __react_router_not_found_route__: any; // dummy
    }
    
    // Redirect
    interface RedirectProp {
        path?: string;
        from?: string;
        to?: string;
    }
    interface Redirect extends React.ReactElement<RedirectProp> {
        __react_router_redirect__: any; // dummy
    }
    interface RedirectClass extends React.ComponentClass<RedirectProp> {
        __react_router_redirect__: any; // dummy
    }
    
    // Route
    interface RouteProp {
        name?: string;
        path?: string;
        handler?: React.ComponentClass<any>;
        ignoreScrollBehavior?: boolean;
    }
    interface Route extends React.ReactElement<RouteProp> {
        __react_router_route__: any; // dummy
    }
    interface RouteClass extends React.ComponentClass<RouteProp> {
        __react_router_route__: any; // dummy
    }
    
    // RouteHandler
    interface RouteHandlerProp {}
    interface RouteHandler extends React.ReactElement<RouteHandlerProp>, RouteHandlerMixin {
        __react_router_route_handler__: any; // dummy
    }
    interface RouteHandlerClass extends React.ReactElement<RouteHandlerProp> {
        __react_router_route_handler__: any; // dummy
    }
    
    var DefaultRoute: DefaultRouteClass;
    var Link: LinkClass;
    var NotFoundRoute: NotFoundRouteClass;
    var Redirect: RedirectClass;
    var Route: RouteClass;
    var RouteHandler: RouteHandlerClass;
    
    
    //
    // Location
    // ----------------------------------------------------------------------
    interface LocationBase {
        push(path: string): void;
        replace(path: string): void;
        pop(): void;
        getCurrentPath(): void;
    }
    
    interface LocationListener {
        addChangeListener(listener: Function): void;
        removeChangeListener(listener: Function): void;
    }
    
    interface HashLocation extends LocationBase, LocationListener {}
    interface HistoryLocation extends LocationBase, LocationListener {}
    interface RefreshLocation extends LocationBase {}
    
    var HashLocation: HashLocation;
    var HistoryLocation: HistoryLocation;
    var RefreshLocation: RefreshLocation;
    
    
    //
    // Behavior
    // ----------------------------------------------------------------------
    interface ScrollBehaviorBase {
        updateScrollPosition(position: {x: number; y: number;}, actionType: string): void;
    }
    interface ImitateBrowserBehavior extends ScrollBehaviorBase {}
    interface ScrollToTopBehavior extends ScrollBehaviorBase {}
    
    var ImitateBrowserBehavior: ImitateBrowserBehavior;
    var ScrollToTopBehavior: ScrollToTopBehavior;
    
    
    //
    // Router
    // ----------------------------------------------------------------------
    interface Router extends React.ReactElement<any> {
        run(callback: RouterRunCallback): void;
    }
    
    interface RouterState {
        path: string;
        action: string;
        pathname: string;
        params: {};
        query: {};
        routes : Route[];
    }
    
    interface RouterCreateOption {
        routes: React.ReactElement<RouteProp>;
        location?: LocationBase;
        scrollBehavior?: ScrollBehaviorBase;
    }
    
    type RouterRunCallback = (Handler: Router, state: RouterState) => void;
    
    function create(options: RouterCreateOption): Router;
    function run(routes: React.ReactElement<RouteProp>, callback: RouterRunCallback): Router;
    function run(routes: React.ReactElement<RouteProp>, location: LocationBase, callback: RouterRunCallback): Router;
    
    
    //
    // History
    // ----------------------------------------------------------------------
    interface History {
        back(): void;
        length: number;
    }
    var History: History;
    
    
    //
    // Transition
    // ----------------------------------------------------------------------
    interface Transition {
        abort(): void;
        redirect(to: string, params?: {}, query?: {}): void;
        retry(): void;
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
}

declare module 'react-router' {
    export = ReactRouter;
}

declare module React {
    interface TopLevelAPI {
        // for DefaultRoute
        createElement(
            type: ReactRouter.DefaultRouteClass,
            props: ReactRouter.DefaultRouteProp,
            ...children: ReactNode[]
        ): ReactRouter.DefaultRoute;
        
        // for Link
        createElement(
            type: ReactRouter.LinkClass,
            props: ReactRouter.LinkProp,
            ...children: ReactNode[]
        ): ReactRouter.Link;
        
        // for NotFoundRoute
        createElement(
            type: ReactRouter.NotFoundRouteClass,
            props: ReactRouter.NotFoundRouteProp,
            ...children: ReactNode[]
        ): ReactRouter.NotFoundRoute;
        
        // for Redirect
        createElement(
            type: ReactRouter.RedirectClass,
            props: ReactRouter.RedirectProp,
            ...children: ReactNode[]
        ): ReactRouter.Redirect;
        
        // for Route
        createElement(
            type: ReactRouter.RouteClass,
            props: ReactRouter.RouteProp,
            ...children: ReactNode[]
        ): ReactRouter.Route;
        
        // for RouteHandler
        createElement(
            type: ReactRouter.RouteHandlerClass,
            props: ReactRouter.RouteHandlerProp,
            ...children: ReactNode[]
        ): ReactRouter.RouteHandler;
    }
}
