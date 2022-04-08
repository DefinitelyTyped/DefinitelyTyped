import type { NavigationState, PartialState, Route } from './types';
// tslint:disable-next-line strict-export-declare-modifiers
declare type ResetState = PartialState<NavigationState> | NavigationState | (Omit<NavigationState, 'routes'> & {
    // tslint:disable-next-line array-type
    routes: Omit<Route<string>, 'key'>[];
});
// tslint:disable-next-line strict-export-declare-modifiers
export declare type Action = {
    type: 'GO_BACK';
    source?: string;
    target?: string;
} | {
    type: 'NAVIGATE';
    payload: {
        key: string;
        name?: undefined;
        params?: object;
        merge?: boolean;
    } | {
        name: string;
        key?: string;
        params?: object;
        merge?: boolean;
    };
    source?: string;
    target?: string;
} | {
    type: 'RESET';
    payload: ResetState | undefined;
    source?: string;
    target?: string;
} | {
    type: 'SET_PARAMS';
    payload: {
        params?: object;
    };
    source?: string;
    target?: string;
};
// tslint:disable-next-line strict-export-declare-modifiers
export declare function goBack(): Action;
// tslint:disable-next-line strict-export-declare-modifiers
export declare function navigate(route: {
    key: string;
    params?: object;
} | {
    name: string;
    key?: string;
    params?: object;
}): Action;
// tslint:disable-next-line strict-export-declare-modifiers
export declare function navigate(name: string, params?: object): Action;
// tslint:disable-next-line strict-export-declare-modifiers
export declare function reset(state: ResetState | undefined): Action;
// tslint:disable-next-line strict-export-declare-modifiers
export declare function setParams(params: object): Action;
export {};
