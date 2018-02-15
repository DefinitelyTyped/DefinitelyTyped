import * as React from "react";
import * as url from "url";

type UrlLike = url.UrlObject | url.Url;

export interface EventChangeOptions {
    shallow?: boolean;
    [key: string]: any;
}

export type RouterCallback = () => void;
export interface SingletonRouter {
    readyCallbacks: RouterCallback[];
    ready(cb: RouterCallback): void;

    // router properties
    readonly components: {
        [key: string]: { Component: React.ComponentType<any>; err: any };
    };
    readonly pathname: string;
    readonly route: string;
    readonly asPath?: string;
    readonly query?: {
        [key: string]:
            | boolean
            | boolean[]
            | number
            | number[]
            | string
            | string[];
    };

    // router methods
    reload(route: string): Promise<void>;
    back(): void;
    push(
        url: string | UrlLike,
        as?: string | UrlLike,
        options?: EventChangeOptions,
    ): Promise<boolean>;
    replace(
        url: string | UrlLike,
        as?: string | UrlLike,
        options?: EventChangeOptions,
    ): Promise<boolean>;
    prefetch(url: string): Promise<React.ComponentType<any>>;

    // router events
    onAppUpdated?(nextRoute: string): void;
    onRouteChangeStart?(url: string): void;
    onBeforeHistoryChange?(as: string): void;
    onRouteChangeComplete?(url: string): void;
    onRouteChangeError?(error: any, url: string): void;
}

export function withRouter<T extends {}>(
    Component: React.ComponentType<T & { router: SingletonRouter }>,
): React.ComponentType<T>;

export const Singleton: SingletonRouter;
export default Singleton;
