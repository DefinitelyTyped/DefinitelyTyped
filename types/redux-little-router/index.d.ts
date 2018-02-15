// Type definitions for redux-little-router 14.0
// Project: https://github.com/FormidableLabs/redux-little-router
// Definitions by: priecint <https://github.com/priecint>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.4

import * as React from "react";
import { Reducer, Middleware, StoreEnhancer } from "redux";

export interface Routes {
    [index: string]: RouteDefinition;
}

export interface RouteDefinition {
    [index: string]: string | RouteDefinition;
}

export interface LocationOptions {
    persistQuery?: boolean;
}

export interface Query {
    [key: string]: string;
}

export interface Params {
    [key: string]: string;
}

export interface Location<TResult = {}> {
    pathname?: string;
    options?: LocationOptions;
    params?: Params;
    previous?: Location;
    query?: Query;
    result?: TResult;
    hash?: string;
}

export interface BrowserRouterOptions {
    routes: Routes;
    basename?: string;
}

export interface RouterState {
    router: Location;
}

export function routerForBrowser(options: BrowserRouterOptions): {
    reducer: Reducer<RouterState>;
    middleware: Middleware;
    enhancer: StoreEnhancer<RouterState>;
};

export interface ServerRouterOptions {
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

export function routerForExpress(options: ServerRouterOptions): {
    reducer: Reducer<Location>;
    middleware: Middleware;
    enhancer: StoreEnhancer<Location>;
};

export interface HapiRouterOptions {
    routes: Routes;
    request: {
        path: string;
        url: string;
        query: {
            [key: string]: string;
        }
    };
}

export function routerForHapi(options: HapiRouterOptions): {
    reducer: Reducer<Location>;
    middleware: Middleware;
    enhancer: StoreEnhancer<Location>;
};

export function initializeCurrentLocation(location: Location): {
    type: string;
    payload: Location;
};

export interface PersistentQueryLinkProps {
    className?: string;
    href: Href;
    persistQuery?: boolean;
    target?: string;
    onClick?: React.EventHandler<React.MouseEvent<HTMLAnchorElement>>;
}

export interface LinkProps extends PersistentQueryLinkProps {
    replaceState?: boolean;
}

export class Link extends React.Component<LinkProps, any> {
}

export class PersistentQueryLink extends React.Component<PersistentQueryLinkProps, any> {
}

export interface FragmentPropsForRoute {
    forRoute: string;
}

export interface FragmentPropsWithConditions {
    withConditions: (location: Location) => boolean;
}

// https://stackoverflow.com/q/37688318
export type FragmentProps = FragmentPropsForRoute | FragmentPropsWithConditions | (FragmentPropsForRoute & FragmentPropsWithConditions);

export class Fragment extends React.Component<FragmentProps, any> {
}

export type Href = string | Location;

export function push(href: Href, options?: LocationOptions): {
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

export function replace(href: Href, options?: LocationOptions): {
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

export function go(index: number): {
    type: string;
    payload: number;
};

export function goBack(): {
    type: string;
};

export function goForward(): {
    type: string;
};

export const LOCATION_CHANGED: string;
export const PUSH: string;
export const REPLACE: string;
export const GO: string;
export const GO_BACK: string;
export const GO_FORWARD: string;
