import type { CommonActions, NavigationState, PartialState } from "../routers";
import type { NavigatorScreenParams, PathConfigMap } from "./types";
// tslint:disable-next-line strict-export-declare-modifiers interface-over-type-literal
declare type Options = {
    initialRouteName?: string | undefined;
    screens: PathConfigMap;
};
// tslint:disable-next-line strict-export-declare-modifiers interface-over-type-literal
declare type NavigateAction<State extends NavigationState> = {
    type: "NAVIGATE";
    payload: {
        name: string;
        params?: NavigatorScreenParams<State> | undefined;
    };
};
export default function getActionFromState(
    state: PartialState<NavigationState>,
    options?: Options,
): NavigateAction<NavigationState> | CommonActions.Action | undefined;
export {};
