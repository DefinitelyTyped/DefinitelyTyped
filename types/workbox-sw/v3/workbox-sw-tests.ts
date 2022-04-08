import WorkboxSW = require("workbox-sw");

// $ExpectError
WorkboxSW.core.setLogLevel(5); // $ExpectType void

WorkboxSW.routing.registerRoute("/", WorkboxSW.strategies.networkFirst()); // $ExpectType Route

// $ExpectError
WorkboxSW.precaching.precacheAndRoute(/foo/);

WorkboxSW.precaching.precacheAndRoute(["some-resource.js"], {directoryIndex: "/"}); // $ExpectType void
