/// <reference path="./gulp-jshint.d.ts"/>
/// <reference path="../gulp/gulp.d.ts"/>
import gulp = require("gulp");
import jshint = require("gulp-jshint");


gulp.task('check1', function() {
    gulp.src('lib/*.ts')
        .pipe(jshint())
        .pipe(jshint.reporter('default'));
});

gulp.task('check2', function() {
    gulp.src('lib/*.ts')
        .pipe(jshint({ linter: 'jshint', lookup: true }));
});