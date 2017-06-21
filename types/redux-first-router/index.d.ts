// Type definitions for redux-first-router 1.4
// Project: https://github.com/faceyspacey/redux-first-router#readme
// Definitions by: My Self <https://github.com/me>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import { Dispatch } from 'redux'

declare module 'redux-first-router' {
    type RouteString = string

    type RouteObject = {
        path: string
        capitalizedWords?: boolean
        toPath?: (param: string, key?: string) => string
        fromPath?: (path: string, key?: string) => string
        thunk?: <S>(dispatch: Dispatch<S>, getState: () => S) => any | Promise<any>
        navKey?: string
    }

    type Route = RouteString | RouteObject

    type RoutesMap = {
        [key: string]: Route
    }

    type ReceivedAction = {
        type: string
        payload: {}
        meta?: {}
        navKey?: string | null
    }

    export const NOT_FOUND: string

    export function actionToPath(action: ReceivedAction, routesMap: RoutesMap): string;

    export function back(): any;

    export function canGo(n: any): any;

    export function canGoBack(): any;

    export function canGoForward(): any;

    export function connectRoutes(history: any, ...args: any[]): any;

    export function go(n: any): any;

    export function history(): any;

    export function isLocationAction(action: any): any;

    export function next(): any;

    export function nextPath(): any;

    export function pathToAction(pathname: any, routesMap: any): any;

    export function prevPath(): any;

    export function push(pathname: any): any;

    export function redirect(action: any): any;

    export function replace(pathname: any): any;

    export function scrollBehavior(): any;

    export function setKind(action: any, kind: any): any;

    export function updateScroll(): any;
}



export namespace actionToPath {
    const prototype: {
    };

}

export namespace back {
    const prototype: {
    };

}

export namespace canGo {
    const prototype: {
    };

}

export namespace canGoBack {
    const prototype: {
    };

}

export namespace canGoForward {
    const prototype: {
    };

}

export namespace connectRoutes {
    const prototype: {
    };

}

export namespace go {
    const prototype: {
    };

}

export namespace history {
    const prototype: {
    };

}

export namespace isLocationAction {
    const prototype: {
    };

}

export namespace next {
    const prototype: {
    };

}

export namespace nextPath {
    const prototype: {
    };

}

export namespace pathToAction {
    const prototype: {
    };

}

export namespace prevPath {
    const prototype: {
    };

}

export namespace push {
    const prototype: {
    };

}

export namespace redirect {
    const prototype: {
    };

}

export namespace replace {
    const prototype: {
    };

}

export namespace scrollBehavior {
    const prototype: {
    };

}

export namespace setKind {
    const prototype: {
    };

}

export namespace updateScroll {
    const prototype: {
    };

}

