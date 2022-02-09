import glob = require("glob");
import fs = require("fs");

const Glob = glob.Glob;
// ExpectType glob
const globAlias = glob.glob;

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

declare const ignore: ReadonlyArray<string>;
glob.sync('/foo/*', {realpath: true, realpathCache: {'/foo/bar': '/bar'}, ignore: '/foo/baz'});
glob.sync('/*', {ignore, nodir: true, cache: {'/': ['bar', 'baz']}, statCache: {'/foo/bar': false, '/foo/baz': {isDirectory() { return true; }}}});
glob.sync('/*', {
    fs: {
        ...fs,
        existsSync: filepath => {
            console.log('existsSync called with ' + filepath);
            return fs.existsSync(filepath);
        },
    },
});

// $ExpectType IGlob
const globInstance = glob('**/*.js', { mark: true }, (er, matches) => {
    if (er) {
        return;
    }
    er; // $ExpectType null
    matches; // $ExpectType string[]
});
globInstance.pause();
globInstance.resume();
globInstance.abort();
