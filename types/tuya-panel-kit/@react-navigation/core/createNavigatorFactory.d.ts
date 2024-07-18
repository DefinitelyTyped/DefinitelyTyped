import type * as React from "react";
import type { NavigationState } from "../routers";
import type { EventMapBase, TypedNavigator } from "./types";
/**
 * Higher order component to create a `Navigator` and `Screen` pair.
 * Custom navigators should wrap the navigator component in `createNavigator` before exporting.
 *
 * @param Navigator The navigtor component to wrap.
 * @returns Factory method to create a `Navigator` and `Screen` pair.
 */
/* eslint-disable @definitelytyped/no-unnecessary-generics */
export default function createNavigatorFactory<
    State extends NavigationState,
    ScreenOptions extends {},
    EventMap extends EventMapBase,
    NavigatorComponent extends React.ComponentType<any>,
>(
    Navigator: NavigatorComponent,
): <ParamList extends Record<string, object | undefined>>() => TypedNavigator<
    ParamList,
    State,
    ScreenOptions,
    EventMap,
    NavigatorComponent
>;
/* eslist-enable @definitelytyped/no-unnecessary-generics */
