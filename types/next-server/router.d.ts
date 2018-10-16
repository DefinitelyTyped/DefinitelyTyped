import * as React from "react";
import * as url from "url";

type EventName =
    | "routeChangeStart"
    | "routeChangeComplete"
    | "routeChangeError"
    | "beforeHistoryChange"
    | "hashChangeStart"
    | "hashChangeComplete";

interface RouteChangeError {
    cancelled: boolean;
}

type EventHandler = (url: string) => any;
type ErrorEventHandler = (err: RouteChangeError, url: string) => any;

export type UrlLike = url.UrlObject | url.Url;

export interface EventChangeOptions {
    shallow?: boolean;
    [key: string]: any;
}

export type PopStateCallback = (state: any) => boolean | undefined;

export type RouterCallback = () => void;

export type DefaultQuery = Record<string, string | string[] | undefined>;

export interface RouterProps<Q = DefaultQuery> {
    // url property fields
    readonly pathname: string;
    readonly route: string;
    readonly asPath?: string;
    readonly query?: Q;

    // property fields
    readonly components: {
        [key: string]: { Component: React.ComponentType<any>; err: any };
    };

    // core method fields
    back(): void;
    beforePopState(cb: PopStateCallback): boolean;
    prefetch(url: string): Promise<React.ComponentType<any>>;
    push(
        url: string | UrlLike,
        as?: string | UrlLike,
        options?: EventChangeOptions
    ): Promise<boolean>;
    reload(route: string): Promise<void>;
    replace(
        url: string | UrlLike,
        as?: string | UrlLike,
        options?: EventChangeOptions
    ): Promise<boolean>;

    // events (deprecated soonish)
    onBeforeHistoryChange?(as: string): void;
    onHashChangeStart?(url: string): void;
    onHashChangeComplete?(url: string): void;
    onRouteChangeComplete?(url: string): void;
    onRouteChangeError?(error: RouteChangeError, url: string): void;
    onRouteChangeStart?(url: string): void;

    // events API (6.1.1+)
    readonly events: {
        on: (eventName: EventName, handler: EventHandler | ErrorEventHandler) => void;
        off: (eventName: EventName, handler: (url: string) => any) => void;
    };
}

export interface SingletonRouter<Q = DefaultQuery> extends RouterProps<Q> {
    router: RouterProps<Q> | null;
    readyCallbacks: RouterCallback[];
    ready(cb: RouterCallback): void;
}

export interface WithRouterProps<Q = DefaultQuery> {
    router: SingletonRouter<Q>;
}

// Manually disabling the no-unnecessary-generics rule so users can
// retain type inference if they warp their component in withRouter
// without defining props explicitly
export function withRouter<T extends {}, Q = DefaultQuery>(
    // tslint:disable-next-line:no-unnecessary-generics
    Component: React.ComponentType<T & WithRouterProps<Q>>
): React.ComponentType<T>;

declare const Router: SingletonRouter;
export default Router;
