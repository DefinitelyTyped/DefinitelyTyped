/// <reference path="gulp-uglify.d.ts" />
/// <reference path="../gulp/gulp.d.ts" />

import uglify = require('gulp-uglify');
import gulp = require('gulp');

gulp.task('compress', () =>
  gulp.src('lib/*.js')
    .pipe(uglify())
    .pipe(gulp.dest('dist'))
);
