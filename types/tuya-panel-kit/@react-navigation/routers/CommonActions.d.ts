import type { NavigationState, PartialState, Route } from "./types";
// tslint:disable-next-line strict-export-declare-modifiers
declare type ResetState =
    | PartialState<NavigationState>
    | NavigationState
    | (Omit<NavigationState, "routes"> & {
        // tslint:disable-next-line array-type
        routes: Omit<Route<string>, "key">[];
    });
// tslint:disable-next-line strict-export-declare-modifiers
export declare type Action = {
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
    payload: ResetState | undefined;
    source?: string | undefined;
    target?: string | undefined;
} | {
    type: "SET_PARAMS";
    payload: {
        params?: object | undefined;
    };
    source?: string | undefined;
    target?: string | undefined;
};
// tslint:disable-next-line strict-export-declare-modifiers
export declare function goBack(): Action;
// tslint:disable-next-line strict-export-declare-modifiers
export declare function navigate(
    route: {
        key: string;
        params?: object | undefined;
    } | {
        name: string;
        key?: string | undefined;
        params?: object | undefined;
    },
): Action;
// tslint:disable-next-line strict-export-declare-modifiers
export declare function navigate(name: string, params?: object): Action;
// tslint:disable-next-line strict-export-declare-modifiers
export declare function reset(state: ResetState | undefined): Action;
// tslint:disable-next-line strict-export-declare-modifiers
export declare function setParams(params: object): Action;
export {};
