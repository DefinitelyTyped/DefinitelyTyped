import type { Route, PartialState, NavigationState } from '../routers';
export default function getFocusedRouteNameFromRoute(route: Partial<Route<string>> & {
    state?: PartialState<NavigationState>;
}): string | undefined;
