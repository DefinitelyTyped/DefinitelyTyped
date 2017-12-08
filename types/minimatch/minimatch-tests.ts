import mm = require("minimatch");
let b: boolean;
let pattern = "**/*.ts";
let options = {
	debug: true
};
let m = new mm.Minimatch(pattern, options);
let r = m.makeRe();

let f = ["test.ts"];
mm.match(f, pattern, options);

f.filter(mm.filter(pattern, options));

let s = "hello";
b = mm(s, pattern, options);
b = mm(s, pattern);
