"use strict";

import * as WorkboxStrategies from "workbox-strategies";

// $ExpectType CacheFirst
const cacheFirst = new WorkboxStrategies.CacheFirst();
cacheFirst.makeRequest({ request: "" }); // $ExpectType Promise<Response>

// $ExpectType CacheOnly
const cacheOnly = new WorkboxStrategies.CacheOnly();
cacheOnly.makeRequest({ request: "" }); // $ExpectType Promise<Response>

// $ExpectType NetworkFirst
const networkFirst = new WorkboxStrategies.NetworkFirst();
networkFirst.makeRequest({ request: "" }); // $ExpectType Promise<Response>

// $ExpectType NetworkOnly
const networkOnly = new WorkboxStrategies.NetworkOnly();
networkOnly.makeRequest({ request: "" }); // $ExpectType Promise<Response>

// $ExpectType StaleWhileRevalidate
const staleWhileRevalidate = new WorkboxStrategies.StaleWhileRevalidate();
staleWhileRevalidate.makeRequest({ request: "" }); // $ExpectType Promise<Response>
