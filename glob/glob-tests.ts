/// <reference path="./glob.d.ts" />

import glob = require("glob");
var Glob = glob.Glob;

(()=> {
	var pattern = "test/a/**/[cg]/../[cg]";
	console.log(pattern);

	var mg = new Glob(pattern, {mark: true, sync: true}, function (er, matches) {
		console.log("matches", matches)
	});
	console.log("after")
})();

(()=> {
	var pattern = "{./*/*,/*,/usr/local/*}";
	console.log(pattern);

	var mg = new Glob(pattern, {mark: true}, function (er, matches) {
		console.log("matches", matches)
	});
	console.log("after")
})();
