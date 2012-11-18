/// <reference path="../Definitions/impress-0.5.d.ts" />

impress().init();

var api = impress();

api.next()
api.prev();
api.goto(document.getElementById('#id'));
api.goto(1, 123);