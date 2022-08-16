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

    // @ts-expect-error
    await rmfr(".gitignore", { unlink: (path, cb) => cb(new Error()) });
    // @ts-expect-error
    await rmfr();
    // @ts-expect-error
    await rmfr("<", { o: "O" }, "/");
    // @ts-expect-error
    await rmfr(["1"], { glob: true });
    // @ts-expect-error
    await rmfr("foo", 1);
    // @ts-expect-error
    await rmfr("foo", { chmod: new Set(["a"]) });
    // @ts-expect-error
    await rmfr("foo", { maxBusyTries: "foo", emfileWait: "bar", glob: "baz" });
    // @ts-expect-error
    await rmfr("foo", { disableGlob: true });
})();
