/// <reference path="route-recognizer.d.ts" />

import RouteRecognizer = require('route-recognizer')

var router = new RouteRecognizer<string>();
router.add([{ path: "/posts", handler: "i am the handler" }]);
var result = router.recognize("/posts");
