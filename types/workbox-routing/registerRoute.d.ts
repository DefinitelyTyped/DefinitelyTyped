import { RegExpRoute } from "./RegExpRoute";
import { Route } from "./Route";

import { HTTPMethod } from "./types/HTTPMethod";
import { RouteHandler } from "./types/RouteHandler";
import { RouteMatchCallback } from "./types/RouteMatchCallback";

export function registerRoute(capture: string, handler?: RouteHandler, method?: HTTPMethod): Route<boolean>;
export function registerRoute(capture: RegExp, handler?: RouteHandler, method?: HTTPMethod): RegExpRoute;
export function registerRoute<MatchReturn = any>(capture: RouteMatchCallback<MatchReturn> | Route<MatchReturn>, handler?: RouteHandler, method?: HTTPMethod): Route<MatchReturn>;
export function registerRoute(capture: RegisterRouteCapture, handler?: RouteHandler, method?: HTTPMethod): Route;

export type RegisterRouteCapture = string | RegExp | RouteMatchCallback | Route;
