import WorkboxSW = require("workbox-sw");

WorkboxSW.routing.registerRoute("/", new WorkboxSW.strategies.NetworkFirst()); // $ExpectType Route

WorkboxSW.routing.registerRoute("/", WorkboxSW.strategies.networkFirst()); // $ExpectType Route

// $ExpectError
WorkboxSW.precaching.precacheAndRoute(/foo/);

WorkboxSW.precaching.precacheAndRoute(["some-resource.js"], {directoryIndex: "/"}); // $ExpectType void
