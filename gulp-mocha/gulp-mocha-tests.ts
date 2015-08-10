/// <reference path="./gulp-mocha.d.ts"/>
/// <reference path="../gulp/gulp.d.ts"/>
import gulp from "gulp";
import mocha = require("gulp-mocha");

gulp.task('default', function () {
    return gulp.src('test.js', {read: false})
        .pipe(mocha({reporter: 'nyan'}));
});