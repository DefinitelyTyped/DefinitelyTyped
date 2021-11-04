/* tslint:disable:comment-format no-namespace */

"use strict";

import {
    CacheNameDetails,
    cacheNames,
    clientsClaim,
    registerQuotaErrorCallback,
    setCacheNameDetails,
    skipWaiting,
} from "workbox-core";

//==============================================================================
// WorkboxCore.cacheNames
//==============================================================================

export namespace CacheNamesTest {
    // $ExpectType CacheNames
    cacheNames;

    // $ExpectType string
    cacheNames.googleAnalytics;

    // $ExpectType string
    cacheNames.precache;

    // $ExpectType string
    cacheNames.prefix;

    // $ExpectType string
    cacheNames.runtime;

    // $ExpectType string
    cacheNames.suffix;
}

//==============================================================================
// WorkboxCore.clientsClaim
//==============================================================================

export namespace ClientsClaimTest {
    // $ExpectType void
    clientsClaim();
}

//==============================================================================
// WorkboxCore.registerQuotaErrorCallback
//==============================================================================

export namespace RegisterQuotaErrorCallbackTest {
    declare const callback: () => void;

    // $ExpectType void
    registerQuotaErrorCallback(callback);
}

//==============================================================================
// WorkboxCore.setCacheNameDetails
//==============================================================================

export namespace SetCacheNameDetailsTest {
    declare const details: CacheNameDetails;

    // $ExpectType void
    setCacheNameDetails(details);
}

//==============================================================================
// WorkboxCore.skipWaiting
//==============================================================================

export namespace SkipWaitingTest {
    // $ExpectType void
    skipWaiting();
}
