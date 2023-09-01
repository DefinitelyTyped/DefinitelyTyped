import type { NavigationState, PartialState, Router, DefaultRouterOptions, Route, ParamListBase } from './types';
// tslint:disable-next-line strict-export-declare-modifiers interface-over-type-literal
export declare type TabActionType = {
    type: 'JUMP_TO';
    payload: {
        name: string;
        params?: object | undefined;
    };
    source?: string | undefined;
    target?: string | undefined;
};
// tslint:disable-next-line strict-export-declare-modifiers
export declare type BackBehavior = 'initialRoute' | 'order' | 'history' | 'none';
// tslint:disable-next-line strict-export-declare-modifiers
export declare type TabRouterOptions = DefaultRouterOptions & {
    backBehavior?: BackBehavior | undefined;
};
// tslint:disable-next-line strict-export-declare-modifiers
export declare type TabNavigationState<ParamList extends ParamListBase> = Omit<NavigationState<ParamList>, 'history'> & {
    /**
     * Type of the router, in this case, it's tab.
     */
    type: 'tab';
    /**
     * List of previously visited route keys.
     */
    // tslint:disable-next-line array-type
    history: {
        type: 'route';
        key: string;
    }[];
};
// tslint:disable-next-line strict-export-declare-modifiers interface-over-type-literal
export declare type TabActionHelpers<ParamList extends ParamListBase> = {
    /**
     * Jump to an existing tab.
     *
     * @param name Name of the route for the tab.
     * @param [params] Params object for the route.
     */
    jumpTo<RouteName extends Extract<keyof ParamList, string>>(...args: undefined extends ParamList[RouteName] ? [RouteName] | [RouteName, ParamList[RouteName]] : [RouteName, ParamList[RouteName]]): void;
};
// tslint:disable-next-line strict-export-declare-modifiers
export declare const TabActions: {
    // tslint:disable-next-line no-redundant-undefined
    jumpTo(name: string, params?: object): TabActionType;
};
export default function TabRouter({ initialRouteName, backBehavior, }: TabRouterOptions): Router<TabNavigationState<Record<string, object | undefined>>, {
    type: "GO_BACK";
    // tslint:disable-next-line no-redundant-undefined
    source?: string | undefined;
    // tslint:disable-next-line no-redundant-undefined
    target?: string | undefined;
} | {
    type: "NAVIGATE";
    payload: {
        key: string;
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
            state?: Readonly<any> | PartialState<Readonly<any>> | undefined;
        })[];
        type: string;
        stale: false;
    }> | PartialState<Readonly<{
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
            state?: Readonly<any> | PartialState<Readonly<any>> | undefined;
        })[];
        type: string;
        stale: false;
    }>> | (Pick<Readonly<{
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
            state?: Readonly<any> | PartialState<Readonly<any>> | undefined;
        })[];
        type: string;
        stale: false;
    }>, "stale" | "key" | "index" | "routeNames" | "history" | "type"> & {
        // tslint:disable-next-line no-redundant-undefined array-type use-default-type-parameter
        routes: Pick<Route<string, object | undefined>, "name" | "params">[];
    }) | undefined;
    // tslint:disable-next-line no-redundant-undefined
    source?: string | undefined;
    // tslint:disable-next-line no-redundant-undefined
    target?: string | undefined;
} | {
    type: "SET_PARAMS";
    /**
     * List of previously visited route keys.
     */
    payload: {
        // tslint:disable-next-line no-redundant-undefined
        params?: object | undefined;
    };
    // tslint:disable-next-line no-redundant-undefined
    source?: string | undefined;
    // tslint:disable-next-line no-redundant-undefined
    target?: string | undefined;
} | TabActionType>;
