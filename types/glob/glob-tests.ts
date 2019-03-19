import glob = require("glob");
const Glob = glob.Glob;
type GlobOptions = import('glob').IOptions;

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
    let options: GlobOptions = { statCache: {}, stat: true, dot: true };
	console.log(pattern);

	const mg = new Glob(pattern, options, (er, matches) => {
		if (er) {
			console.error(er);
			return;
		}
        const file1 = matches[0];
        const stat = options.statCache[file1];
        if (stat.isFile()) {
            console.log("is file");
        } else if (stat.isDirectory()) {
            console.log("is directory");
        }
	});
	console.log("after");
})();

declare const ignore: ReadonlyArray<string>;
glob.sync('/foo/*', {realpath: true, realpathCache: {'/foo/bar': '/bar'}, ignore: '/foo/baz'});
glob.sync('/*', {ignore, nodir: true, cache: {'/': ['bar', 'baz']}, statCache: {'/foo/bar': false, '/foo/baz': {isDirectory() { return true; }}}});
