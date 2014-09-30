/// <reference path="gulp.d.ts" />

import gulp = require("gulp");

var typescript: IGulpPlugin = null; // this would be the TypeScript compiler
var jasmine: IGulpPlugin = null; // this would be the jasmine test runner

gulp.task('compile', function()
{
    gulp.src("**/*.ts")
        .pipe(typescript())
        .pipe(gulp.dest('out'))
});

gulp.task('compile2', function(callback: (err?: any) => void)
{
    gulp.src("**/*.ts")
        .pipe(typescript())
        .pipe(gulp.dest('out'))
        .on('end', callback);
});

gulp.task('test', ['compile', 'compile2'], function()
{
    gulp.src("out/test/**/*.js")
        .pipe(jasmine());
});

gulp.task('default', ['compile', 'test']);
