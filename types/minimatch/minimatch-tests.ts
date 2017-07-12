import mm = require("minimatch");

var pattern = "**/*.ts";
var options = {
	debug: true
};
var m = new mm.Minimatch(pattern, options);
var r = m.makeRe();

var f = ["test.ts"];
mm.match(f, pattern, options);

f.filter(mm.filter(pattern, options));

var s: string = "hello";
var b: boolean = mm(s, pattern, options);
var b: boolean = mm(s, pattern);
