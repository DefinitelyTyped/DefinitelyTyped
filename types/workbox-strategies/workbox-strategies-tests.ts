/* tslint:disable:comment-format no-namespace */

"use strict";

import {
    CacheFirst,
    CacheFirstOptions,
    CacheOnly,
    CacheOnlyOptions,
    MakeRequestCallbackOptions,
    NetworkFirst,
    NetworkFirstOptions,
    NetworkOnly,
    NetworkOnlyOptions,
    StaleWhileRevalidate,
    StaleWhileRevalidateOptions,
} from "workbox-strategies";

//==============================================================================
// WorkboxStrategies.CacheFirst
//==============================================================================

export namespace CacheFirstTest {
    declare const options: CacheFirstOptions;

    // $ExpectType CacheFirst
    new CacheFirst();
    // $ExpectType CacheFirst
    new CacheFirst(options);

    declare const cacheFirst: CacheFirst;
    declare const makeRequestOptions: MakeRequestCallbackOptions;

    // $ExpectType Promise<Response>
    cacheFirst.makeRequest(makeRequestOptions);
}

//==============================================================================
// WorkboxStrategies.CacheOnly
//==============================================================================

export namespace CacheOnlyTest {
    declare const options: CacheOnlyOptions;

    // $ExpectType CacheOnly
    new CacheOnly();
    // $ExpectType CacheOnly
    new CacheOnly(options);

    declare const cacheOnly: CacheOnly;
    declare const makeRequestOptions: MakeRequestCallbackOptions;

    // $ExpectType Promise<Response>
    cacheOnly.makeRequest(makeRequestOptions);
}

//==============================================================================
// WorkboxStrategies.NetworkFirst
//==============================================================================

export namespace NetworkFirstTest {
    declare const options: NetworkFirstOptions;

    // $ExpectType NetworkFirst
    new NetworkFirst();
    // $ExpectType NetworkFirst
    new NetworkFirst(options);

    declare const networkFirst: NetworkFirst;
    declare const makeRequestOptions: MakeRequestCallbackOptions;

    // $ExpectType Promise<Response>
    networkFirst.makeRequest(makeRequestOptions);
}

//==============================================================================
// WorkboxStrategies.NetworkOnly
//==============================================================================

export namespace NetworkOnlyTest {
    declare const options: NetworkOnlyOptions;

    // $ExpectType NetworkOnly
    new NetworkOnly();
    // $ExpectType NetworkOnly
    new NetworkOnly(options);

    declare const networkOnly: NetworkOnly;
    declare const makeRequestOptions: MakeRequestCallbackOptions;

    // $ExpectType Promise<Response>
    networkOnly.makeRequest(makeRequestOptions);
}

//==============================================================================
// WorkboxStrategies.StaleWhileRevalidateTest
//==============================================================================

export namespace StaleWhileRevalidateTest {
    declare const options: StaleWhileRevalidateOptions;

    // $ExpectType StaleWhileRevalidate
    new StaleWhileRevalidate();
    // $ExpectType StaleWhileRevalidate
    new StaleWhileRevalidate(options);

    declare const staleWhileRevalidate: StaleWhileRevalidate;
    declare const makeRequestOptions: MakeRequestCallbackOptions;

    // $ExpectType Promise<Response>
    staleWhileRevalidate.makeRequest(makeRequestOptions);
}
