/// <reference path="gulp-htmlmin.d.ts" />
/// <reference path="../gulp/gulp.d.ts" />

import * as gulp from 'gulp';
import * as htmlmin from 'gulp-htmlmin';

gulp.task('minify', function() {
  return gulp.src('src/*.html')
    .pipe(htmlmin({collapseWhitespace: true}))
    .pipe(gulp.dest('dist'))
});
