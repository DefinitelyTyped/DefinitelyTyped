import { JSX } from "react";
import { DefaultNavigatorOptions, StackNavigationState, StackRouterOptions } from "../../native";
import type { StackNavigationConfig, StackNavigationEventMap, StackNavigationOptions } from "../types";
// eslint-disable-next-line @definitelytyped/strict-export-declare-modifiers
declare type Props = DefaultNavigatorOptions<StackNavigationOptions> & StackRouterOptions & StackNavigationConfig;
declare function StackNavigator({ initialRouteName, children, screenOptions, ...rest }: Props): JSX.Element;
/* eslint-disable @definitelytyped/no-unnecessary-generics */
/* eslint-disable @definitelytyped/prefer-declare-function */
declare const _default: <ParamList extends Record<string, object | undefined>>() =>
    import("../../native").TypedNavigator<
        ParamList,
        StackNavigationState<Record<string, object | undefined>>,
        StackNavigationOptions,
        StackNavigationEventMap,
        typeof StackNavigator
    >;
/* eslist-enable @definitelytyped/prefer-declare-function */
/* eslist-enable @definitelytyped/no-unnecessary-generics */
export default _default;
