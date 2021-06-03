import type { NavigationState, Router, DefaultRouterOptions, Route, ParamListBase } from './types';
// tslint:disable-next-line strict-export-declare-modifiers
export declare type StackActionType = {
    type: 'REPLACE';
    payload: {
        name: string;
        // tslint:disable-next-line interface-over-type-literal no-redundant-undefined
        key?: string | undefined;
        params?: object;
    };
    source?: string;
    target?: string;
} | {
    type: 'PUSH';
    payload: {
        name: string;
        // tslint:disable-next-line no-redundant-undefined
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
// tslint:disable-next-line strict-export-declare-modifiers
export declare type StackRouterOptions = DefaultRouterOptions;
// tslint:disable-next-line strict-export-declare-modifiers
export declare type StackNavigationState<ParamList extends ParamListBase> = NavigationState<ParamList> & {
    /**
     * Type of the router, in this case, it's stack.
     */
    type: 'stack';
};
// tslint:disable-next-line strict-export-declare-modifiers interface-over-type-literal
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
// tslint:disable-next-line strict-export-declare-modifiers
export declare const StackActions: {
    // tslint:disable-next-line no-redundant-undefined
    replace(name: string, params?: object | undefined): StackActionType;
    // tslint:disable-next-line no-redundant-undefined
    push(name: string, params?: object | undefined): StackActionType;
    pop(count?: number): StackActionType;
    popToTop(): StackActionType;
};
export default function StackRouter(options: StackRouterOptions): Router<StackNavigationState<Record<string, object | undefined>>, {
    type: "GO_BACK";
    // tslint:disable-next-line no-redundant-undefined
    source?: string | undefined;
    // tslint:disable-next-line no-redundant-undefined
    target?: string | undefined;
} | {
    type: "NAVIGATE";
    payload: {
        key: string;
        // tslint:disable-next-line no-redundant-undefined
        name?: undefined;
        // tslint:disable-next-line no-redundant-undefined
        params?: object | undefined;
        // tslint:disable-next-line no-redundant-undefined
        merge?: boolean | undefined;
    } | {
        name: string;
        // tslint:disable-next-line no-redundant-undefined
        key?: string | undefined;
        // tslint:disable-next-line no-redundant-undefined
        params?: object | undefined;
        // tslint:disable-next-line no-redundant-undefined
        merge?: boolean | undefined;
    };
    // tslint:disable-next-line no-redundant-undefined
    source?: string | undefined;
    // tslint:disable-next-line no-redundant-undefined
    target?: string | undefined;
} | {
    type: "RESET";
    payload: Readonly<{
        key: string;
        index: number;
        routeNames: string[];
        // tslint:disable-next-line no-redundant-undefined
        history?: unknown[] | undefined;
        // tslint:disable-next-line array-type
        routes: (Readonly<{
            key: string;
            name: string;
        }> & Readonly<{
            // tslint:disable-next-line no-redundant-undefined
            params?: object | undefined;
        }> & {
            // tslint:disable-next-line no-redundant-undefined
            state?: Readonly<any> | import("./types").PartialState<Readonly<any>> | undefined;
        })[];
        type: string;
        stale: false;
    }> | import("./types").PartialState<Readonly<{
        key: string;
        index: number;
        routeNames: string[];
        // tslint:disable-next-line no-redundant-undefined
        history?: unknown[] | undefined;
        // tslint:disable-next-line array-type
        routes: (Readonly<{
            key: string;
            name: string;
        }> & Readonly<{
            // tslint:disable-next-line no-redundant-undefined
            params?: object | undefined;
        }> & {
            // tslint:disable-next-line no-redundant-undefined
            state?: Readonly<any> | import("./types").PartialState<Readonly<any>> | undefined;
        })[];
        type: string;
        stale: false;
    }>> | (Pick<Readonly<{
        key: string;
        index: number;
        routeNames: string[];
        // tslint:disable-next-line no-redundant-undefined array-type
        history?: unknown[] | undefined;
        // tslint:disable-next-line array-type
        routes: (Readonly<{
            key: string;
            name: string;
        }> & Readonly<{
            // tslint:disable-next-line no-redundant-undefined
            params?: object | undefined;
        }> & {
            // tslint:disable-next-line no-redundant-undefined
            state?: Readonly<any> | import("./types").PartialState<Readonly<any>> | undefined;
        })[];
        type: string;
        stale: false;
    }>, "stale" | "key" | "index" | "routeNames" | "history" | "type"> & {
        // tslint:disable-next-line array-type use-default-type-parameter
        routes: Pick<Route<string, object | undefined>, "name" | "params">[];
    }) | undefined;
    // tslint:disable-next-line no-redundant-undefined
    source?: string | undefined;
    // tslint:disable-next-line no-redundant-undefined
    target?: string | undefined;
} | {
    type: "SET_PARAMS";
    payload: {
        // tslint:disable-next-line no-redundant-undefined
        params?: object | undefined;
    };
    // tslint:disable-next-line no-redundant-undefined
    source?: string | undefined;
    // tslint:disable-next-line no-redundant-undefined
    target?: string | undefined;
} | {
    type: "REPLACE";
    payload: {
        name: string;
        // tslint:disable-next-line no-redundant-undefined
        key?: string | undefined;
        // tslint:disable-next-line no-redundant-undefined
        params?: object | undefined;
    };
    // tslint:disable-next-line no-redundant-undefined
    source?: string | undefined;
    // tslint:disable-next-line no-redundant-undefined
    target?: string | undefined;
} | {
    type: "PUSH";
    payload: {
        name: string;
        // tslint:disable-next-line no-redundant-undefined
        key?: string | undefined;
        // tslint:disable-next-line no-redundant-undefined
        params?: object | undefined;
    };
    // tslint:disable-next-line no-redundant-undefined
    source?: string | undefined;
    // tslint:disable-next-line no-redundant-undefined
    target?: string | undefined;
} | {
    type: "POP";
    payload: {
        count: number;
    };
    // tslint:disable-next-line no-redundant-undefined
    source?: string | undefined;
    // tslint:disable-next-line no-redundant-undefined
    target?: string | undefined;
} | {
    type: "POP_TO_TOP";
    // tslint:disable-next-line no-redundant-undefined
    source?: string | undefined;
    // tslint:disable-next-line no-redundant-undefined
    target?: string | undefined;
}>;
