"use strict";

import { RouteHandlerObject } from "workbox-core/types/RouteHandler";
import { RouteMatchCallback } from "workbox-core/types/RouteMatchCallback";

import * as WorkboxRouting from "workbox-routing";

declare const options: WorkboxRouting.FindMatchingRoute;

async function handler(): Promise<Response> { return new Response(); }

function match(): void {}

// $ExpectType NavigationRoute
const navigationRoute = new WorkboxRouting.NavigationRoute(handler);

// $ExpectType RegExpRoute
const regexpRoute = new WorkboxRouting.RegExpRoute(/./, handler);

// $ExpectType Route
const route = new WorkboxRouting.Route(match, handler);

// $ExpectType Router
const router = new WorkboxRouting.Router();
router.routes; // $ExpectType Map<HTTPMethod, Route[]>
router.addCacheListener(); // $ExpectType void
router.addFetchListener(); // $ExpectType void
router.findMatchingRoute(options); // $ExpectType Promise<void>
router.handleRequest(options); // $ExpectType Promise<Response | undefined>
router.registerRoute(route); // $ExpectType void
router.setCatchHandler(handler); // $ExpectType void
router.setDefaultHandler(handler); // $ExpectType void
router.unregisterRoute(route); // $ExpectType void

// $ExpectType Route
WorkboxRouting.registerRoute(route);

// $ExpectType void
WorkboxRouting.setCatchHandler(handler);

// $ExpectType void
WorkboxRouting.setDefaultHandler(handler);
