/// <reference path="gulp-useref.d.ts" />
/// <reference path="../gulp/gulp.d.ts" />

import gulp = require('gulp');
import useref = require('gulp-useref');

gulp.task('default', () => {
    var assets = useref.assets();

    return gulp.src('app/*.html')
        .pipe(assets)
        .pipe(assets.restore())
        .pipe(useref())
        .pipe(gulp.dest('dist'));
});
