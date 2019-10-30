"use strict";

import * as WorkboxCore from "workbox-core";

// $ExpectType CacheNames
WorkboxCore.cacheNames;

// $ExpectType void
WorkboxCore.clientsClaim();

// $ExpectType void
WorkboxCore.registerQuotaErrorCallback(() => {});

// $ExpectType void
WorkboxCore.setCacheNameDetails({});

// $ExpectType void
WorkboxCore.skipWaiting();
