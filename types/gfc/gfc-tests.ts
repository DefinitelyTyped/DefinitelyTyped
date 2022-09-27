import firstCommit = require('gfc');

firstCommit({ cwd: 'foo/bar' }); // $ExpectType Promise<{ stdout: string | Buffer; stderr: string | Buffer; }>
firstCommit({ exec: { encoding: 'buffer' } }); // $ExpectType Promise<{ stdout: string | Buffer; stderr: string | Buffer; }>
// @ts-expect-error
firstCommit({ exec: { input: 'foo' } });
firstCommit({ message: 'foo' }); // $ExpectType Promise<{ stdout: string | Buffer; stderr: string | Buffer; }>
firstCommit({ file: false }); // $ExpectType Promise<{ stdout: string | Buffer; stderr: string | Buffer; }>
firstCommit({ file: { path: 'foo' } }); // $ExpectType Promise<{ stdout: string | Buffer; stderr: string | Buffer; }>
firstCommit({ file: { path: 'foo', contents: 'bar' } }); // $ExpectType Promise<{ stdout: string | Buffer; stderr: string | Buffer; }>
firstCommit({ commit: false }); // $ExpectType Promise<{ stdout: string | Buffer; stderr: string | Buffer; }>
firstCommit({ forceFile: false }); // $ExpectType Promise<{ stdout: string | Buffer; stderr: string | Buffer; }>
firstCommit({ remote: 'foo' }); // $ExpectType Promise<{ stdout: string | Buffer; stderr: string | Buffer; }>
firstCommit({ push: false }); // $ExpectType Promise<{ stdout: string | Buffer; stderr: string | Buffer; }>

firstCommit().then(res => {
    res.stdout; // $ExpectType string | Buffer
    res.stderr; // $ExpectType string | Buffer
});
firstCommit('foo/bar').then(res => {
    res.stdout; // $ExpectType string | Buffer
    res.stderr; // $ExpectType string | Buffer
});
firstCommit('foo/bar', { cwd: 'foo/bar' }).then(res => {
    res.stdout; // $ExpectType string | Buffer
    res.stderr; // $ExpectType string | Buffer
});
// $ExpectType void
firstCommit('foo/bar', (err, stdout, stderr) => {
    err; // $ExpectType ExecException | null
    stdout; // $ExpectType string | Buffer
    stderr; // $ExpectType string | Buffer
});
// $ExpectType void
firstCommit('foo/bar', { cwd: 'foo/bar' }, (err, stdout, stderr) => {
    err; // $ExpectType ExecException | null
    stdout; // $ExpectType string | Buffer
    stderr; // $ExpectType string | Buffer
});

firstCommit.sync(); // $ExpectType string | Buffer
firstCommit.sync('foo/bar'); // $ExpectType string | Buffer
firstCommit.sync('foo/bar', { exec: { input: 'foo' } }); // $ExpectType string | Buffer
firstCommit.sync({ exec: { input: 'foo' } }); // $ExpectType string | Buffer
