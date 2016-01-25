/// <reference path="gulp-csso.d.ts" />
/// <reference path="../gulp/gulp.d.ts" />

import * as gulp from 'gulp';
import * as csso from 'gulp-csso';

gulp.task('default', () =>
    gulp.src('./main.css')
        .pipe(csso())
        .pipe(gulp.dest('./out'))
);

csso(true);
csso(false);
