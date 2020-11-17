import type { NavigationState, Router, DefaultRouterOptions, Route, ParamListBase } from './types';
export declare type StackActionType = {
    type: 'REPLACE';
    payload: {
        name: string;
        key?: string | undefined;
        params?: object;
    };
    source?: string;
    target?: string;
} | {
    type: 'PUSH';
    payload: {
        name: string;
        key?: string | undefined;
        params?: object;
    };
    source?: string;
    target?: string;
} | {
    type: 'POP';
    payload: {
        count: number;
    };
    source?: string;
    target?: string;
} | {
    type: 'POP_TO_TOP';
    source?: string;
    target?: string;
};
export declare type StackRouterOptions = DefaultRouterOptions;
export declare type StackNavigationState<ParamList extends ParamListBase> = NavigationState<ParamList> & {
    /**
     * Type of the router, in this case, it's stack.
     */
    type: 'stack';
};
export declare type StackActionHelpers<ParamList extends ParamListBase> = {
    /**
     * Replace the current route with a new one.
     *
     * @param name Route name of the new route.
     * @param [params] Params object for the new route.
     */
    replace<RouteName extends keyof ParamList>(...args: undefined extends ParamList[RouteName] ? [RouteName] | [RouteName, ParamList[RouteName]] : [RouteName, ParamList[RouteName]]): void;
    /**
     * Push a new screen onto the stack.
     *
     * @param name Name of the route for the tab.
     * @param [params] Params object for the route.
     */
    push<RouteName extends keyof ParamList>(...args: undefined extends ParamList[RouteName] ? [RouteName] | [RouteName, ParamList[RouteName]] : [RouteName, ParamList[RouteName]]): void;
    /**
     * Pop a screen from the stack.
     */
    pop(count?: number): void;
    /**
     * Pop to the first route in the stack, dismissing all other screens.
     */
    popToTop(): void;
};
export declare const StackActions: {
    replace(name: string, params?: object | undefined): StackActionType;
    push(name: string, params?: object | undefined): StackActionType;
    pop(count?: number): StackActionType;
    popToTop(): StackActionType;
};
export default function StackRouter(options: StackRouterOptions): Router<StackNavigationState<Record<string, object | undefined>>, {
    type: "GO_BACK";
    source?: string | undefined;
    target?: string | undefined;
} | {
    type: "NAVIGATE";
    payload: {
        key: string;
        name?: undefined;
        params?: object | undefined;
        merge?: boolean | undefined;
    } | {
        name: string;
        key?: string | undefined;
        params?: object | undefined;
        merge?: boolean | undefined;
    };
    source?: string | undefined;
    target?: string | undefined;
} | {
    type: "RESET";
    payload: Readonly<{
        key: string;
        index: number;
        routeNames: string[];
        history?: unknown[] | undefined;
        routes: (Readonly<{
            key: string;
            name: string;
        }> & Readonly<{
            params?: object | undefined;
        }> & {
            state?: Readonly<any> | import("./types").PartialState<Readonly<any>> | undefined;
        })[];
        type: string;
        stale: false;
    }> | import("./types").PartialState<Readonly<{
        key: string;
        index: number;
        routeNames: string[];
        history?: unknown[] | undefined;
        routes: (Readonly<{
            key: string;
            name: string;
        }> & Readonly<{
            params?: object | undefined;
        }> & {
            state?: Readonly<any> | import("./types").PartialState<Readonly<any>> | undefined;
        })[];
        type: string;
        stale: false;
    }>> | (Pick<Readonly<{
        key: string;
        index: number;
        routeNames: string[];
        history?: unknown[] | undefined;
        routes: (Readonly<{
            key: string;
            name: string;
        }> & Readonly<{
            params?: object | undefined;
        }> & {
            state?: Readonly<any> | import("./types").PartialState<Readonly<any>> | undefined;
        })[];
        type: string;
        stale: false;
    }>, "stale" | "key" | "index" | "routeNames" | "history" | "type"> & {
        routes: Pick<Route<string, object | undefined>, "name" | "params">[];
    }) | undefined;
    source?: string | undefined;
    target?: string | undefined;
} | {
    type: "SET_PARAMS";
    payload: {
        params?: object | undefined;
    };
    source?: string | undefined;
    target?: string | undefined;
} | {
    type: "REPLACE";
    payload: {
        name: string;
        key?: string | undefined;
        params?: object | undefined;
    };
    source?: string | undefined;
    target?: string | undefined;
} | {
    type: "PUSH";
    payload: {
        name: string;
        key?: string | undefined;
        params?: object | undefined;
    };
    source?: string | undefined;
    target?: string | undefined;
} | {
    type: "POP";
    payload: {
        count: number;
    };
    source?: string | undefined;
    target?: string | undefined;
} | {
    type: "POP_TO_TOP";
    source?: string | undefined;
    target?: string | undefined;
}>;
