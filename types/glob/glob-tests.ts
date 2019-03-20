import glob = require("glob");
import fs = require("fs");
const Glob = glob.Glob;

(() => {
	const pattern = "test/a/**/[cg]/../[cg]";
	console.log(pattern);

	const mg = new Glob(pattern, {mark: true, sync: true, symlinks: {"test/a/foo": true}}, (er, matches) => {
		if (er) {
			console.error(er);
			return;
		}
		console.log("matches", matches);
	});
	console.log("after");
})();

(() => {
	const pattern = "{./*/*,/*,/usr/local/*}";
	console.log(pattern);

	const mg = new Glob(pattern, {mark: true}, (er, matches) => {
		if (er) {
			console.error(er);
			return;
		}
		console.log("matches", matches);
	});
	console.log("after");
})();

(() => {
	const pattern = "test/**";
    const options: glob.IOptions = { statCache: {}, stat: true, dot: true };
	console.log(pattern);

	const mg = new Glob(pattern, options, (er, matches) => {
		if (er) {
			console.error(er);
			return;
		}
        const file1 = matches[0];
        const stat = options.statCache[file1];
        if (stat && stat.isFile()) {
            console.log("is file");
        } else if (stat && stat.isDirectory()) {
            console.log("is directory");
        }
	});
	console.log("after");
})();

declare const ignore: ReadonlyArray<string>;
glob.sync('/foo/*', {realpath: true, realpathCache: {'/foo/bar': '/bar'}, ignore: '/foo/baz'});
const statResult = fs.statSync('/*');
glob.sync('/*', {ignore, nodir: true, cache: {'/': ['bar', 'baz']}, statCache: {'/foo/bar': false, '/foo/baz': statResult}});
