import exec from 'shelljs.exec';

exec('echo test with options', { stdio: [process.stdin, process.stdout, process.stderr] });
exec('echo test without options');

const results = exec('echo test with return');
results.code; // $ExpectType<number>
results.stdout; // $ExpectType<string>
