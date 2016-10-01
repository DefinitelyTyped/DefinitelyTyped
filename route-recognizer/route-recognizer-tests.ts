/// <reference path="route-recognizer.d.ts" />

import RouteRecognizer from 'route-recognizer';

var router = new RouteRecognizer<string>();
router.add([{ path: "/posts", handler: "i am the handler" }]);
var result = router.recognize("/posts");
