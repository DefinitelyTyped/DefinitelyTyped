/* tslint:disable:comment-format no-namespace */

"use strict";

import { WorkboxPlugin } from "workbox-core/types/WorkboxPlugin";
import {
    FetchListenerOptions,
    PrecacheController,
    PrecacheEntry,
    addPlugins,
    addRoute,
    cleanupOutdatedCaches,
    getCacheKeyForURL,
    precache,
    precacheAndRoute
} from "workbox-precaching";

//==============================================================================
// WorkboxPrecaching.PrecacheController
//==============================================================================

export namespace PrecacheControllerTest {
    declare const cacheName: string;

    // $ExpectType PrecacheController
    new PrecacheController();
    // $ExpectType PrecacheController
    new PrecacheController(cacheName);

    declare const controller: PrecacheController;
    declare const cacheEntries: Array<string | PrecacheEntry>;
    declare const cachedURL: string;
    declare const installOptions: PrecacheController.InstallOptions;

    // $ExpectType Promise<CleanupResult>
    controller.activate();

    // $ExpectType void
    controller.addToCacheList(cacheEntries);

    // $ExpectType string
    controller.getCacheKeyForURL(cachedURL);

    // $ExpectType string[]
    controller.getCachedURLs();

    // $ExpectType Record<string, string>
    controller.getURLsToCacheKeys();

    // $ExpectType Promise<InstallResult>
    controller.install();
    // $ExpectType Promise<InstallResult>
    controller.install(installOptions);
}

//==============================================================================
// WorkboxPrecaching.addPlugins
//==============================================================================

export namespace AddPluginsTest {
    declare const plugins: WorkboxPlugin[];

    // $ExpectType void
    addPlugins(plugins);
}

//==============================================================================
// WorkboxPrecaching.addRoute
//==============================================================================

export namespace AddRouteTest {
    declare const options: FetchListenerOptions;

    // $ExpectType void
    addRoute();
    // $ExpectType void
    addRoute(options);
}

//==============================================================================
// WorkboxPrecaching.cleanupOutdatedCaches
//==============================================================================

export namespace CleanupOutdatedCachesTest {
    // $ExpectType void
    cleanupOutdatedCaches();
}

//==============================================================================
// WorkboxPrecaching.getCacheKeyForURL
//==============================================================================

export namespace GetCacheKeyForURLTest {
    declare const url: string;

    // $ExpectType string
    getCacheKeyForURL(url);
}

//==============================================================================
// WorkboxPrecaching.precache
//==============================================================================

export namespace PrecacheTest {
    declare const entries: Array<string | PrecacheEntry>;

    // $ExpectType void
    precache(entries);
}

//==============================================================================
// WorkboxPrecaching.precacheAndRoute
//==============================================================================

export namespace PrecacheAndRoute {
    declare const entries: Array<string | PrecacheEntry>;
    declare const options: FetchListenerOptions;

    // $ExpectType void
    precacheAndRoute(entries);
    // $ExpectType void
    precacheAndRoute(entries, options);
}
