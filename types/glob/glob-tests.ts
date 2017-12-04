import glob = require("glob");
const Glob = glob.Glob;

(() => {
	const pattern = "test/a/**/[cg]/../[cg]";
	console.log(pattern);

	const mg = new Glob(pattern, {mark: true, sync: true}, function(er, matches) {
		console.log("matches", matches);
	});
	console.log("after");
})();

(() => {
	const pattern = "{./*/*,/*,/usr/local/*}";
	console.log(pattern);

	const mg = new Glob(pattern, {mark: true}, function(er, matches) {
		console.log("matches", matches);
	});
	console.log("after");
})();
