import { RouteHandler } from "workbox-core/types/RouteHandler";
import { RouteMatchCallback } from "workbox-core/types/RouteMatchCallback";

import { Route } from "./Route";
import { HTTPMethod } from "./types/HTTPMethod";

export function registerRoute(capture: string | RegExp | RouteMatchCallback | Route, handler?: RouteHandler, method?: HTTPMethod): Route;
