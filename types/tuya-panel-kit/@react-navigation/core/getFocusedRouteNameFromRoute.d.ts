import type { NavigationState, PartialState, Route } from "../routers";
export default function getFocusedRouteNameFromRoute(
    route: Partial<Route<string>> & {
        state?: PartialState<NavigationState> | undefined;
    },
): string | undefined;
