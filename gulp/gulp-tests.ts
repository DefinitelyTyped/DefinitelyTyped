/// <reference path="gulp.d.ts" />

import gulp = require("gulp");

var typescript: any = null; // this would be the TypeScript compiler
var jasmine: any = null; // this would be the jasmine test runner

gulp.task('compile', function()
{
    gulp.src("**/*.ts")
        .pipe(typescript)
        .dest('out')
});

gulp.task('test', ['compile'], function()
{
    gulp.src("out/test/**/*.js")
        .pipe(jasmine);
});

gulp.task('default', ['compile', 'test']);
