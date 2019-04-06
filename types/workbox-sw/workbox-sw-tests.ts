import WorkboxSW = require("workbox-sw");


WorkboxSW.routing.registerRoute("/", new WorkboxSW.strategies.NetworkFirst()); // $ExpectType Route

// $ExpectError
WorkboxSW.precaching.precacheAndRoute(/foo/);

WorkboxSW.precaching.precacheAndRoute(["some-resource.js"], {directoryIndex: "/"}); // $ExpectType void
