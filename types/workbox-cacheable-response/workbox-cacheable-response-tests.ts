/* tslint:disable:comment-format no-namespace */

"use strict";

import {
    CacheableResponse,
    CacheableResponseConfig,
    Plugin,
} from "workbox-cacheable-response";

//==============================================================================
// WorkboxCacheableResponse.CacheableResponse
//==============================================================================

export namespace CacheableResponseTest {
    declare const config: CacheableResponseConfig;

    // $ExpectType CacheableResponse
    new CacheableResponse();
    // $ExpectType CacheableResponse
    new CacheableResponse(config);

    declare const cacheable: CacheableResponse;
    declare const response: Response;

    // $ExpectType boolean
    cacheable.isResponseCacheable(response);
}

//==============================================================================
// WorkboxCacheableResponse.Plugin
//==============================================================================

export namespace CacheableResponsePluginTest {
    declare const config: CacheableResponseConfig;

    // $ExpectType Plugin
    new Plugin();
    // $ExpectType Plugin
    new Plugin(config);
}
