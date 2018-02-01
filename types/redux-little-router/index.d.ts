// Type definitions for redux-little-router 14.0
// Project: https://github.com/FormidableLabs/redux-little-router
// Definitions by: priecint <https://github.com/priecint>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import * as React from "react";
import { Reducer, Middleware, StoreEnhancer } from "redux";

declare module "redux-little-router" {
    interface Routes {
        [index: string]: {
            [index: string]: RouteDefinition;
        };
    }

    interface RouteDefinition {
        [index: string]: string | RouteDefinition;
    }

    interface LocationOptions {
        persistQuery?: boolean;
    }

    interface Query {
        [key: string]: string;
    }

    interface Params {
        [key: string]: string;
    }

    interface Location<TResult = {}> {
        pathname?: string;
        options?: LocationOptions;
        params?: Params;
        previous?: Location;
        query?: Query;
        result?: TResult;
        hash?: string;
    }

    interface BrowserRouterOptions {
        routes: Routes;
        basename?: string;
    }

    interface RouterState {
        router: Location;
    }

    function routerForBrowser(options: BrowserRouterOptions): {
        reducer: Reducer<Location>;
        middleware: Middleware;
        enhancer: StoreEnhancer<Location>;
    };

    interface ServerRouterOptions {
        routes: Routes;
        request: {
            path: string;
            baseUrl: string;
            url: string;
            query: {
                [key: string]: string;
            }
        };
    }

    function routerForExpress(options: ServerRouterOptions): {
        reducer: Reducer<Location>;
        middleware: Middleware;
        enhancer: StoreEnhancer<Location>;
    };

    interface HapiRouterOptions {
        routes: Routes;
        request: {
            path: string;
            url: string;
            query: {
                [key: string]: string;
            }
        };
    }

    function routerForHapi(options: HapiRouterOptions): {
        reducer: Reducer<Location>;
        middleware: Middleware;
        enhancer: StoreEnhancer<Location>;
    };

    function initializeCurrentLocation(location: Location): {
        type: string;
        payload: Location;
    };

    interface PersistentQueryLinkProps {
        className?: string;
        href: Href;
        persistQuery?: boolean;
        target?: string;
        onClick?: React.EventHandler<React.MouseEvent<HTMLAnchorElement>>;
    }

    interface LinkProps extends PersistentQueryLinkProps {
        replaceState?: boolean;
    }

    class Link extends React.Component<LinkProps, any> {
    }

    class PersistentQueryLink extends React.Component<PersistentQueryLinkProps, any> {
    }

    interface FragmentPropsForRoute {
        forRoute: string;
    }

    interface FragmentPropsWithConditions {
        withConditions: (location: Location) => boolean;
    }

    // https://stackoverflow.com/q/37688318
    type FragmentProps = FragmentPropsForRoute | FragmentPropsWithConditions | (FragmentPropsForRoute & FragmentPropsWithConditions);

    class Fragment extends React.Component<FragmentProps, any> {
    }

    type Href = string | Location;

    function push(href: Href, options?: LocationOptions): {
        type: string;
        payload: Location & {
            state: {
                reduxLittleRouter: {
                    query: {};
                    options: LocationOptions;
                };
            };
        };
    };

    function replace(href: Href, options: LocationOptions): {
        type: string;
        payload: Location & {
            state: {
                reduxLittleRouter: {
                    query: {};
                    options: LocationOptions;
                };
            };
        };
    };

    function go(index: number): {
        type: string;
        payload: number;
    };

    function goBack(): {
        type: string;
    };

    function goForward(): {
        type: string;
    };

    const LOCATION_CHANGED: string;
    const PUSH: string;
    const REPLACE: string;
    const GO: string;
    const GO_BACK: string;
    const GO_FORWARD: string;
}
