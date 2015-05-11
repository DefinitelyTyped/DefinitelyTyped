// Type definitions for React Router 0.13.2
// Project: https://github.com/rackt/react-router
// Definitions by: Duncan Mak <https://github.com/duncanmak>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

/// <reference path="../react/react-global.d.ts" />

declare module ReactRouter {

    // Based on https://github.com/rackt/react-router/tree/master/docs/api
    function run(routes: Route, callback: Callback): void;
    function run<L extends LocationBase>(routes: Route, location: L, callback: Callback): void;

    function create<L extends LocationBase>(options: CreateOption<L>): Router;

    interface Router {
        run(callback: Callback): void;
    }

    interface State {
        path: string;
        action: string;
        pathname: string;
        params: any;
        query: any;
        routes: Route
    }

    interface CreateOption<L extends LocationBase> {
        routes: Route;
        location?: L;
        scrollBehavior?: ScrollBehavior;
    }

    interface Callback {
        (Handler: React.ComponentClass<any>, state: State): void;
    }

    interface Context {
        transitionTo(to: string, params?: any, query?: any): void;
        replaceWith(to: string, params?: any, query?: any): void;
        goBack(): void;
        makePath(to: string, params?: any, query?: any): string;
        makeHref(to: string, params?: any, query?: any): string;

        getCurrentPath(): string;
        getCurrentPathname(): string;
        getCurrentParams(): any;
        getCurrentQuery(): string;
        isActive(routeName: string, params: any, query: any): boolean;
        getCurrentRoutes(): Route[];
    }

    interface LocationBase {
        getCurrentPath(): void;
        toString(): string;
    }

    interface LocationListener {
        addChangeListener(listener: Function): void;
        removeChangeListener(listener: Function): void;
    }

    interface MutableLocation {
        push(path: string): void;
        replace(path: string): void;
        pop(): void;
    }

    interface Location extends LocationBase, LocationListener, MutableLocation {}
    interface RefreshLocation extends LocationBase, MutableLocation {}

    var HashLocation:    Location;
    var HistoryLocation: Location;
    var RefreshLocation: RefreshLocation;
    var LocationBase:    LocationBase;
    var TestLocation:    Location;

    interface Transition {
        abort(): void;
        redirect(to: string, params?: any, query?: any): void;
        retry(): void;
    }

    //
    // Renderable Components
    //
    interface RouteHandler extends React.ComponentClass<any> {
        willTransitionTo(
            transition: Transition,
            params: any,
            query: any,
            callback: Function
        ): void;

        willTransitionFrom(
            transition: Transition,
            component: React.ReactElement<any>,
            callback: Function
        ): void;
    }

    var RouteHandler: RouteHandler;

    // Link.propTypes = {
    //     activeClassName: PropTypes.string.isRequired,
    //     to: PropTypes.oneOfType([ PropTypes.string, PropTypes.route ]).isRequired,
    //     params: PropTypes.object,
    //     query: PropTypes.object,
    //     activeStyle: PropTypes.object,
    //     onClick: PropTypes.func
    // };
    interface LinkProp {
        activeClassName?: string; // defaults to 'active'
        to: string | Route;
        params?: any;
        query?: any;
        activeStyle?: any;
        onClick?: Function;
    }

    var Link: React.ComponentClass<LinkProp>;

    //
    // Configuration Components
    //

    // Route.propTypes = {
    //   name: PropTypes.string,
    //   path: PropTypes.string,
    //   handler: PropTypes.func,
    //   ignoreScrollBehavior: PropTypes.bool
    // };
    interface RouteProp {
        name?: string;
        path?: string;
        handler: Function;
        ignoreScrollBehavior?: boolean
    }

    type Route = React.ReactElement<RouteProp>;

    var Route:         React.ComponentClass<RouteProp>;
    var DefaultRoute:  React.ComponentClass<RouteProp>;
    var NotFoundRoute: React.ComponentClass<RouteProp>;

    // Redirect.propTypes = {
    //   path: PropTypes.string,
    //   from: PropTypes.string, // Alias for path.
    //   to: PropTypes.string,
    //   handler: PropTypes.falsy
    // };
    interface RedirectProp {
        path?: string;
        from?: string;
        to?: string;
        handler?: any;
    }
    var Redirect: React.ComponentClass<RedirectProp>;

    interface ScrollBehavior {
        updateScrollPosition(position: { x: number; y: number; }, actionType: string): void;
    }

    var ImitateBrowserBehavior: ScrollBehavior;
    var ScrollToTopBehavior:    ScrollBehavior;
}

declare module "react-router" {
    export = ReactRouter
}
