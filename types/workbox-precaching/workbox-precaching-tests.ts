"use strict";

import * as WorkboxPrecaching from "workbox-precaching";

// $ExpectType void
WorkboxPrecaching.addPlugins([]);

// $ExpectType void
WorkboxPrecaching.addRoute();

// $ExpectType void
WorkboxPrecaching.cleanupOutdatedCaches();

// $ExpectType string
WorkboxPrecaching.getCacheKeyForURL("");

// $ExpectType void
WorkboxPrecaching.precache([]);

// $ExpectType void
WorkboxPrecaching.precacheAndRoute([]);
