import run = require('gulp-run');
import gulp = require('gulp');

// Only required args
run('echo Hello World');
new run('echo Hello World');
// Empty options
run('echo Hello World', {});
new run('echo Hello World', {});
// All options
run('echo Hello World', {
    env: { foo: 'bar' },
    cwd: '/',
    silent: false,
    verbosity: 3,
    usePowerShell: true,
});
new run('echo Hello World', {
    env: { foo: 'bar' },
    cwd: '/',
    silent: false,
    verbosity: 3,
    usePowerShell: true,
});

// GulpRunner#exec
new run('echo Hello World').exec();
new run('echo Hello World').exec('foo');
new run('echo Hello World').exec('foo', error => {
    error; // $ExpectType Error | null | undefined
});

// GulpRunner.Command
new run.Command('echo Hello, World!');
new run.Command('echo Hello, World!', {});
new run.Command('echo Hello, World!', {
    env: { foo: 'bar' },
    cwd: '/',
    silent: false,
    verbosity: 3,
    usePowerShell: true,
});

new run.Command('echo Hello World').exec(); // $ExpectType Vinyl
new run.Command('echo Hello World').exec('foo'); // $ExpectType Vinyl
// $ExpectType Vinyl
new run.Command('echo Hello World').exec('foo', error => {
    error; // $ExpectType (Error & { status: number }) | null
});

///// Taken from https://github.com/m19c/gulp-run#usage /////
// use gulp-run to start a pipeline
gulp.task('hello-world', function () {
    return run('echo Hello World')
        .exec() // prints "Hello World\n".
        .pipe(gulp.dest('output')); // writes "Hello World\n" to output/echo.
});

// use gulp-run in the middle of a pipeline:
gulp.task('even-lines', function () {
    return gulp
        .src('path/to/input/*') // get input files.
        .pipe(run('awk "NR % 2 == 0"')) // use awk to extract the even lines.
        .pipe(gulp.dest('path/to/output')); // profit.
});

// use gulp-run without gulp
var cmd = new run.Command('cat'); // create a command object for `cat`.
cmd.exec('hello world'); // call `cat` with 'hello world' on stdin.
