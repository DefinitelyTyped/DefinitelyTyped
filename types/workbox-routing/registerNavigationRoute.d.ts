import { NavigationRoute, NavigationRouteOptions } from "./NavigationRoute";

export function registerNavigationRoute(cachedAssetUrl: string, options?: RegisterNavigationRouteOptions): NavigationRoute;

export interface RegisterNavigationRouteOptions extends NavigationRouteOptions {
    cacheName?: string;
}
