import WorkboxSW = require("workbox-sw");

// @ts-expect-error
WorkboxSW.core.setLogLevel(5); // $ExpectType void

WorkboxSW.routing.registerRoute("/", WorkboxSW.strategies.networkFirst()); // $ExpectType Route

// @ts-expect-error
WorkboxSW.precaching.precacheAndRoute(/foo/);

WorkboxSW.precaching.precacheAndRoute(["some-resource.js"], {directoryIndex: "/"}); // $ExpectType void
