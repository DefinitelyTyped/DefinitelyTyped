import { clearCache, cli, gruntPlugin, lint } from 'phplint';
import grunt = require('grunt');

cli(['src/**/*.php'], {});
cli(['src/**/*.php'], {}, err => {
    throw new Error(err);
});

lint(['src/**/*.php'], (err, stdout, stderr) => {
    if (err) throw new Error(err);

    if (stdout) process.stdout.write(stdout);
    if (stderr) process.stdout.write(stderr);
});

clearCache('cacheDirName', 'tmpDir', err => {
    throw new Error(err);
});
clearCache(err => {
    throw new Error(err);
});

gruntPlugin(grunt);
