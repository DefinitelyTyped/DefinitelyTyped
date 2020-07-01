import rmfr = require("rmfr");

(async () => {
    // happy
    await rmfr("tmp_file");
    await rmfr("tmp_d*", {});
    await rmfr("../{tmp_d*,test.js}", {
        glob: {
            cwd: "node_modules",
            ignore: "some_filename"
        }
    });
    await rmfr("test.js", {
        glob: {
            cwd: "this/directory/does/not/exist"
        }
    });

    // $ExpectError
    await rmfr(".gitignore", { unlink: (path, cb) => cb(new Error()) });
    // $ExpectError
    await rmfr();
    // $ExpectError
    await rmfr("<", { o: "O" }, "/");
    // $ExpectError
    await rmfr(["1"], { glob: true });
    // $ExpectError
    await rmfr("foo", 1);
    // $ExpectError
    await rmfr("foo", { chmod: new Set(["a"]) });
    // $ExpectError
    await rmfr("foo", { maxBusyTries: "foo", emfileWait: "bar", glob: "baz" });
    // $ExpectError
    await rmfr("foo", { disableGlob: true });
})();
