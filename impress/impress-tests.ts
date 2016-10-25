/// <reference path="impress.d.ts" />

impress().init();

var api = impress();

api.next()
api.prev();
api.goto(document.getElementById('#id'));
api.goto(1, 123);