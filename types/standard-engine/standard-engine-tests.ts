/// <reference types="node" />
import standardEngine = require('standard-engine');
import { cli, linter as Linter, LinterOptions } from 'standard-engine';
import path = require('path');
import eslint = require('eslint');

const pkg = {
    version: '',
    homepage: '',
    bugs: {
        url: '',
    },
};

const defaultOptions: standardEngine.Options = {
    cwd: process.cwd(),
    env: 'browser',
    envs: ['browser', 'mocha'],
    filename: __filename,
    fix: true,
    global: 'myVar0',
    globals: ['myVar1', 'myVar2'],
    ignore: ['**/out/', '/lib/select2/', '/lib/ckeditor/', 'tmp.js'],
    parser: 'babel-eslint',
    plugin: 'flowtype',
    plugins: ['flowtype'],
};

const opts: LinterOptions = {
    version: pkg.version,
    homepage: pkg.homepage,
    bugs: pkg.bugs.url,
    eslint, // pass any version of eslint >= 1.0.0
    cmd: 'pocketlint', // should match the "bin" key in your package.json
    tagline: 'Live by your own standards!', // displayed in output --help
    eslintConfig: {
        configFile: path.join(__dirname, 'eslintrc.json'),
    },
    parseOpts: (opts, packageOpts, rootDir) => {
        // provide implementation here, then return the opts object (or a new one)
        // The following options are provided in the opts object, and must be on the returned object:
        // ignore: array of file globs to ignore
        // cwd: string, the current working directory
        // fix: boolean, whether to automatically fix problems
        // eslintConfig: object, the options passed to ESLint's CLIEngine
        opts['ignore']; // $ExpectType string[]
        opts['cwd']; // $ExpectType string
        opts['fix']; // $ExpectType boolean
        opts['eslintConfig']; // $ExpectType ESLintConfig
        return opts;
    },
};

standardEngine.cli(opts);
cli(opts);

const linter = new Linter(opts);
linter.lintFiles('main.js', (error, results) => {
    if (error) {
        error; // $ExpectType Error
        return;
    }
    error; // $ExpectType null
    results; // $ExpectType LintReport
});
// $ExpectType void
linter.lintFiles(
    ['main.js'],
    {
        filename: 'main.js',
        fix: true,
    },
    (error, results) => {
        if (error) {
            error; // $ExpectType Error
            return;
        }
        error; // $ExpectType null
        results; // $ExpectType LintReport
    },
);
// $ExpectType void
linter.lintText('const a = {};', (error, results) => {
    if (error) {
        error; // $ExpectType Error
        return;
    }
    error; // $ExpectType null
    results; // $ExpectType LintReport
});
// $ExpectType LintReport
linter.lintTextSync('const a = {};', {
    fix: true,
});
// $ExpectType LintReport
linter.lintTextSync('const a = {};');

const standardConfig: standardEngine.LinterOptions = {
    bugs: pkg.bugs.url,
    cmd: 'standard',
    eslint,
    eslintConfig: {
        configFile: path.join(__dirname, 'eslintrc.json'),
    },
    homepage: pkg.homepage,
    tagline: 'Use JavaScript Standard Style',
    version: pkg.version,
};
new Linter(standardConfig); // $ExpectType Linter
