import firstCommit = require("gfc");

firstCommit({ cwd: "foo/bar" }); // $ExpectType Promise<{ stdout: string | Buffer; stderr: string | Buffer; }> || Promise<{ stdout: string | Buffer<ArrayBufferLike>; stderr: string | Buffer<ArrayBufferLike>; }>
firstCommit({ exec: { encoding: "buffer" } }); // $ExpectType Promise<{ stdout: string | Buffer; stderr: string | Buffer; }> || Promise<{ stdout: string | Buffer<ArrayBufferLike>; stderr: string | Buffer<ArrayBufferLike>; }>
// @ts-expect-error
firstCommit({ exec: { input: "foo" } });
firstCommit({ message: "foo" }); // $ExpectType Promise<{ stdout: string | Buffer; stderr: string | Buffer; }> || Promise<{ stdout: string | Buffer<ArrayBufferLike>; stderr: string | Buffer<ArrayBufferLike>; }>
firstCommit({ file: false }); // $ExpectType Promise<{ stdout: string | Buffer; stderr: string | Buffer; }> || Promise<{ stdout: string | Buffer<ArrayBufferLike>; stderr: string | Buffer<ArrayBufferLike>; }>
firstCommit({ file: { path: "foo" } }); // $ExpectType Promise<{ stdout: string | Buffer; stderr: string | Buffer; }> || Promise<{ stdout: string | Buffer<ArrayBufferLike>; stderr: string | Buffer<ArrayBufferLike>; }>
firstCommit({ file: { path: "foo", contents: "bar" } }); // $ExpectType Promise<{ stdout: string | Buffer; stderr: string | Buffer; }> || Promise<{ stdout: string | Buffer<ArrayBufferLike>; stderr: string | Buffer<ArrayBufferLike>; }>
firstCommit({ commit: false }); // $ExpectType Promise<{ stdout: string | Buffer; stderr: string | Buffer; }> || Promise<{ stdout: string | Buffer<ArrayBufferLike>; stderr: string | Buffer<ArrayBufferLike>; }>
firstCommit({ forceFile: false }); // $ExpectType Promise<{ stdout: string | Buffer; stderr: string | Buffer; }> || Promise<{ stdout: string | Buffer<ArrayBufferLike>; stderr: string | Buffer<ArrayBufferLike>; }>
firstCommit({ remote: "foo" }); // $ExpectType Promise<{ stdout: string | Buffer; stderr: string | Buffer; }> || Promise<{ stdout: string | Buffer<ArrayBufferLike>; stderr: string | Buffer<ArrayBufferLike>; }>
firstCommit({ push: false }); // $ExpectType Promise<{ stdout: string | Buffer; stderr: string | Buffer; }> || Promise<{ stdout: string | Buffer<ArrayBufferLike>; stderr: string | Buffer<ArrayBufferLike>; }>

firstCommit().then(res => {
    res.stdout; // $ExpectType string | Buffer || string | Buffer<ArrayBufferLike>
    res.stderr; // $ExpectType string | Buffer || string | Buffer<ArrayBufferLike>
});
firstCommit("foo/bar").then(res => {
    res.stdout; // $ExpectType string | Buffer || string | Buffer<ArrayBufferLike>
    res.stderr; // $ExpectType string | Buffer || string | Buffer<ArrayBufferLike>
});
firstCommit("foo/bar", { cwd: "foo/bar" }).then(res => {
    res.stdout; // $ExpectType string | Buffer || string | Buffer<ArrayBufferLike>
    res.stderr; // $ExpectType string | Buffer || string | Buffer<ArrayBufferLike>
});
// $ExpectType void
firstCommit("foo/bar", (err, stdout, stderr) => {
    err; // $ExpectType ExecException | null
    stdout; // $ExpectType string | Buffer || string | Buffer<ArrayBufferLike>
    stderr; // $ExpectType string | Buffer || string | Buffer<ArrayBufferLike>
});
// $ExpectType void
firstCommit("foo/bar", { cwd: "foo/bar" }, (err, stdout, stderr) => {
    err; // $ExpectType ExecException | null
    stdout; // $ExpectType string | Buffer || string | Buffer<ArrayBufferLike>
    stderr; // $ExpectType string | Buffer || string | Buffer<ArrayBufferLike>
});

firstCommit.sync(); // $ExpectType string | Buffer || string | Buffer<ArrayBufferLike>
firstCommit.sync("foo/bar"); // $ExpectType string | Buffer || string | Buffer<ArrayBufferLike>
firstCommit.sync("foo/bar", { exec: { input: "foo" } }); // $ExpectType string | Buffer || string | Buffer<ArrayBufferLike>
firstCommit.sync({ exec: { input: "foo" } }); // $ExpectType string | Buffer || string | Buffer<ArrayBufferLike>
