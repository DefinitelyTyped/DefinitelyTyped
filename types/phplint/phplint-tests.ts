import phplint = require('phplint');
import grunt = require('grunt');

phplint.cli(['src/**/*.php'], {});
phplint.cli(['src/**/*.php'], {}, err => {
    throw new Error(err);
});

phplint.lint(['src/**/*.php'], (err, stdout, stderr) => {
    if (err) throw new Error(err);

    if (stdout) process.stdout.write(stdout);
    if (stderr) process.stdout.write(stderr);
});

phplint.clearCache('cacheDirName', 'tmpDir', err => {
    throw new Error(err);
});
phplint.clearCache(err => {
    throw new Error(err);
});

phplint.gruntPlugin(grunt);
