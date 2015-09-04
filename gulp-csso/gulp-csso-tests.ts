/// <reference path="gulp-csso.d.ts" />
/// <reference path="../gulp/gulp.d.ts" />

import gulp = require('gulp');
import csso = require('gulp-csso');

gulp.task('default', () =>
    gulp.src('./main.css')
        .pipe(csso())
        .pipe(gulp.dest('./out'))
);

csso(true);
csso(false);
