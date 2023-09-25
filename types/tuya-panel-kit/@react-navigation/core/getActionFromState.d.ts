import type { CommonActions, NavigationState, PartialState } from "../routers";
import type { NavigatorScreenParams, PathConfigMap } from "./types";
// eslint-disable-next-line @definitelytyped/strict-export-declare-modifiers, interface-over-type-literal
declare type Options = {
    initialRouteName?: string | undefined;
    screens: PathConfigMap;
};
// eslint-disable-next-line @definitelytyped/strict-export-declare-modifiers, interface-over-type-literal
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
