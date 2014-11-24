/// <reference path="./minimatch.d.ts" />

import mm = require("minimatch");

var pattern = "**/*.ts";
var options = {
	debug: true
};
var m = new mm.Minimatch(pattern, options);
var r = m.makeRe();

var f = ["test.ts"];
mm.match(f, pattern, options);

mm.filter('foo')('bar');

var s: string = "hello";
var b: boolean = mm(s, pattern, options);
var b: boolean = mm(s, pattern);
