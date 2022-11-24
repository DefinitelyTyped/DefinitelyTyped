import exec = require('shelljs.exec');

exec('echo test with options', {
    stdio: [process.stdin, process.stdout, process.stderr],
    silent: true,
    encoding: 'utf-8',
});
exec('echo test without options');

const results = exec('echo test with return');
results.code; // $ExpectType<number>
results.stdout; // $ExpectType<string>
// @ts-expect-error
results.silent;
