"use strict";

import * as WorkboxCacheableResponse from "workbox-cacheable-response";

declare const response: Response;

// $ExpectType CacheableResponse
const cacheable = new WorkboxCacheableResponse.CacheableResponse();
cacheable.isResponseCacheable(response); // $ExpectType boolean

// $ExpectType CacheableResponsePlugin
const plugin = new WorkboxCacheableResponse.CacheableResponsePlugin();
