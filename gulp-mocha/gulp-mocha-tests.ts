/// <reference path="./gulp-mocha.d.ts"/>
/// <reference path="../gulp/gulp.d.ts"/>
import * as gulp from "gulp";
import * as mocha from "gulp-mocha";

gulp.task('default', function () {
    return gulp.src('test.js', {read: false})
        .pipe(mocha({reporter: 'nyan'}));
});
